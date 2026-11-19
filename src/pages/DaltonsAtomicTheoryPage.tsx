import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Lightbulb,
  Microscope,
  Sparkles,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './lesson.css';
import './dalton-lesson.css';

const lessonSections = [
  { id: 'lesson-start', label: 'Start here' },
  { id: 'john-dalton', label: 'Meet John Dalton' },
  { id: 'five-postulates', label: 'Five postulates' },
  { id: 'why-it-mattered', label: 'Why the theory mattered' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'modern-updates', label: 'Modern modifications' },
  { id: 'chemical-vs-nuclear', label: 'Chemical vs nuclear' },
  { id: 'lesson-recap', label: 'Lesson recap' },
];

function DaltonModelDiagram() {
  return (
    <div className="dalton-model" role="img" aria-label="A simplified Dalton model showing atoms as solid spheres and a compound made from different types of atoms">
      <div className="dalton-model__group">
        <div className="dalton-model__atoms"><span className="dalton-sphere dalton-sphere--teal" /><span className="dalton-sphere dalton-sphere--teal" /><span className="dalton-sphere dalton-sphere--teal" /></div>
        <strong>Element A</strong><small>One type of atom</small>
      </div>
      <div className="dalton-model__group">
        <div className="dalton-model__atoms"><span className="dalton-sphere dalton-sphere--gold" /><span className="dalton-sphere dalton-sphere--gold" /><span className="dalton-sphere dalton-sphere--gold" /></div>
        <strong>Element B</strong><small>A different type of atom</small>
      </div>
      <div className="dalton-model__arrow" aria-hidden="true">+</div>
      <div className="dalton-model__group dalton-model__group--compound">
        <div className="dalton-model__atoms dalton-model__atoms--bonded"><span className="dalton-sphere dalton-sphere--teal" /><span className="dalton-sphere dalton-sphere--gold" /></div>
        <strong>Compound AB</strong><small>Atoms in a simple ratio</small>
      </div>
      <p className="dalton-model__caption">A teaching model inspired by Dalton’s solid-sphere idea. The spheres are symbolic and not to scale.</p>
    </div>
  );
}

function PostulateCard({ number, title, detail, example }: { number: string; title: string; detail: string; example: string }) {
  return (
    <article className="dalton-postulate-card">
      <span className="dalton-postulate-card__number">{number}</span>
      <div><h3>{title}</h3><p>{detail}</p><small>{example}</small></div>
    </article>
  );
}

