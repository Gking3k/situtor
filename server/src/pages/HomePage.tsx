import { ArrowRight, ArrowUpRight, Atom, BookOpen, Check, CircleHelp, Eye, FlaskConical, Lightbulb, Sparkles, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import ScienceArtwork from '../components/ScienceArtwork';
import SectionHeading from '../components/SectionHeading';

const previewFaqs = [
  {
    question: 'What exactly is Si Tutor?',
    answer: 'Si Tutor is a science-learning platform designed to make difficult topics easier to understand through clear explanations, helpful visuals and opportunities to practise what you learn.',
  },
  {
    question: 'Who is Si Tutor being created for?',
    answer: 'The first learning collection is being planned for senior secondary school students, with Chemistry as the starting subject.',
  },
  {
    question: 'Will I need an account to use the first version?',
    answer: 'The first version is being designed so learners can explore lessons without needing to create an account. Features may expand as the platform develops.',
  },
];

const learningFeatures = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Understand the idea',
    description: 'Complicated topics are broken into smaller explanations that are easier to follow and remember.',
    tone: 'mint',
  },
  {
    icon: Eye,
    number: '02',
    title: 'See how it works',
    description: 'Visual examples and clear diagrams help turn abstract science concepts into something you can picture.',
    tone: 'lavender',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Put it into practice',
    description: 'Short questions and topic quizzes give you a chance to check what makes sense and what needs another look.',
    tone: 'yellow',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow__mark" />A fresh way to learn science</span>
            <h1>Science can make sense.<br /><span>Let's make it click.</span></h1>
            <p className="hero-copy__description">Big ideas, broken down. Explore science through simple explanations, visual learning and practice that helps everything click.</p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/explore">Explore lessons <ArrowUpRight size={17} /></Link>
              <a className="button button--quiet" href="#how-it-works">See how it works <ArrowRight size={16} /></a>
            </div>
            <div className="hero-trustline">
              <span className="hero-trustline__icon"><Sparkles size={15} /></span>
              <span>Made for curious minds, not just memorising.</span>
            </div>
          </div>
          <div className="hero-art-wrap">
            <ScienceArtwork />
            <div className="hero-art-caption"><span className="hero-art-caption__dot" />Learning starts with curiosity</div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>START WITH THE BASICS</span>
          <div className="hero-bottom__line" />
          <span>BUILD REAL UNDERSTANDING</span>
          <div className="hero-bottom__line" />
          <span>GROW YOUR CONFIDENCE</span>
        </div>
      </section>

      <section className="intro-strip section-space-sm">
        <div className="container intro-strip__inner">
          <div className="intro-strip__symbol"><Atom size={23} /></div>
          <p>Because learning science should feel like <em>discovering something</em>, not decoding a textbook.</p>
          <span className="intro-strip__asterisk">✳</span>
        </div>
      </section>

      <section className="section-space feature-section" id="how-it-works">
        <div className="container">
          <SectionHeading
            eyebrow="A BETTER WAY TO LEARN"
            title="Less memorising. More understanding."
            description="We bring explanations, visuals and practice together so each topic feels easier to explore."
            centered
          />
          <div className="feature-grid">
            {learningFeatures.map(({ icon: Icon, number, title, description, tone }) => (
              <article className="feature-card" key={number}>
                <div className={`feature-card__icon feature-card__icon--${tone}`}><Icon size={23} strokeWidth={1.8} /></div>
                <span className="feature-card__number">{number} / 03</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="feature-card__accent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space explore-preview-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="YOUR LEARNING STARTS HERE"
              title="Start with one idea."
              description="We're preparing our first collection of Chemistry lessons, one carefully explained topic at a time."
            />
            <Link className="text-link section-heading-row__link" to="/explore">View learning roadmap <ArrowUpRight size={16} /></Link>
          </div>
          <div className="featured-lesson-card">
            <div className="featured-lesson-card__content">
              <div className="lesson-meta"><span className="lesson-meta__pill">SS1 CHEMISTRY</span><span>FIRST COLLECTION</span></div>
              <h3>Atoms, Ions<br />&amp; Molecules</h3>
              <p>Meet the tiny building blocks behind the matter all around you. Understand what atoms, molecules and ions are — and how they differ.</p>
              <div className="featured-lesson-card__details">
                <span><BookOpen size={15} /> Guided lesson</span>
                <span><FlaskConical size={15} /> Visual examples</span>
                <span><Check size={15} /> Topic quiz planned</span>
              </div>
              <Link className="button button--dark" to="/explore">Explore this topic <ArrowUpRight size={16} /></Link>
            </div>
            <div className="featured-lesson-card__visual">
              <div className="featured-lesson-card__orb featured-lesson-card__orb--large" />
              <div className="featured-lesson-card__orb featured-lesson-card__orb--small" />
              <div className="featured-lesson-card__molecule"><i /><i /><i /><i /></div>
              <div className="featured-lesson-card__formula">H<sub>2</sub>O</div>
              <div className="featured-lesson-card__caption"><span>01</span><span>THE BUILDING BLOCKS OF MATTER</span></div>
              <div className="featured-lesson-card__sticker"><Atom size={17}/><span>Start with<br/>curiosity</span></div>
            </div>
          </div>
          <div className="upcoming-row">
            <div><span className="upcoming-row__eyebrow">WHAT'S COMING</span><p>More Chemistry topics are being prepared.</p></div>
            <Link to="/explore" className="text-link">See the roadmap <ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="section-space method-section">
        <div className="container method-grid">
          <div className="method-visual">
            <div className="method-visual__paper">
              <div className="method-visual__topline"><span>THE SI TUTOR APPROACH</span><span>✳</span></div>
              <div className="method-visual__scribble">Understand<br/><em>the why.</em></div>
              <div className="method-visual__diagram">
                <div className="method-visual__atom"><span/><i/><b/></div>
                <div className="method-visual__connector"/>
                <div className="method-visual__mini-note"><span>H₂O</span><small>One idea at a time.</small></div>
              </div>
              <div className="method-visual__bottomline"><span>LEARN</span><span>EXPLORE</span><span>PRACTISE</span></div>
            </div>
            <span className="method-visual__deco method-visual__deco--one">✦</span>
            <span className="method-visual__deco method-visual__deco--two">✳</span>
          </div>
          <div className="method-copy">
            <SectionHeading eyebrow="HOW SI TUTOR WORKS" title="A little less “just memorise it”." description="We believe a concept becomes easier when you can explain it in your own words, picture what is happening and try it for yourself." />
            <div className="method-steps">
              <div className="method-step"><span>01</span><div><h3>Get the big picture</h3><p>Start with the idea and why it matters.</p></div></div>
              <div className="method-step"><span>02</span><div><h3>Break it into pieces</h3><p>Follow clear explanations, examples and visuals.</p></div></div>
              <div className="method-step"><span>03</span><div><h3>Check what you know</h3><p>Use practice questions to make the learning stick.</p></div></div>
            </div>
            <Link to="/about" className="text-link">More about our approach <ArrowUpRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section-space faq-preview-section">
        <div className="container faq-preview-grid">
          <div className="faq-preview-copy">
            <span className="eyebrow"><span className="eyebrow__mark"/>A FEW THINGS YOU MAY WONDER</span>
            <h2>Questions?<br/><span>We've got you.</span></h2>
            <p>New here? Find out what Si Tutor is about and how the learning experience is being put together.</p>
            <Link className="button button--outline" to="/faqs">Visit the FAQs <ArrowUpRight size={16}/></Link>
            <div className="faq-preview-copy__doodle"><CircleHelp size={33}/><span>Curiosity is always welcome.</span></div>
          </div>
          <FaqAccordion items={previewFaqs}/>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container final-cta-card">
          <div className="final-cta-card__shape final-cta-card__shape--one"/>
          <div className="final-cta-card__shape final-cta-card__shape--two"/>
          <div className="final-cta-card__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__mark"/>YOUR NEXT “OH, I GET IT!” MOMENT</span>
            <h2>Ready to see science differently?</h2>
            <p>Explore the first learning collection and see where curiosity takes you.</p>
            <Link className="button button--light" to="/explore">Explore the lessons <ArrowUpRight size={16}/></Link>
          </div>
          <div className="final-cta-card__stamp"><Waypoints size={37}/><span>STAY<br/>CURIOUS</span></div>
        </div>
      </section>
    </main>
  );
}
