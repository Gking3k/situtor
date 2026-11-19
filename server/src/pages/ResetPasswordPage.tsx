import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, XCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';
import './register.css';

type ResetPasswordPayload = { error?: string; message?: string };

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const tokenLooksValid = /^[a-f0-9]{64}$/.test(token);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!tokenLooksValid) {
      setError('This password-reset link is invalid or incomplete. Request a new link.');
      return;
    }
    if (password.length < 12 || password.length > 128) {
      setError('Your new password must be between 12 and 128 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('The passwords do not match.');
      return;
    }
    if (!authApiBaseUrl) {
      setError('The account service is not connected to this deployment yet.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(authApiUrl('/auth/reset-password'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        cache: 'no-store',
        body: JSON.stringify({ token, password }),
      });
      const payload = await response.json().catch(() => ({})) as ResetPasswordPayload;
      if (!response.ok) {
        setError(payload.error || 'We could not reset your password. Request a new link and try again.');
        return;
      }
      setSuccess(payload.message || 'Your password has been updated. Sign in with your new password.');
      setPassword('');
      setConfirmPassword('');
    } catch {
      setError('We could not reach the Si Tutor account service. Check that the API is running.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="register-page auth-page auth-page--single">
      <section className="register-card auth-verify-card auth-recovery-card container">
        {success ? (
          <div className="register-success" role="status" aria-live="polite">
            <span className="register-success__icon"><CheckCircle2 size={29} /></span>
            <span className="eyebrow">PASSWORD UPDATED</span>
            <h1>Your password is reset.</h1>
            <p>{success}</p>
            <Link className="button button--primary register-submit" to="/login">Continue to sign in <ArrowRight size={16} /></Link>
          </div>
        ) : !tokenLooksValid ? (
          <div className="register-success" role="alert">
            <span className="register-success__icon register-success__icon--error"><XCircle size={29} /></span>
            <span className="eyebrow">LINK NOT VALID</span>
            <h1>Request a new reset link.</h1>
            <p>This password-reset link is invalid or incomplete. Reset links expire after one hour and can only be used once.</p>
            <Link className="button button--primary register-submit" to="/forgot-password">Request another link <ArrowRight size={16} /></Link>
          </div>
        ) : (
          <>
            <span className="register-success__icon"><LockKeyhole size={27} /></span>
            <span className="eyebrow">ACCOUNT RECOVERY</span>
            <h1>Choose a new password.</h1>
            <p>Use a password between 12 and 128 characters. Your existing sign-in sessions will be ended after the password is changed.</p>
            <form className="register-form auth-recovery-form" onSubmit={handleSubmit} noValidate>
              <div className="register-field">
                <label htmlFor="reset-password">New password</label>
                <div className="register-input-wrap">
                  <LockKeyhole size={17} aria-hidden="true" />
                  <input id="reset-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={12} maxLength={128} placeholder="Enter your new password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                  <button className="register-password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide new password' : 'Show new password'}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>
                </div>
                <span className="register-field__hint">At least 12 characters.</span>
              </div>
              <div className="register-field">
                <label htmlFor="reset-password-confirm">Confirm new password</label>
                <div className="register-input-wrap">
                  <LockKeyhole size={17} aria-hidden="true" />
                  <input id="reset-password-confirm" type={showConfirmation ? 'text' : 'password'} autoComplete="new-password" minLength={12} maxLength={128} placeholder="Enter the password again" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                  <button className="register-password-toggle" type="button" onClick={() => setShowConfirmation((visible) => !visible)} aria-label={showConfirmation ? 'Hide password confirmation' : 'Show password confirmation'}>{showConfirmation ? <EyeOff size={17} /> : <Eye size={17} />}</button>
                </div>
              </div>
              {error && <div className="register-form-error" role="alert">{error}</div>}
              <button className="button button--primary register-submit" type="submit" disabled={submitting}>{submitting ? 'Updating password…' : 'Update password'}{!submitting && <ArrowRight size={16} />}</button>
            </form>
            <p className="register-privacy-note"><Link to="/login">Return to sign in</Link></p>
          </>
        )}
      </section>
    </main>
  );
}
