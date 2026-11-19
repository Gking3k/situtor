import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  Lightbulb,
  Microscope,
  Sparkles,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../pages/lesson.css';
import '../pages/unit-one-lessons.css';

type LessonSection = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  content: ReactNode;
};

type SourceLink = { label: string; url: string };

type UnitOneLessonLayoutProps = {
  lessonNumber: '02' | '03' | '04';
  lessonTitle: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  duration: string;
  learningObjectives: string[];
  sections: LessonSection[];
  recap: string[];
  quizPath: string;
  quizDescription: string;
  sidebarTip: string;
  sources: SourceLink[];
  nextLesson?: { title: string; path: string };
};

export default function UnitOneLessonLayout({
  lessonNumber,
  lessonTitle,
  titleLead,
  titleAccent,
  summary,
  duration,
  learningObjectives,
  sections,
  recap,
  quizPath,
  quizDescription,
  sidebarTip,
  sources,
  nextLesson,
}: UnitOneLessonLayoutProps) {
  const sectionList = [
    { id: 'lesson-start', label: 'Start here' },
    ...sections.map(({ id, label }) => ({ id, label })),
    { id: 'lesson-recap', label: 'Lesson recap' },
  ];
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionList[0].id);

  useEffect(() => {
    const updateReadingPosition = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
        : 0;
      setReadingProgress(Math.round(nextProgress));
      const visibleSection = [...sectionList].reverse().find((section) => {
        const element = document.getElementById(section.id);
        return element ? element.getBoundingClientRect().top <= 170 : false;
      });
      if (visibleSection) setActiveSection(visibleSection.id);
    };

    updateReadingPosition();
    window.addEventListener('scroll', updateReadingPosition, { passive: true });
    window.addEventListener('resize', updateReadingPosition);
    return () => {
      window.removeEventListener('scroll', updateReadingPosition);
      window.removeEventListener('resize', updateReadingPosition);
    };
  }, [sections]);

  return (
    <main className="lesson-page unit-one-lesson-page">
      <div className="lesson-progress-track" aria-label="Lesson reading progress">
        <div className="lesson-progress-track__fill" style={{ width: `${readingProgress}%` }} />
      </div>

      <section className="lesson-hero unit-one-lesson-hero">
        <div className="container lesson-hero__inner">
          <Link className="lesson-back-link" to="/explore"><ArrowLeft size={15} /> Back to Chemistry topics</Link>
          <div className="lesson-hero__grid">
            <div className="lesson-hero__copy">
              <div className="lesson-breadcrumb">
                <span>SS1 CHEMISTRY</span><span className="lesson-breadcrumb__dot" />
                <span>UNIT 01 · INTRODUCTION TO CHEMISTRY</span><span className="lesson-breadcrumb__dot" />
                <span>LESSON {lessonNumber}</span>
              </div>
              <h1>{titleLead} <span>{titleAccent}</span></h1>
              <p>{summary}</p>
              <div className="lesson-hero__meta">
                <span><BookOpen size={15} /> Guided lesson</span>
                <span><Microscope size={15} /> {duration}</span>
                <span><Target size={15} /> {sections.length + 2} learning sections</span>
              </div>
            </div>
            <div className="lesson-hero__visual unit-one-hero-art" aria-hidden="true">
              <div className="lesson-hero__visual-orbit" />
              <div className="lesson-hero__visual-orbit lesson-hero__visual-orbit--two" />
              <div className="lesson-hero__visual-core"><FlaskConical size={42} strokeWidth={1.5} /></div>
              <div className="lesson-hero__visual-tag lesson-hero__visual-tag--top">{lessonNumber}<small>UNIT 01</small></div>
              <div className="lesson-hero__visual-tag lesson-hero__visual-tag--bottom">{lessonTitle}<small>SS1 CHEMISTRY</small></div>
              <Sparkles className="lesson-hero__spark lesson-hero__spark--one" size={19} />
              <Sparkles className="lesson-hero__spark lesson-hero__spark--two" size={14} />
            </div>
          </div>
        </div>
      </section>

      <div className="container lesson-layout">
        <aside className="lesson-sidebar" aria-label="Lesson navigation">
          <div className="lesson-sidebar__card">
            <span className="lesson-sidebar__eyebrow">IN THIS LESSON</span>
            <div className="lesson-sidebar__progress"><span style={{ width: `${readingProgress}%` }} /></div>
            <div className="lesson-sidebar__progress-copy"><span>Reading progress</span><strong>{readingProgress}%</strong></div>
            <nav>{sectionList.map((section, index) => <a key={section.id} href={`#${section.id}`} className={activeSection === section.id ? 'is-active' : ''} aria-current={activeSection === section.id ? 'location' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{section.label}</a>)}</nav>
            <div className="lesson-sidebar__help"><Lightbulb size={16} /><p>Take your time. Pause to connect each idea to something you have seen in everyday life.</p></div>
          </div>
        </aside>

        <article className="lesson-content">
          <div className="lesson-mobile-toc">
            <details><summary><BookOpen size={16} /> Lesson contents <ChevronDown size={16} /></summary><nav>{sectionList.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, '0')} · {section.label}</a>)}</nav></details>
          </div>

          <section id="lesson-start" className="lesson-section lesson-section--intro">
            <span className="lesson-kicker">YOUR LEARNING GOALS</span>
            <h2>By the end of this lesson, you should be able to…</h2>
            <ul className="u1-objectives">{learningObjectives.map((objective) => <li key={objective}><CheckCircle2 size={16} />{objective}</li>)}</ul>
            <p className="u1-intro-note">Read each section, look at the examples, and use the recap before attempting the quiz.</p>
          </section>

          {sections.map((section, index) => (
            <section id={section.id} className="lesson-section" key={section.id}>
              <div className="lesson-section__heading"><span className="lesson-section__number">{String(index + 1).padStart(2, '0')}</span><div><span className="lesson-kicker">{section.kicker}</span><h2>{section.title}</h2></div></div>
              {section.content}
            </section>
          ))}

          <section id="lesson-recap" className="lesson-section lesson-section--recap">
            <div className="lesson-section__heading"><span className="lesson-section__number">{String(sections.length + 1).padStart(2, '0')}</span><div><span className="lesson-kicker">BEFORE YOU MOVE ON</span><h2>What should you remember?</h2></div></div>
            <div className="lesson-recap-list">{recap.map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}</div>
            <div className="lesson-next-card">
              <div><span className="lesson-kicker">YOU’VE REACHED THE END OF THE LESSON</span><h3>Ready to check what you’ve learned?</h3><p>{quizDescription}</p></div>
              <div className="lesson-next-card__actions"><span className="lesson-coming-label"><Sparkles size={14} /> 10 questions · no timer</span><Link to={quizPath} className="button button--outline button--small">Start the quiz <ArrowRight size={15} /></Link></div>
            </div>
            {nextLesson && <div className="u1-next-lesson"><span>UP NEXT IN UNIT 01</span><Link to={nextLesson.path}>{nextLesson.title}<ArrowRight size={15} /></Link></div>}
          </section>

          <section className="lesson-references" aria-labelledby="unit-one-references-title">
            <div><span className="lesson-kicker">CONTENT REFERENCES</span><h2 id="unit-one-references-title">Want to read further?</h2><p>This is an original Si Tutor learning resource. The references below support the curriculum scope and the explanations in this lesson.</p></div>
            <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowRight size={13} /></a></li>)}</ul>
          </section>
          <div className="lesson-bottom-nav"><Link to="/explore" className="text-link"><ArrowLeft size={15} /> All Chemistry topics</Link><span>Unit 01 · Lesson {lessonNumber}</span></div>
        </article>

        <aside className="lesson-right-rail" aria-label="Lesson information">
          <div className="lesson-right-card"><span className="lesson-right-card__icon"><Target size={18} /></span><strong>Your goal</strong><p>{learningObjectives[0]}</p></div>
          <div className="lesson-right-card lesson-right-card--tip"><span className="lesson-right-card__icon"><Lightbulb size={18} /></span><strong>Study tip</strong><p>{sidebarTip}</p></div>
          <div className="lesson-right-card lesson-right-card--support"><span className="lesson-right-card__icon"><Microscope size={18} /></span><strong>Keep exploring</strong><p>Use the quiz explanations to identify ideas you want to revisit.</p><Link to={quizPath}>Go to the quiz <ArrowRight size={13} /></Link></div>
        </aside>
      </div>
    </main>
  );
}
