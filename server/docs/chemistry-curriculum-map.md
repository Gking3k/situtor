# SS1 Chemistry curriculum map

**Product:** Si Tutor  
**Class level:** SS1  
**Catalogue key:** `ss1-chemistry`  
**Intended purchase model:** one-time access to the complete subject collection  
**Current development state:** Units 01–04 have complete lesson and quiz previews marked `ready-for-review`. Atoms, Ions & Molecules remains the only lesson designated free in the future product model. All completed lessons are open during development; future subject-access metadata is not enforced.

## Curriculum basis

This working map is based primarily on:

1. Federal Ministry of Education, Inspire — SS1 Chemistry lessons and stated learning outcomes: https://inspire.education.gov.ng/ (examples: Introduction to Chemistry, Particulate Nature of Matter, Chemical Combination, Symbols, Formulae and Equations, Acids, Bases and Salts, Solubility).
2. FCT Secondary Education Board, *Chemistry Subject Scheme Review SS1*, 24 January 2024: https://fctemis.org/notes/10463_All_Document_Reader_1725460577538.pdf.

The FCT scheme provides a detailed first-, second- and third-term sequence. The Federal Ministry's Inspire portal says its lessons are based on NERDC curriculum standards. These sources are not identical in every detail; schools and state schemes can vary. Si Tutor should therefore identify this as an SS1-aligned learning path and validate the final launch syllabus with the educator/client before claiming exhaustive alignment to every Nigerian school scheme.

## Units and lesson map

| Unit | Coverage |
|---|---|
| 01. Introduction to Chemistry | Meaning, branches, importance, careers, applications, chemical hazards/effects, scientific method |
| 02. Chemical Industries | Raw materials and sources, products/by-products, heavy and fine industries, location factors, economic/environmental importance, biotechnology and biogas |
| 03. Standard Separation Techniques for Mixtures | Classification of substances, filtration, evaporation, decantation, flotation/froth flotation, magnetism, crystallisation, distillation, precipitation, chromatography, sublimation, purity |
| 04. Particulate Nature of Matter | Physical/chemical changes, atoms/molecules/ions, Dalton's theory and modifications, atomic models, subatomic particles, electron arrangement, atomic number/mass number/isotopes, relative atomic mass |
| 05. Symbols, Formulae and Equations | Symbols, valency, naming, empirical/molecular formulae, conservation of matter, constant composition, multiple proportions, equations |
| 06. Chemical Combination | First twenty elements and periodic-table position, shell electronic configuration, ionic/covalent/coordinate/metallic bonding, intermolecular attractions, states of matter and kinetic theory. Compound naming is reinforced here but taught in Unit 05. |
| 07. Gas Laws | Boyle, Charles, general/combined gas relationships, Dalton partial pressure, Gay-Lussac, Avogadro, mole, ideal gas equation, Graham, molar volume and calculations |
| 08. Acids, Bases and Salts | Properties, preparation, reactions and uses; indicators and pH; neutralisation; salts; hygroscopic/deliquescent/efflorescent substances; solubility |
| 09. Water | Sources, natural/treated water, soft/hard water, properties, pollutants, laboratory preparation and uses |
| 10. Carbon and Its Compounds | Carbon structure/allotropes, coal/coke, carbon oxides, carbonic acid/carbonates/hydrogencarbonates, crude oil/natural gas, refining, cracking/reforming and petrochemicals |
| 11. Hydrocarbons | Classes, carbon valency, homologous series, naming, alkanes/alkenes/alkynes, isomerism and aromatic hydrocarbons |

## Important scope decisions

- The existing published lesson **Atoms, Ions & Molecules** remains the single free introductory lesson in SS1 Chemistry.
- All other lessons are designated for the future full-subject entitlement, but planned content is not presented as available. The catalogue distinguishes `access` from `contentStatus`.
- The Inspire SS1 Chemical Combination resource specifies the first 20 elements. The FCT 2024 scheme specifies the first 30. For the initial Si Tutor learner content, use the first 20 as the baseline and add an explicitly labelled extension only after educator review if needed for the learner's school scheme.
- Relative atomic mass is taught using the carbon-12 reference standard. Any source material that refers to carbon-14 for the relative atomic mass standard must be treated as a likely error and checked against an authoritative chemistry reference before lesson publication.
- Advanced orbital notation/quantum-number content appears in the FCT 2024 scheme. Treat it as an extension or educator-confirmed requirement rather than silently assuming all SS1 learners need the same depth.

## Publishing checklist for each lesson

1. State measurable learning objectives and prerequisites.
2. Explain concepts in original, age-appropriate language.
3. Include examples relevant to Nigerian students where appropriate.
4. Add accurate diagrams or interactive models with accessible text alternatives.
5. Show worked calculations step by step where relevant.
6. Add a quiz with a separate answer key and explanations.
7. Verify chemistry, symbols, units, diagrams and calculations against reliable sources.
8. Review the lesson with Rina or a qualified Chemistry educator.
9. Mark `contentStatus: 'published'` only after the content and route have been tested.


## Phase 6.2 content checkpoint

