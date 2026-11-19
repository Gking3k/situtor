import { useState, type FormEvent } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';
import './register.css';

type FieldErrors = Partial<Record<'fullName' | 'email' | 'password' | 'confirmPassword', string>>;
type CreatedStudent = { fullName: string; email: string };
type RegisterResponse = {
  error?: string;
  message?: string;
  verificationUrl?: string;
  verificationEmailSent?: boolean;
  accountCreated?: boolean;
  student?: { fullName?: string; email?: string };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateForm(fullName: string, email: string, password: string, confirmPassword: string): FieldErrors {
  const errors: FieldErrors = {};
  const normalizedName = fullName.trim().replace(/\s+/g, ' ');
  const normalizedEmail = email.trim();

  if (normalizedName.length < 2 || normalizedName.length > 100) {
    errors.fullName = 'Enter a name between 2 and 100 characters.';
  }
  if (normalizedEmail.length > 254 || !emailPattern.test(normalizedEmail)) {
    errors.email = 'Enter a valid email address.';
  }
  if (password.length < 12 || password.length > 128) {
    errors.password = 'Use a password between 12 and 128 characters.';
  }
  if (confirmPassword !== password) {
    errors.confirmPassword = 'Your passwords do not match.';
  }

  return errors;
}

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [createdStudent, setCreatedStudent] = useState<CreatedStudent | null>(null);
  const [verificationUrl, setVerificationUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');

    const errors = validateForm(fullName, email, password, confirmPassword);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (!authApiBaseUrl) {
      setFormError('The registration service has not been connected to this deployment yet. Please try again when account registration is officially available.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(authApiUrl('/auth/register'), {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim().replace(/\s+/g, ' '),
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const payload = await response.json().catch(() => ({})) as RegisterResponse;
      if (!response.ok) {
        if (payload.accountCreated) {
          setSuccessMessage(payload.error || 'Your account was created, but we could not send the verification email. Open sign in to request a new link.');
          setCreatedStudent({ fullName: fullName.trim(), email: email.trim().toLowerCase() });
          setPassword('');
          setConfirmPassword('');
          return;
        }
        setFormError(payload.error || 'We could not create your account. Please try again.');
        return;
      }

      setVerificationUrl(payload.verificationUrl || '');
      setSuccessMessage(payload.message || 'Your account has been created. Check your inbox for a verification link.');
      setCreatedStudent({
        fullName: payload.student?.fullName || fullName.trim(),
        email: payload.student?.email || email.trim().toLowerCase(),
      });
      setPassword('');
      setConfirmPassword('');
    } catch {
      setFormError('We could not reach the registration service. Check that the Si Tutor API is running and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="register-page">
      <section className="register-shell container">
        <div className="register-intro">
          <span className="eyebrow"><span className="eyebrow__mark" />YOUR SI TUTOR ACCOUNT</span>
          <h1>Your learning journey, <span>all in one place.</span></h1>
          <p className="register-intro__description">Create your student account to keep your learning connected across the devices you use.</p>

          <div className="register-benefits" aria-label="Student account benefits">
            <div className="register-benefit">
              <span className="register-benefit__icon"><BookOpen size={19} /></span>
              <div><strong>Your learning, connected</strong><span>Designed to keep your learning linked to your account across devices.</span></div>
            </div>
            <div className="register-benefit">
              <span className="register-benefit__icon register-benefit__icon--gold"><ShieldCheck size={19} /></span>
              <div><strong>Privacy-conscious foundations</strong><span>Your password is hashed on the server before it is stored.</span></div>
            </div>
          </div>

          <div className="register-note">
            <LockKeyhole size={16} />
            <span>A quick email verification protects your account before you sign in.</span>
          </div>
        </div>

        <div className="register-card">
          {createdStudent ? (
            <div className="register-success" role="status" aria-live="polite">
              <span className="register-success__icon"><CheckCircle2 size={29} /></span>
              <span className="eyebrow">ACCOUNT CREATED</span>
              <h2>You're on your way, {createdStudent.fullName.split(' ')[0]}.</h2>
              <p>Your Si Tutor account has been created for <strong>{createdStudent.email}</strong>.</p>
              <div className="register-success__notice">{successMessage}</div>
              {verificationUrl && <a className="button button--primary register-submit" href={verificationUrl}>Verify email address <ArrowRight size={16} /></a>}
              {!verificationUrl && <Link className="button button--primary register-submit" to="/login">Continue to sign in <ArrowRight size={16} /></Link>}
              <p className="register-privacy-note">Already verified? <Link to="/login">Sign in to your account</Link>.</p>
            </div>
          ) : (
            <>
              <div className="register-card__heading">
                <span className="register-card__kicker">GET STARTED</span>
                <h2>Create your account</h2>
                <p>Enter your details to create your Si Tutor student account.</p>
              </div>

              <form className="register-form" onSubmit={handleSubmit} noValidate>
                <div className="register-field">
                  <label htmlFor="register-full-name">Full name</label>
                  <div className={`register-input-wrap ${fieldErrors.fullName ? 'register-input-wrap--error' : ''}`}>
                    <UserRound size={17} aria-hidden="true" />
                    <input
                      id="register-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Ada Okafor"
                      value={fullName}
                      maxLength={100}
                      onChange={(event) => { setFullName(event.target.value); setFieldErrors((current) => ({ ...current, fullName: undefined })); }}
                      aria-invalid={Boolean(fieldErrors.fullName)}
                      aria-describedby={fieldErrors.fullName ? 'register-name-error' : undefined}
                      required
                    />
                  </div>
                  {fieldErrors.fullName && <span className="register-field__error" id="register-name-error">{fieldErrors.fullName}</span>}
                </div>

                <div className="register-field">
                  <label htmlFor="register-email">Email address</label>
                  <div className={`register-input-wrap ${fieldErrors.email ? 'register-input-wrap--error' : ''}`}>
                    <Mail size={17} aria-hidden="true" />
                    <input
                      id="register-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      maxLength={254}
                      onChange={(event) => { setEmail(event.target.value); setFieldErrors((current) => ({ ...current, email: undefined })); }}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? 'register-email-error' : undefined}
                      required
                    />
                  </div>
                  {fieldErrors.email && <span className="register-field__error" id="register-email-error">{fieldErrors.email}</span>}
                </div>

                <div className="register-field">
                  <label htmlFor="register-password">Password</label>
                  <div className={`register-input-wrap ${fieldErrors.password ? 'register-input-wrap--error' : ''}`}>
                    <LockKeyhole size={17} aria-hidden="true" />
                    <input
                      id="register-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Create a strong password"
                      value={password}
                      minLength={12}
                      maxLength={128}
                      onChange={(event) => { setPassword(event.target.value); setFieldErrors((current) => ({ ...current, password: undefined, confirmPassword: undefined })); }}
                      aria-invalid={Boolean(fieldErrors.password)}
                      aria-describedby={fieldErrors.password ? 'register-password-error' : 'register-password-hint'}
                      required
                    />
                    <button className="register-password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                  {fieldErrors.password
                    ? <span className="register-field__error" id="register-password-error">{fieldErrors.password}</span>
                    : <span className="register-field__hint" id="register-password-hint">Use at least 12 characters.</span>}
                </div>

                <div className="register-field">
                  <label htmlFor="register-confirm-password">Confirm password</label>
                  <div className={`register-input-wrap ${fieldErrors.confirmPassword ? 'register-input-wrap--error' : ''}`}>
                    <LockKeyhole size={17} aria-hidden="true" />
                    <input
                      id="register-confirm-password"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Enter your password again"
                      value={confirmPassword}
                      maxLength={128}
                      onChange={(event) => { setConfirmPassword(event.target.value); setFieldErrors((current) => ({ ...current, confirmPassword: undefined })); }}
                      aria-invalid={Boolean(fieldErrors.confirmPassword)}
                      aria-describedby={fieldErrors.confirmPassword ? 'register-confirm-error' : undefined}
                      required
                    />
                    <button className="register-password-toggle" type="button" onClick={() => setShowConfirmPassword((visible) => !visible)} aria-label={showConfirmPassword ? 'Hide confirmation password' : 'Show confirmation password'}>
                      {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                  {fieldErrors.confirmPassword && <span className="register-field__error" id="register-confirm-error">{fieldErrors.confirmPassword}</span>}
                </div>

                {formError && <div className="register-form-error" role="alert">{formError}</div>}

                <button className="button button--primary register-submit" type="submit" disabled={submitting}>
                  {submitting ? 'Creating your account…' : 'Create account'}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </form>

              <p className="register-privacy-note">By creating an account, you acknowledge our <Link to="/privacy">pre-launch privacy overview</Link>. Already registered? <Link to="/login">Sign in</Link>.</p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
