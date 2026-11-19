import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  FlaskConical,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './lesson.css';

const lessonSections = [
  { id: 'lesson-start', label: 'Start here' },
  { id: 'what-is-an-atom', label: 'What is an atom?' },
  { id: 'what-is-a-molecule', label: 'What is a molecule?' },
  { id: 'atomicity', label: 'Atomicity' },
  { id: 'what-is-an-ion', label: 'What is an ion?' },
  { id: 'polyatomic-ions', label: 'Polyatomic ions' },
  { id: 'put-it-together', label: 'Put it together' },
  { id: 'lesson-recap', label: 'Lesson recap' },
];

function AtomDiagram() {
  return (
    <div className="lesson-atom-figure">
      <svg viewBox="0 0 520 300" role="img" aria-labelledby="intro-atom-title intro-atom-desc">
        <title id="intro-atom-title">Simplified structure of an atom</title>
        <desc id="intro-atom-desc">A nucleus containing protons and neutrons is shown at the centre. Three electrons are placed on a circular shell guide. The diagram is a simplified model and is not to scale.</desc>
        <defs>
          <radialGradient id="atom-nucleus" cx="32%" cy="28%"><stop offset="0%" stopColor="#f8c56b" /><stop offset="100%" stopColor="#dd8952" /></radialGradient>
          <radialGradient id="atom-electron" cx="30%" cy="25%"><stop offset="0%" stopColor="#b7f3e4" /><stop offset="100%" stopColor="#0f766e" /></radialGradient>
        </defs>
        <ellipse cx="210" cy="132" rx="108" ry="42" fill="none" stroke="#80bfb0" strokeWidth="2" strokeDasharray="6 5" />
        <ellipse cx="210" cy="132" rx="108" ry="42" fill="none" stroke="#9eabd5" strokeWidth="1.5" transform="rotate(58 210 132)" />
        <ellipse cx="210" cy="132" rx="108" ry="42" fill="none" stroke="#d8b76c" strokeWidth="1.5" transform="rotate(-58 210 132)" />
        <circle cx="210" cy="132" r="34" fill="url(#atom-nucleus)" stroke="#b76e42" strokeWidth="1.5" />
        <circle cx="197" cy="119" r="9" fill="#d86d68" stroke="#9c4542" strokeWidth="1" />
        <circle cx="216" cy="117" r="9" fill="#fff0ca" stroke="#ba9652" strokeWidth="1" />
        <circle cx="193" cy="139" r="9" fill="#fff0ca" stroke="#ba9652" strokeWidth="1" />
        <circle cx="213" cy="139" r="9" fill="#d86d68" stroke="#9c4542" strokeWidth="1" />
        <circle cx="228" cy="129" r="8" fill="#d86d68" stroke="#9c4542" strokeWidth="1" />
        <circle cx="205" cy="153" r="8" fill="#fff0ca" stroke="#ba9652" strokeWidth="1" />
        <circle cx="210" cy="41" r="10" fill="url(#atom-electron)" stroke="#fff" strokeWidth="3" />
        <circle cx="131" cy="177" r="10" fill="url(#atom-electron)" stroke="#fff" strokeWidth="3" />
        <circle cx="289" cy="177" r="10" fill="url(#atom-electron)" stroke="#fff" strokeWidth="3" />
        <path d="M242 111 L333 73 L365 73" fill="none" stroke="#607c91" strokeWidth="1.5" />
        <text x="373" y="77" fontSize="13" fontWeight="700" fill="#334e68">Nucleus</text>
        <path d="M289 177 L335 208 L365 208" fill="none" stroke="#607c91" strokeWidth="1.5" />
        <text x="373" y="212" fontSize="13" fontWeight="700" fill="#334e68">Electron</text>
        <path d="M119 94 L67 69 L25 69" fill="none" stroke="#607c91" strokeWidth="1.5" />
        <text x="25" y="57" fontSize="12" fontWeight="700" fill="#52687a">Shell guide</text>
        <g transform="translate(374 103)"><circle cx="7" cy="0" r="5" fill="#d86d68"/><text x="18" y="4" fontSize="11" fill="#52687a">Proton (+)</text><circle cx="7" cy="25" r="5" fill="#fff0ca" stroke="#ba9652"/><text x="18" y="29" fontSize="11" fill="#52687a">Neutron (0)</text><circle cx="7" cy="50" r="5" fill="#0f766e"/><text x="18" y="54" fontSize="11" fill="#52687a">Electron (−)</text></g>
        <text x="210" y="270" textAnchor="middle" fontSize="11" fill="#8998a5">Schematic model · particles and distances are not to scale</text>
      </svg>
    </div>
  );
}

