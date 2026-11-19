import { useState, type FormEvent } from 'react';
import { ArrowLeft, BadgeCheck, CalendarDays, CircleUserRound, LockKeyhole, Mail, Save, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth, type StudentProfile } from '../context/AuthContext';
import { authApiUrl } from '../lib/authApi';
import './account-settings.css';

type ProfileResponse = { error?: string; message?: string; student?: StudentProfile };

function formatJoinedDate(value?: string) {
  if (!value) return 'Recently joined';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently joined';
  return new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function AccountSettingsPage() {
  const { student, updateStudent } = useAuth();
  const [fullName, setFullName] = useState(student?.fullName ?? '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!student) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');
    const normalizedName = fullName.trim().replace(/\s+/g, ' ');
    if (normalizedName.length < 2 || normalizedName.length > 100) {
      setError('Your name must be between 2 and 100 characters.');
      return;
    }

    setSaving(true);
    try {
      const response = await fetch(authApiUrl('/auth/profile'), {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: normalizedName }),
      });
      const payload = await response.json() as ProfileResponse;
      if (!response.ok || !payload.student) {
        throw new Error(payload.error || 'We could not update your account details.');
      }
      updateStudent(payload.student);
      setFullName(payload.student.fullName);
      setSuccess(payload.message || 'Your account details have been updated.');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not update your account details. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="account-settings-page">
      <div className="container account-settings">
        <Link className="account-settings__back" to="/dashboard"><ArrowLeft size={15} /> Back to dashboard</Link>
        <header className="account-settings__heading">
          <span className="account-settings__eyebrow"><CircleUserRound size={15} /> STUDENT ACCOUNT</span>
          <h1>Account settings</h1>
          <p>Keep your personal details up to date and manage your account security.</p>
        </header>

        <div className="account-settings__grid">
          <section className="account-settings-card">
            <div className="account-settings-card__heading">
              <span className="account-settings-card__icon"><CircleUserRound size={19} /></span>
              <div><h2>Personal information</h2><p>Update the name associated with your Si Tutor account.</p></div>
            </div>
            <form className="account-settings-form" onSubmit={handleSubmit} noValidate>
              <div className="account-settings-field">
                <label htmlFor="account-full-name">Full name</label>
                <input id="account-full-name" name="fullName" autoComplete="name" value={fullName} onChange={(event) => { setFullName(event.target.value); setError(''); setSuccess(''); }} maxLength={100} required />
                <small>This name appears in your student dashboard.</small>
              </div>
              <div className="account-settings-field">
                <label htmlFor="account-email">Email address</label>
                <div className="account-settings-readonly"><Mail size={17} /><input id="account-email" value={student.email} readOnly aria-describedby="account-email-note" /></div>
                <small id="account-email-note">Your email address is currently read-only. Changing it requires a separate email re-verification process.</small>
              </div>
              {error && <div className="account-settings-message account-settings-message--error" role="alert">{error}</div>}
              {success && <div className="account-settings-message account-settings-message--success" role="status">{success}</div>}
              <button className="button button--primary account-settings-form__submit" type="submit" disabled={saving || fullName.trim().replace(/\s+/g, ' ') === student.fullName}>
                <Save size={16} /> {saving ? 'Saving changes…' : 'Save changes'}
              </button>
            </form>
          </section>

          <aside className="account-settings__side">
            <section className="account-settings-card account-settings-card--summary">
              <div className="account-settings-card__heading">
                <span className="account-settings-card__icon account-settings-card__icon--gold"><ShieldCheck size={19} /></span>
                <div><h2>Account status</h2><p>Your account information at a glance.</p></div>
              </div>
              <div className="account-settings-detail"><span><BadgeCheck size={15} /> Email verification</span><strong className={student.emailVerified ? 'is-verified' : 'is-unverified'}>{student.emailVerified ? 'Verified' : 'Not verified'}</strong></div>
              <div className="account-settings-detail"><span><CalendarDays size={15} /> Joined</span><strong>{formatJoinedDate(student.createdAt)}</strong></div>
              <div className="account-settings-detail"><span><LockKeyhole size={15} /> Session</span><strong>Protected</strong></div>
            </section>

            <section className="account-settings-card account-settings-security">
              <div className="account-settings-card__heading">
                <span className="account-settings-card__icon"><LockKeyhole size={19} /></span>
                <div><h2>Password & security</h2><p>Use the secure password recovery flow to replace your password.</p></div>
              </div>
              <Link className="account-settings-security__link" to="/forgot-password">Reset your password <span aria-hidden="true">→</span></Link>
              <p className="account-settings-security__note">For security, password reset links are sent to your registered email address.</p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
