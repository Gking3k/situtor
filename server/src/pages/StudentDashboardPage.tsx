import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleUserRound,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getLessonCount, getPublishedLessonCount, ss1ChemistryCurriculum } from '../data/curriculum';
import './student-dashboard.css';

const publishedFreeLesson = ss1ChemistryCurriculum.units
  .flatMap((unit) => unit.lessons)
  .find((lesson) => lesson.access === 'free' && lesson.contentStatus === 'published' && lesson.href);

function formatJoinedDate(value?: string) {
  if (!value) return 'Recently joined';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently joined';
  return new Intl.DateTimeFormat('en-NG', { month: 'long', year: 'numeric' }).format(date);
}

export default function StudentDashboardPage() {
  const { student } = useAuth();
  if (!student) return null;

  const totalLessons = getLessonCount(ss1ChemistryCurriculum);
  const publishedLessons = getPublishedLessonCount(ss1ChemistryCurriculum);
  const firstName = student.fullName.trim().split(/\s+/)[0] || 'Student';

  return (
    <main className="student-dashboard-page">
      <div className="container student-dashboard">
        <div className="student-dashboard__topline">
          <div>
            <span className="student-dashboard__eyebrow"><Sparkles size={14} /> YOUR LEARNING SPACE</span>
            <h1>Welcome back, {firstName}.</h1>
            <p>Your Si Tutor account keeps your learning connected across devices.</p>
          </div>
          <div className="student-dashboard__account-pill">
            <span className="student-dashboard__avatar" aria-hidden="true">{firstName.charAt(0).toUpperCase()}</span>
            <span><strong>{student.fullName}</strong><small>Student account</small></span>
          </div>
        </div>

        <section className="student-dashboard__stats" aria-label="Learning overview">
          <article className="student-stat-card">
            <span className="student-stat-card__icon student-stat-card__icon--green"><BookOpen size={19} /></span>
            <div><strong>{ss1ChemistryCurriculum.subject}</strong><span>Current subject</span></div>
          </article>
          <article className="student-stat-card">
            <span className="student-stat-card__icon student-stat-card__icon--gold"><Layers3 size={19} /></span>
            <div><strong>{ss1ChemistryCurriculum.units.length} units</strong><span>{totalLessons} lessons in the curriculum</span></div>
          </article>
          <article className="student-stat-card">
            <span className="student-stat-card__icon student-stat-card__icon--blue"><CheckCircle2 size={19} /></span>
            <div><strong>{publishedLessons} published</strong><span>Lessons currently available</span></div>
          </article>
        </section>

        <div className="student-dashboard__content-grid">
          <section className="student-learning-panel">
            <div className="student-section-heading">
              <div><span className="student-dashboard__eyebrow">MY LEARNING</span><h2>Your subject</h2></div>
              <Link to="/explore" className="student-text-link">Explore curriculum <ArrowRight size={15} /></Link>
            </div>

            <article className="student-course-card">
              <div className="student-course-card__visual" aria-hidden="true">
                <span className="student-course-card__orbit student-course-card__orbit--one" />
                <span className="student-course-card__orbit student-course-card__orbit--two" />
                <span className="student-course-card__molecule"><i /><i /><i /></span>
                <span className="student-course-card__visual-label">SCIENCE • LEARNING PATH</span>
              </div>
              <div className="student-course-card__body">
                <div className="student-course-card__meta"><span>{ss1ChemistryCurriculum.classLevel}</span><span>{ss1ChemistryCurriculum.units.length} learning units</span></div>
                <h3>{ss1ChemistryCurriculum.title}</h3>
                <p>{ss1ChemistryCurriculum.description}</p>
                {publishedFreeLesson ? (
                  <div className="student-available-lesson">
                    <div className="student-available-lesson__icon"><BookOpen size={18} /></div>
                    <div><span>AVAILABLE LESSON</span><strong>{publishedFreeLesson.title}</strong></div>
                    <Link to={publishedFreeLesson.href!} aria-label={`Start ${publishedFreeLesson.title}`}><ArrowRight size={18} /></Link>
                  </div>
                ) : (
                  <div className="student-empty-lesson">New lessons will appear here as they become available.</div>
                )}
                <Link className="button button--primary student-course-card__button" to="/explore">Browse Chemistry <ArrowRight size={16} /></Link>
              </div>
            </article>

            <div className="student-progress-note">
              <span><Sparkles size={17} /></span>
              <div><strong>Your learning activity will build here.</strong><p>Lesson completion and quiz progress are not synced to student accounts yet. We'll connect them in a later learning-progress phase.</p></div>
            </div>
          </section>

          <aside className="student-account-panel">
            <div className="student-section-heading"><div><span className="student-dashboard__eyebrow">ACCOUNT OVERVIEW</span><h2>Your details</h2></div><Link to="/account" className="student-text-link">Manage account <ArrowRight size={15} /></Link></div>
            <div className="student-account-card">
              <div className="student-account-card__profile">
                <span className="student-account-card__avatar"><CircleUserRound size={25} /></span>
                <div><strong>{student.fullName}</strong><span>{student.email}</span></div>
              </div>
              <div className="student-account-card__detail">
                <span><BadgeCheck size={15} /> Email status</span>
                <strong className={student.emailVerified ? 'is-verified' : 'is-unverified'}>{student.emailVerified ? 'Verified' : 'Not verified'}</strong>
              </div>
              <div className="student-account-card__detail">
                <span><CalendarDays size={15} /> Member since</span>
                <strong>{formatJoinedDate(student.createdAt)}</strong>
              </div>
              <div className="student-account-card__detail">
                <span><LockKeyhole size={15} /> Account security</span>
                <strong>Protected session</strong>
              </div>
            </div>

            <div className="student-dashboard__help-card">
              <span><GraduationCap size={19} /></span>
              <h3>Keep learning at your pace.</h3>
              <p>Your account is ready. More personal learning tools will be added as Si Tutor grows.</p>
              <Link to="/faqs">Visit help and FAQs <ArrowRight size={14} /></Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
