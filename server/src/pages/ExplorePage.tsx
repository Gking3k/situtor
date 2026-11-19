import {
  ArrowRight,
  Atom,
  BookOpen,
  CheckCircle2,
  CircleDashed,
  FlaskConical,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import {
  getLessonCount,
  getPublishedLessonCount,
  ss1ChemistryCurriculum,
} from '../data/curriculum';

const unitIcons = [
  BookOpen,
  FlaskConical,
  Sparkles,
  Atom,
  BookOpen,
  Atom,
  CircleDashed,
  FlaskConical,
  Sparkles,
  Atom,
  FlaskConical,
];

const unitTones = ['lavender', 'yellow', 'blue', 'mint', 'lavender', 'mint', 'blue', 'yellow', 'mint', 'lavender', 'blue'];

export default function ExplorePage() {
  const publishedCount = getPublishedLessonCount(ss1ChemistryCurriculum);
  const totalCount = getLessonCount(ss1ChemistryCurriculum);

  return (
    <main className="inner-page">
      <section className="inner-hero inner-hero--explore">
        <div className="container inner-hero__content">
          <span className="eyebrow"><span className="eyebrow__mark" />EXPLORE &amp; UNDERSTAND</span>
          <h1>One topic at a time.<br /><span>One “aha!” at a time.</span></h1>
          <p>Start with SS1 Chemistry. Follow a structured learning path with clear explanations, visual lessons and practice designed to help ideas stick.</p>
          <div className="inner-hero__meta">
            <span><FlaskConical size={15} /> SS1 Chemistry</span>
            <span><BookOpen size={15} /> {ss1ChemistryCurriculum.units.length} curriculum units</span>
            <span><CheckCircle2 size={15} /> {publishedCount} free lesson available</span>
          </div>
        </div>
      </section>

      <section className="section-space inner-content-section">
        <div className="container">
          <div className="section-heading-row explore-heading-row">
            <SectionHeading
              eyebrow="THE FIRST COLLECTION"
              title="The SS1 Chemistry learning path."
              description="Follow the SS1 Chemistry curriculum in order. Completed lesson previews are open during development; lessons still being written are clearly marked as in preparation."
            />
            <span className="collection-status"><span /> {totalCount} lessons mapped · In development</span>
          </div>

          <div className="curriculum-summary" aria-label="Subject access information">
            <div className="curriculum-summary__icon"><BookOpen size={20} /></div>
            <div className="curriculum-summary__copy">
              <strong>{ss1ChemistryCurriculum.title} full access</strong>
              <p>During development, every completed lesson and quiz is open for testing. We will only add the one-time subject access rules after the full Chemistry collection has been developed and reviewed.</p>
            </div>
            <span className="curriculum-summary__tag">Planned model</span>
          </div>

          <div className="curriculum-grid">
            {ss1ChemistryCurriculum.units.map((unit, index) => {
              const Icon = unitIcons[index % unitIcons.length];
              const tone = unitTones[index % unitTones.length];
              const freeLessons = unit.lessons.filter((lesson) => lesson.contentStatus === 'published' && lesson.access === 'free');
              const plannedLessons = unit.lessons.filter((lesson) => lesson.contentStatus === 'planned');

              return (
                <article className={`curriculum-card ${freeLessons.length > 0 ? 'curriculum-card--featured' : ''}`} key={unit.id}>
                  <div className="curriculum-card__top">
                    <span className="topic-card__number">UNIT {unit.number}</span>
                    <span className={`topic-card__icon topic-card__icon--${tone}`}><Icon size={20} /></span>
                  </div>
                  <div className="curriculum-card__heading">
                    <h2>{unit.title}</h2>
                    <p>{unit.description}</p>
                  </div>
                  <div className="curriculum-card__lessons">
                    {unit.lessons.map((lesson) => {
                      const isReady = lesson.contentStatus !== 'planned' && Boolean(lesson.href);
                      const isFree = lesson.access === 'free';
                      const lessonContent = (
                        <>
                          <span className={`curriculum-lesson__icon ${isFree ? 'curriculum-lesson__icon--free' : ''}`}>
                            {isFree ? <CheckCircle2 size={15} /> : isReady ? <BookOpen size={15} /> : <CircleDashed size={14} />}
                          </span>
                          <span className="curriculum-lesson__text">
                            <strong>{lesson.title}</strong>
                            <small>{isFree ? 'Free introductory lesson · Available now' : isReady ? 'Preview ready · Open during development' : 'In preparation · Content not yet developed'}</small>
                          </span>
                          {isReady && <ArrowRight className="curriculum-lesson__arrow" size={16} />}
                        </>
                      );

                      return isReady ? (
                        <Link className="curriculum-lesson curriculum-lesson--link" to={lesson.href!} key={lesson.id}>
                          {lessonContent}
                        </Link>
                      ) : (
                        <div className="curriculum-lesson" key={lesson.id} aria-label={`${lesson.title}, in preparation`}>
                          {lessonContent}
                        </div>
                      );
                    })}
                  </div>
                  {plannedLessons.length > 0 && (
                    <div className="curriculum-card__footer">
                      <CircleDashed size={13} /> {plannedLessons.length} lesson{plannedLessons.length === 1 ? '' : 's'} still being developed
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="explore-note">
            <Sparkles size={19} />
            <p><strong>Built for understanding, not memorisation alone.</strong> Each lesson will be developed with learning objectives, clear explanations, examples, visual support and a knowledge check. Content will be reviewed before it becomes available.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
