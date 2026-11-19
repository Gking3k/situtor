import { useEffect, useState } from 'react';
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
import './lesson.css';
import './intro-chemistry-lesson.css';

const lessonSections = [
  { id: 'lesson-start', label: 'Start here' },
  { id: 'meaning-of-chemistry', label: 'Meaning of chemistry' },
  { id: 'what-chemists-study', label: 'What chemists study' },
  { id: 'branches-of-chemistry', label: 'Branches of chemistry' },
  { id: 'importance-of-chemistry', label: 'Why chemistry matters' },
  { id: 'chemistry-everywhere', label: 'Chemistry around us' },
  { id: 'lesson-recap', label: 'Lesson recap' },
];

const branches = [
  {
    name: 'Organic chemistry',
    question: 'What are carbon compounds like?',
    description: 'Studies the structures, properties and reactions of most carbon-containing compounds.',
    examples: 'Fuels, many medicines, plastics and dyes.',
    tone: 'mint',
  },
  {
    name: 'Inorganic chemistry',
    question: 'How do metals, minerals and salts behave?',
    description: 'Studies metals, minerals, salts and many other substances not classified as organic compounds.',
    examples: 'Iron compounds, table salt, limestone and metal oxides.',
    tone: 'lavender',
  },
  {
    name: 'Analytical chemistry',
    question: 'What is in this sample, and how much?',
    description: 'Identifies the substances in a sample and measures their amounts.',
    examples: 'Checking water quality or testing the composition of a medicine.',
    tone: 'yellow',
  },
  {
    name: 'Physical chemistry',
    question: 'Why and how do chemical processes happen?',
    description: 'Uses physical principles to understand energy, reaction rates and the behaviour of chemical systems.',
    examples: 'Investigating how temperature affects reaction speed.',
    tone: 'blue',
  },
  {
    name: 'Biochemistry',
    question: 'What chemical processes happen in living things?',
    description: 'Studies substances and chemical reactions in living organisms.',
    examples: 'Digestion, respiration, enzymes and how cells use nutrients.',
    tone: 'peach',
  },
] as const;

const importanceAreas = [
  {
    title: 'Health and medicine',
    detail: 'Chemistry supports the development, testing and quality control of medicines, diagnostic materials and medical supplies.',
    example: 'Laboratories test samples and check that medicines contain the stated ingredients.',
    tone: 'mint',
  },
  {
    title: 'Agriculture and food',
    detail: 'Chemical knowledge helps us understand soil nutrients, fertilisers, food composition, preservation and quality.',
    example: 'Soil testing can help farmers make better-informed fertiliser choices.',
    tone: 'yellow',
  },
  {
    title: 'Water and sanitation',
    detail: 'Chemistry helps identify substances in water and supports treatment processes used to make water safer.',
    example: 'Water analysis can check pH and detect certain dissolved substances.',
    tone: 'blue',
  },
  {
    title: 'Energy and transport',
    detail: 'Chemistry is involved in fuels, lubricants, batteries and the materials used in energy technologies.',
    example: 'Battery chemistry allows stored chemical energy to be converted into electrical energy.',
    tone: 'lavender',
  },
  {
    title: 'Manufacturing and construction',
    detail: 'Chemical processes help produce cement, glass, ceramics, paints, soaps, textiles and plastics.',
    example: 'The properties of cement and glass depend on their composition and how they are made.',
    tone: 'peach',
  },
  {
    title: 'Environment',
    detail: 'Chemistry helps scientists monitor pollutants, understand environmental changes and design ways to reduce waste.',
    example: 'Analysing air and water samples can help identify pollution sources.',
    tone: 'mint',
  },
];

function BranchCard({ branch }: { branch: (typeof branches)[number] }) {
  return (
    <article className={`intro-branch-card intro-branch-card--${branch.tone}`}>
      <span className="intro-branch-card__label">BRANCH OF CHEMISTRY</span>
      <h3>{branch.name}</h3>
      <strong className="intro-branch-card__question">{branch.question}</strong>
      <p>{branch.description}</p>
      <small><b>Examples:</b> {branch.examples}</small>
    </article>
  );
}

