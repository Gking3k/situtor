import { Router } from 'express';
import { rateLimit } from 'express-rate-limit';
import { pool } from '../db/pool.js';
import { env } from '../config/env.js';
import { sendPasswordResetEmail, sendVerificationEmail } from '../services/email.service.js';
import { clearSessionCookie, readCookie, setSessionCookie, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from '../utils/cookies.js';
import { createOpaqueToken, hashOpaqueToken } from '../utils/tokens.js';
import { hashPassword, verifyPassword } from '../utils/password.js';
import { validateRegistrationInput } from '../utils/registration-validation.js';
import { validateProfileUpdate } from '../utils/profile-validation.js';
import { validatePasswordReset, validatePasswordResetRequest } from '../utils/password-reset-validation.js';

const router = Router();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const VERIFICATION_TTL_MS = 24 * 60 * 60 * 1000;
const SESSION_TTL_MS = SESSION_MAX_AGE_SECONDS * 1000;
const PASSWORD_RESET_TTL_MS = 60 * 60 * 1000;
const PASSWORD_RESET_GENERIC_MESSAGE = 'If an account exists for that email address, we will send a password reset link.';

const registrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many registration attempts. Please try again later.' },
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many sign-in attempts. Please try again later.' },
});

const verificationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many verification attempts. Please try again later.' },
});

const resendLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many verification email requests. Please try again later.' },
});

const forgotPasswordLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many password-reset requests. Please try again later.' },
});

const resetPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many password-reset attempts. Please request a new link later.' },
});

function setNoStore(response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Pragma', 'no-cache');
}

function publicStudent(row) {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    emailVerified: Boolean(row.email_verified_at),
    createdAt: row.created_at,
  };
}

function emailDeliveryConfigured() {
  return Boolean(env.resendApiKey && env.emailFrom);
}

function emailNotConfiguredResponse(response) {
  return response.status(503).json({
    error: 'Email verification is not configured yet. Please try again later.',
    code: 'EMAIL_DELIVERY_NOT_CONFIGURED',
  });
}

async function createVerificationRecord(client, studentId) {
  const token = createOpaqueToken();
  const tokenHash = hashOpaqueToken(token);
  const expiresAt = new Date(Date.now() + VERIFICATION_TTL_MS);

  await client.query(
    `INSERT INTO public.student_email_verification_tokens (student_id, token_hash, expires_at)
     VALUES ($1, $2, $3)`,
    [studentId, tokenHash, expiresAt],
  );
  return token;
}

async function deliverVerification({ email, fullName, token }) {
  return sendVerificationEmail({ email, fullName, token });
}

function extractSessionToken(request) {
  const token = readCookie(request, SESSION_COOKIE_NAME);
  return typeof token === 'string' && /^[a-f0-9]{64}$/.test(token) ? token : null;
}

async function findActiveSessionStudent(token) {
  const result = await pool.query(
    `SELECT s.id, s.full_name, s.email, s.email_verified_at, s.created_at,
            ss.id AS session_id, ss.expires_at
     FROM public.student_sessions ss
     JOIN public.students s ON s.id = ss.student_id
     WHERE ss.token_hash = $1
       AND ss.revoked_at IS NULL
       AND ss.expires_at > NOW()
     LIMIT 1`,
    [hashOpaqueToken(token)],
  );
  const student = result.rows[0];
  if (student) {
    await pool.query('UPDATE public.student_sessions SET last_seen_at = NOW() WHERE id = $1', [student.session_id]);
  }
  return student;
}

router.post('/register', registrationLimiter, async (request, response, next) => {
  setNoStore(response);

  if (env.nodeEnv === 'production' && !emailDeliveryConfigured()) {
    return emailNotConfiguredResponse(response);
  }

  const validation = validateRegistrationInput(request.body);
  if (validation.error) {
    return response.status(400).json({ error: validation.error });
  }

  const { fullName, email, password } = validation.value;
  const client = await pool.connect();
  let student;
  let verificationToken;

  try {
    const passwordHash = await hashPassword(password);
    await client.query('BEGIN');

    const result = await client.query(
      `INSERT INTO public.students (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email, email_verified_at, created_at`,
      [fullName, email, passwordHash],
    );
    student = result.rows[0];
    verificationToken = await createVerificationRecord(client, student.id);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    if (error?.code === '23505' && error?.constraint === 'idx_students_email_lower') {
      return response.status(409).json({ error: 'An account with this email address already exists.' });
    }
    return next(error);
  } finally {
    client.release();
  }

  try {
    const delivery = await deliverVerification({ email, fullName, token: verificationToken });
    return response.status(201).json({
      status: 'created',
      message: delivery.delivered
        ? 'Your account has been created. Check your inbox for a verification link.'
        : 'Your account has been created. Use the local development link to verify your email address.',
      verificationEmailSent: delivery.delivered,
      ...(env.nodeEnv === 'development' && delivery.verificationUrl
        ? { verificationUrl: delivery.verificationUrl }
        : {}),
      student: publicStudent(student),
    });
  } catch (error) {
    console.error('[auth] Verification email could not be delivered:', error.message);
    return response.status(503).json({
      error: 'Your account was created, but the verification email could not be sent. Please request another verification email.',
      code: 'VERIFICATION_EMAIL_FAILED',
      accountCreated: true,
    });
  }
});

