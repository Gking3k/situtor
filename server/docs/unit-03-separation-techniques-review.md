# Unit 03 — Standard Separation Techniques for Mixtures

**Class:** SS1 Chemistry  
**Development status:** Complete for learner testing; awaiting educator review  
**Development access:** All seven lessons and quizzes are open; no payment or account gate is implemented.

## Lesson inventory

| Lesson | Scope | Quiz |
|---|---|---:|
| 01. Classifying substances and mixtures | Matter classification; elements, compounds and mixtures; pure/impure; homogeneous/heterogeneous mixtures; reasons for separation; physical properties used | 10 questions |
| 02. Filtration, decantation and evaporation | Insoluble solids and liquids; residue/filtrate; sedimentation; decantation; separating funnel; evaporation; multi-stage separation of sand, salt and water | 10 questions |
| 03. Magnetic separation and flotation | Sieving as supplementary size-based separation; magnetic separation; density-based flotation; froth flotation; a brief terminology note explains the scheme-of-work wording “frostation (froth flotation)” | 10 questions |
| 04. Crystallisation and fractional crystallisation | Solute, solvent, solution, solubility, saturation, crystal growth and separation based on solubility differences | 10 questions |
| 05. Simple and fractional distillation | Vapourisation, condensation, distillate, residue, apparatus, condenser cooling-water flow, fractionating column, petroleum fractions and ethanol-water azeotrope note | 10 questions |
| 06. Chromatography, sublimation and precipitation | Paper chromatography; stationary/mobile phases; origin and solvent-front measurements; optional Rf calculation; sublimation/deposition; precipitation and a fully unpacked balanced equation | 10 questions |
| 07. Testing for purity | Chemical purity; melting and boiling behaviour; effect of impurities; chromatography evidence and limitations; careful interpretation of results | 10 questions |

## Source-derived curriculum coverage

The Federal Ministry of Education Inspire SS1 resource lists classification of substances; filtration, evaporation, decantation, flotation and “frostation”; crystallisation and fractional crystallisation; distillation and fractional distillation; precipitation; magnetism; chromatography; sublimation; and pure/impure substances. It also asks learners to state applications, manipulate and draw separation apparatus, and state criteria for purity.

Source: https://inspire.education.gov.ng/lessons/10525/preview

Rina's handwritten notes include definitions and examples for mixtures, sieving, magnetic separation, sublimation, distillation and fractional distillation, chromatography and related separation methods. The lesson sequence retains the existing Si Tutor catalogue structure while expanding explanations and clarifying scientific terms.

## Editorial and scientific decisions

- **Mixtures and compounds:** A mixture is a physical combination of substances in variable proportions. A compound contains elements chemically combined in a fixed ratio. A clear or transparent sample is not automatically pure. Lesson 01 also unpacks each displayed formula (Cu, O₂, H₂O and NaCl), explains omitted subscripts as a count of one, and distinguishes the NaCl formula unit/ionic lattice from a discrete molecule.
- **Filtration:** It separates suitable insoluble particles from a fluid. Dissolved salt passes through ordinary filter paper with the solution; filtration alone cannot remove it.
- **Decantation:** The lesson distinguishes pouring off a supernatant after sedimentation from separating immiscible liquid layers with a separating funnel.
- **Flotation terminology:** The standard lesson heading and teaching term is **froth flotation**. The Federal Ministry of Education Inspire SS1 list uses the word “frostation”; a brief learner-facing note explains that wording while keeping the standard Chemistry term throughout the lesson. The lesson distinguishes ordinary density-based flotation from industrial froth flotation based on selective attachment to air bubbles.
- **Sieving:** Included as a supplementary method supported by Rina's notes; it is clearly distinguished from the methods explicitly listed in the Inspire SS1 overview.
- **Crystallisation:** The lesson differentiates controlled crystal formation from evaporation to dryness and explains why solubility must be checked before predicting which fraction crystallises first.
- **Distillation:** The original SVG schematics have been replaced with separate, clean illustrations for simple and fractional distillation. The simple-distillation image has no fractionating column; the fractional-distillation image shows a packed column between the flask and condenser. Each diagram includes an accessible part key and explains cooling water entering at the lower side-arm and leaving at the upper side-arm. It notes that ethanol and water form an azeotrope, so ordinary fractional distillation does not give absolute ethanol. The lesson does not present alcohol distillation as a student practical.
- **Chromatography:** The optional Rf calculation defines both distances from the origin line, measures the spot to its centre, explains that units cancel, and identifies Rf as a ratio without a unit.
- **Precipitation:** The example equation is balanced: CaCl₂(aq) + Na₂CO₃(aq) → CaCO₃(s) + 2NaCl(aq). Every formula, subscript, coefficient (including the implied coefficient of 1), plus sign, arrow and state symbol is explained, and atom counts are compared on both sides. The example is conceptual, not an unsupervised practical instruction.
- **Purity:** A pure crystalline solid usually melts sharply at a characteristic temperature. Many impurities lower and broaden its melting range. A pure liquid has a characteristic boiling point at a stated pressure, but azeotropes are an exception to simplistic purity testing. One chromatography spot is not absolute proof of purity.
- **Safety:** Heating, solvents, iodine, ammonium chloride, naphthalene, industrial mineral reagents and laboratory precipitation reagents are not for unsupervised student use. Practical work requires teacher supervision, appropriate PPE, ventilation and school chemical-waste procedures.
- **Teaching style:** No funny analogies or comedy-based examples. Complex ideas are divided into steps, technical vocabulary is defined, and worked examples explain each calculation or equation component.

## Diagram and terminology correction (Phase 6.8)

- The two distillation illustrations are separate generated teaching assets. Both show a thermometer, heated flask, condenser, receiving flask and condenser side-arms; only the fractional setup includes a packed fractionating column.
- The diagram key identifies the apparatus and explains the cooling-water direction: enter at the lower side-arm (receiver end), leave at the upper side-arm (heated-flask end).
- The student-facing section uses **froth flotation** as the standard term. The FME Inspire list wording “frostation” appears once in a short explanatory note. The quiz tests the function of a collector rather than memorising the local spelling.

## Quiz review

- Seven lesson quizzes are implemented with ten questions each (70 questions total).
- Each question has four answer choices, one valid answer index and an explanation.
- The shared `QuizExperience` component is reused. Correct answers appear only after submission; retry remains available.
- Quiz questions test the stated lesson outcomes, include conceptual applications, and avoid unsafe practical instructions.

## Local QA checklist

1. Run `npm run typecheck`.
2. Run `npm run build`.
3. Open all seven lesson routes from Explore and directly by URL.
4. Open all seven quiz routes; answer all ten questions, submit, review explanations and retry.
5. Inspect the distillation and chromatography diagrams on desktop and mobile widths.
6. Review the Rf calculation and precipitation equation step by step.
7. Ask Rina or a qualified Chemistry educator to check content, local scheme alignment and the quiz answer keys before publication.

## Routes

- `/lessons/classifying-substances`
- `/lessons/filtration-decantation-evaporation`
- `/lessons/magnetic-separation-and-flotation`
- `/lessons/crystallization`
- `/lessons/distillation`
- `/lessons/chromatography-and-sublimation`
- `/lessons/testing-purity`

Each lesson's quiz is available by appending `/quiz`.