function MoleculeCard({ kind }: { kind: 'water' | 'oxygen' | 'carbon-dioxide' }) {
  const details = {
    water: { formula: 'H₂O', name: 'Water', note: '2 hydrogen atoms + 1 oxygen atom' },
    oxygen: { formula: 'O₂', name: 'Oxygen', note: '2 oxygen atoms bonded together' },
    'carbon-dioxide': { formula: 'CO₂', name: 'Carbon dioxide', note: '1 carbon atom + 2 oxygen atoms' },
  }[kind];

  return (
    <article className="lesson-molecule-card">
      <div className={`lesson-molecule-card__art lesson-molecule-card__art--${kind}`}>
        <svg viewBox="0 0 220 116" role="img" aria-label={`${details.name} molecule model`}>
          {kind === 'water' && (
            <>
              <line x1="110" y1="58" x2="69" y2="29" />
              <line x1="110" y1="58" x2="151" y2="29" />
              <circle className="molecule-oxygen" cx="110" cy="58" r="23" />
              <circle className="molecule-hydrogen" cx="65" cy="26" r="15" />
              <circle className="molecule-hydrogen" cx="155" cy="26" r="15" />
              <text x="110" y="63" textAnchor="middle">O</text>
              <text x="65" y="31" textAnchor="middle">H</text>
              <text x="155" y="31" textAnchor="middle">H</text>
            </>
          )}
          {kind === 'oxygen' && (
            <>
              <line x1="91" y1="58" x2="129" y2="58" />
              <circle className="molecule-oxygen" cx="78" cy="58" r="23" />
              <circle className="molecule-oxygen" cx="142" cy="58" r="23" />
              <text x="78" y="63" textAnchor="middle">O</text>
              <text x="142" y="63" textAnchor="middle">O</text>
            </>
          )}
          {kind === 'carbon-dioxide' && (
            <>
              <line x1="68" y1="58" x2="152" y2="58" />
              <circle className="molecule-oxygen" cx="53" cy="58" r="23" />
              <circle className="molecule-carbon" cx="110" cy="58" r="19" />
              <circle className="molecule-oxygen" cx="167" cy="58" r="23" />
              <text x="53" y="63" textAnchor="middle">O</text>
              <text x="110" y="63" textAnchor="middle">C</text>
              <text x="167" y="63" textAnchor="middle">O</text>
            </>
          )}
        </svg>
      </div>
      <div className="lesson-molecule-card__copy">
        <div><strong>{details.name}</strong><span>{details.formula}</span></div>
        <p>{details.note}</p>
      </div>
    </article>
  );
}

