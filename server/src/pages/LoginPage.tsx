import { useState, type FormEvent } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';
import { useAuth, type StudentProfile } from '../context/AuthContext';
import './register.css';

type AuthPayload = { error?: string; code?: string; message?: string; verificationUrl?: string; student?: StudentProfile };

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { student, status: authStatus, refresh } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [notice, setNotice] = useState(searchParams.get('verified') === '1' ? 'Your email is verified. You can now sign in.' : '');
  const [resending, setResending] = useState(false);
  const [verificationUrl, setVerificationUrl] = useState('');


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError('');
    setNotice('');
    setVerificationUrl('');
    if (!email.trim() || !password) {
      setFormError('Enter your email address and password.');
      return;
    }
    if (!authApiBaseUrl) {
      setFormError('The sign-in service is not connected to this deployment yet.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(authApiUrl('/auth/login'), {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });
      const payload = await response.json().catch(() => ({})) as AuthPayload;
      if (!response.ok) {
        setFormError(payload.error || 'We could not sign you in. Please try again.');
        return;
      }
      const activeStudent = await refresh();
      if (!activeStudent) {
        setFormError('Your sign-in was accepted, but we could not confirm the session. Please try again.');
        return;
      }
      setPassword('');
      const requestedPath = (location.state as { from?: unknown } | null)?.from;
      const destination = typeof requestedPath === 'string'
        && requestedPath.startsWith('/')
        && !requestedPath.startsWith('//')
        && !requestedPath.includes('\\')
        ? requestedPath
        : '/dashboard';
      navigate(destination, { replace: true });
    } catch {
      setFormError('We could not reach the Si Tutor account service. Check that the API is running.');
    } finally {
      setSubmitting(false);
    }
  }

  async function resendVerification() {
    setResending(true);
    setFormError('');
    setVerificationUrl('');
    try {
      const response = await fetch(authApiUrl('/auth/resend-verification'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const payload = await response.json().catch(() => ({})) as AuthPayload;
      if (!response.ok) {
        setFormError(payload.error || 'We could not send a verification link. Please try again.');
      } else {
        setNotice(payload.message || 'If an unverified account exists for that address, a verification link has been sent.');
        if (payload.verificationUrl) setVerificationUrl(payload.verificationUrl);
      }
    } catch {
      setFormError('We could not reach the verification service. Please try again.');
    } finally {
      setResending(false);
    }
  }


  return (
    <main className="register-page auth-page">
      <section className="register-shell container">
        <div className="register-intro">
          <span className="eyebrow"><span className="eyebrow__mark" />WELCOME BACK</span>
          <h1>Your learning, <span>right where you left it.</span></h1>
          <p className="register-intro__description">Sign in to your Si Tutor account to keep your learning connected across devices.</p>
          <div className="register-benefits" aria-label="Account features">
            <div className="register-benefit"><span className="register-benefit__icon"><BookOpen size={19} /></span><div><strong>Your learning, connected</strong><span>Use your account across the devices you learn on.</span></div></div>
            <div className="register-benefit"><span className="register-benefit__icon register-benefit__icon--gold"><ShieldCheck size={19} /></span><div><strong>Private sign-in</strong><span>Your session is protected by an HTTP-only cookie.</span></div></div>
          </div>
          <div className="register-note"><LockKeyhole size={16} /><span>Sign-in is available only after your email address has been verified.</span></div>
        </div>

        <div className="register-card">
          {authStatus === 'loading' ? (
            <div className="register-success" role="status"><span className="register-card__kicker">CHECKING YOUR ACCOUNT</span><h2>One moment…</h2><p>We're checking whether you're already signed in.</p></div>
          ) : student ? (
            <div className="register-success" role="status" aria-live="polite">
              <span className="register-success__icon"><CheckCircle2 size={29} /></span>
              <span className="eyebrow">SIGNED IN</span>
              <h2>Welcome back, {student.fullName.split(' ')[0]}.</h2>
              <p>You are signed in as <strong>{student.email}</strong>.</p>
              <Link className="button button--primary register-submit" to="/dashboard">Open your dashboard <ArrowRight size={16} /></Link>
            </div>
          ) : (
            <>
              <div className="register-card__heading"><span className="register-card__kicker">STUDENT ACCOUNT</span><h2>Sign in</h2><p>Enter the email address and password linked to your account.</p></div>
              {notice && <div className="auth-notice" role="status">{notice}{verificationUrl && <a href={verificationUrl}>Open development verification link <ArrowRight size={14} /></a>}</div>}
              <form className="register-form" onSubmit={handleSubmit} noValidate>
                <div className="register-field"><label htmlFor="login-email">Email address</label><div className="register-input-wrap"><Mail size={17} aria-hidden="true" /><input id="login-email" type="email" autoComplete="username" placeholder="you@example.com" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} required /></div></div>
                <div className="register-field"><label htmlFor="login-password">Password</label><div className="register-input-wrap"><LockKeyhole size={17} aria-hidden="true" /><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} required /><button className="register-password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></div>
                {formError && <div className="register-form-error" role="alert">{formError}{formError.includes('verify your email') && <button className="auth-inline-action" type="button" onClick={resendVerification} disabled={resending}>{resending ? 'Sending…' : 'Resend verification email'}</button>}</div>}
                <button className="button button--primary register-submit" type="submit" disabled={submitting}>{submitting ? 'Signing in…' : 'Sign in'}{!submitting && <ArrowRight size={16} />}</button>
              </form>
              <p className="register-privacy-note"><Link to="/forgot-password">Forgot your password?</Link></p>
              <p className="register-privacy-note">New to Si Tutor? <Link to="/register">Create an account</Link></p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