router.post('/verify-email', verificationLimiter, async (request, response, next) => {
  setNoStore(response);
  const token = typeof request.body?.token === 'string' ? request.body.token.trim() : '';
  if (!/^[a-f0-9]{64}$/.test(token)) {
    return response.status(400).json({ error: 'This verification link is invalid or has expired.' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await client.query(
      `SELECT v.id AS verification_id, v.student_id, v.expires_at, v.used_at,
              s.id, s.full_name, s.email, s.email_verified_at, s.created_at
       FROM public.student_email_verification_tokens v
       JOIN public.students s ON s.id = v.student_id
       WHERE v.token_hash = $1
       FOR UPDATE OF v, s`,
      [hashOpaqueToken(token)],
    );
    const verification = result.rows[0];

    if (!verification) {
      await client.query('ROLLBACK');
      return response.status(400).json({ error: 'This verification link is invalid or has expired.' });
    }

    // Make verification idempotent so a browser retry or React development
    // Strict Mode cannot turn a successful confirmation into a false failure.
    if (verification.used_at && verification.email_verified_at) {
      await client.query('COMMIT');
      return response.status(200).json({
        status: 'verified',
        message: 'This email address has already been verified. You can sign in.',
        student: publicStudent(verification),
      });
    }

    if (verification.used_at || new Date(verification.expires_at).getTime() <= Date.now()) {
      await client.query('ROLLBACK');
      return response.status(400).json({ error: 'This verification link is invalid or has expired.' });
    }

    const studentResult = await client.query(
      `UPDATE public.students
       SET email_verified_at = COALESCE(email_verified_at, NOW())
       WHERE id = $1
       RETURNING id, full_name, email, email_verified_at, created_at`,
      [verification.student_id],
    );
    await client.query(
      `UPDATE public.student_email_verification_tokens
       SET used_at = NOW()
       WHERE student_id = $1 AND used_at IS NULL`,
      [verification.student_id],
    );
    await client.query('COMMIT');

    return response.status(200).json({
      status: 'verified',
      message: 'Your email address has been verified. You can now sign in.',
      student: publicStudent(studentResult.rows[0]),
    });
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    return next(error);
  } finally {
    client.release();
  }
});

router.post('/resend-verification', resendLimiter, async (request, response, next) => {
  setNoStore(response);
  const email = typeof request.body?.email === 'string' ? request.body.email.trim().toLowerCase() : '';
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return response.status(400).json({ error: 'Enter a valid email address.' });
  }
  if (env.nodeEnv === 'production' && !emailDeliveryConfigured()) {
    return emailNotConfiguredResponse(response);
  }

  try {
    const result = await pool.query(
      `SELECT id, full_name, email, email_verified_at
       FROM public.students WHERE LOWER(email) = $1 LIMIT 1`,
      [email],
    );
    const student = result.rows[0];
    if (!student || student.email_verified_at) {
      return response.status(200).json({
        status: 'ok',
        message: 'If an unverified account exists for that address, a verification link has been sent.',
      });
    }

    const token = createOpaqueToken();
    const tokenHash = hashOpaqueToken(token);
    const expiresAt = new Date(Date.now() + VERIFICATION_TTL_MS);
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query(
        `INSERT INTO public.student_email_verification_tokens (student_id, token_hash, expires_at)
         VALUES ($1, $2, $3)`,
        [student.id, tokenHash, expiresAt],
      );
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK').catch(() => {});
      throw error;
    } finally {
      client.release();
    }

    let delivery;
    try {
      delivery = await deliverVerification({ email: student.email, fullName: student.full_name, token });
    } catch (error) {
      console.error('[auth] Verification resend delivery failed:', error.message);
      return response.status(503).json({
        error: 'We could not send a verification email right now. Please try again later.',
        code: 'VERIFICATION_EMAIL_FAILED',
      });
    }

    return response.status(200).json({
      status: 'ok',
      message: 'If an unverified account exists for that address, a verification link has been sent.',
      ...(env.nodeEnv === 'development' && delivery.verificationUrl
        ? { verificationUrl: delivery.verificationUrl }
        : {}),
    });
  } catch (error) {
    console.error('[auth] Verification resend failed:', error.message);
    return next(error);
  }
});