function ChargeExplorer() {
  const [element, setElement] = useState<'sodium' | 'chlorine'>('sodium');
  const [changed, setChanged] = useState(false);
  const isSodium = element === 'sodium';
  const protons = isSodium ? 11 : 17;
  const electrons = protons + (changed ? (isSodium ? -1 : 1) : 0);
  const charge = protons - electrons;
  const symbol = isSodium ? (changed ? 'Na⁺' : 'Na') : (changed ? 'Cl⁻' : 'Cl');

  const chooseElement = (next: 'sodium' | 'chlorine') => {
    setElement(next);
    setChanged(false);
  };

  return (
    <div className="lesson-charge-lab">
      <div className="lesson-charge-lab__header">
        <div>
          <span className="lesson-kicker">TRY IT YOURSELF</span>
          <h3>Explore how an ion forms</h3>
          <p>Choose an atom, then change its electron count. Watch how its charge changes.</p>
        </div>
        <span className="lesson-charge-lab__icon"><FlaskConical size={22} /></span>
      </div>
      <div className="lesson-charge-lab__tabs" role="group" aria-label="Choose an atom">
        <button type="button" className={isSodium ? 'is-active' : ''} onClick={() => chooseElement('sodium')}>Sodium (Na)</button>
        <button type="button" className={!isSodium ? 'is-active' : ''} onClick={() => chooseElement('chlorine')}>Chlorine (Cl)</button>
      </div>
      <div className="lesson-charge-lab__result" aria-live="polite">
        <div className="lesson-charge-lab__symbol"><span>{symbol}</span><small>{isSodium ? 'Sodium' : 'Chlorine'}</small></div>
        <div className="lesson-charge-lab__numbers">
          <div><span>Protons</span><strong>{protons}</strong></div>
          <div><span>Electrons</span><strong>{electrons}</strong></div>
          <div><span>Net charge</span><strong className={charge > 0 ? 'is-positive' : charge < 0 ? 'is-negative' : ''}>{charge > 0 ? `+${charge}` : charge}</strong></div>
        </div>
      </div>
      <div className="lesson-charge-lab__equation">
        <span>Protons − electrons</span>
        <strong>{protons} − {electrons} = {charge > 0 ? `+${charge}` : charge}</strong>
      </div>
      <div className="lesson-charge-lab__actions">
        {!changed ? (
          <button type="button" className="button button--primary button--small" onClick={() => setChanged(true)}>
            {isSodium ? 'Remove one electron' : 'Add one electron'} <ArrowRight size={15} />
          </button>
        ) : (
          <button type="button" className="button button--outline button--small" onClick={() => setChanged(false)}>
            <RotateCcw size={14} /> Reset atom
          </button>
        )}
        <span>{!changed ? 'Start with a neutral atom.' : isSodium ? 'The atom has become a positive ion (cation).' : 'The atom has become a negative ion (anion).'}</span>
      </div>
    </div>
  );
}

