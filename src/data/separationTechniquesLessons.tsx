import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type SeparationTechniquesLesson = {
  id: string;
  lessonNumber: string;
  title: string;
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
  sources: { label: string; url: string }[];
  nextLesson?: { title: string; path: string };
  quiz: { description: string; sidebarTip: string; artLabel: string; artCaption: string };
};

type Tone = 'mint' | 'yellow' | 'blue' | 'lavender' | 'peach';

function ConceptCards({ items }: { items: { title: string; detail: string; example: string; tone?: Tone }[] }) {
  return <div className="u3-concept-grid">{items.map((item) => <article className={`u3-concept-card u3-concept-card--${item.tone ?? 'mint'}`} key={item.title}><h3>{item.title}</h3><p>{item.detail}</p><small>{item.example}</small></article>)}</div>;
}

function Steps({ items }: { items: { title: string; detail: string }[] }) {
  return <div className="u3-steps">{items.map((item, index) => <article key={item.title}><b>{String(index + 1).padStart(2, '0')}</b><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>;
}

function Note({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'caution' }) {
  return <div className={`u3-note ${tone === 'caution' ? 'u3-note--caution' : ''}`}>{children}</div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="u3-table-wrap"><table className="u3-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function DistillationDiagram({ fractional = false }: { fractional?: boolean }) {
  const imageSrc = fractional
    ? '/images/fractional-distillation-apparatus.webp'
    : '/images/simple-distillation-apparatus.webp';
  const imageAlt = fractional
    ? 'Fractional distillation apparatus with a heated flask, packed fractionating column, thermometer, water-cooled condenser and receiving flask.'
    : 'Simple distillation apparatus with a heated flask, thermometer, water-cooled condenser and receiving flask, without a fractionating column.';

  return <figure className="u3-diagram-card u3-distillation-figure">
    <div className="u3-distillation-figure__image-wrap">
      <img className="u3-distillation-figure__image" src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
    </div>
    <figcaption>{fractional
      ? 'Fractional distillation: the packed fractionating column sits between the heated flask and the condenser.'
      : 'Simple distillation: vapour travels from the heated flask into the condenser. No fractionating column is used.'}</figcaption>
    <div className="u3-distillation-key" aria-label="Main parts of the distillation apparatus">
      {fractional && <div><strong>Fractionating column</strong><span>Provides surfaces for repeated condensation and vapourisation, improving separation.</span></div>}
      <div><strong>Thermometer</strong><span>Measures the temperature of the vapour entering the condenser.</span></div>
      <div><strong>Condenser</strong><span>Cooling water removes heat so vapour changes back into liquid.</span></div>
      <div><strong>Cooling-water flow</strong><span>Water enters through the lower side-arm near the receiving flask and leaves through the upper side-arm near the heated flask.</span></div>
      <div><strong>Receiving flask</strong><span>Collects the condensed liquid, called the distillate.</span></div>
    </div>
  </figure>;
}

function ChromatographyDiagram() {
  return <div className="u3-diagram-card">
    <svg viewBox="0 0 620 300" role="img" aria-label="Paper chromatography strip showing a pencil origin line, separated spots and solvent front">
      <rect x="245" y="25" width="130" height="235" rx="4" fill="#fff" stroke="#9aabb6" strokeWidth="2" />
      <rect x="246" y="205" width="128" height="54" fill="#e2f1f4" opacity=".9" />
      <path d="M245 205 H375" stroke="#168b9b" strokeDasharray="5 4" strokeWidth="2" />
      <path d="M245 75 H375" stroke="#168b9b" strokeDasharray="5 4" strokeWidth="2" />
      <circle cx="310" cy="165" r="7" fill="#293f80" />
      <circle cx="310" cy="118" r="7" fill="#bd6a3b" />
      <circle cx="310" cy="92" r="7" fill="#309b77" />
      <path d="M385 75 H430" stroke="#168b9b" strokeWidth="2"/><text x="438" y="80" fontSize="13" fill="#176d79">Solvent front</text>
      <path d="M385 165 H430" stroke="#557286" strokeWidth="2"/><text x="438" y="170" fontSize="13" fill="#334e68">Pencil origin line</text>
      <path d="M385 205 H430" stroke="#168b9b" strokeWidth="2"/><text x="438" y="210" fontSize="13" fill="#176d79">Solvent level</text>
      <path d="M310 118 H205 V111" stroke="#557286" strokeWidth="2" fill="none"/><text x="85" y="105" fontSize="13" fill="#334e68">Separated component</text>
      <path d="M310 165 H205 V190" stroke="#557286" strokeWidth="2" fill="none"/><text x="80" y="205" fontSize="13" fill="#334e68">Original sample spot</text>
      <path d="M245 258 H375" stroke="#426a7a" strokeWidth="3"/><text x="275" y="283" fontSize="13" fill="#334e68">Solvent in container</text>
    </svg>
    <p>Diagram is schematic and not drawn to scale. In a real experiment, the solvent level begins below the sample spot.</p>
  </div>;
}

const pathForQuiz = (id: string) => `/lessons/${id}/quiz`;
const pathForLesson = (id: string) => `/lessons/${id}`;
const sources = {
  inspire: { label: 'Federal Ministry of Education — SS1 Standard Separation Techniques', url: 'https://inspire.education.gov.ng/lessons/10525/preview' },
  scheme: { label: 'Nigeria SS1 Chemistry Scheme of Work — separation techniques', url: 'https://nciuyo.com/wp-content/uploads/2025/01/SSS-1-Scheme-of-Work.pdf' },
  syllabus: { label: 'SS1 Chemistry Scheme of Work — syllabus.ng', url: 'https://syllabus.ng/ss1-scheme-of-work/chemistry/' },
  rsc: { label: 'Royal Society of Chemistry — Separation techniques', url: 'https://edu.rsc.org/cpd/separation-techniques/3009787.article' },
  filtration: { label: 'Royal Society of Chemistry — Filtration and crystallisation', url: 'https://edu.rsc.org/cpd/evaporation-filtration-and-crystallisation-teaching-practical-science/3009017.article' },
  froth: { label: 'Michigan Technological University — Froth flotation principles', url: 'https://www.chem.mtu.edu/chem_eng/faculty/kawatra/Flotation_Fundamentals.pdf' },
  chromatography: { label: 'Royal Society of Chemistry — Paper chromatography', url: 'https://edu.rsc.org/practical/paper-chromatography-practical-videos-14-16-years/4018537.article' },
  chromatographyR: { label: 'Royal Society of Chemistry — Rf values and chromatography', url: 'https://edu.rsc.org/download?ac=114810' },
  purity: { label: 'IUPAC Gold Book — Chemical purity', url: 'https://goldbook.iupac.org/terms/view/08014' },
  azeotrope: { label: 'Chemistry LibreTexts — Ethanol-water azeotrope', url: 'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_%28Physical_and_Theoretical_Chemistry%29/Equilibria/Physical_Equilibria/Fractional_Distillation_of_Non-ideal_Mixtures_%28Azeotropes%29' },
  precipitation: { label: 'Chemistry LibreTexts — Precipitation and dissolution', url: 'https://chem.libretexts.org/Courses/Shasta_College/General_Chemistry_1A_and1B_%28Shasta_College%29/16%3A_Equilibria_of_Other_Reaction_Classes/16.02%3A_Precipitation_and_Dissolution' },
};

export const separationTechniquesLessons: SeparationTechniquesLesson[] = [
  {
    id: 'classifying-substances', lessonNumber: '01', title: 'Classifying substances and mixtures', titleLead: 'First, understand', titleAccent: 'what is mixed',
    summary: 'Learn how chemists classify matter, distinguish pure substances from mixtures, and choose a separation method based on physical properties.', duration: '18–22 min',
    learningObjectives: ['Classify matter as an element, a compound or a mixture.', 'Distinguish pure substances from mixtures using composition and properties.', 'Explain the difference between homogeneous and heterogeneous mixtures.', 'Identify physical properties that can be used to separate mixture components.'],
    sections: [
      { id: 'matter-classification', label: 'How matter is classified', kicker: 'START WITH MATTER', title: 'Chemists begin by identifying the kind of material', content: <>
        <p><strong>Matter</strong> is anything that has mass and occupies space. The materials around us can be grouped by the substances they contain and the way those substances are combined.</p>
        <div className="u3-classification-tree"><div className="u3-tree-root">MATTER</div><div className="u3-tree-branches"><article><h3>Pure substances</h3><p>One chemical substance with a fixed composition.</p><div><b>Elements</b><span>One type of atom, e.g. copper or oxygen.</span></div><div><b>Compounds</b><span>Two or more elements chemically combined in a fixed ratio, e.g. water.</span></div></article><article><h3>Mixtures</h3><p>Two or more substances physically combined, not chemically bonded to one another as a single compound.</p><div><b>Homogeneous</b><span>Uniform composition throughout, e.g. salt solution.</span></div><div><b>Heterogeneous</b><span>Different parts or phases can be distinguished, e.g. sand in water.</span></div></article></div></div>
        <p>The word <strong>pure</strong> has a specific meaning in Chemistry. A pure sample contains only one chemical substance. It does not simply mean clean, healthy or safe to consume.</p>
      </> },
      { id: 'elements-compounds-mixtures', label: 'Elements, compounds and mixtures', kicker: 'COMPARE THE THREE', title: 'The key difference is how the particles are combined', content: <>
        <DataTable headers={['Type','What it contains','How it is combined','Example']} rows={[
          ['Element','One type of atom','Atoms of the same element; cannot be broken into simpler substances by ordinary chemical methods.','Copper (Cu), oxygen (O₂)'],
          ['Compound','Two or more elements','Elements are chemically bonded in a fixed ratio.','Water (H₂O), sodium chloride (NaCl)'],
          ['Mixture','Two or more substances','Substances are physically combined in variable proportions.','Air, soil, salt solution'],
        ]} />
        <div className="u3-breakdown"><h3>How to read the formulas in the table</h3><ul><li><strong>Cu:</strong> this is the symbol for copper. No small number is written, so one copper atom is understood.</li><li><strong>O₂:</strong> the small ₂ means that each oxygen molecule contains two oxygen atoms. It is still an element because both atoms are oxygen.</li><li><strong>H₂O:</strong> each water molecule contains two hydrogen atoms and one oxygen atom. The small ₂ applies only to hydrogen; oxygen has no small number, so its count is one.</li><li><strong>NaCl:</strong> sodium chloride contains sodium and chloride in a 1:1 ratio. In solid sodium chloride, these ions form a large repeating ionic lattice; NaCl is a formula unit, not a separate small molecule.</li></ul></div>
        <p>In a mixture, each component generally retains its own chemical identity. For example, a mixture of iron filings and sand still contains iron and sand. A magnet can remove the iron without changing sand into a new substance.</p>
        <Note>Do not confuse a mixture with a compound. Water is a compound; a glass of water containing dissolved salt is a mixture.</Note>
      </> },
      { id: 'homogeneous-heterogeneous', label: 'Types of mixtures', kicker: 'LOOK AT THE COMPOSITION', title: 'Mixtures can be uniform or non-uniform', content: <>
        <ConceptCards items={[
          { title: 'Homogeneous mixture', detail: 'The composition is uniform throughout the sample. The different components are not visibly separated into layers.', example: 'Examples: salt solution, air and a well-mixed brass alloy.', tone: 'blue' },
          { title: 'Heterogeneous mixture', detail: 'The composition is not uniform throughout. Different components or phases may be visible.', example: 'Examples: sand and water, oil and water, soil.', tone: 'yellow' },
        ]} />
        <p>A <strong>phase</strong> is a physically distinct part of a material with uniform properties. Oil and water form two liquid phases because they do not mix into one uniform liquid.</p>
        <p>Some mixtures look uniform but still contain more than one substance. Clear salt solution is a mixture even though the dissolved salt cannot be seen.</p>
      </> },
      { id: 'why-separate', label: 'Why mixtures are separated', kicker: 'THE PURPOSE OF SEPARATION', title: 'Separation helps us recover, purify or analyse substances', content: <>
        <ConceptCards items={[
          { title: 'Recover a useful component', detail: 'Separate a material that is needed from the rest of the mixture.', example: 'Recover salt from seawater.', tone: 'mint' },
          { title: 'Remove unwanted material', detail: 'Take out suspended or dissolved impurities where a suitable method exists.', example: 'Remove sand from water by settling and filtration.', tone: 'blue' },
          { title: 'Obtain a purer substance', detail: 'Use one or more processes to improve the purity of a sample.', example: 'Purify a solid by crystallisation.', tone: 'lavender' },
          { title: 'Identify components', detail: 'Separate parts of a sample so they can be examined individually.', example: 'Separate dyes in ink by chromatography.', tone: 'yellow' },
        ]} />
        <p>Separation usually uses differences in <strong>physical properties</strong>. A physical property can be observed or measured without changing the chemical identity of the substance.</p>
      </> },
      { id: 'properties-guide', label: 'Properties used to separate', kicker: 'CHOOSE THE PRINCIPLE', title: 'Match the method to the property that is different', content: <>
        <DataTable headers={['Property','What it means','Technique that uses it']} rows={[
          ['Particle size','Particles have different sizes.','Sieving or filtration'],
          ['Magnetic behaviour','One component is attracted to a magnet.','Magnetic separation'],
          ['Density / ability to float','Components settle or float differently in a suitable liquid.','Decantation or flotation'],
          ['Solubility','Substances dissolve to different extents in a solvent.','Crystallisation or chromatography'],
          ['Boiling point / volatility','Liquids vaporise at different temperatures or rates.','Distillation'],
          ['Ability to sublime','One solid changes directly to vapour under suitable conditions.','Sublimation'],
        ]} />
        <Note>There is no single separation method that works for every mixture. The correct choice depends on which physical properties differ and which component you want to collect.</Note>
      </> },
    ],
    recap: ['Matter can be classified as pure substances or mixtures.', 'Pure substances include elements and compounds; a mixture contains substances physically combined in variable proportions.', 'Homogeneous mixtures are uniform; heterogeneous mixtures are non-uniform.', 'Separation methods use differences in physical properties such as size, magnetism, density, solubility and boiling point.'],
    quizPath: pathForQuiz('classifying-substances'), quizDescription: 'Ten questions on the classification of matter, pure substances, mixtures and the properties used in separation.', sidebarTip: 'Before choosing a method, identify the substances in the mixture and ask which physical property makes them different.', sources: [sources.inspire, sources.syllabus, sources.rsc, sources.purity],
    nextLesson: { title: 'Filtration, decantation and evaporation', path: pathForLesson('filtration-decantation-evaporation') },
    quiz: { description: 'Check your understanding of elements, compounds, mixtures and separation principles.', sidebarTip: 'A mixture contains more than one substance. Focus on how its components are combined and which property differs.', artLabel: 'PURE / MIXTURE', artCaption: 'classification' },
  },
  {
    id: 'filtration-decantation-evaporation', lessonNumber: '02', title: 'Filtration, decantation and evaporation', titleLead: 'Three useful methods,', titleAccent: 'three different jobs',
    summary: 'Learn how to separate an insoluble solid from a liquid, pour off a settled liquid, and recover a dissolved solid by removing its solvent.', duration: '20–24 min',
    learningObjectives: ['Explain the principles behind filtration, sedimentation, decantation and evaporation.', 'Identify the apparatus used for each method.', 'Use the terms residue, filtrate and supernatant correctly.', 'Choose a suitable sequence of methods for a mixture of sand, salt and water.'],
    sections: [
      { id: 'choose-the-method', label: 'Choose the method', kicker: 'START WITH THE MIXTURE', title: 'Ask whether the solid is dissolved or not', content: <>
        <DataTable headers={['Mixture','What is present?','Suitable method','What is collected?']} rows={[
          ['Sand + water','Sand is insoluble and remains as solid particles.','Filtration','Sand as residue; water as filtrate.'],
          ['Settled mud + water','Dense solid particles have settled to the bottom.','Decantation (after settling)','The clearer liquid poured off.'],
          ['Salt + water','Salt is dissolved; particles are too small to be trapped by ordinary filter paper.','Evaporation','Salt remains after water is removed.'],
          ['Oil + water','Two liquids do not mix and form layers.','Separating funnel / careful decantation','The liquid layers collected separately.'],
        ]} />
        <Note>Filtration does not remove dissolved salt from water. A solution passes through ordinary filter paper because the dissolved particles are much smaller than the pores.</Note>
      </> },
      { id: 'filtration', label: 'Filtration', kicker: 'SEPARATE AN INSOLUBLE SOLID', title: 'Filtration traps solid particles on a filter', content: <>
        <p><strong>Filtration</strong> separates an insoluble solid from a liquid by passing the mixture through a porous material, usually filter paper in a funnel.</p>
        <div className="u3-apparatus"><div><b>Mixture</b><span>Sand and water are poured into the filter.</span></div><div><b>Filter paper</b><span>Liquid passes through tiny pores; sand particles are retained.</span></div><div><b>Two products</b><span>Residue stays on the paper; filtrate collects below.</span></div></div>
        <DataTable headers={['Term','Meaning']} rows={[
          ['Residue','The insoluble solid left on the filter paper.'],
          ['Filtrate','The liquid that passes through the filter paper.'],
          ['Filter paper','A porous material that allows liquid through but retains suitable solid particles.'],
        ]} />
        <Steps items={[{ title: 'Fold and place the filter paper', detail: 'Fit the paper inside a funnel and moisten it slightly so it sits against the funnel.' }, { title: 'Pour the mixture carefully', detail: 'Pour along a glass rod or down the side of the funnel to reduce splashing.' }, { title: 'Collect the products', detail: 'The liquid passes into the container while the insoluble solid remains on the paper.' }]} />
      </> },
      { id: 'sedimentation-decantation', label: 'Sedimentation and decantation', kicker: 'LET THE SOLID SETTLE', title: 'Decantation separates by carefully pouring off a layer', content: <>
        <p><strong>Sedimentation</strong> is the settling of suspended particles under gravity. It may take time for heavy or large particles to settle at the bottom of a container.</p>
        <p><strong>Decantation</strong> is the careful pouring of the liquid layer away from the settled solid without disturbing the solid at the bottom.</p>
        <Steps items={[{ title: 'Allow the mixture to stand', detail: 'For a suitable sand-and-water mixture, denser sand particles settle to the bottom.' }, { title: 'Keep the container steady', detail: 'Avoid shaking or stirring the container after the solid has settled.' }, { title: 'Pour off the liquid slowly', detail: 'Transfer the upper liquid to another container. Some liquid may remain with the sediment.' }]} />
        <p>For two <strong>immiscible liquids</strong> (liquids that do not mix), such as oil and water, a separating funnel can be used. The denser lower layer is drained first through the tap, then the upper layer is collected separately.</p>
        <Note>Decantation is simple, but it may not remove every fine particle. Filtration can be used afterwards when a clearer liquid is needed.</Note>
      </> },
      { id: 'evaporation', label: 'Evaporation', kicker: 'REMOVE THE SOLVENT', title: 'Evaporation leaves a dissolved, non-volatile solid behind', content: <>
        <p><strong>Evaporation</strong> changes a liquid solvent into vapour. It can be used to recover a dissolved solid from a solution when the solid does not evaporate readily under the conditions used.</p>
        <Steps items={[{ title: 'Place the solution in an evaporating dish', detail: 'Use suitable heat-resistant apparatus under teacher supervision.' }, { title: 'Heat gently or allow evaporation', detail: 'The solvent leaves the solution as vapour. The concentration of the dissolved solid increases.' }, { title: 'Collect the remaining solid', detail: 'If the goal is to recover the solid completely, evaporation may continue until the solvent is removed.' }]} />
        <p>For example, when salt solution is evaporated, water leaves as vapour and salt remains in the dish.</p>
        <Note tone="caution">Heating must be controlled. Strong heating can cause splashing, decomposition or loss of material. Do not heat unknown mixtures or carry out experiments without a teacher and suitable laboratory safety equipment.</Note>
      </> },
      { id: 'combine-methods', label: 'Combining methods', kicker: 'WORKED SEPARATION PLAN', title: 'How can sand, salt and water be separated?', content: <>
        <p>This mixture contains insoluble sand and soluble salt dissolved in water. One method cannot recover all three components well, so use two stages.</p>
        <Steps items={[{ title: 'Filter the mixture', detail: 'Sand remains as residue on the filter paper. Salt solution passes through as filtrate.' }, { title: 'Evaporate the filtrate', detail: 'Heat the salt solution carefully to remove water, leaving salt behind.' }, { title: 'Collect each component', detail: 'Dry the sand residue and collect the salt left after evaporation.' }]} />
        <p>If the aim is to obtain cleaner salt crystals rather than a dry solid, crystallisation is usually preferred to heating strongly to complete dryness. You will meet this in the next lesson.</p>
      </> },
    ],
    recap: ['Filtration separates an insoluble solid from a liquid; residue stays on the paper and filtrate passes through.', 'Sedimentation allows suspended solids to settle; decantation pours off the clearer upper liquid.', 'A separating funnel is useful for two immiscible liquids.', 'Evaporation removes a solvent and leaves a dissolved, non-volatile solid behind.', 'A mixture may need more than one separation method.'],
    quizPath: pathForQuiz('filtration-decantation-evaporation'), quizDescription: 'Ten questions on filtration, residue, filtrate, sedimentation, decantation and evaporation.', sidebarTip: 'Ask first: is the solid dissolved? If it is dissolved, ordinary filtration will not remove it.', sources: [sources.inspire, sources.rsc, sources.filtration],
    nextLesson: { title: 'Magnetic separation and flotation', path: pathForLesson('magnetic-separation-and-flotation') },
    quiz: { description: 'Check when filtration, decantation and evaporation are suitable and how each is performed.', sidebarTip: 'Remember the difference between residue and filtrate, and do not use filtration to separate a dissolved substance.', artLabel: 'FILTER / POUR / HEAT', artCaption: 'separation methods' },
  },
  {
    id: 'magnetic-separation-and-flotation', lessonNumber: '03', title: 'Magnetic separation and flotation', titleLead: 'Separate by', titleAccent: 'magnetism and movement',
    summary: 'Explore methods that use magnetic attraction, particle size, density and the behaviour of mineral surfaces in froth flotation.', duration: '18–22 min',
    learningObjectives: ['Explain how magnetic separation works.', 'Describe sieving as a size-based separation method.', 'Distinguish ordinary flotation from froth flotation.', 'Give suitable examples and identify the property used in each method.'],
    sections: [
      { id: 'choose-the-property', label: 'Which property differs?', kicker: 'COMPARE THE COMPONENTS', title: 'These methods use different physical behaviours', content: <>
        <ConceptCards items={[
          { title: 'Particle size', detail: 'Larger particles remain on a sieve while smaller particles pass through its openings.', example: 'Separating stones from grains or coarse sand from finer particles.', tone: 'blue' },
          { title: 'Magnetic behaviour', detail: 'A magnetic component is attracted to a magnet while a non-magnetic component is not.', example: 'Removing iron filings from a mixture containing sand.', tone: 'lavender' },
          { title: 'Density in a liquid', detail: 'A less dense component may float while a denser component sinks, provided the liquid and materials are suitable.', example: 'Separating small pieces of cork from sand using water.', tone: 'mint' },
          { title: 'Surface wetting and air bubbles', detail: 'In froth flotation, selected mineral particles attach to air bubbles and rise with the froth.', example: 'Concentrating certain sulphide ores before metal extraction.', tone: 'yellow' },
        ]} />
      </> },
      { id: 'sieving', label: 'Sieving', kicker: 'SEPARATE BY PARTICLE SIZE', title: 'A sieve allows smaller particles through', content: <>
        <p><strong>Sieving</strong> separates solid particles of different sizes using a mesh or sieve with openings of a chosen size.</p>
        <Steps items={[{ title: 'Choose a suitable mesh', detail: 'The openings must be large enough for the smaller particles to pass through but small enough to retain the larger particles.' }, { title: 'Place the mixture on the sieve', detail: 'The mixture may be shaken gently so particles can move towards the openings.' }, { title: 'Collect both fractions', detail: 'Smaller particles pass through; larger particles remain on the mesh.' }]} />
        <p>Examples include removing stones from grains and sorting construction aggregates into size ranges. Sieving does not separate particles of similar size or materials that have become stuck together.</p>
        <Note>Sieving is included as a useful supplementary method in the lesson. The Ministry's SS1 list separately names filtration and other listed separation techniques.</Note>
      </> },
      { id: 'magnetic-separation', label: 'Magnetic separation', kicker: 'USE A MAGNET', title: 'A magnet attracts magnetic materials', content: <>
        <p><strong>Magnetic separation</strong> uses a magnet or magnetic separator to remove a magnetic component from a mixture containing non-magnetic material.</p>
        <Steps items={[{ title: 'Identify the magnetic component', detail: 'Check whether one component is attracted to a magnet. Iron and many iron-containing materials are magnetic; sand is not.' }, { title: 'Bring the magnet close to the mixture', detail: 'The magnetic particles are attracted and can be lifted or collected separately.' }, { title: 'Remove the collected material', detail: 'Release the magnetic material away from the non-magnetic portion and repeat if necessary.' }]} />
        <p>A common small-scale example is separating iron filings from sand. In mineral processing and recycling, larger magnetic separators can remove selected iron or steel objects from other materials.</p>
        <Note>Not every metal is magnetic. Aluminium, copper and gold are not attracted to an ordinary classroom magnet in the same way as iron.</Note>
      </> },
      { id: 'ordinary-flotation', label: 'Flotation', kicker: 'USE DIFFERENCES IN DENSITY', title: 'A suitable liquid can make one solid float and another sink', content: <>
        <p><strong>Flotation</strong> in this introductory method separates two solids when one is less dense than the liquid and floats, while the denser solid sinks. The solids must not dissolve significantly in the chosen liquid.</p>
        <div className="u3-float-vessel"><div className="u3-floating-piece">Cork</div><div className="u3-waterline"/><div className="u3-sinking-particles">Sand particles</div><span>Water</span></div>
        <p>Example: add water to a mixture of small cork pieces and sand. Cork floats at the surface; sand settles to the bottom. The floating cork can be skimmed off and the water can be decanted or filtered to recover the sand.</p>
        <p>The method depends on the density of each component relative to the liquid. A different liquid may be needed for a different mixture.</p>
      </> },
      { id: 'froth-flotation', label: 'Froth flotation', kicker: 'CONCENTRATE CERTAIN ORES', title: 'Froth flotation uses selective attachment to bubbles', content: <>
        <p><strong>Froth flotation</strong> is used to concentrate certain mineral ores, especially sulphide ores, by exploiting differences in how mineral surfaces interact with water, oil-based collectors and air bubbles.</p>
        <Note>Some SS1 curriculum lists use the word <strong>“frostation”</strong> for this method. The standard Chemistry term used throughout this lesson is <strong>froth flotation</strong>.</Note>
        <Steps items={[{ title: 'Prepare the ore mixture', detail: 'The ore is crushed and mixed with water to form a slurry. Industrial processes may add carefully selected reagents.' }, { title: 'Introduce air bubbles', detail: 'Air is passed through the agitated slurry. Selected mineral particles attach to the bubbles.' }, { title: 'Collect the froth', detail: 'The bubble-bound mineral-rich froth rises to the surface and is removed. Much of the unwanted rock material remains in the liquid.' }, { title: 'Recover the concentrated mineral', detail: 'The collected froth is processed further to obtain the mineral concentrate.' }]} />
        <p>Froth flotation is not simply ordinary floating based on density. It depends mainly on selective wetting and the attachment of mineral particles to air bubbles.</p>
        <Note tone="caution">Froth-flotation chemicals and industrial equipment require specialist control. This section is a conceptual explanation, not a student practical instruction.</Note>
      </> },
    ],
    recap: ['Sieving separates solids by particle size.', 'Magnetic separation works when one component is attracted to a magnet and the other is not.', 'Ordinary flotation can use differences in density in a suitable liquid.', 'Froth flotation concentrates selected ores by attaching mineral particles to air bubbles.', 'The standard term for the ore-concentration process is froth flotation.'],
    quizPath: pathForQuiz('magnetic-separation-and-flotation'), quizDescription: 'Ten questions on sieving, magnetic separation, flotation and froth flotation.', sidebarTip: 'Do not treat flotation and froth flotation as identical: one relies on floating and sinking in a liquid; the other uses selective attachment to air bubbles.', sources: [sources.inspire, sources.syllabus, sources.froth],
    nextLesson: { title: 'Crystallisation and fractional crystallisation', path: pathForLesson('crystallization') },
    quiz: { description: 'Check the physical principles behind size, magnetic and flotation methods.', sidebarTip: 'Be clear about which property is being used: size, magnetic behaviour, density or surface wetting.', artLabel: 'MAGNET / FROTH', artCaption: 'selective separation' },
  },
  {
    id: 'crystallization', lessonNumber: '04', title: 'Crystallisation and fractional crystallisation', titleLead: 'Recover dissolved solids', titleAccent: 'as crystals',
    summary: 'Understand how crystals form from solutions and how fractional crystallisation can separate two dissolved solids with different solubilities.', duration: '18–22 min',
    learningObjectives: ['Define solute, solvent, solution, solubility and saturated solution.', 'Describe the stages of crystallisation.', 'Explain why gentle concentration and slow cooling help crystal formation.', 'Describe the principle of fractional crystallisation.'],
    sections: [
      { id: 'solution-solubility', label: 'Solutions and solubility', kicker: 'BUILD THE FOUNDATION', title: 'A solution contains a solute dissolved in a solvent', content: <>
        <DataTable headers={['Term','Meaning','Example']} rows={[
          ['Solute','The substance that dissolves.','Salt in salt solution.'],
          ['Solvent','The liquid that dissolves the solute.','Water in salt solution.'],
          ['Solution','A uniform mixture formed when a solute dissolves in a solvent.','Salt solution.'],
          ['Solubility','The maximum amount of a solute that can dissolve in a given amount of solvent at a stated temperature.','How much salt can dissolve in water at a specified temperature.'],
          ['Saturated solution','A solution containing as much dissolved solute as it can hold at that temperature.','A saturated salt solution at a stated temperature.'],
        ]} />
        <p>For many solid solutes, solubility changes with temperature. This is why a hot solution may hold more dissolved solid than the same amount of cool solvent. The size of the change depends on the substance.</p>
      </> },
      { id: 'crystal-formation', label: 'How crystals form', kicker: 'CONTROL THE CONDITIONS', title: 'Crystallisation recovers a dissolved solid in crystal form', content: <>
        <p><strong>Crystallisation</strong> is a method used to obtain a dissolved solid from a solution as crystals. The solution is first concentrated, then conditions are changed so that dissolved particles come out of the solution and form an organised solid.</p>
        <Steps items={[{ title: 'Prepare a suitable solution', detail: 'Dissolve the required solid in a suitable solvent. If insoluble impurities are present, remove them by filtration.' }, { title: 'Concentrate the solution', detail: 'Warm it gently to evaporate some solvent. Stop when the solution is sufficiently concentrated; do not automatically heat it to dryness.' }, { title: 'Allow it to cool slowly', detail: 'As the solution cools, the solubility of many solids decreases. The solution may become supersaturated and crystals begin to form.' }, { title: 'Collect and dry the crystals', detail: 'Separate the crystals from the remaining liquid, rinse quickly with a small amount of cold suitable solvent if appropriate, and dry them.' }]} />
        <p>For example, copper(II) sulfate crystals can be obtained from a suitable copper(II) sulfate solution by controlled crystallisation. Any laboratory preparation must be carried out under teacher supervision.</p>
        <Note>Slow, controlled cooling often helps larger, better-formed crystals grow. Very rapid cooling may produce many smaller crystals or trap more impurities.</Note>
      </> },
      { id: 'crystallization-vs-evaporation', label: 'Crystallisation or evaporation?', kicker: 'CHOOSE THE RIGHT ENDPOINT', title: 'The method depends on what you want to collect', content: <>
        <div className="u3-comparison"><article><h3>Evaporation to dryness</h3><p>Most or all of the solvent is removed, leaving the dissolved solid behind. It is useful when the solid can tolerate the heating conditions and crystal quality is not the main aim.</p><small>Example: recovering common salt from salt solution.</small></article><article><h3>Crystallisation</h3><p>The solution is concentrated and cooled so crystals form. The remaining liquid can keep some dissolved solute, while crystals may be purer and better formed.</p><small>Example: preparing crystals of a soluble solid.</small></article></div>
        <p>Choose crystallisation when the goal is to obtain a crystalline solid and heating to dryness could damage it or leave more impurities mixed with it.</p>
      </> },
      { id: 'fractional-crystallization', label: 'Fractional crystallisation', kicker: 'SEPARATE DISSOLVED SOLIDS', title: 'Different solubilities allow crystals to form at different stages', content: <>
        <p><strong>Fractional crystallisation</strong> separates two or more dissolved solids by using differences in their solubilities in a chosen solvent, often as temperature changes.</p>
        <Steps items={[{ title: 'Dissolve the solid mixture', detail: 'Choose a solvent in which both components dissolve, but their solubilities differ enough to make separation possible.' }, { title: 'Concentrate the solution', detail: 'Warm the solution carefully until it is concentrated.' }, { title: 'Cool under controlled conditions', detail: 'The less soluble component under the new conditions may crystallise first. The exact order depends on the solubility behaviour of the substances.' }, { title: 'Separate the first crystals', detail: 'Filter the crystals from the remaining solution. The liquid contains a different proportion of the other dissolved component.' }, { title: 'Repeat if needed', detail: 'Further concentration and cooling may recover another fraction. Recrystallisation can improve purity.' }]} />
        <Note>Fractional crystallisation is not based on particle size. It works because the dissolved substances have different solubilities in the same solvent under the selected conditions.</Note>
      </> },
      { id: 'worked-choice', label: 'Worked method choice', kicker: 'APPLY THE IDEA', title: 'How should a soluble solid mixture be separated?', content: <>
        <p>Suppose a sample contains two solids that both dissolve in water, but one becomes much less soluble than the other as the solution cools.</p>
        <div className="u3-method-flow"><article><b>1</b><strong>Dissolve</strong><span>Use the minimum suitable hot solvent.</span></article><article><b>2</b><strong>Cool</strong><span>Allow the less soluble component to crystallise.</span></article><article><b>3</b><strong>Filter</strong><span>Collect the first crystal fraction.</span></article><article><b>4</b><strong>Repeat</strong><span>Recover the next fraction if conditions allow.</span></article></div>
        <p>This is a plan, not a guarantee that any pair of salts can be separated. A chemist must check solubility data and may need a different solvent or purification method.</p>
      </> },
    ],
    recap: ['Crystallisation obtains a dissolved solid as crystals.', 'A solute dissolves in a solvent to form a solution.', 'Concentrating and cooling can cause a saturated or supersaturated solution to form crystals.', 'Fractional crystallisation uses differences in solubility to separate dissolved solids.', 'The best method depends on the substances and the aim of the separation.'],
    quizPath: pathForQuiz('crystallization'), quizDescription: 'Ten questions on solubility, saturated solutions, crystal formation and fractional crystallisation.', sidebarTip: 'Remember: evaporation removes solvent; crystallisation uses controlled concentration and cooling to form crystals.', sources: [sources.inspire, sources.syllabus, sources.filtration],
    nextLesson: { title: 'Simple and fractional distillation', path: pathForLesson('distillation') },
    quiz: { description: 'Test how solubility and temperature can be used to obtain and separate crystals.', sidebarTip: 'The first crystal fraction depends on the relative solubilities of the components under the chosen conditions.', artLabel: 'SOLUTION → CRYSTAL', artCaption: 'controlled cooling' },
  },
  {
    id: 'distillation', lessonNumber: '05', title: 'Simple and fractional distillation', titleLead: 'Separate liquids by', titleAccent: 'boiling point',
    summary: 'Learn how evaporation and condensation recover a solvent or separate liquids, and why a fractionating column is used when boiling points are close.', duration: '22–26 min',
    learningObjectives: ['Explain the principles of evaporation, condensation and distillation.', 'Identify the main parts of a simple distillation apparatus.', 'Distinguish simple distillation from fractional distillation.', 'Explain how the fractionating column improves separation.'],
    sections: [
      { id: 'distillation-principle', label: 'The principle', kicker: 'LIQUID TO VAPOUR AND BACK', title: 'Distillation uses boiling and condensation', content: <>
        <p><strong>Distillation</strong> separates substances by heating a mixture so that a component enters the vapour phase, then cooling that vapour so it condenses back into liquid.</p>
        <DataTable headers={['Term','Meaning']} rows={[
          ['Boiling','A liquid changes to vapour throughout the liquid when its vapour pressure equals the external pressure.'],
          ['Vapour','The gaseous form of a substance that is normally a liquid or solid under the conditions being discussed.'],
          ['Condensation','A change from gas or vapour into liquid, usually when the vapour is cooled.'],
          ['Distillate','The liquid collected after vapour has condensed.'],
          ['Residue','The material left in the original distillation flask.'],
        ]} />
        <p>The method works because components of a mixture may have different volatilities or boiling points. The component that enters the vapour more readily becomes richer in the vapour and can be collected after condensation.</p>
      </> },
      { id: 'simple-distillation', label: 'Simple distillation', kicker: 'RECOVER A SOLVENT', title: 'Simple distillation collects a vapour as a liquid', content: <>
        <p><strong>Simple distillation</strong> is useful when recovering a solvent from a solution or when separating liquids whose boiling points are sufficiently different for a simple apparatus to work well.</p>
        <DistillationDiagram />
        <DataTable headers={['Part','Function']} rows={[
          ['Distillation flask','Holds the mixture being heated.'],
          ['Heat source','Provides controlled heat to boil the liquid.'],
          ['Thermometer','Measures the temperature of the vapour near the outlet.'],
          ['Condenser','Cools vapour so it changes back into liquid.'],
          ['Cooling-water inlet','Water usually enters the condenser jacket at the lower end.'],
          ['Cooling-water outlet','Water leaves near the upper end so the jacket remains filled.'],
          ['Receiving flask','Collects the condensed liquid, called the distillate.'],
        ]} />
        <Steps items={[{ title: 'Heat the mixture carefully', detail: 'The more volatile component enters the vapour phase more readily.' }, { title: 'Send vapour through the condenser', detail: 'The condenser is surrounded by cooling water, which removes heat from the vapour.' }, { title: 'Collect the distillate', detail: 'The condensed liquid drips into the receiving flask. Less volatile material remains in the original flask.' }]} />
        <p>Example: distilling salt solution can produce water as the distillate while dissolved salt remains in the flask, provided the apparatus is operated correctly.</p>
      </> },
      { id: 'fractional-distillation', label: 'Fractional distillation', kicker: 'SEPARATE CLOSE BOILING POINTS', title: 'A fractionating column improves the separation', content: <>
        <p><strong>Fractional distillation</strong> is used to separate a mixture of two or more miscible liquids with relatively close boiling points. A <strong>miscible</strong> pair of liquids mixes to form one liquid phase.</p>
        <DistillationDiagram fractional />
        <p>The fractionating column provides a large surface for repeated condensation and vapourisation. As vapour rises and some of it condenses, the vapour that continues upwards becomes richer in the more volatile component.</p>
        <Steps items={[{ title: 'The mixture is heated', detail: 'Vapour containing both liquid components enters the fractionating column.' }, { title: 'Vapour repeatedly condenses and re-vaporises', detail: 'Inside the column, the rising vapour and descending liquid exchange heat and matter.' }, { title: 'The more volatile component becomes enriched', detail: 'The vapour near the top becomes richer in the component with the lower boiling point.' }, { title: 'Vapour enters the condenser', detail: 'It is cooled and collected as a liquid fraction. Other fractions may be collected as conditions change.' }]} />
        <p>Fractional distillation is used in petroleum refining to separate crude oil into groups of substances with different boiling ranges. It is also used to separate components of liquefied air after the air has been cleaned and cooled.</p>
      </> },
      { id: 'compare-methods', label: 'Compare both methods', kicker: 'SELECT THE RIGHT APPARATUS', title: 'Use the mixture and boiling points to choose', content: <>
        <DataTable headers={['Feature','Simple distillation','Fractional distillation']} rows={[
          ['Main use','Recovering a solvent from a solution or separating liquids with widely different boiling points.','Separating miscible liquids with closer boiling points.'],
          ['Extra apparatus','No fractionating column is required.','A fractionating column is placed between the flask and condenser.'],
          ['How separation improves','Vapour is condensed and collected.','Repeated vapourisation and condensation improve enrichment.'],
          ['Example','Water from salt solution.','Ethanol-rich fraction from an ethanol-water mixture; petroleum fractions.'],
        ]} />
        <Note>Fractional distillation improves separation, but it does not guarantee that every collected fraction is a perfectly pure substance.</Note>
      </> },
      { id: 'ethanol-example', label: 'Ethanol from palm wine', kicker: 'A CURRICULUM APPLICATION', title: 'Why fractional distillation is used to enrich ethanol', content: <>
        <p>Palm wine is a mixture that can contain water, ethanol and other dissolved or suspended substances. Distillation is used to separate and concentrate volatile components. Fractional distillation is more suitable than simple distillation when separating miscible liquids with relatively close boiling points.</p>
        <p>At the SS1 level, the important idea is that the distillate becomes richer in ethanol because ethanol is more volatile than water under ordinary conditions.</p>
        <Note tone="caution">Ethanol and water form an azeotrope. At atmospheric pressure, ordinary fractional distillation cannot produce completely water-free ethanol; the mixture reaches a limiting composition. Therefore, do not describe fractional distillation as producing 100% pure ethanol from palm wine. Distillation of alcoholic liquids is not a school practical activity.</Note>
      </> },
    ],
    recap: ['Distillation uses heating, vapourisation, cooling and condensation.', 'The distillate is collected after condensation; residue remains in the original flask.', 'Simple distillation can recover a solvent from a solution or separate liquids with widely different boiling points.', 'Fractional distillation uses a fractionating column to improve separation of miscible liquids with closer boiling points.', 'Ethanol-water forms an azeotrope, so ordinary fractional distillation does not produce absolute ethanol.'],
    quizPath: pathForQuiz('distillation'), quizDescription: 'Ten questions on the principles, apparatus and applications of simple and fractional distillation.', sidebarTip: 'Look at the mixture first: a dissolved solid and solvent often suit simple distillation; two miscible liquids with close boiling points need fractional distillation.', sources: [sources.inspire, sources.syllabus, sources.rsc, sources.azeotrope],
    nextLesson: { title: 'Chromatography, sublimation and precipitation', path: pathForLesson('chromatography-and-sublimation') },
    quiz: { description: 'Review boiling, condensation, apparatus, distillate, residue and the role of a fractionating column.', sidebarTip: 'The fractionating column gives repeated vapour–liquid contact and improves separation of close-boiling liquids.', artLabel: 'VAPOUR → LIQUID', artCaption: 'distillation' },
  },
  {
    id: 'chromatography-and-sublimation', lessonNumber: '06', title: 'Chromatography, sublimation and precipitation', titleLead: 'Three more methods,', titleAccent: 'three principles',
    summary: 'Separate dissolved components by chromatography, recover a sublimable solid, and form an insoluble precipitate from solutions.', duration: '22–26 min',
    learningObjectives: ['Describe paper chromatography and identify its main parts.', 'Calculate a simple Rf value using a fully explained ratio.', 'Explain sublimation and give suitable examples.', 'Explain precipitation and interpret a simple balanced precipitation equation.'],
    sections: [
      { id: 'chromatography-principle', label: 'Paper chromatography', kicker: 'SEPARATE DISSOLVED COMPONENTS', title: 'Chromatography separates substances that travel at different rates', content: <>
        <p><strong>Chromatography</strong> is a separation technique used to separate and help identify components of a mixture. In paper chromatography, the paper is the <strong>stationary phase</strong> and the solvent is the <strong>mobile phase</strong>.</p>
        <ul className="u3-bullets"><li><strong>Stationary phase:</strong> the material that stays in place, such as chromatography paper.</li><li><strong>Mobile phase:</strong> the solvent that moves through the paper.</li><li><strong>Origin line:</strong> the pencil line where the sample is placed.</li><li><strong>Solvent front:</strong> the furthest point reached by the solvent.</li><li><strong>Chromatogram:</strong> the pattern of separated spots after the process.</li></ul>
        <ChromatographyDiagram />
        <p>Different substances travel different distances because they differ in how strongly they are retained by the stationary phase and how well they dissolve in the mobile phase.</p>
      </> },
      { id: 'chromatography-steps', label: 'How to run paper chromatography', kicker: 'FOLLOW THE ORDER', title: 'The sample spot must begin above the solvent', content: <>
        <Steps items={[{ title: 'Draw a pencil origin line', detail: 'Use pencil rather than ordinary ink so the line does not dissolve and travel with the solvent.' }, { title: 'Place a small sample spot', detail: 'Put the sample on the origin line and allow it to dry. A concentrated, large spot can smear.' }, { title: 'Place the paper in the container', detail: 'The solvent level must be below the origin line so the sample is not washed straight into the solvent.' }, { title: 'Allow the solvent to rise', detail: 'The solvent carries dissolved components through the paper. Different components move at different rates.' }, { title: 'Mark the solvent front', detail: 'Remove the paper before the solvent reaches the top and mark the furthest point reached. Allow the chromatogram to dry.' }]} />
        <Note>Use a safe, teacher-approved solvent. Do not taste or deliberately smell inks, solvents or unknown samples. Keep flammable solvents away from flames and heat.</Note>
      </> },
      { id: 'rf-value', label: 'Rf value: worked calculation', kicker: 'OPTIONAL NUMERICAL EXTENSION', title: 'The Rf value compares two measured distances', content: <>
        <p>An <strong>Rf value</strong> (retention factor) is a ratio used to describe how far a substance travels compared with the solvent front in a particular chromatogram.</p>
        <div className="u3-equation"><strong>Rf = distance travelled by substance ÷ distance travelled by solvent front</strong><p>Both distances are measured from the origin line.</p></div>
        <div className="u3-breakdown"><h3>What does each part mean?</h3><ul><li><strong>Distance travelled by substance:</strong> measure from the origin line to the centre of the separated spot.</li><li><strong>Distance travelled by solvent front:</strong> measure from the same origin line to the solvent-front mark.</li><li><strong>Rf:</strong> divide the first distance by the second. It has no unit because the units cancel.</li></ul></div>
        <div className="u3-worked-example"><span className="u3-worked-example__label">WORKED EXAMPLE</span><p>A coloured spot moves 3.0 cm from the origin line. The solvent front moves 6.0 cm.</p><div className="u3-equation"><strong>Rf = 3.0 cm ÷ 6.0 cm = 0.50</strong></div><Steps items={[{ title: 'Write the formula', detail: 'Rf = distance moved by the substance divided by distance moved by the solvent front.' }, { title: 'Substitute the measurements', detail: 'Rf = 3.0 cm ÷ 6.0 cm.' }, { title: 'Divide', detail: '3.0 ÷ 6.0 = 0.50.' }, { title: 'State the answer', detail: 'Rf = 0.50. There is no cm unit because centimetres cancel during division.' }]} /></div>
        <p>For a spot that moves no further than the solvent front, the Rf value is normally between 0 and 1. Rf values can help compare substances only when the conditions and solvent are the same.</p>
      </> },
      { id: 'sublimation', label: 'Sublimation', kicker: 'SOLID DIRECTLY TO GAS', title: 'Some solids sublime when heated', content: <>
        <p><strong>Sublimation</strong> is the change in which a solid goes directly into the gas phase without first becoming a liquid. When the vapour cools, it can deposit back as a solid. This reverse process is called deposition.</p>
        <div className="u3-phase-flow"><article><span>Solid</span><b>→</b><span>Vapour</span><small>Sublimation</small></article><article><span>Vapour</span><b>→</b><span>Solid</span><small>Deposition</small></article></div>
        <p>A mixture containing a sublimable solid and a non-sublimable solid can sometimes be separated by carefully heating it under suitable controlled conditions. Examples often used in Chemistry include ammonium chloride, iodine and naphthalene.</p>
        <p>For example, ammonium chloride can be separated from common salt in a supervised demonstration because ammonium chloride can form vapour and deposit on a cooler surface, while sodium chloride does not sublime under the same conditions.</p>
        <Note tone="caution">Heating iodine, ammonium chloride or naphthalene can release harmful vapours or involve hot apparatus. This is a teacher demonstration only; do not attempt it at home.</Note>
      </> },
      { id: 'precipitation', label: 'Precipitation', kicker: 'FORM AN INSOLUBLE SOLID', title: 'A precipitation reaction produces a solid from solutions', content: <>
        <p><strong>Precipitation</strong> is a process in which an insoluble solid forms when suitable solutions are mixed. The solid formed is called a <strong>precipitate</strong>. The precipitate can then be separated from the liquid by filtration.</p>
        <p>Consider mixing aqueous calcium chloride and aqueous sodium carbonate. A white solid, calcium carbonate, forms.</p>
        <div className="u3-equation"><strong>CaCl₂(aq) + Na₂CO₃(aq) → CaCO₃(s) + 2NaCl(aq)</strong><p>This is a balanced chemical equation for the precipitation reaction.</p></div>
        <div className="u3-breakdown"><h3>Read every part of the equation</h3><ul><li><strong>CaCl₂(aq):</strong> calcium chloride dissolved in water. The small ₂ means two chlorine atoms in each formula unit.</li><li><strong>Na₂CO₃(aq):</strong> sodium carbonate dissolved in water. The ₂ means two sodium atoms; the ₃ means three oxygen atoms.</li><li><strong>→:</strong> means “reacts to form” or “produces”.</li><li><strong>CaCO₃(s):</strong> calcium carbonate is the solid precipitate. Each formula unit contains one calcium atom, one carbon atom and three oxygen atoms. The (s) means solid.</li><li><strong>2NaCl(aq):</strong> sodium chloride remains dissolved in water. NaCl contains one sodium and one chlorine in each formula unit; the large 2 in front means two formula units, giving two sodium atoms and two chlorine atoms in total.</li><li><strong>Subscripts:</strong> the small numbers written at the lower right of a symbol count atoms within one formula unit. For example, Cl₂ has two chlorine atoms and Na₂CO₃ has two sodium atoms and three oxygen atoms. A subscript is part of the chemical formula.</li><li><strong>Coefficients:</strong> the large number placed in front counts formula units. The 2 before NaCl means two formula units. When no coefficient is written before a substance, its coefficient is 1.</li><li><strong>Plus sign (+):</strong> separates substances that react together on the left or products formed together on the right.</li><li><strong>Arrow (→):</strong> means “reacts to form” or “produces”.</li><li><strong>(aq):</strong> aqueous, meaning dissolved in water; <strong>(s)</strong> means solid. These are state symbols: they describe the physical state or form of each substance in the reaction.</li></ul></div>
        <DataTable headers={['Atom', 'Count on the left', 'Count on the right']} rows={[['Calcium (Ca)', '1', '1'], ['Chlorine (Cl)', '2', '2'], ['Sodium (Na)', '2', '2'], ['Carbon (C)', '1', '1'], ['Oxygen (O)', '3', '3']]} />
        <p>The equation is balanced because every atom count is the same on the left and right. Atoms are rearranged during the reaction; they are not lost.</p>
        <Steps items={[{ title: 'Mix the two suitable solutions', detail: 'The dissolved ions come into contact in the liquid.' }, { title: 'The insoluble product forms', detail: 'Calcium carbonate has low solubility in water and appears as a solid.' }, { title: 'Separate the precipitate', detail: 'A suitable filtration process can collect the solid from the remaining solution.' }]} />
        <Note tone="caution">The equation explains the chemistry; it is not an instruction for an unsupervised experiment. Reagents and waste must be handled and disposed of under school laboratory rules.</Note>
      </> },
    ],
    recap: ['Paper chromatography separates dissolved substances by their different distribution between stationary and mobile phases.', 'The solvent level must start below the sample spot; use pencil for the origin line.', 'Rf is the distance travelled by a spot divided by the distance travelled by the solvent front; units cancel.', 'Sublimation changes a solid directly into vapour; deposition changes vapour back to solid.', 'Precipitation forms an insoluble solid from solutions; the solid can then be collected by filtration.'],
    quizPath: pathForQuiz('chromatography-and-sublimation'), quizDescription: 'Ten questions on chromatography, Rf, sublimation and precipitation, including a worked-equation question.', sidebarTip: 'For a formula or equation, identify every symbol first. Then follow the values or substances from left to right.', sources: [sources.inspire, sources.chromatography, sources.chromatographyR, sources.precipitation],
    nextLesson: { title: 'Testing for purity', path: pathForLesson('testing-purity') },
    quiz: { description: 'Review chromatography, Rf values, phase changes and precipitation reactions.', sidebarTip: 'Remember that an Rf value is a ratio with no unit; read chemical state symbols such as (aq) and (s) carefully.', artLabel: 'Rf = 0.50', artCaption: 'chromatography' },
  },
  {
    id: 'testing-purity', lessonNumber: '07', title: 'Testing for purity', titleLead: 'How can a chemist know', titleAccent: 'if a substance is pure?',
    summary: 'Use characteristic physical properties and simple analytical evidence to distinguish a pure substance from an impure sample.', duration: '18–22 min',
    learningObjectives: ['Define a pure substance in Chemistry.', 'Describe melting point and boiling point as criteria for purity.', 'Explain how impurities can affect melting and boiling behaviour.', 'Interpret simple chromatography evidence while recognising its limitations.'],
    sections: [
      { id: 'meaning-of-purity', label: 'What purity means', kicker: 'A CHEMICAL DEFINITION', title: 'A pure substance contains one chemical substance', content: <>
        <p>In Chemistry, a <strong>pure substance</strong> consists of one chemical substance with a defined composition. An impure sample contains the main substance together with one or more other substances, called <strong>impurities</strong>.</p>
        <p>Purity is not the same as appearance. A clear liquid may contain dissolved impurities, while a coloured solid can still be a pure chemical substance. Purity must be assessed using suitable evidence and a reference standard.</p>
        <Note>Pure does not automatically mean safe. A pure chemical may still be toxic, corrosive, flammable or otherwise hazardous.</Note>
      </> },
      { id: 'melting-point', label: 'Melting point', kicker: 'TEST A SOLID', title: 'A pure crystalline solid melts over a narrow temperature range', content: <>
        <p>The <strong>melting point</strong> is the temperature at which a solid changes to a liquid at a stated pressure. A pure crystalline substance normally has a sharp, characteristic melting point when measured correctly.</p>
        <p>When an impurity is mixed into many crystalline solids, it usually lowers the melting point and causes melting to occur over a wider temperature range. This is why a melting-point range can help assess whether a solid is pure.</p>
        <div className="u3-melting-compare"><article><strong>Pure sample</strong><div className="u3-range-line"><span className="u3-range-line__pure"/></div><p>Melts sharply near one characteristic temperature.</p></article><article><strong>Impure sample</strong><div className="u3-range-line"><span className="u3-range-line__impure"/></div><p>Often begins melting earlier and melts over a wider range.</p></article></div>
        <p>Illustrative example: if a pure reference sample melts sharply at 100 °C under specified conditions, a test sample that melts from 94 °C to 98 °C may contain an impurity. The figures are an example, not a real substance's reference data.</p>
      </> },
      { id: 'boiling-point', label: 'Boiling point', kicker: 'TEST A LIQUID', title: 'A pure liquid has a characteristic boiling point at a stated pressure', content: <>
        <p>The <strong>boiling point</strong> is the temperature at which the vapour pressure of a liquid equals the external pressure. For a pure liquid at a fixed pressure, the temperature remains nearly constant while the liquid boils.</p>
        <p>A liquid mixture often boils over a range of temperatures because its composition can change as the more volatile component enters the vapour first. This behaviour can help distinguish a mixture from a pure liquid.</p>
        <Note>Boiling behaviour has exceptions. Some mixtures, including ethanol and water at their azeotropic composition, boil at a constant temperature and cannot be identified as pure from boiling behaviour alone.</Note>
      </> },
      { id: 'other-evidence', label: 'Other evidence', kicker: 'USE MORE THAN ONE CLUE', title: 'Chromatography and physical properties provide supporting evidence', content: <>
        <DataTable headers={['Test or property','What a result may show','Important limitation']} rows={[
          ['Melting point','A sharp value close to a trusted reference supports purity of a solid.','Pressure, heating rate, thermometer calibration and sample preparation matter.'],
          ['Boiling point','A stable value close to a trusted reference supports purity of a liquid.','Pressure matters; mixtures such as azeotropes can have constant boiling behaviour.'],
          ['Chromatography','More than one spot can show that a sample contains more than one component.','One spot in one solvent does not prove absolute purity; substances may travel together.'],
          ['Density or another physical property','A value close to a reliable reference may support identity or purity.','The property must be measured at specified conditions; one measurement alone may be insufficient.'],
        ]} />
        <p>A good purity assessment uses an appropriate method, careful measurements and a reliable reference. For a sample of ink or food colouring, chromatography can reveal several coloured components. For a solid chemical, a melting-point test may be more suitable.</p>
      </> },
      { id: 'worked-reasoning', label: 'Worked interpretation', kicker: 'READ THE EVIDENCE', title: 'How should you interpret a purity test?', content: <>
        <p>A student tests an unknown white solid. The reference sample of the suspected substance melts sharply at 80 °C. The unknown sample melts gradually between 73 °C and 77 °C.</p>
        <Steps items={[{ title: 'Compare the conditions', detail: 'Check that the reference and unknown samples were measured using the same pressure and a suitable calibrated apparatus.' }, { title: 'Compare the ranges', detail: 'The reference melts sharply at 80 °C; the unknown melts over a lower and wider range.' }, { title: 'State a cautious conclusion', detail: 'The evidence suggests the unknown sample is impure or may be a different substance.' }, { title: 'Recommend another check', detail: 'Use an additional suitable test or compare with a verified reference before identifying the sample.' }]} />
        <p>A single test may provide evidence, but it does not always prove identity or purity on its own.</p>
      </> },
    ],
    recap: ['A pure substance contains one chemical substance with a defined composition.', 'A pure crystalline solid usually has a sharp characteristic melting point at a stated pressure.', 'Impurities commonly lower and broaden the melting range of a crystalline solid.', 'A pure liquid has a characteristic boiling point at a stated pressure, but some mixtures can boil at a constant temperature.', 'Chromatography and physical-property measurements provide evidence; a single test may not prove absolute purity.'],
    quizPath: pathForQuiz('testing-purity'), quizDescription: 'Ten questions on chemical purity, melting points, boiling points and chromatography evidence.', sidebarTip: 'Use careful language: a test result may support a conclusion about purity, but one result is not always proof.', sources: [sources.inspire, sources.purity, sources.rsc, sources.chromatography],
    quiz: { description: 'Check your ability to interpret melting-point, boiling-point and chromatography evidence.', sidebarTip: 'Always compare measurements with a reliable reference under the same stated conditions.', artLabel: 'PURITY TEST', artCaption: 'evidence and analysis' },
  },
];

export const getSeparationTechniquesLesson = (lessonId?: string) =>
  separationTechniquesLessons.find((lesson) => lesson.id === lessonId);