router.post('/forgot-password', forgotPasswordLimiter, async (request, response, next) => {
  setNoStore(response);
  const validation = validatePasswordResetRequest(request.body);
  if (validation.error) {
    return response.status(400).json({ error: validation.error });
  }

  if (env.nodeEnv === 'production' && !emailDeliveryConfigured()) {
    return response.status(503).json({
      error: 'Password recovery email delivery is not configured yet. Please try again later.',
      code: 'EMAIL_DELIVERY_NOT_CONFIGURED',
    });
  }

  const { email } = validation.value;
  try {
    const result = await pool.query(
      `SELECT id, full_name, email
       FROM public.students
       WHERE LOWER(email) = $1
       LIMIT 1`,
      [email],
    );
    const student = result.rows[0];

    // Use the same public response whether the email exists or not. This
    // prevents the endpoint from becoming an account-enumeration oracle.
    if (!student) {
      return response.status(200).json({ status: 'ok', message: PASSWORD_RESET_GENERIC_MESSAGE });
    }

    const token = createOpaqueToken();
    const tokenHash = hashOpaqueToken(token);
    const expiresAt = new Date(Date.now() + PASSWORD_RESET_TTL_MS);
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      // Serialize reset-link issuance for this account so concurrent requests
      // cannot leave more than one active link behind.
      await client.query('SELECT id FROM public.students WHERE id = $1 FOR UPDATE', [student.id]);
      // Only the newest unused reset link remains valid for this student.
      await client.query(
        `UPDATE public.student_password_reset_tokens
         SET used_at = NOW()
         WHERE student_id = $1 AND used_at IS NULL`,
        [student.id],
      );
      await client.query(
        `INSERT INTO public.student_password_reset_tokens (student_id, token_hash, expires_at)
         VALUES ($1, $2, $3)`,
        [student.id, tokenHash, expiresAt],
      );
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK').catch(() => {});
      throw error;
    } finally {
      client.release();
    }

    try {
      const delivery = await sendPasswordResetEmail({ email: student.email, fullName: student.full_name, token });
      return response.status(200).json({
        status: 'ok',
        message: PASSWORD_RESET_GENERIC_MESSAGE,
        resetEmailSent: delivery.delivered,
        ...(env.nodeEnv === 'development' && delivery.resetUrl ? { resetUrl: delivery.resetUrl } : {}),
      });
    } catch (error) {
      console.error('[auth] Password-reset email could not be delivered:', error.message);
      // Do not leave a valid but undelivered reset token in the database.
      await pool.query(
        `UPDATE public.student_password_reset_tokens
         SET used_at = NOW()
         WHERE token_hash = $1 AND used_at IS NULL`,
        [tokenHash],
      );
      // Keep the public response identical to the non-existent-account path.
      return response.status(200).json({ status: 'ok', message: PASSWORD_RESET_GENERIC_MESSAGE });
    }
  } catch (error) {
    return next(error);
  }
});

router.post('/reset-password', resetPasswordLimiter, async (request, response, next) => {
  setNoStore(response);
  const validation = validatePasswordReset(request.body);
  if (validation.error) {
    return response.status(400).json({ error: validation.error });
  }

  const { token, password } = validation.value;
  const tokenHash = hashOpaqueToken(token);
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Keep the lock order consistent with reset-link issuance: student row
    // first, then token rows. This avoids a student/token lock-order deadlock.
    const lookup = await client.query(
      `SELECT student_id
       FROM public.student_password_reset_tokens
       WHERE token_hash = $1
       LIMIT 1`,
      [tokenHash],
    );
    const studentId = lookup.rows[0]?.student_id;
    if (!studentId) {
      await client.query('ROLLBACK');
      return response.status(400).json({ error: 'This password-reset link is invalid or has expired. Request a new link and try again.' });
    }

    await client.query('SELECT id FROM public.students WHERE id = $1 FOR UPDATE', [studentId]);
    const result = await client.query(
      `SELECT id, student_id, expires_at, used_at
       FROM public.student_password_reset_tokens
       WHERE token_hash = $1 AND student_id = $2
       FOR UPDATE`,
      [tokenHash, studentId],
    );
    const resetRecord = result.rows[0];

    if (!resetRecord || resetRecord.used_at || new Date(resetRecord.expires_at).getTime() <= Date.now()) {
      await client.query('ROLLBACK');
      return response.status(400).json({ error: 'This password-reset link is invalid or has expired. Request a new link and try again.' });
    }

    const passwordHash = await hashPassword(password);
    await client.query(
      `UPDATE public.students
       SET password_hash = $1, updated_at = NOW()
       WHERE id = $2`,
      [passwordHash, resetRecord.student_id],
    );
    await client.query(
      `UPDATE public.student_password_reset_tokens
       SET used_at = NOW()
       WHERE student_id = $1 AND used_at IS NULL`,
      [resetRecord.student_id],
    );
    // A password reset signs the student out on every device.
    await client.query(
      `UPDATE public.student_sessions
       SET revoked_at = COALESCE(revoked_at, NOW())
       WHERE student_id = $1 AND revoked_at IS NULL`,
      [resetRecord.student_id],
    );
    await client.query('COMMIT');

    clearSessionCookie(response);
    return response.status(200).json({
      status: 'password_updated',
      message: 'Your password has been updated. Sign in with your new password.',
    });
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    return next(error);
  } finally {
    client.release();
  }
});

