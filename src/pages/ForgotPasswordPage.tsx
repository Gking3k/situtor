import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, LockKeyhole, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';
import './register.css';

type ForgotPasswordPayload = { error?: string; message?: string; resetUrl?: string; resetEmailSent?: boolean };

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [resetUrl, setResetUrl] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setMessage('');
    setResetUrl('');

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setError('Enter the email address associated with your account.');
      return;
    }
    if (!authApiBaseUrl) {
      setError('The account service is not connected to this deployment yet.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(authApiUrl('/auth/forgot-password'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail }),
        cache: 'no-store',
      });
      const payload = await response.json().catch(() => ({})) as ForgotPasswordPayload;
      if (!response.ok) {
        setError(payload.error || 'We could not process your request. Please try again.');
        return;
      }
      setMessage(payload.message || 'If an account exists for that email address, we will send a password reset link.');
      setResetUrl(payload.resetUrl || '');
    } catch {
      setError('We could not reach the Si Tutor account service. Check that the API is running.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="register-page auth-page auth-page--single">
      <section className="register-card auth-verify-card auth-recovery-card container">
        {message ? (
          <div className="register-success" role="status" aria-live="polite">
            <span className="register-success__icon"><CheckCircle2 size={29} /></span>
            <span className="eyebrow">CHECK YOUR EMAIL</span>
            <h1>Request received.</h1>
            <p>{message}</p>
            {resetUrl && <div className="auth-notice"><strong>Local development link</strong><a href={resetUrl}>Open password reset page <ArrowRight size={14} /></a><span>In local development, email delivery is not configured, so use this link to test the reset flow.</span></div>}
            <Link className="button button--primary register-submit" to="/login">Back to sign in <ArrowRight size={16} /></Link>
          </div>
        ) : (
          <>
            <span className="register-success__icon"><LockKeyhole size={27} /></span>
            <span className="eyebrow">ACCOUNT RECOVERY</span>
            <h1>Forgot your password?</h1>
            <p>Enter the email address linked to your Si Tutor account. If an account exists, we'll send instructions to reset its password.</p>
            <form className="register-form auth-recovery-form" onSubmit={handleSubmit} noValidate>
              <div className="register-field">
                <label htmlFor="recovery-email">Email address</label>
                <div className="register-input-wrap">
                  <Mail size={17} aria-hidden="true" />
                  <input id="recovery-email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
              </div>
              {error && <div className="register-form-error" role="alert">{error}</div>}
              <button className="button button--primary register-submit" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send reset link'}{!submitting && <ArrowRight size={16} />}</button>
            </form>
            <p className="register-privacy-note"><Link to="/login">Return to sign in</Link></p>
          </>
        )}
      </section>
    </main>
  );
}
