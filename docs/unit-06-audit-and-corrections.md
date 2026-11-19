# Unit 06 — Full audit and correction log

Date: 2026-11-02

## Audit findings

1. **Mobile SVG clipping (shared CSS):** `.u6-diagram-card` used `overflow: hidden` while its SVG children had `min-width: 600px`. On narrow screens, the diagrams were clipped with no way to reach the hidden content. The card is now a keyboard-focusable horizontal scroll region on narrow screens; a mobile hint is displayed.
2. **Sodium/chlorine reaction diagram:** the drawing showed one Na atom and one Cl atom while its displayed equation represented the overall reaction with Cl₂. The arrow now begins beside the sodium outer electron and points to the chlorine shell. The coordinate-bond diagram annotation was also moved inside the donor panel so it no longer spills into the panel gap. The labels explicitly separate the atom-level transfer model from the full balanced equation `2Na + Cl₂ → 2NaCl`.
3. **Metallic lattice electron count:** the previous model showed 12 positive M⁺ cores but 14 electron markers. The diagram now shows 12 of each and identifies itself as a simplified monovalent-metal model. The caption warns that other metals can contribute a different number of outer electrons.
4. **Hydrogen-bond endpoint:** the dashed attraction line began at the centre of the donor hydrogen sphere. It now begins at the sphere edge and terminates at the acceptor oxygen edge. The label is placed in a separate backing area to avoid colliding with the line.
5. **Particle-motion illustration:** the earlier solid/liquid diagrams did not clearly indicate motion, and gas motion was shown with unheaded strokes. The revised model adds small vibration/movement arrows for the solid and liquid and direction arrows for gas particles. Particle-size and spacing simplifications remain stated in the caption.
6. **Heating-curve labels:** the x-axis combined “time / heat supplied”, which was ambiguous, and the liquid-warming label was detached from the rising segment. The x-axis now says “Heat supplied”; the temperature axis is vertical; segment labels and plateau notes are repositioned.
7. **Electron-shell comparison:** the sodium/chlorine shell drawings did not include a sufficient key for nucleus, shells and electron dots. A caption now explains each visual element and states that the model is schematic/not to scale.
8. **Quiz answer-position bias:** correct answers were heavily concentrated in option B (for example, 11 of 12 answers in the states-and-kinetic-theory quiz were B). Options have been reordered without changing question wording, distractor meaning, correct-answer content or explanations so each quiz now has exactly three correct A, three B, three C and three D positions.

## Content checks

- The first-twenty shell sequence remains the introductory `2,8,8,2` model; lesson text explicitly says it is not a universal shell-capacity rule.
- Hydrogen is explicitly distinguished from alkali metals; helium's filled first shell is explained.
- Ionic compounds are described as lattices/formula-unit ratios, not discrete molecules.
- The ammonium/hydronium coordinate-bond examples identify the lone-pair donor, acceptor and the equivalent N—H bonds after formation.
- Metallic properties are not overgeneralised to every metal; mercury is noted as liquid at ordinary room temperature.
- The lesson distinguishes London dispersion, dipole–dipole and hydrogen bonding, and distinguishes intra- from intermolecular bonding.
- The heating-curve statement is qualified for a pure substance at fixed pressure. Numerical gas-law work remains in Unit 07.
- No scope expansion, payment gate or access restriction was introduced.

## Validation status

- 6 lessons and 6 quiz banks retained.
- 72 quiz questions retained; 12 per quiz.
- Every quiz answer-position distribution is now A=3, B=3, C=3, D=3.
- Static syntax and route/data checks are to be run as part of packaging; the full local TypeScript/Vite build should still be run in the user's project because this ZIP does not include `node_modules`.

## Changed files

- `src/data/chemicalCombinationLessons.tsx`
- `src/data/chemicalCombinationQuizzes.ts`
- `src/pages/unit-six-lessons.css`
- `docs/unit-06-chemical-combination-review.md`
- `docs/unit-06-audit-and-corrections.md`
- `README.md`
- `PROJECT_STATUS.md`
