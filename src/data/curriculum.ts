/**
 * Curriculum catalogue for Si Tutor.
 *
 * Keep curriculum structure separate from presentation and payment logic.
 * `access` describes the intended product entitlement; `contentStatus` describes
 * whether the actual lesson is ready to be shown to learners. They are deliberately
 * separate so a planned, paid lesson is never presented as available just because
 * it belongs to the future subject package.
 */
export type LessonAccess = 'free' | 'subject';
export type LessonContentStatus = 'planned' | 'ready-for-review' | 'published';

export type CurriculumLesson = {
  id: string;
  title: string;
  description: string;
  access: LessonAccess;
  contentStatus: LessonContentStatus;
  href?: string;
};

export type CurriculumUnit = {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: CurriculumLesson[];
};

export type SubjectCurriculum = {
  id: string;
  subject: string;
  classLevel: string;
  title: string;
  description: string;
  purchaseModel: 'one-time-subject-access';
  units: CurriculumUnit[];
};

export const ss1ChemistryCurriculum: SubjectCurriculum = {
  id: 'ss1-chemistry',
  subject: 'Chemistry',
  classLevel: 'SS1',
  title: 'SS1 Chemistry',
  description: 'A guided journey through the foundations of chemistry, from the nature of matter to carbon compounds.',
  purchaseModel: 'one-time-subject-access',
  units: [
    {
      id: 'introduction-to-chemistry',
      number: '01',
      title: 'Introduction to Chemistry',
      description: 'What chemistry studies, how it is used, and how chemists investigate questions.',
      lessons: [
        {
          id: 'meaning-of-chemistry',
          title: 'Meaning, branches and importance of chemistry',
          description: 'Understand what chemistry studies, how its major branches connect and why the subject matters.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/meaning-branches-importance-chemistry',
        },
        {
          id: 'chemistry-careers-and-applications',
          title: 'Careers and applications of chemistry',
          description: 'Explore chemistry careers and applications in healthcare, agriculture, industry, teaching and everyday life.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/chemistry-careers-and-applications',
        },
        {
          id: 'chemical-effects-and-safety',
          title: 'Chemical hazards, safety and environmental effects',
          description: 'Understand chemical hazards, exposure, poisoning, drug misuse, corrosion, pollution and safe handling.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/chemical-effects-and-safety',
        },
        {
          id: 'scientific-method',
          title: 'The scientific method',
          description: 'Learn how observations, questions, hypotheses, fair tests, data and conclusions work together.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/scientific-method',
        },
      ],
    },
    {
      id: 'chemical-industries',
      number: '02',
      title: 'Chemical Industries',
      description: 'How raw materials are transformed into useful products and why industries matter.',
      lessons: [
        {
          id: 'industrial-raw-materials',
          title: 'Raw materials, sources and products',
          description: 'Identify industrial inputs, their sources, manufacturing processes, products and by-products.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/industrial-raw-materials',
        },
        {
          id: 'types-of-chemical-industries',
          title: 'Types of chemical industries',
          description: 'Explore industrial sectors and distinguish heavy or bulk chemicals from fine chemicals.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/types-of-chemical-industries',
        },
        {
          id: 'industrial-location-and-importance',
          title: 'Industrial location and economic importance',
          description: 'Understand factory location factors and the effects of industry on people and Nigeria’s economy.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/industrial-location-and-importance',
        },
        {
          id: 'biotechnology-and-biogas',
          title: 'Biotechnology and biogas',
          description: 'Learn how biological processes support manufacturing, waste treatment and renewable energy.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/biotechnology-and-biogas',
        },
        {
          id: 'industry-and-environment',
          title: 'Chemical industries and the environment',
          description: 'Identify industrial environmental effects and methods for preventing or controlling pollution.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/industry-and-environment',
        },
      ],
    },
    {
      id: 'separation-techniques',
      number: '03',
      title: 'Standard Separation Techniques for Mixtures',
      description: 'Choose a suitable method to separate mixtures and obtain purer substances.',
      lessons: [
        { id: 'classifying-substances', title: 'Classifying substances and mixtures', description: 'Distinguish elements, compounds, mixtures, and pure or impure substances.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/classifying-substances' },
        { id: 'filtration-decantation-evaporation', title: 'Filtration, decantation and evaporation', description: 'Separate insoluble solids, pour off settled liquids and recover dissolved solids.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/filtration-decantation-evaporation' },
        { id: 'magnetic-separation-and-flotation', title: 'Magnetic separation and flotation', description: 'Use particle size, magnetic behaviour, density and froth flotation to separate materials.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/magnetic-separation-and-flotation' },
        { id: 'crystallization', title: 'Crystallization and fractional crystallization', description: 'Recover crystals and separate suitable mixtures of dissolved solids using solubility differences.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/crystallization' },
        { id: 'distillation', title: 'Simple and fractional distillation', description: 'Separate liquids or recover a solvent using differences in volatility and boiling point.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/distillation' },
        { id: 'chromatography-and-sublimation', title: 'Chromatography, sublimation and precipitation', description: 'Separate dissolved components, recover sublimable solids and form precipitates.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/chromatography-and-sublimation' },
        { id: 'testing-purity', title: 'Testing for purity', description: 'Use melting point, boiling point and chromatography evidence to assess purity.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/testing-purity' },
      ],
    },
    {
      id: 'particulate-nature-of-matter',
      number: '04',
      title: 'Particulate Nature of Matter',
      description: 'Understand matter as particles and build a model of the atom.',
      lessons: [
        {
          id: 'atoms-ions-molecules',
          title: 'Atoms, Ions & Molecules',
          description: 'Meet atoms, molecules and ions, and learn how they differ.',
          access: 'free',
          contentStatus: 'published',
          href: '/lessons/atoms-ions-molecules',
        },
        {
          id: 'daltons-atomic-theory',
          title: 'Dalton’s atomic theory and its modifications',
          description: 'Study the early atomic postulates and how later discoveries refined them.',
          access: 'subject',
          contentStatus: 'ready-for-review',
          href: '/lessons/daltons-atomic-theory',
        },
        { id: 'physical-and-chemical-changes', title: 'Physical and chemical changes', description: 'Compare changes that alter a substance’s form with changes that produce new substances.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/physical-and-chemical-changes' },
        { id: 'discovery-and-models-of-the-atom', title: 'Discovery and models of the atom', description: 'Explore the contributions of Dalton, Thomson, Rutherford and Bohr.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/discovery-and-models-of-the-atom' },
        { id: 'subatomic-particles', title: 'Protons, neutrons and electrons', description: 'Describe the location, relative charge and relative mass of the main subatomic particles.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/subatomic-particles' },
        { id: 'electron-arrangement', title: 'Electron arrangement around the nucleus', description: 'Use shell notation to describe electron arrangements at the level required for SS1.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/electron-arrangement' },
        { id: 'atomic-number-mass-number-isotopes', title: 'Atomic number, mass number and isotopes', description: 'Relate proton and neutron numbers to atomic and mass numbers, and compare isotopes.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/atomic-number-mass-number-isotopes' },
        { id: 'relative-atomic-mass', title: 'Relative atomic mass', description: 'Calculate relative atomic mass using the carbon-12 reference standard.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/relative-atomic-mass' },
        { id: 'introductory-orbital-model', title: 'Atomic orbitals and electron arrangement: extension', description: 'Optional enrichment beyond the core SS1 outcomes: distinguish shells, subshells and orbitals.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/introductory-orbital-model' },
      ],
    },
    {
      id: 'symbols-formulae-equations',
      number: '05',
      title: 'Symbols, Formulae and Equations',
      description: 'Read and write the language chemists use to represent substances and reactions.',
      lessons: [
        { id: 'chemical-symbols-and-valency', title: 'Chemical symbols and valency', description: 'Write element symbols, interpret valency and form neutral ionic formulae.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/chemical-symbols-and-valency' },
        { id: 'naming-compounds', title: 'Naming compounds', description: 'Name simple ionic and molecular compounds, including polyatomic ions and variable-charge metals.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/naming-compounds' },
        { id: 'empirical-and-molecular-formulae', title: 'Empirical and molecular formulae', description: 'Calculate formulae from composition data, formula masses and percentage composition.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/empirical-and-molecular-formulae' },
        { id: 'laws-of-chemical-combination', title: 'Laws of chemical combination', description: 'Apply conservation of mass, constant composition and multiple proportions to experimental data.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/laws-of-chemical-combination' },
        { id: 'writing-and-balancing-equations', title: 'Writing and balancing chemical equations', description: 'Write formula equations, interpret state symbols and balance atom counts using coefficients.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/writing-and-balancing-equations' },
      ],
    },
    {
      id: 'chemical-combination',
      number: '06',
      title: 'Chemical Combination',
      description: 'Explore the periodic table, electron arrangements, bonding and states of matter.',
      lessons: [
        { id: 'periodic-table-and-elements', title: 'The periodic table', description: 'Locate the first twenty elements, interpret atomic numbers, groups and periods, and classify elements.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/periodic-table-and-elements' },
        { id: 'electron-configuration', title: 'Electronic configuration', description: 'Write shell arrangements for the first twenty elements and relate electron arrangements to ions and periodic position.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/electron-configuration' },
        { id: 'ionic-and-covalent-bonding', title: 'Ionic and covalent bonding', description: 'Compare electron transfer and sharing, ionic lattices, molecules and their properties.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/ionic-and-covalent-bonding' },
        { id: 'coordinate-and-metallic-bonding', title: 'Coordinate covalent and metallic bonding', description: 'Explain lone-pair donation, ammonium formation, delocalised electrons and metallic properties.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/coordinate-and-metallic-bonding' },
        { id: 'intermolecular-forces', title: 'Intermolecular forces', description: 'Distinguish dispersion, dipole–dipole and hydrogen bonding attractions between molecules.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/intermolecular-forces' },
        { id: 'states-and-kinetic-theory', title: 'States of matter and kinetic theory', description: 'Explain particle arrangement, motion, pressure, diffusion and changes of state.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/states-and-kinetic-theory' },
      ],
    },
    {
      id: 'gas-laws',
      number: '07',
      title: 'Gas Laws',
      description: 'Use relationships between pressure, volume, temperature and amount of gas.',
      lessons: [
        { id: 'boyles-law', title: 'Boyle’s law', description: 'Relate pressure and volume at constant temperature and solve inverse-proportion problems.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/boyles-law' },
        { id: 'charles-law', title: 'Charles’ law', description: 'Relate volume and absolute temperature at constant pressure, using Kelvin conversions.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/charles-law' },
        { id: 'combined-gas-law', title: 'General and combined gas relationships', description: 'Apply the combined gas law and the pressure–temperature relationship to changing conditions.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/combined-gas-law' },
        { id: 'partial-pressure-and-gas-laws', title: 'Dalton’s law, Gay-Lussac’s law and Avogadro’s law', description: 'Calculate partial pressures, compare reacting gas volumes and apply Avogadro’s relationship.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/partial-pressure-and-gas-laws' },
        { id: 'mole-and-molar-volume', title: 'The mole, Avogadro constant and molar volume', description: 'Connect particle numbers and moles, and calculate gas volumes under stated conditions.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/mole-and-molar-volume' },
        { id: 'ideal-gas-and-graham-law', title: 'Ideal gas equation and Graham’s law', description: 'Apply PV = nRT and compare diffusion or effusion rates using molar masses.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/ideal-gas-and-graham-law' },
        { id: 'gas-law-calculations', title: 'Gas-law calculations', description: 'Solve structured and multi-step numerical problems with consistent units and clear working.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/gas-law-calculations' },
      ],
    },
    {
      id: 'acids-bases-salts',
      number: '08',
      title: 'Acids, Bases and Salts',
      description: 'Compare acids and bases, use indicators and pH, explain neutralisation and salt preparation, and study salt properties, hydration and solubility.',
      lessons: [
        { id: 'properties-of-acids-and-bases', title: 'Characteristics and Uses of Acids and Bases', description: 'Compare acid and base definitions, characteristic properties, common reactions, equations, uses and safety.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/properties-of-acids-and-bases' },
        { id: 'indicators-and-ph', title: 'Indicators and the pH scale', description: 'Use litmus, methyl orange, phenolphthalein and universal indicator; interpret pH and simple logarithmic comparisons.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/indicators-and-ph' },
        { id: 'neutralization-and-salt-preparation', title: 'Neutralisation and preparation of salts', description: 'Explain neutralisation, balance molecular and ionic equations, and prepare salts by excess-solid, titration and precipitation methods.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/neutralization-and-salt-preparation' },
        { id: 'properties-of-salts', title: 'Properties and uses of salts', description: 'Classify normal, acid and basic salts; relate ionic structure to properties, conductivity and common applications.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/properties-of-salts' },
        { id: 'hygroscopic-deliquescent-efflorescent', title: 'Hygroscopic, deliquescent and efflorescent substances', description: 'Distinguish moisture absorption, deliquescence and loss of water of crystallisation; interpret hydrate formulae.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/hygroscopic-deliquescent-efflorescent' },
        { id: 'solubility-of-salts', title: 'Solubility of salts in water', description: 'Explain solution vocabulary, apply solubility rules, read solubility curves, distinguish solubility from dissolving rate and solve calculations.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/solubility-of-salts' },
      ],
    },
    {
      id: 'water',
      number: '09',
      title: 'Water',
      description: 'Study water sources, hardness, properties, treatment and environmental importance.',
      lessons: [
        { id: 'sources-and-types-of-water', title: 'Sources and types of water', description: 'Compare natural water sources, freshwater and seawater, groundwater, pure water and potable water.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/sources-and-types-of-water' },
        { id: 'properties-and-uses-of-water', title: 'Properties and uses of water', description: 'Understand the H₂O molecule, water properties and the reasons water is useful in daily life.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/properties-and-uses-of-water' },
        { id: 'water-hardness-and-treatment', title: 'Hardness and treatment of water', description: 'Explain soft and hard water, temporary and permanent hardness, softening and water-treatment stages.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/water-hardness-and-treatment' },
        { id: 'water-pollution-and-purity', title: 'Water pollution and purity', description: 'Identify water pollutants, their sources and effects, and ways to protect water quality.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/water-pollution-and-purity' },
        { id: 'laboratory-preparation-of-water', title: 'Laboratory preparation of water', description: 'Explain water formation, electrolysis, distillation, the test for water and laboratory safety.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/laboratory-preparation-of-water' },
      ],
    },
    {
      id: 'carbon-and-its-compounds',
      number: '10',
      title: 'Carbon and Its Compounds',
      description: 'Connect the structure of carbon with its forms, compounds and industrial uses.',
      lessons: [
        { id: 'structure-and-allotropes-of-carbon', title: 'Structure and allotropes of carbon', description: 'Explain carbon bonding, catenation and why diamond, graphite, graphene and fullerenes have different properties.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/structure-and-allotropes-of-carbon' },
        { id: 'coal-and-coke', title: 'Coal and coke', description: 'Explain coalification, coal ranks, destructive distillation, coke, coal gas and gasification.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/coal-and-coke' },
        { id: 'oxides-of-carbon', title: 'Carbon monoxide and carbon dioxide', description: 'Compare carbon oxides, their formation, properties, hazards, uses and chemical tests.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/oxides-of-carbon' },
        { id: 'carbonates-and-hydrogencarbonates', title: 'Carbonic acid, carbonates and hydrogencarbonates', description: 'Understand carbonate ions, hydrogencarbonate ions, acid reactions, tests, thermal decomposition and uses.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/carbonates-and-hydrogencarbonates' },
        { id: 'petroleum-and-natural-gas', title: 'Crude oil and natural gas', description: 'Explore geological formation, reservoir traps, composition, extraction, uses and environmental impacts.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/petroleum-and-natural-gas' },
        { id: 'petroleum-refining-and-petrochemicals', title: 'Petroleum refining and petrochemicals', description: 'Explain fractional distillation, petroleum fractions, cracking, reforming and petrochemical products.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/petroleum-refining-and-petrochemicals' },
      ],
    },
    {
      id: 'hydrocarbons',
      number: '11',
      title: 'Hydrocarbons',
      description: 'Meet carbon-and-hydrogen compounds and compare their structures and properties.',
      lessons: [
        { id: 'hydrocarbon-classes', title: 'Hydrocarbons and their classes', description: 'Classify hydrocarbons and recognise the main families.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/hydrocarbon-classes' },
        { id: 'homologous-series-and-naming', title: 'Homologous series and naming', description: 'Use general formulae and introductory IUPAC naming.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/homologous-series-and-naming' },
        { id: 'alkanes-alkenes-alkynes', title: 'Alkanes, alkenes and alkynes', description: 'Compare saturated and unsaturated structures and reactions.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/alkanes-alkenes-alkynes' },
        { id: 'isomerism', title: 'Isomerism', description: 'Recognise compounds with the same molecular formula but different structures.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/isomerism' },
        { id: 'aromatic-hydrocarbons', title: 'Aromatic hydrocarbons', description: 'Study benzene structure and selected introductory properties.', access: 'subject', contentStatus: 'ready-for-review', href: '/lessons/aromatic-hydrocarbons' },
      ],
    },
  ],
};

export const curriculumSubjects: SubjectCurriculum[] = [ss1ChemistryCurriculum];

export const getPublishedLessonCount = (subject: SubjectCurriculum): number =>
  subject.units.reduce(
    (count, unit) => count + unit.lessons.filter((lesson) => lesson.contentStatus === 'published').length,
    0,
  );

export const getLessonCount = (subject: SubjectCurriculum): number =>
  subject.units.reduce((count, unit) => count + unit.lessons.length, 0);
