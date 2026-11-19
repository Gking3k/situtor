import { env } from '../config/env.js';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function buildVerificationUrl(token) {
  const url = new URL('/verify-email', env.appBaseUrl);
  url.searchParams.set('token', token);
  return url.toString();
}

export function buildPasswordResetUrl(token) {
  const url = new URL('/reset-password', env.appBaseUrl);
  url.searchParams.set('token', token);
  return url.toString();
}

async function sendResendEmail({ email, subject, html, text }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: env.emailFrom, to: [email], subject, html, text }),
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) {
    // Avoid logging provider response content or API credentials.
    throw new Error(`Email provider rejected the message (${response.status}).`);
  }
}

/**
 * Send through Resend's REST API. Local development can use the returned
 * verification link without an email provider; production never does this.
 */
export async function sendVerificationEmail({ email, fullName, token }) {
  const verificationUrl = buildVerificationUrl(token);

  if (!env.resendApiKey || !env.emailFrom) {
    if (env.nodeEnv === 'development') {
      console.info('[email] Resend is not configured. Development verification link generated.');
      return { delivered: false, verificationUrl, mode: 'development' };
    }
    throw new Error('Transactional email delivery is not configured.');
  }

  const safeName = escapeHtml(fullName);
  const safeUrl = escapeHtml(verificationUrl);
  await sendResendEmail({
    email,
    subject: 'Verify your Si Tutor email address',
    html: `<!doctype html><html><body style="margin:0;padding:32px;background:#f7faf9;font-family:Arial,sans-serif;color:#14243b"><div style="max-width:560px;margin:auto;padding:32px;background:#fff;border:1px solid #e6ecef;border-radius:16px"><p style="color:#0f766e;font-weight:700;letter-spacing:2px;font-size:12px">SITUTOR.</p><h1 style="font-size:25px">Verify your email address</h1><p>Hello ${safeName},</p><p>Confirm this email address to activate your Si Tutor student account.</p><p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;padding:14px 22px;border-radius:9px;background:#0f766e;color:#fff;text-decoration:none;font-weight:700">Verify email address</a></p><p style="font-size:13px;color:#6b7b8a">This link expires in 24 hours. If you did not create a Si Tutor account, you can ignore this email.</p><p style="font-size:12px;color:#87939d;word-break:break-all">${safeUrl}</p></div></body></html>`,
    text: `Hello ${fullName},\n\nVerify your Si Tutor email address using this link: ${verificationUrl}\n\nThis link expires in 24 hours. If you did not create an account, ignore this email.`,
  });

  return { delivered: true, mode: 'resend' };
}

export async function sendPasswordResetEmail({ email, fullName, token }) {
  const resetUrl = buildPasswordResetUrl(token);

  if (!env.resendApiKey || !env.emailFrom) {
    if (env.nodeEnv === 'development') {
      console.info('[email] Resend is not configured. Development password-reset link generated.');
      return { delivered: false, resetUrl, mode: 'development' };
    }
    throw new Error('Transactional email delivery is not configured.');
  }

  const safeName = escapeHtml(fullName);
  const safeUrl = escapeHtml(resetUrl);
  await sendResendEmail({
    email,
    subject: 'Reset your Si Tutor password',
    html: `<!doctype html><html><body style="margin:0;padding:32px;background:#f7faf9;font-family:Arial,sans-serif;color:#14243b"><div style="max-width:560px;margin:auto;padding:32px;background:#fff;border:1px solid #e6ecef;border-radius:16px"><p style="color:#0f766e;font-weight:700;letter-spacing:2px;font-size:12px">SITUTOR.</p><h1 style="font-size:25px">Reset your password</h1><p>Hello ${safeName},</p><p>We received a request to reset the password for your Si Tutor account.</p><p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;padding:14px 22px;border-radius:9px;background:#0f766e;color:#fff;text-decoration:none;font-weight:700">Choose a new password</a></p><p style="font-size:13px;color:#6b7b8a">This link expires in one hour and can only be used once. If you did not request a password reset, you can ignore this email; your password will remain unchanged.</p><p style="font-size:12px;color:#87939d;word-break:break-all">${safeUrl}</p></div></body></html>`,
    text: `Hello ${fullName},\n\nReset your Si Tutor password using this link: ${resetUrl}\n\nThis link expires in one hour and can only be used once. If you did not request a password reset, ignore this email.`,
  });

  return { delivered: true, mode: 'resend' };
}