export default function LessonPreviewPage() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(lessonSections[0].id);

  useEffect(() => {
    const updateReadingPosition = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100)) : 0;
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
    <main className="lesson-page">
      <div className="lesson-progress-track" aria-label="Lesson reading progress">
        <div className="lesson-progress-track__fill" style={{ width: `${readingProgress}%` }} />
      </div>

      <section className="lesson-hero">
        <div className="container lesson-hero__inner">
          <Link className="lesson-back-link" to="/explore"><ArrowLeft size={15} /> Back to Chemistry topics</Link>
          <div className="lesson-hero__grid">
            <div className="lesson-hero__copy">
              <div className="lesson-breadcrumb"><span>SS1 CHEMISTRY</span><span className="lesson-breadcrumb__dot" /><span>FOUNDATIONS</span><span className="lesson-breadcrumb__dot" /><span>LESSON 01</span></div>
              <h1>Atoms, Ions <span>&amp; Molecules.</span></h1>
              <p>Everything around you is made of tiny particles. Let's meet them, understand how they behave and discover what makes each one different.</p>
              <div className="lesson-hero__meta">
                <span><BookOpen size={15} /> Guided lesson</span>
                <span><Clock3 size={15} /> 25–35 min</span>
                <span><Target size={15} /> 7 learning sections</span>
              </div>
            </div>
            <div className="lesson-hero__visual" aria-hidden="true">
              <div className="lesson-hero__visual-orbit lesson-hero__visual-orbit--one" />
              <div className="lesson-hero__visual-orbit lesson-hero__visual-orbit--two" />
              <div className="lesson-hero__visual-core"><span /><span /><span /></div>
              <div className="lesson-hero__visual-tag lesson-hero__visual-tag--top">H₂O <small>water</small></div>
              <div className="lesson-hero__visual-tag lesson-hero__visual-tag--bottom">Na⁺ <small>ion</small></div>
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
            <div className="lesson-sidebar__help"><Lightbulb size={16} /><p>Take your time. Understanding matters more than speed.</p></div>
          </div>
        </aside>

        <article className="lesson-content">
          <div className="lesson-mobile-toc">
            <details>
              <summary><BookOpen size={16} /> Lesson contents <ChevronDown size={16} /></summary>
              <nav>
                {lessonSections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, '0')} · {section.label}</a>)}
              </nav>
            </details>
          </div>

          <section id="lesson-start" className="lesson-section lesson-section--intro">
            <span className="lesson-kicker">LET'S START WITH THE BIG IDEA</span>
            <h2>What is everything made of?</h2>
            <p>Think about a glass of water. You can pour it, split it into smaller drops and watch it disappear as it evaporates. Even when you cannot see the tiny particles, they are still there.</p>
            <p>Chemistry helps us understand the substances around us and the particles that make them up. In this lesson, we'll focus on three important ideas: <strong>atoms, molecules and ions.</strong></p>
            <div className="lesson-insight lesson-insight--mint"><span><Lightbulb size={19} /></span><div><strong>Think of it this way</strong><p>A building is made from smaller building blocks. In a similar way, matter is made from tiny particles arranged in different ways.</p></div></div>
          </section>

          <section id="what-is-an-atom" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">01</span><div><span className="lesson-kicker">THE BUILDING BLOCK</span><h2>What is an atom?</h2></div></div>
            <p>An <strong>atom</strong> is the smallest particle that still characterises a chemical element. An oxygen atom, for example, is still oxygen; a carbon atom is still carbon.</p>
            <div className="lesson-visual-card">
              <AtomDiagram />
              <div className="lesson-visual-card__caption"><strong>Inside an atom</strong><span>Schematic only: electron count and positions are not to scale.</span></div>
            </div>
            <h3>Three subatomic particles</h3>
            <p>Atoms contain smaller particles called <strong>subatomic particles</strong>. The three you should know at this level are:</p>
            <div className="lesson-particle-grid">
              <article className="lesson-particle-card lesson-particle-card--proton"><span className="lesson-particle-card__symbol">p⁺</span><strong>Proton</strong><span>Positive charge (+1)</span><small>Found in the nucleus</small></article>
              <article className="lesson-particle-card lesson-particle-card--neutron"><span className="lesson-particle-card__symbol">n⁰</span><strong>Neutron</strong><span>No charge (0)</span><small>Found in the nucleus</small></article>
              <article className="lesson-particle-card lesson-particle-card--electron"><span className="lesson-particle-card__symbol">e⁻</span><strong>Electron</strong><span>Negative charge (−1)</span><small>Occupies regions around the nucleus</small></article>
            </div>
            <div className="lesson-note"><InfoIcon /><p><strong>Remember:</strong> A neutral atom has equal numbers of protons and electrons. Their positive and negative charges balance each other.</p></div>
            <h3>Chemical symbols</h3>
            <p>Every element has a chemical symbol. It may contain one or two letters. The first letter is always capitalised; a second letter, when present, is lowercase.</p>
            <div className="lesson-symbol-grid">
              {[['H','Hydrogen'],['O','Oxygen'],['C','Carbon'],['Cl','Chlorine'],['Na','Sodium'],['Ca','Calcium']].map(([symbol, name]) => <div className="lesson-element-symbol" key={symbol}><strong>{symbol}</strong><span>{name}</span></div>)}
            </div>
            <div className="lesson-insight lesson-insight--blue"><span><Sparkles size={19} /></span><div><strong>Small detail, big difference</strong><p>Co represents cobalt, while CO represents carbon monoxide. Capitalisation matters in chemical symbols and formulas.</p></div></div>
          </section>

          <section id="what-is-a-molecule" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">02</span><div><span className="lesson-kicker">ATOMS WORKING TOGETHER</span><h2>What is a molecule?</h2></div></div>
            <p>A <strong>molecule</strong> is an electrically neutral entity made up of two or more atoms chemically bonded together.</p>
            <p>The atoms can be from the same element or from different elements. Explore these examples:</p>
            <div className="lesson-molecule-grid">
              <MoleculeCard kind="water" />
              <MoleculeCard kind="oxygen" />
              <MoleculeCard kind="carbon-dioxide" />
            </div>
            <div className="lesson-two-column-note">
              <div><span className="lesson-kicker">SAME ELEMENT</span><strong>O₂ — Oxygen</strong><p>Two oxygen atoms bond to form one neutral oxygen molecule.</p></div>
              <div><span className="lesson-kicker">DIFFERENT ELEMENTS</span><strong>H₂O — Water</strong><p>Two hydrogen atoms bond with one oxygen atom to form a water molecule.</p></div>
            </div>
            <h3>Reading a chemical formula</h3>
            <p>In H₂O, the small 2 is called a <strong>subscript</strong>. It tells you that two hydrogen atoms are present. Oxygen has no subscript, so one oxygen atom is understood.</p>
            <div className="lesson-formula-breakdown"><div className="lesson-formula-breakdown__formula">H<sub>2</sub>O</div><div><strong>2 hydrogen atoms</strong><span>+</span><strong>1 oxygen atom</strong><em>= 3 atoms in total</em></div></div>
            <div className="lesson-insight lesson-insight--yellow"><span><Lightbulb size={19} /></span><div><strong>Not every molecule is a compound</strong><p>O₂ is a molecule made from one element. H₂O is a compound because it contains more than one element.</p></div></div>
          </section>

          <section id="atomicity" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">03</span><div><span className="lesson-kicker">COUNTING ATOMS</span><h2>What is atomicity?</h2></div></div>
            <p><strong>Atomicity</strong> is the number of atoms present in one molecule of an element. The name tells you how many atoms are joined in that molecule.</p>
            <div className="lesson-atomicity-table-wrap">
              <table className="lesson-table">
                <thead><tr><th>Classification</th><th>Atoms per molecule</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>Monoatomic*</td><td>1</td><td>He (helium)</td></tr>
                  <tr><td>Diatomic</td><td>2</td><td>H₂, O₂, Cl₂</td></tr>
                  <tr><td>Triatomic</td><td>3</td><td>O₃ (ozone)</td></tr>
                  <tr><td>Tetratomic</td><td>4</td><td>P₄ (phosphorus)</td></tr>
                  <tr><td>Octatomic</td><td>8</td><td>S₈ (sulphur)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="lesson-footnote">*Monoatomic elements such as helium exist as individual atoms, not as molecules. The term is included here because it is commonly used when classifying how elements exist.</p>
            <div className="lesson-mini-check"><div><span className="lesson-kicker">PAUSE & THINK</span><strong>How many atoms are in one S₈ molecule?</strong></div><span className="lesson-mini-check__answer">8 atoms</span></div>
          </section>

          <section id="what-is-an-ion" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">04</span><div><span className="lesson-kicker">WHEN CHARGE CHANGES</span><h2>What is an ion?</h2></div></div>
            <p>An <strong>ion</strong> is an atom or group of atoms with a net electrical charge. An atom becomes an ion when it gains or loses one or more electrons.</p>
            <p>During ordinary chemical ion formation, the number of protons stays the same. It is the number of electrons that changes.</p>
            <div className="lesson-ion-compare">
              <article className="lesson-ion-card lesson-ion-card--cation"><span className="lesson-ion-card__badge">POSITIVE ION</span><div className="lesson-ion-card__symbol">Na<sup>+</sup></div><h3>Cation</h3><p>Forms when an atom <strong>loses</strong> electrons.</p><div className="lesson-ion-card__equation">11 protons · 10 electrons</div></article>
              <article className="lesson-ion-card lesson-ion-card--anion"><span className="lesson-ion-card__badge">NEGATIVE ION</span><div className="lesson-ion-card__symbol">Cl<sup>−</sup></div><h3>Anion</h3><p>Forms when an atom <strong>gains</strong> electrons.</p><div className="lesson-ion-card__equation">17 protons · 18 electrons</div></article>
            </div>
            <div className="lesson-memory-rule"><div><span>LOSE electrons</span><strong>Become positive (+)</strong></div><div><span>GAIN electrons</span><strong>Become negative (−)</strong></div></div>
            <h3>Explore the change in charge</h3>
            <ChargeExplorer />
          </section>

          <section id="polyatomic-ions" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">05</span><div><span className="lesson-kicker">MORE THAN ONE ATOM</span><h2>Can a group of atoms form an ion?</h2></div></div>
            <p>Yes. Some ions contain two or more atoms bonded together. These are called <strong>polyatomic ions</strong>. The whole group carries an overall electrical charge.</p>
            <div className="lesson-polyatomic-grid">
              {[['NH₄⁺','Ammonium','+1'],['OH⁻','Hydroxide','−1'],['NO₃⁻','Nitrate','−1'],['SO₄²⁻','Sulphate','−2'],['CO₃²⁻','Carbonate','−2']].map(([formula, name, charge]) => <article key={formula}><strong>{formula}</strong><span>{name}</span><small>Charge: {charge}</small></article>)}
            </div>
            <div className="lesson-insight lesson-insight--mint"><span><Lightbulb size={19} /></span><div><strong>Keep the distinction clear</strong><p>A molecule is electrically neutral. A polyatomic ion contains several atoms but has an overall charge, so it is an ion rather than a neutral molecule.</p></div></div>
          </section>

          <section id="put-it-together" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">06</span><div><span className="lesson-kicker">MAKE THE CONNECTION</span><h2>Putting it all together</h2></div></div>
            <p>Let's compare the three main ideas. The differences become easier to remember when you look at the particle and its charge.</p>
            <div className="lesson-compare-table-wrap">
              <table className="lesson-table lesson-table--compare">
                <thead><tr><th>Particle</th><th>What it is</th><th>Charge</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>Atom</strong></td><td>One particle of an element</td><td>Neutral if uncharged</td><td>Na, He</td></tr>
                  <tr><td><strong>Molecule</strong></td><td>Two or more bonded atoms</td><td>Neutral</td><td>O₂, H₂O</td></tr>
                  <tr><td><strong>Ion</strong></td><td>Charged atom or group of atoms</td><td>Positive or negative</td><td>Na⁺, SO₄²⁻</td></tr>
                </tbody>
              </table>
            </div>
            <div className="lesson-important-card"><div className="lesson-important-card__icon"><FlaskConical size={21} /></div><div><span className="lesson-kicker">AN IMPORTANT EXCEPTION</span><h3>Is NaCl a molecule?</h3><p>Not in the solid state. Sodium chloride is an ionic compound made of a repeating three-dimensional arrangement of Na⁺ and Cl⁻ ions. Its formula represents a 1:1 ratio of ions, not a separate NaCl molecule. That simplest ratio is called a <strong>formula unit</strong>.</p></div></div>
            <div className="lesson-crystal-visual" role="img" aria-label="Schematic repeating ionic arrangement of sodium and chloride ions">
              <div className="lesson-crystal-visual__grid">{Array.from({ length: 24 }, (_, index) => <span key={index} className={Math.floor(index / 6) % 2 === index % 2 ? 'is-sodium' : 'is-chloride'}>{Math.floor(index / 6) % 2 === index % 2 ? '+' : '−'}</span>)}</div>
              <div><strong>NaCl crystal lattice</strong><small>Alternating positive and negative ions in a repeating arrangement. Schematic view.</small></div>
            </div>
          </section>

          <section id="lesson-recap" className="lesson-section lesson-section--recap">
            <div className="lesson-section__heading"><span className="lesson-section__number">07</span><div><span className="lesson-kicker">BEFORE YOU MOVE ON</span><h2>What should you remember?</h2></div></div>
            <div className="lesson-recap-list">
              {[
                'An atom is the smallest particle that still characterises a chemical element.',
                'A neutral atom has equal numbers of protons and electrons.',
                'A molecule is a neutral entity made up of two or more bonded atoms.',
                'Atomicity counts the atoms in one molecule of an element.',
                'Losing electrons forms a positive ion; gaining electrons forms a negative ion.',
                'A polyatomic ion is a bonded group of atoms with an overall charge.',
                'Solid sodium chloride forms an ionic lattice, not separate NaCl molecules.',
              ].map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}
            </div>
            <div className="lesson-next-card">
              <div><span className="lesson-kicker">YOU'VE REACHED THE END OF THE LESSON</span><h3>Ready to check what you've learned?</h3><p>The end-of-topic quiz is the next part of the Si Tutor learning experience.</p></div>
              <div className="lesson-next-card__actions"><span className="lesson-coming-label"><Sparkles size={14} /> 12 questions · no timer</span><Link to="/lessons/atoms-ions-molecules/quiz" className="button button--outline button--small">Start the quiz <ArrowRight size={15} /></Link></div>
            </div>
            <div className="u1-next-lesson"><span>UP NEXT IN UNIT 04</span><Link to="/lessons/daltons-atomic-theory">Dalton’s atomic theory and its modifications <ArrowRight size={15} /></Link></div>
          </section>

          <section className="lesson-references" aria-labelledby="lesson-references-title">
            <div><span className="lesson-kicker">CONTENT REFERENCES</span><h2 id="lesson-references-title">Want to read further?</h2><p>This lesson was prepared for SS1 learners using the Nigerian senior-secondary learning outline and established chemistry references.</p></div>
            <ul>
              <li><a href="https://inspire.education.gov.ng/lessons/232/preview" target="_blank" rel="noreferrer">Federal Ministry of Education — SS1 Particulate Nature of Matter <ArrowRight size={13} /></a></li>
              <li><a href="https://goldbook.iupac.org/terms/view/A00493" target="_blank" rel="noreferrer">IUPAC Gold Book — Atom <ArrowRight size={13} /></a></li>
              <li><a href="https://goldbook.iupac.org/terms/view/I03158" target="_blank" rel="noreferrer">IUPAC Gold Book — Ion <ArrowRight size={13} /></a></li>
              <li><a href="https://openstax.org/books/chemistry/pages/2-6-molecular-and-ionic-compounds" target="_blank" rel="noreferrer">OpenStax Chemistry — Molecular and Ionic Compounds <ArrowRight size={13} /></a></li>
            </ul>
          </section>

          <div className="lesson-bottom-nav"><Link to="/explore" className="text-link"><ArrowLeft size={15} /> All Chemistry topics</Link><span>SS1 Chemistry · Lesson 01</span></div>
        </article>

        <aside className="lesson-right-rail" aria-label="Lesson information">
          <div className="lesson-right-card">
            <span className="lesson-right-card__icon"><Target size={18} /></span>
            <strong>Your goal</strong>
            <p>Understand how atoms, molecules and ions differ — especially by their structure and electrical charge.</p>
          </div>
          <div className="lesson-right-card lesson-right-card--tip">
            <span className="lesson-right-card__icon"><Lightbulb size={18} /></span>
            <strong>Study tip</strong>
            <p>When you see a charge, count protons and electrons. Their difference tells you the net charge.</p>
          </div>
          <div className="lesson-right-card lesson-right-card--support">
            <span className="lesson-right-card__icon"><CircleHelp size={18} /></span>
            <strong>Need help?</strong>
            <p>Tell us if any explanation is confusing or needs correction.</p>
            <Link to="/contact">Send feedback <ArrowRight size={13} /></Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

function InfoIcon() {
  return <span className="lesson-note__icon" aria-hidden="true">i</span>;
}
