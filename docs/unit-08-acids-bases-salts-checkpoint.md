# Unit 08 — Acids, Bases and Salts

## Completion checkpoint

**Unit 08 content is complete and ready for the user's full-unit review.** Unit 07 (Gas Laws) remains the completed preceding unit. This package contains the six Unit 08 lessons below, each with a 12-question quiz and answer explanations (72 questions total).

## Lesson sequence

1. **Characteristics and Uses of Acids and Bases** — acid/base definitions, Brønsted–Lowry proton transfer, alkalis, strength versus concentration, characteristic properties, reactions with metals and carbonates, uses and laboratory safety.
2. **Indicators and the pH Scale** — litmus, methyl orange, phenolphthalein, universal indicator, transition ranges, pH interpretation, logarithmic comparisons and a clearly marked optional powers-of-ten extension.
3. **Neutralisation and Preparation of Salts** — molecular and net ionic equations, atom/charge checks, excess-insoluble-base preparation, titration for soluble acid/alkali pairs, precipitation and crystallisation.
4. **Properties and Uses of Salts** — ionic composition, normal/acid/basic salts, acid-salt versus solution-pH distinction, ionic structure, physical properties, conductivity and applications.
5. **Hygroscopic, Deliquescent and Efflorescent Substances** — water of crystallisation, hydrate notation, dehydration, moisture uptake/loss, examples and storage.
6. **Solubility of Salts in Water** — solution vocabulary, saturation states, introductory solubility rules and exceptions, solubility curves, rate-versus-equilibrium distinctions and calculations.

## Learning and visual quality

- Each lesson has structured sections, measurable learning objectives, a recap, source links, and a dedicated 12-question quiz with answer explanations.
- Formula panels break equations into reactants/products, symbols and state labels, coefficients/subscripts, atom counts and charge checks, then interpret the result in plain language.
- Worked examples show the known information, substitution, arithmetic and final answer with units.
- The unit includes 12 distinct SVG diagram designs and 13 rendered figure instances, including labelled titration apparatus, indicator and pH visuals, neutralisation, salt preparation, precipitation, salt classifications, ionic lattice/conductivity, moisture exchange and illustrative solubility curves.
- SVGs include titles and descriptions; diagram panels are keyboard-focusable, preserve readable minimum widths on narrow screens, and use horizontal scrolling rather than shrinking labels into illegibility. Fit-style diagrams use a narrower mobile canvas than the wide apparatus and graph diagrams.
- A teaching-language pass added a plain-language main idea before each lesson’s formal explanation, clarified unfamiliar laboratory terms, expanded the worked burette titre example, made pH logarithm calculations explicitly optional, and kept those optional calculations out of the core quiz.
- Visual corrections removed label collisions in the pH chart, clarified neutral litmus colour, added breathing room below the salt-preparation and precipitation diagrams, improved the titration apparatus key and reading instructions, and clarified ion movement in the conductivity diagram.
- **Second visual refinement (2026-11-02):** rebuilt the sodium chloride lattice/solution figure to show hydration-shell orientation and ion migration to oppositely charged electrodes; rebuilt titration numbering so the 0 mL scale label stays clear; expanded the solubility-factor figure with labelled axes, pressure effects and the difference between rate and equilibrium solubility; and redrew hygroscopic/deliquescent/efflorescent processes with examples and clearer water movement.
- The efflorescence lesson now includes a fully explained washing-soda equation: Na₂CO₃·10H₂O(s) → Na₂CO₃·H₂O(s) + 9H₂O(g), with the meaning of the dot-water notation, the nine water molecules released, state symbols and atom-count check broken down step by step.
- The precipitation lesson uses calcium carbonate rather than a toxic lead-salt demonstration example; laboratory procedures still include supervision and protective-equipment cautions.

## Routes and catalogue

All six lesson routes and all six associated quiz routes are registered in `src/App.tsx`. All six lessons are listed under Unit 08 in `src/data/curriculum.ts` and marked `ready-for-review`.

## Validation performed

- TypeScript transpilation/syntax validation: **67 source files checked; zero syntax diagnostics**.
- Quiz audit: **6 quiz sets × 12 questions**, four answer choices per question, valid answer indices, and non-empty explanations.
- Route audit: all six lesson and quiz routes are registered and map to their matching lesson IDs.
- Content audit: all six lesson IDs are present; all quiz artwork metadata expected by the quiz page is populated.
- Full `tsc -b` / Vite production build could not be completed in this working environment because the uploaded project has no installed `node_modules`, the required `vite/client` type package is unavailable, and an `npm ci` attempt timed out before dependencies could be installed. Run `npm install`, `npm run typecheck`, and `npm run build` locally before deployment.
- SVG geometry was separately rendered to preview images and visually inspected for spacing, label collisions and clipped captions after the second visual refinement. The four revised figures were rasterised for inspection. These previews are useful for checking vector artwork but are not a substitute for live browser testing. Browser-based desktop/mobile rendering and interaction tests still need to be run in an environment with dependencies installed.

## Scientific references used

- Federal Ministry of Education — Inspire SS1 Chemistry: Acids, Bases and Salts: https://inspire.education.gov.ng/lessons/8657/preview
- Federal Ministry of Education — Inspire SS1 Chemistry: Solubility: https://inspire.education.gov.ng/lessons/117/preview
- OpenStax Chemistry 2e — Classifying Chemical Reactions: https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions
- OpenStax Chemistry 2e — Acid–Base Titrations: https://openstax.org/books/chemistry-2e/pages/14-7-acid-base-titrations
- IUPAC Gold Book — acid: https://goldbook.iupac.org/terms/view/A00071
- IUPAC Gold Book — pH: https://goldbook.iupac.org/terms/view/P04524
- SCERT Class 10 Science — washing soda and efflorescence: https://scert.cg.gov.in/pdf/textbook-EM-2021-22/Class10%20-%20Science-reduced.pdf

## User review workflow

Present Unit 08 as one complete package. Do not hand over an individual lesson or interim ZIP for review. Any corrections from the full-unit review should be applied as a coherent Unit 08 revision before moving to Unit 09.

Final diagram readability pass (2026-11-02): supporting labels, axis ticks, legends and explanatory text were increased across the NaCl, titration, solubility and moisture diagrams. All four SVGs were re-rendered after this pass.