export default function MeaningBranchesChemistryPage() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(lessonSections[0].id);

  useEffect(() => {
    const updateReadingPosition = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
        : 0;
      setReadingProgress(Math.round(nextProgress));
      const visibleSection = [...lessonSections].reverse().find((section) => {
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
  }, []);

  return (
    <main className="lesson-page intro-chemistry-page">
      <div className="lesson-progress-track" aria-label="Lesson reading progress">
        <div className="lesson-progress-track__fill" style={{ width: `${readingProgress}%` }} />
      </div>

      <section className="lesson-hero intro-chemistry-hero">
        <div className="container lesson-hero__inner">
          <Link className="lesson-back-link" to="/explore"><ArrowLeft size={15} /> Back to Chemistry topics</Link>
          <div className="lesson-hero__grid">
            <div className="lesson-hero__copy">
              <div className="lesson-breadcrumb">
                <span>SS1 CHEMISTRY</span><span className="lesson-breadcrumb__dot" />
                <span>UNIT 01 · INTRODUCTION TO CHEMISTRY</span><span className="lesson-breadcrumb__dot" />
                <span>LESSON 01</span>
              </div>
              <h1>What is <span>Chemistry?</span></h1>
              <p>From the food you eat to the water you drink and the materials around you, chemistry helps explain what things are made of and how they change.</p>
              <div className="lesson-hero__meta">
                <span><BookOpen size={15} /> Guided lesson</span>
                <span><Microscope size={15} /> 20–25 min</span>
                <span><Target size={15} /> 7 learning sections</span>
              </div>
            </div>
            <div className="lesson-hero__visual intro-chemistry-visual" aria-hidden="true">
              <div className="intro-chemistry-visual__orbit intro-chemistry-visual__orbit--one" />
              <div className="intro-chemistry-visual__orbit intro-chemistry-visual__orbit--two" />
              <div className="intro-chemistry-visual__flask"><span /><i /><b /></div>
              <div className="intro-chemistry-visual__tag intro-chemistry-visual__tag--one">H₂O<small>water</small></div>
              <div className="intro-chemistry-visual__tag intro-chemistry-visual__tag--two">CO₂<small>carbon dioxide</small></div>
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
            <nav>
              {lessonSections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className={activeSection === section.id ? 'is-active' : ''} aria-current={activeSection === section.id ? 'location' : undefined}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{section.label}
                </a>
              ))}
            </nav>
            <div className="lesson-sidebar__help"><Lightbulb size={16} /><p>Chemistry helps us explain the materials and changes we see every day.</p></div>
          </div>
        </aside>

        <article className="lesson-content">
          <div className="lesson-mobile-toc">
            <details>
              <summary><BookOpen size={16} /> Lesson contents <ChevronDown size={16} /></summary>
              <nav>{lessonSections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, '0')} · {section.label}</a>)}</nav>
            </details>
          </div>

          <section id="lesson-start" className="lesson-section lesson-section--intro">
            <span className="lesson-kicker">LET’S START WITH YOUR WORLD</span>
            <h2>What do water, cooking gas, medicine and a mobile phone have in common?</h2>
            <p>They all involve matter and the ways matter behaves or changes. Water has a particular composition. Cooking gas contains substances that release energy when they burn. Medicines contain carefully selected substances. A mobile phone contains metals, glass, plastics and materials designed for specific jobs.</p>
            <p>These are different examples, but chemistry helps us ask the same kinds of questions about each one: What is it made of? What properties does it have? How can it change? What happens when it is mixed or reacts with something else?</p>
            <div className="lesson-insight lesson-insight--mint">
              <span><Lightbulb size={19} /></span>
              <div><strong>The big idea</strong><p>Chemistry is not only something that happens in a laboratory. It is a way of understanding the substances and materials that make up the world around us.</p></div>
            </div>
            <div className="intro-objectives">
              <strong>BY THE END OF THIS LESSON, YOU SHOULD BE ABLE TO:</strong>
              <ul>
                <li>Define chemistry in your own words.</li>
                <li>Identify the five traditional major branches of chemistry.</li>
                <li>Explain why chemistry is important in everyday life and society.</li>
              </ul>
            </div>
          </section>

          <section id="meaning-of-chemistry" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">01</span><div><span className="lesson-kicker">THE BASIC IDEA</span><h2>Meaning of chemistry</h2></div></div>
            <p><strong>Chemistry is the science that studies matter—its composition, structure, properties and the changes it undergoes.</strong></p>
            <p>Let’s break that definition into four parts:</p>
            <div className="intro-definition-grid">
              <article><span>01</span><h3>Composition</h3><p>What substances or particles is something made from?</p><small>Example: Water is made from hydrogen and oxygen.</small></article>
              <article><span>02</span><h3>Structure</h3><p>How are the parts of a substance arranged or connected?</p><small>Example: The particles in a solid are arranged differently from those in a gas.</small></article>
              <article><span>03</span><h3>Properties</h3><p>What characteristics does the substance have?</p><small>Example: Copper conducts electricity and can be shaped into wires.</small></article>
              <article><span>04</span><h3>Changes</h3><p>How can a substance change, and what is produced?</p><small>Example: Iron can react with oxygen and moisture to form rust.</small></article>
            </div>
            <div className="lesson-insight lesson-insight--blue">
              <span><FlaskConical size={19} /></span>
              <div><strong>Remember</strong><p>Matter is anything that has mass and occupies space. Chemistry studies the substances that make up matter and the changes those substances can undergo.</p></div>
            </div>
          </section>

          <section id="what-chemists-study" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">02</span><div><span className="lesson-kicker">HOW CHEMISTS THINK</span><h2>What do chemists study?</h2></div></div>
            <p>Chemists investigate substances at different levels. They observe materials directly, develop explanations for what is happening at the particle level, and use symbols, formulae and equations to communicate their ideas.</p>
            <div className="intro-levels">
              <article><span className="intro-levels__number">01</span><div><strong>What we can observe</strong><p>Colour, smell, state, temperature, texture and other measurable properties.</p></div><span className="intro-levels__tag">OBSERVE</span></article>
              <article><span className="intro-levels__number">02</span><div><strong>What happens at particle level</strong><p>How atoms, molecules and ions are arranged, move or interact.</p></div><span className="intro-levels__tag">EXPLAIN</span></article>
              <article><span className="intro-levels__number">03</span><div><strong>How we represent it</strong><p>Symbols, formulae, diagrams and equations help describe substances and reactions.</p></div><span className="intro-levels__tag">COMMUNICATE</span></article>
            </div>
            <p>For example, you can observe that a piece of copper has a reddish-brown colour. Chemistry can investigate its structure and explain why it conducts electricity, then represent copper with the symbol <strong>Cu</strong>.</p>
          </section>

          <section id="branches-of-chemistry" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">03</span><div><span className="lesson-kicker">FIVE CONNECTED AREAS</span><h2>Branches of chemistry</h2></div></div>
            <p>Chemistry is a very broad subject, so it is commonly divided into branches. Each branch focuses on particular questions or kinds of substances. The branches overlap and often work together.</p>
            <div className="intro-branches-grid">{branches.map((branch) => <BranchCard key={branch.name} branch={branch} />)}</div>
            <div className="lesson-insight lesson-insight--yellow">
              <span><Lightbulb size={19} /></span>
              <div><strong>They are connected</strong><p>A scientist developing a new medicine may use organic chemistry to study the compound, analytical chemistry to check its composition, and biochemistry to understand how it behaves in the body.</p></div>
            </div>
          </section>

          <section id="importance-of-chemistry" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">04</span><div><span className="lesson-kicker">WHY IT MATTERS</span><h2>Importance of chemistry</h2></div></div>
            <p>Chemistry helps people understand materials, solve practical problems and develop products and processes. Its importance can be seen in many parts of life and in the development of society.</p>
            <div className="intro-importance-grid">
              {importanceAreas.map((area, index) => (
                <article className={`intro-importance-card intro-importance-card--${area.tone}`} key={area.title}>
                  <span className="intro-importance-card__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                  <small>{area.example}</small>
                </article>
              ))}
            </div>
            <p>In Nigeria, chemistry is relevant to areas such as agriculture, food processing, water treatment, healthcare, petroleum and gas, cement and building materials, manufacturing and environmental monitoring.</p>
          </section>

          <section id="chemistry-everywhere" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">05</span><div><span className="lesson-kicker">LOOK AROUND YOU</span><h2>Chemistry is all around us</h2></div></div>
            <p>Think about a typical day. You wash with soap, prepare or eat food, use a phone, travel in a vehicle and drink water. Each activity involves substances and their properties or changes.</p>
            <div className="intro-everyday-strip">
              <div><span>01</span><strong>At home</strong><small>Cooking, cleaning and food preservation</small></div>
              <div><span>02</span><strong>At school</strong><small>Experiments, materials and laboratory tests</small></div>
              <div><span>03</span><strong>In the community</strong><small>Water supply, farming and waste management</small></div>
              <div><span>04</span><strong>In industry</strong><small>Making fuels, cement, medicines and products</small></div>
            </div>
            <div className="lesson-insight lesson-insight--mint">
              <span><Lightbulb size={19} /></span>
              <div><strong>A useful way to think</strong><p>Whenever you ask what a material is made of, why it has a certain property, or how it can be changed, you are asking a chemistry question.</p></div>
            </div>
          </section>

          <section id="lesson-recap" className="lesson-section lesson-section--recap">
            <div className="lesson-section__heading"><span className="lesson-section__number">06</span><div><span className="lesson-kicker">BEFORE YOU MOVE ON</span><h2>What should you remember?</h2></div></div>
            <div className="lesson-recap-list">
              {[
                'Chemistry studies the composition, structure, properties and changes of matter.',
                'Matter has mass and occupies space.',
                'The five traditional major branches are organic, inorganic, analytical, physical chemistry and biochemistry.',
                'Chemistry connects with biology, medicine, agriculture, engineering, environmental science and many other fields.',
                'Chemistry contributes to health, food, water, energy, manufacturing and environmental protection.',
                'The branches of chemistry overlap and often work together.',
              ].map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}
            </div>
            <div className="lesson-next-card">
              <div><span className="lesson-kicker">YOU’VE REACHED THE END OF THE LESSON</span><h3>Ready to check what you’ve learned?</h3><p>Try ten questions on the meaning, branches and importance of chemistry. You’ll see your score and explanations after submission.</p></div>
              <div className="lesson-next-card__actions"><span className="lesson-coming-label"><Sparkles size={14} /> 10 questions · no timer</span><Link to="/lessons/meaning-branches-importance-chemistry/quiz" className="button button--outline button--small">Start the quiz <ArrowRight size={15} /></Link></div>
            </div>
          </section>

          <section className="lesson-references" aria-labelledby="lesson-references-title">
            <div><span className="lesson-kicker">CONTENT REFERENCES</span><h2 id="lesson-references-title">Want to read further?</h2><p>This original Si Tutor lesson follows the SS1 learning outcomes and uses established chemistry references to explain the subject and its branches.</p></div>
            <ul>
              <li><a href="https://inspire.education.gov.ng/lessons/8863/preview" target="_blank" rel="noreferrer">Federal Ministry of Education — SS1 Introduction to Chemistry <ArrowRight size={13} /></a></li>
              <li><a href="https://openstax.org/books/chemistry-atoms-first/pages/1-1-chemistry-in-context" target="_blank" rel="noreferrer">OpenStax — Chemistry in Context <ArrowRight size={13} /></a></li>
              <li><a href="https://www.acs.org/careers/chemical-sciences/areas.html" target="_blank" rel="noreferrer">American Chemical Society — Areas of Chemistry <ArrowRight size={13} /></a></li>
              <li><a href="https://www.acs.org/careers/chemical-sciences.html" target="_blank" rel="noreferrer">American Chemical Society — Careers in Chemical Sciences <ArrowRight size={13} /></a></li>
            </ul>
          </section>

          <div className="lesson-bottom-nav"><Link to="/explore" className="text-link"><ArrowLeft size={15} /> All Chemistry topics</Link><span>Unit 01 · Lesson 01</span></div>
        </article>

        <aside className="lesson-right-rail" aria-label="Lesson information">
          <div className="lesson-right-card">
            <span className="lesson-right-card__icon"><Target size={18} /></span>
            <strong>Your goal</strong>
            <p>Explain what chemistry studies, name its major branches and give examples of why it matters.</p>
          </div>
          <div className="lesson-right-card lesson-right-card--tip">
            <span className="lesson-right-card__icon"><Lightbulb size={18} /></span>
            <strong>Study tip</strong>
            <p>When you learn a new branch, ask: what does it study, and what real-world question could it help answer?</p>
          </div>
          <div className="lesson-right-card lesson-right-card--support">
            <span className="lesson-right-card__icon"><Microscope size={18} /></span>
            <strong>What's next?</strong>
            <p>Next in Unit 01: careers and applications of chemistry.</p>
            <Link to="/explore">View the learning path <ArrowRight size={13} /></Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