router.post('/login', loginLimiter, async (request, response, next) => {
  setNoStore(response);
  const email = typeof request.body?.email === 'string' ? request.body.email.trim().toLowerCase() : '';
  const password = typeof request.body?.password === 'string' ? request.body.password : '';

  if (!EMAIL_PATTERN.test(email) || email.length > 254 || password.length < 12 || password.length > 128) {
    return response.status(400).json({ error: 'Enter a valid email address and password.' });
  }

  try {
    const result = await pool.query(
      `SELECT id, full_name, email, password_hash, email_verified_at, created_at
       FROM public.students WHERE LOWER(email) = $1 LIMIT 1`,
      [email],
    );
    const student = result.rows[0];

    if (!student || !(await verifyPassword(password, student.password_hash))) {
      return response.status(401).json({ error: 'The email address or password is incorrect.' });
    }

    if (!student.email_verified_at) {
      return response.status(403).json({
        error: 'Please verify your email address before signing in.',
        code: 'EMAIL_NOT_VERIFIED',
      });
    }

    const sessionToken = createOpaqueToken();
    const tokenHash = hashOpaqueToken(sessionToken);
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
    await pool.query(
      `INSERT INTO public.student_sessions (student_id, token_hash, expires_at)
       VALUES ($1, $2, $3)`,
      [student.id, tokenHash, expiresAt],
    );

    setSessionCookie(response, sessionToken);
    return response.status(200).json({
      status: 'authenticated',
      message: 'You are signed in.',
      student: publicStudent(student),
      expiresAt,
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/me', async (request, response, next) => {
  setNoStore(response);
  const token = extractSessionToken(request);
  if (!token) return response.status(401).json({ error: 'You are not signed in.' });

  try {
    const row = await findActiveSessionStudent(token);
    if (!row) {
      clearSessionCookie(response);
      return response.status(401).json({ error: 'Your session has expired. Please sign in again.' });
    }

    return response.status(200).json({
      status: 'authenticated',
      student: publicStudent(row),
      expiresAt: row.expires_at,
    });
  } catch (error) {
    return next(error);
  }
});

router.patch('/profile', async (request, response, next) => {
  setNoStore(response);
  const token = extractSessionToken(request);
  if (!token) return response.status(401).json({ error: 'You are not signed in.' });

  try {
    const sessionStudent = await findActiveSessionStudent(token);
    if (!sessionStudent) {
      clearSessionCookie(response);
      return response.status(401).json({ error: 'Your session has expired. Please sign in again.' });
    }

    const validation = validateProfileUpdate(request.body);
    if (validation.error) {
      return response.status(400).json({ error: validation.error });
    }

    const result = await pool.query(
      `UPDATE public.students
       SET full_name = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, email_verified_at, created_at`,
      [validation.value.fullName, sessionStudent.id],
    );

    return response.status(200).json({
      status: 'profile_updated',
      message: 'Your account details have been updated.',
      student: publicStudent(result.rows[0]),
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/logout', async (request, response, next) => {
  setNoStore(response);
  const token = extractSessionToken(request);
  try {
    if (token) {
      await pool.query(
        `UPDATE public.student_sessions
         SET revoked_at = COALESCE(revoked_at, NOW())
         WHERE token_hash = $1`,
        [hashOpaqueToken(token)],
      );
    }
    clearSessionCookie(response);
    return response.status(200).json({ status: 'signed_out', message: 'You have been signed out.' });
  } catch (error) {
    return next(error);
  }
});

export default router;