export default function DaltonsAtomicTheoryPage() {
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
    <main className="lesson-page dalton-lesson-page">
      <div className="lesson-progress-track" aria-label="Lesson reading progress"><div className="lesson-progress-track__fill" style={{ width: `${readingProgress}%` }} /></div>

      <section className="lesson-hero dalton-lesson-hero">
        <div className="container lesson-hero__inner">
          <Link className="lesson-back-link" to="/explore"><ArrowLeft size={15} /> Back to Chemistry topics</Link>
          <div className="lesson-hero__grid">
            <div className="lesson-hero__copy">
              <div className="lesson-breadcrumb"><span>SS1 CHEMISTRY</span><span className="lesson-breadcrumb__dot" /><span>PARTICULATE NATURE OF MATTER</span><span className="lesson-breadcrumb__dot" /><span>LESSON 02</span></div>
              <h1>Dalton’s Atomic <span>Theory.</span></h1>
              <p>How did scientists first explain what matter is made of — and what happens when new evidence challenges an idea? Meet John Dalton’s model and discover how later discoveries refined it.</p>
              <div className="lesson-hero__meta">
                <span><BookOpen size={15} /> Guided lesson</span>
                <span><Clock3 size={15} /> 25–30 min</span>
                <span><Target size={15} /> 8 learning sections</span>
              </div>
            </div>
            <div className="lesson-hero__visual dalton-hero-visual" aria-hidden="true">
              <div className="dalton-hero-visual__orbit dalton-hero-visual__orbit--one" />
              <div className="dalton-hero-visual__orbit dalton-hero-visual__orbit--two" />
              <div className="dalton-hero-visual__sphere dalton-hero-visual__sphere--large" />
              <div className="dalton-hero-visual__sphere dalton-hero-visual__sphere--small" />
              <div className="dalton-hero-visual__label">DALTON’S MODEL<small>solid spheres</small></div>
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
            <nav>{lessonSections.map((section, index) => <a key={section.id} href={`#${section.id}`} className={activeSection === section.id ? 'is-active' : ''} aria-current={activeSection === section.id ? 'location' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{section.label}</a>)}</nav>
            <div className="lesson-sidebar__help"><Lightbulb size={16} /><p>Scientific models improve when new evidence becomes available.</p></div>
          </div>
        </aside>

        <article className="lesson-content">
          <div className="lesson-mobile-toc">
            <details><summary><BookOpen size={16} /> Lesson contents <ChevronDown size={16} /></summary><nav>{lessonSections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, '0')} · {section.label}</a>)}</nav></details>
          </div>

          <section id="lesson-start" className="lesson-section lesson-section--intro">
            <span className="lesson-kicker">LET’S START WITH A QUESTION</span>
            <h2>Can an idea be useful and still be incomplete?</h2>
            <p>Imagine trying to explain how a new building is made. You might say it is built from blocks. That is a useful starting point, but it does not tell you what is inside each block or how the blocks can be changed.</p>
            <p>John Dalton used a similar particle idea to explain chemical observations. His atomic theory became an important foundation for chemistry. Later experiments showed that some parts of his model needed to be updated.</p>
            <div className="lesson-insight lesson-insight--mint"><span><Lightbulb size={19} /></span><div><strong>The big idea</strong><p>Scientific theories are explanations supported by evidence. When new evidence appears, scientists test, refine or replace parts of their explanations.</p></div></div>
            <div className="dalton-objectives"><strong>By the end of this lesson, you should be able to:</strong><ul><li>State the five classroom postulates of Dalton’s atomic theory.</li><li>Explain how the theory helps account for chemical combination and conservation of mass.</li><li>Identify important limitations and describe the discoveries that refined the model.</li><li>Distinguish ordinary chemical reactions from nuclear reactions.</li></ul></div>
          </section>

          <section id="john-dalton" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">01</span><div><span className="lesson-kicker">THE SCIENTIST AND HIS MODEL</span><h2>Who was John Dalton?</h2></div></div>
            <p><strong>John Dalton</strong> was an English chemist and teacher who developed an influential scientific explanation of matter in the early nineteenth century. He used observations about how substances combine to suggest that matter is made of tiny particles called <strong>atoms</strong>.</p>
            <p>Earlier thinkers, including the ancient Greek philosophers Leucippus and Democritus, had proposed that matter might be made of tiny indivisible particles. Dalton’s contribution was to turn the idea into a scientific theory that could help explain measured chemical behaviour.</p>
            <h3>Dalton’s solid-sphere model</h3>
            <p>Dalton pictured atoms as tiny, solid, indivisible spheres. In this simple model, atoms of different elements were represented as different kinds of spheres. Compounds formed when atoms of different elements joined in simple whole-number ratios.</p>
            <DaltonModelDiagram />
            <div className="lesson-note"><span className="lesson-note__icon">i</span><p><strong>Remember:</strong> The solid-sphere picture is a historical model. It is not an accurate picture of the internal structure of an atom as scientists understand it today.</p></div>
          </section>

          <section id="five-postulates" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">02</span><div><span className="lesson-kicker">THE MAIN IDEAS</span><h2>Five postulates of Dalton’s atomic theory</h2></div></div>
            <p>A <strong>postulate</strong> is a statement proposed as part of a theory. School texts sometimes group or number Dalton’s ideas differently. The five statements below combine the main ideas in a learner-friendly way.</p>
            <div className="dalton-postulate-list">
              <PostulateCard number="01" title="Matter is made of atoms." detail="All matter consists of extremely small particles called atoms. Dalton treated these particles as indivisible." example="Example: A piece of copper contains an enormous number of copper atoms." />
              <PostulateCard number="02" title="Atoms of one element are alike." detail="Dalton proposed that atoms of the same element have the same mass and chemical properties, while atoms of different elements differ." example="Example: In Dalton’s model, every copper atom was alike in mass and properties." />
              <PostulateCard number="03" title="Atoms are conserved in chemical reactions." detail="Atoms are not created or destroyed during an ordinary chemical change; they are rearranged." example="Example: Atoms present in the reactants must also be present in the products." />
              <PostulateCard number="04" title="Compounds form in simple whole-number ratios." detail="Atoms of different elements combine in fixed, simple ratios to form a particular compound." example="Example: Water has two hydrogen atoms for every one oxygen atom (H₂O)." />
              <PostulateCard number="05" title="Chemical reactions rearrange atoms." detail="A reaction separates, combines or rearranges atoms to produce new substances. It does not change one element’s atoms into another element’s atoms." example="Example: Hydrogen and oxygen atoms rearrange to form water." />
            </div>
            <div className="lesson-insight lesson-insight--blue"><span><Sparkles size={19} /></span><div><strong>Why statements 3 and 5 are related</strong><p>They describe two sides of the same idea: atoms are conserved in an ordinary chemical reaction, and the way they are connected changes. This is why chemical equations are balanced.</p></div></div>
          </section>

          <section id="why-it-mattered" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">03</span><div><span className="lesson-kicker">CONNECTING THEORY TO EVIDENCE</span><h2>Why was Dalton’s theory important?</h2></div></div>
            <p>Dalton’s theory helped explain why chemical substances combine in consistent ways. It linked what chemists could measure in the laboratory to a model of particles that could not be seen with the unaided eye.</p>
            <div className="dalton-law-grid">
              <article><span className="dalton-law-grid__tag">CONSERVATION OF MASS</span><h3>Atoms are rearranged, not lost.</h3><p>If no atoms are lost or gained in an ordinary chemical reaction, the total mass of the reactants equals the total mass of the products in a closed system.</p></article>
              <article><span className="dalton-law-grid__tag">DEFINITE PROPORTIONS</span><h3>A compound has a fixed composition.</h3><p>A pure sample of a particular compound contains its elements in a constant proportion by mass. Water always has the same composition, whether it is from a river or made in a laboratory.</p></article>
              <article><span className="dalton-law-grid__tag">MULTIPLE PROPORTIONS</span><h3>Elements can form more than one compound.</h3><p>The same two elements can combine in different simple whole-number ratios. Carbon and oxygen form carbon monoxide (CO) and carbon dioxide (CO₂).</p></article>
            </div>
            <div className="dalton-reaction-example">
              <span className="lesson-kicker">A SIMPLE CHEMICAL CHANGE</span>
              <div className="dalton-reaction-example__equation"><span>2H₂ + O₂</span><ArrowRight size={22} /><strong>2H₂O</strong></div>
              <div className="dalton-reaction-example__counts"><span><strong>Before:</strong> 4 hydrogen atoms + 2 oxygen atoms</span><span><strong>After:</strong> 4 hydrogen atoms + 2 oxygen atoms</span></div>
              <p>The atoms are rearranged into water molecules. The number of each type of atom is the same on both sides of the balanced equation.</p>
            </div>
          </section>

          <section id="limitations" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">04</span><div><span className="lesson-kicker">WHERE THE MODEL WAS INCOMPLETE</span><h2>Limitations of Dalton’s theory</h2></div></div>
            <p>Dalton’s theory was a major step forward, but later experiments revealed facts that the original model could not explain.</p>
            <div className="dalton-limitation-list">
              <div><span className="dalton-limitation-list__number">1</span><div><strong>Atoms are divisible.</strong><p>Atoms contain smaller particles, including protons, neutrons and electrons. They are not indivisible solid spheres.</p></div></div>
              <div><span className="dalton-limitation-list__number">2</span><div><strong>Atoms of the same element can have different masses.</strong><p>Isotopes of an element have the same number of protons but different numbers of neutrons, so their mass numbers differ.</p></div></div>
              <div><span className="dalton-limitation-list__number">3</span><div><strong>Nuclear changes can alter an element’s identity.</strong><p>The claim that atoms are not changed applies to chemical reactions. A nuclear reaction changes the nucleus and can transform one element into another.</p></div></div>
            </div>
            <div className="lesson-important-card"><div className="lesson-important-card__icon"><Microscope size={21} /></div><div><span className="lesson-kicker">A USEFUL DISTINCTION</span><h3>Wrong in one detail does not mean useless overall.</h3><p>Dalton’s indivisible-sphere picture was incomplete, but his central insight—that matter has an atomic structure and chemical reactions rearrange atoms—remains a foundation of chemistry.</p></div></div>
          </section>

          <section id="modern-updates" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">05</span><div><span className="lesson-kicker">HOW SCIENCE REFINED THE ATOM</span><h2>Modern modifications and discoveries</h2></div></div>
            <p>Scientists did not discover the complete structure of the atom all at once. Different experiments added new evidence and improved the model.</p>
            <div className="dalton-timeline">
              <article><span className="dalton-timeline__year">1897</span><div><strong>J. J. Thomson — the electron</strong><p>Cathode-ray experiments provided evidence for tiny negatively charged particles inside atoms. Atoms therefore have internal structure.</p></div></article>
              <article><span className="dalton-timeline__year">1911</span><div><strong>Ernest Rutherford — the nucleus</strong><p>Results from the gold-foil experiment showed that an atom has a very small, dense, positively charged nucleus and is mostly empty space.</p></div></article>
              <article><span className="dalton-timeline__year">1913</span><div><strong>Niels Bohr — energy levels</strong><p>Bohr proposed that electrons in the hydrogen atom occupy particular allowed energy levels. This refined the nuclear model.</p></div></article>
              <article><span className="dalton-timeline__year">1932</span><div><strong>James Chadwick — the neutron</strong><p>Chadwick found evidence for the neutron, an uncharged particle in the nucleus. Neutrons help explain why isotopes of an element can have different masses.</p></div></article>
            </div>
            <div className="dalton-isotope-example"><div><span className="lesson-kicker">ISOTOPES: SAME ELEMENT, DIFFERENT MASS</span><h3>Carbon-12 and carbon-14</h3><p>Both are carbon atoms because each has 6 protons. Carbon-12 has 6 neutrons, while carbon-14 has 8 neutrons. They are isotopes of carbon.</p></div><div className="dalton-isotope-example__visual"><div><strong>¹²C</strong><span>6 protons<br />6 neutrons</span></div><div><strong>¹⁴C</strong><span>6 protons<br />8 neutrons</span></div></div></div>
            <div className="lesson-note"><span className="lesson-note__icon">i</span><p><strong>Keep the terms clear:</strong> Atomic number is the number of protons. Mass number is the total number of protons and neutrons. Isotopes have the same atomic number but different mass numbers.</p></div>
          </section>

          <section id="chemical-vs-nuclear" className="lesson-section">
            <div className="lesson-section__heading"><span className="lesson-section__number">06</span><div><span className="lesson-kicker">DO NOT MIX THESE UP</span><h2>Chemical changes and nuclear changes</h2></div></div>
            <p>Dalton’s conservation statement describes <strong>ordinary chemical reactions</strong>. It should not be used to claim that a nucleus can never change.</p>
            <div className="dalton-compare-table-wrap">
              <table className="lesson-table dalton-compare-table">
                <thead><tr><th>Feature</th><th>Chemical reaction</th><th>Nuclear reaction</th></tr></thead>
                <tbody>
                  <tr><td>Main part involved</td><td>Electrons and chemical bonds</td><td>The nucleus</td></tr>
                  <tr><td>What changes?</td><td>Atoms are rearranged into new combinations</td><td>The nucleus changes; one element may become another</td></tr>
                  <tr><td>Element identity</td><td>Remains the same</td><td>Can change</td></tr>
                  <tr><td>Energy change</td><td>Usually much smaller</td><td>Can be much larger</td></tr>
                </tbody>
              </table>
            </div>
            <div className="lesson-insight lesson-insight--yellow"><span><Lightbulb size={19} /></span><div><strong>Quick memory aid</strong><p>Chemical change: rearrange the electrons and bonds. Nuclear change: change the nucleus.</p></div></div>
          </section>

          <section id="lesson-recap" className="lesson-section lesson-section--recap">
            <div className="lesson-section__heading"><span className="lesson-section__number">07</span><div><span className="lesson-kicker">BEFORE YOU MOVE ON</span><h2>What should you remember?</h2></div></div>
            <div className="lesson-recap-list">
              {[
                'Dalton developed an influential atomic theory in the early nineteenth century.',
                'His model described matter as tiny atoms and treated atoms as indivisible.',
                'He proposed that atoms of one element were alike and that compounds form in simple whole-number ratios.',
                'In ordinary chemical reactions, atoms are conserved and rearranged.',
                'The discovery of electrons and the nucleus showed that atoms have internal structure.',
                'Isotopes have the same number of protons but different numbers of neutrons.',
                'Nuclear reactions change nuclei; chemical reactions rearrange electrons and bonds.',
              ].map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}
            </div>
            <div className="lesson-next-card">
              <div><span className="lesson-kicker">YOU’VE REACHED THE END OF THE LESSON</span><h3>Ready to check what you’ve learned?</h3><p>Try twelve application and reasoning questions on Dalton’s postulates, atomic evidence and chemical versus nuclear change.</p></div>
              <div className="lesson-next-card__actions"><span className="lesson-coming-label"><Sparkles size={14} /> 12 questions · no timer</span><Link to="/lessons/daltons-atomic-theory/quiz" className="button button--outline button--small">Start the quiz <ArrowRight size={15} /></Link></div>
            </div>
            <div className="u1-next-lesson"><span>UP NEXT IN UNIT 04</span><Link to="/lessons/physical-and-chemical-changes">Physical and chemical changes <ArrowRight size={15} /></Link></div>
          </section>

          <section className="lesson-references" aria-labelledby="dalton-references-title">
            <div><span className="lesson-kicker">CONTENT REFERENCES</span><h2 id="dalton-references-title">Explore the science further</h2><p>This lesson uses Rina’s handwritten notes as a starting point and adds verified historical and scientific context. The explanations and diagrams here are original Si Tutor material.</p></div>
            <ul>
              <li><a href="https://openstax.org/books/chemistry-2e/pages/2-1-early-ideas-in-atomic-theory" target="_blank" rel="noreferrer">OpenStax — Early Ideas in Atomic Theory <ArrowRight size={13} /></a></li>
              <li><a href="https://openstax.org/books/chemistry-atoms-first-2e/pages/2-2-evolution-of-atomic-theory" target="_blank" rel="noreferrer">OpenStax — Evolution of Atomic Theory <ArrowRight size={13} /></a></li>
              <li><a href="https://edu.rsc.org/download?ac=532831" target="_blank" rel="noreferrer">Royal Society of Chemistry — Atomic Structure <ArrowRight size={13} /></a></li>
              <li><a href="https://goldbook.iupac.org/terms/view/I03331" target="_blank" rel="noreferrer">IUPAC Gold Book — Isotopes <ArrowRight size={13} /></a></li>
              <li><a href="https://www.nbi.ku.dk/english/www/niels/bohr/bohratomet/" target="_blank" rel="noreferrer">Niels Bohr Institute — Bohr’s Atomic Model <ArrowRight size={13} /></a></li>
            </ul>
          </section>
          <div className="lesson-bottom-nav"><Link to="/explore" className="text-link"><ArrowLeft size={15} /> All Chemistry topics</Link><span>SS1 Chemistry · Lesson 02</span></div>
        </article>

        <aside className="lesson-right-rail" aria-label="Lesson information">
          <div className="lesson-right-card"><span className="lesson-right-card__icon"><Target size={18} /></span><strong>Your goal</strong><p>Know what Dalton proposed, what his theory explained and how later discoveries refined it.</p></div>
          <div className="lesson-right-card lesson-right-card--tip"><span className="lesson-right-card__icon"><Lightbulb size={18} /></span><strong>Study tip</strong><p>When revising, place each postulate beside the evidence that supports or modifies it.</p></div>
          <div className="lesson-right-card lesson-right-card--support"><span className="lesson-right-card__icon"><Microscope size={18} /></span><strong>Think like a scientist</strong><p>A good model is useful, testable and open to improvement when better evidence appears.</p><Link to="/contact">Send feedback <ArrowRight size={13} /></Link></div>
        </aside>
      </div>
    </main>
  );
}