- **Authored preview:** Dalton’s Atomic Theory and its Modern Modifications (Unit 04).
- **Lesson route:** `/lessons/daltons-atomic-theory` (direct preview; not linked as available in Explore).
- **Quiz route:** `/lessons/daltons-atomic-theory/quiz` (10 questions with answer explanations).
- **Catalogue state:** `access: 'subject'`, `contentStatus: 'planned'`. The route and content must be reviewed by Rina or a qualified Chemistry educator before changing the status to `published`.
- **Reusable quiz interface:** `src/components/QuizExperience.tsx`; both current topic quizzes use the shared component.


## Unit 03 lesson sequence and status

| Lesson | Main coverage | Development status |
|---|---|---|
| 01. Classifying substances and mixtures | Elements, compounds, mixtures, pure/impure substances and physical properties used in separation | Ready for review |
| 02. Filtration, decantation and evaporation | Residue, filtrate, sedimentation, separating funnel and multi-stage sand/salt/water separation | Ready for review |
| 03. Magnetic separation and flotation | Sieving, magnetism, density-based flotation and froth flotation (the FME Inspire SS1 list uses the word “frostation”) | Ready for review |
| 04. Crystallisation and fractional crystallisation | Solubility, saturated solutions, crystal formation and solubility-based separation | Ready for review |
| 05. Simple and fractional distillation | Apparatus, vapourisation/condensation, boiling points, fractionating column and ethanol-water azeotrope note | Ready for review |
| 06. Chromatography, sublimation and precipitation | Paper chromatography, optional Rf calculation, sublimation and precipitation equation | Ready for review |
| 07. Testing for purity | Melting/boiling behaviour, chromatography evidence and limitations | Ready for review |

Unit 03 is mapped to the Federal Ministry of Education Inspire SS1 resource: https://inspire.education.gov.ng/lessons/10525/preview. The teaching plan follows the published scope while explicitly labelling supplementary detail, including sieving and the optional Rf calculation.

See `docs/unit-03-separation-techniques-review.md` for detailed coverage, notes review, scientific/editorial decisions, sources, routes and the educator QA checklist.

## Phase 6.7 content checkpoint

- Seven Unit 03 lesson routes and seven quiz routes are implemented.
- Each quiz contains ten questions (70 questions total).
- All Unit 03 catalogue entries use `access: 'subject'` as future entitlement metadata and `contentStatus: 'ready-for-review'` for development access.
- No payment enforcement or lock UI is introduced.
- The shared quiz component and curriculum lesson layout are reused; a Unit 03 icon/theme option is added to the lesson layout.


## Unit 04 lesson sequence and status

| Lesson | Main coverage | Development status |
|---|---|---|
| 01. Atoms, Ions & Molecules | Atoms, molecules, atomicity, monoatomic/polyatomic ions, formula units and ionic lattices | Published preview; free in future model |
| 02. Dalton's atomic theory and its modifications | Historical postulates, evidence-based modifications, isotopes and chemical/nuclear distinction | Ready for review |
| 03. Physical and chemical changes | Particle identity, evidence, balanced equation and conservation of atoms | Ready for review |
| 04. Discovery and models of the atom | Dalton, Thomson, Rutherford, Bohr, Chadwick and alpha-scattering evidence | Ready for review |
| 05. Protons, neutrons and electrons | Relative charge/mass, location, ion charge and particle-count calculations | Ready for review |
| 06. Electron arrangement around the nucleus | First-20-element K/L/M/N shell notation and ions | Ready for review |
| 07. Atomic number, mass number and isotopes | Nuclide notation, particle counts and isotope comparisons | Ready for review |
| 08. Relative atomic mass | Carbon-12 reference, isotope abundance and weighted-average calculations | Ready for review |
| 09. Atomic orbitals and electron arrangement: extension | Introductory shell/subshell/orbital distinction, s/p shapes and capacities | Ready for review; optional enrichment |

See `docs/unit-04-particulate-nature-of-matter-review.md` for lesson objectives, calculations, diagram standards, source decisions and educator review checklist.

## Phase 6.9 content checkpoint

- Nine Unit 04 lesson routes and nine quiz routes are implemented.
- Each Unit 04 quiz contains 12 questions, including upgraded 12-question versions of the first two existing topic quizzes (108 questions total).
- Question design includes application, reasoning, error analysis, calculations and equation interpretation wherever relevant.
- All Unit 04 lessons are open during development; `access` remains future entitlement metadata and is not enforced.
- Relative atomic mass uses the IUPAC carbon-12 reference standard. The FME Inspire page's C-14 wording is noted for educator awareness.
- Orbital theory is clearly marked as enrichment beyond core SS1 expectations.
- Every Unit 04 diagram has a descriptive accessible label and caption; particle positions are identified as schematic where applicable.


## Phase 6.10 — Unit 05 content checkpoint

- Five lesson routes and five quiz routes are implemented.
- Each Unit 05 quiz contains 12 questions (60 questions total).
- The assessment includes multi-step formula calculations, ionic formula writing, compound naming, mass-ratio interpretation, equation atom-counting and balancing.
- Original labelled diagrams cover the first twenty element symbols, ionic charge balancing, compound-naming decisions, empirical-formula workflow, the three core chemical combination laws, and the particle accounting behind a balanced equation.
- All five lessons are `ready-for-review` and remain accessible during development. No payment checks or lock UI are active.
- Relative formula mass, molar mass and percentage composition are included as connected calculation skills. Reciprocal proportions is noted only as supplementary extension, not as a core FME Inspire outcome.

See `docs/unit-05-symbols-formulae-equations-review.md` for the complete content scope, accuracy decisions, sources and review checklist.
