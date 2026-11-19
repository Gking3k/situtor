# Si Tutor — Unit 11: Hydrocarbons

**Status:** Complete source implementation; ready for user review after local typecheck/build.

## Lessons

1. Hydrocarbons and their classes
2. Homologous series and naming
3. Alkanes, alkenes and alkynes
4. Isomerism
5. Aromatic hydrocarbons

Each lesson includes learning objectives, plain-language concept introductions, structured teaching sections, labelled SVG support where appropriate, formula/equation explanations, recap points, source links and a dedicated 12-question quiz with answer explanations.

## Assessment and visual assets

- Five individual quizzes; 60 questions total.
- Four-option multiple-choice format with answer keys and explanations.
- Seven inline SVG diagram instances: hydrocarbon classification, homologous-series examples, naming sequence, alkane/alkene/alkyne structures, chain isomers, geometric isomers and benzene delocalisation.
- Diagrams include accessible titles/descriptions and responsive horizontal inspection on narrow screens.

## Scientific and teaching checks

- General formulae are explicitly limited to simple open-chain examples: alkanes CnH2n+2, alkenes with one C=C bond CnH2n, and alkynes with one C≡C bond CnH2n-2.
- Combustion equations distinguish complete combustion from oxygen-limited incomplete combustion; carbon monoxide is identified as poisonous.
- The bromine-water test is presented as an indicator of C=C unsaturation, with safe supervised-demonstration wording.
- Isomerism examples distinguish chain, position and cis/trans geometric isomerism; the condition for cis/trans isomerism is stated.
- Benzene is represented with a delocalised π system and equivalent C–C bonds; Kekulé drawings are described as resonance representations.
- Benzene is clearly identified as a carcinogenic chemical that students must not handle or smell.

## Curriculum placement note

The current Si Tutor catalogue places Hydrocarbons as Unit 11 in its SS1 Chemistry package. The Federal Ministry of Education Inspire Hydrocarbons lesson linked in the lesson sources is labelled SS2. The content is retained in the catalogue position supplied for Si Tutor, but a teacher/curriculum reviewer should confirm the intended class-level mapping before public claims of complete SS1 curriculum alignment.

## Validation

- 79 TypeScript/TSX source files passed syntax transpilation.
- The new lesson data and quiz modules passed isolated strict TypeScript checks with project-type stubs.
- Five lesson definitions and five lesson routes plus five quiz routes are registered.
- All five quizzes contain 12 questions, four choices per question, valid answer indices and non-empty explanations.
- All seven SVG diagrams were rendered to full-size previews and visually reviewed.
- Full `npm run typecheck` and `npm run build` were not verified in the authoring environment because `npm install` timed out and left dependencies incomplete. Run both locally before deployment.
