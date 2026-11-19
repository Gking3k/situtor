import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';
import './register.css';

type VerifyPayload = { message?: string; error?: string; student?: { email?: string } };
type VerifyState = { status: 'loading' | 'success' | 'error'; message: string; email?: string };

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [state, setState] = useState<VerifyState>({ status: 'loading', message: 'Checking your verification link…' });

  useEffect(() => {
    if (!authApiBaseUrl || !/^[a-f0-9]{64}$/.test(token)) {
      setState({ status: 'error', message: 'This verification link is invalid or incomplete. Request a new link and try again.' });
      return;
    }

    const controller = new AbortController();
    let active = true;
    fetch(authApiUrl('/auth/verify-email'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
      cache: 'no-store',
      signal: controller.signal,
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({})) as VerifyPayload;
        if (!response.ok) throw new Error(payload.error || 'We could not verify this email address.');
        return payload;
      })
      .then((payload) => {
        if (active) setState({ status: 'success', message: payload.message || 'Your email address has been verified.', email: payload.student?.email });
      })
      .catch((error: unknown) => {
        if (active && !(error instanceof DOMException && error.name === 'AbortError')) {
          setState({ status: 'error', message: error instanceof Error ? error.message : 'We could not verify this email address.' });
        }
      });

    return () => { active = false; controller.abort(); };
  }, [token]);

  return (
    <main className="register-page auth-page auth-page--single">
      <section className="register-card auth-verify-card container" aria-live="polite">
        {state.status === 'loading' ? (
          <><span className="register-card__kicker">EMAIL VERIFICATION</span><h1>Verifying your email…</h1><p>{state.message}</p></>
        ) : state.status === 'success' ? (
          <div className="register-success"><span className="register-success__icon"><CheckCircle2 size={29} /></span><span className="eyebrow">EMAIL VERIFIED</span><h1>Your email is confirmed.</h1><p>{state.message}{state.email ? <> Address verified: <strong>{state.email}</strong>.</> : ''}</p><Link className="button button--primary register-submit" to="/login?verified=1">Continue to sign in <ArrowRight size={16} /></Link></div>
        ) : (
          <div className="register-success"><span className="register-success__icon register-success__icon--error"><XCircle size={29} /></span><span className="eyebrow">LINK NOT VALID</span><h1>We couldn't verify this email.</h1><p>{state.message}</p><Link className="button button--primary register-submit" to="/login">Return to sign in <ArrowRight size={16} /></Link><p className="register-privacy-note">Need another link? <Link to="/login">Open sign in to request a new one.</Link></p></div>
        )}
      </section>
    </main>
  );
}
