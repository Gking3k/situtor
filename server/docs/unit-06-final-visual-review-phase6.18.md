# Unit 6 — final diagram rendering pass (Phase 6.18)

## Scope

This pass corrects the diagram and layout problems visible in the latest review screenshots and improves the responsive behaviour of the affected SVGs. No lesson prose, quiz wording, answer keys, curriculum metadata or payment/access behaviour is changed.

## Corrections

### 1. Group and period guide
- Moved the Period 3 horizontal guide below the element cards.
- Kept the Group 1 guide vertical between the lithium and sodium cards.
- Kept the element symbols and shell arrangements unobstructed.

### 2. Heating curve
- Repositioned all five stage labels away from the plotted curve and phase-change plateaus.
- Put the temperature-constant labels above the two flat sections.
- Put the melting and boiling labels below their respective flat sections.
- Separated the solid-, liquid- and gas-warming labels from the plateau labels.
- Kept the axes explicit: temperature on the vertical axis and heat supplied on the horizontal axis.

### 3. Hydrogen bonding between water molecules
- Shows two lone pairs (four non-bonding electrons) on each oxygen.
- Keeps the solid O—H covalent bonds visually distinct from the dashed intermolecular attraction.
- Routes the dashed attraction from the partially positive hydrogen of one molecule to a lone-pair region on the partially negative oxygen of the second molecule.
- Keeps the partial-charge labels and the hydrogen-bond callout clear of the atoms.

### 4. Coordinate covalent bonding
- Repositioned the three N—H bonds in the ammonia diagram.
- Separated the nitrogen lone pair from the hydrogen labels; the lone pair no longer overlaps the upper hydrogen.
- Redirected the donation arrow from the electron pair towards H+.
- Added a bracketed ammonium-ion representation, [NH4]+, with four N—H bonds in the product panel.
- Retained the stacked mobile diagram.

### 5. Ionic electron transfer
- Added a dashed outline at the unoccupied eighth position in chlorine's outer shell.
- Directed the transfer arrow towards that vacant position.
- Kept the seven existing chlorine outer-shell electrons visible.
- Preserved the note that inner shells are omitted and retained the overall balanced equation, 2Na + Cl2 -> 2NaCl.

### 6. States of matter
- Moved the solid-particle vibration arrows slightly farther from the particle edges so they do not appear to intersect the first column of particles.
- Applied the responsive-fit treatment to the particle comparison diagram.

### 7. Responsive SVG sizing
- Added a dedicated `u6-fit-card` style for diagrams designed to scale to the available card width on larger screens.
- On narrow screens, these diagrams retain a readable 600px canvas inside the horizontally scrollable card rather than shrinking labels until they become illegible.
- The coordinate-bonding diagram continues to use its dedicated stacked mobile SVG.

## Validation performed

- `chemicalCombinationLessons.tsx` passed TypeScript JSX transpilation with zero syntax diagnostics.
- `unit-six-lessons.css` passed a basic balanced-brace check.
- Diagram classes and the intended five responsive-fit diagrams were checked in source.
- No invalid `Note tone="success"` props remain in the Unit 6 lesson source.
- Full app typecheck and production build were not run in this working copy because project dependencies are not installed here. Run `npm run typecheck` and `npm run build` locally after applying the overlay.

## Unchanged

- Six Unit 6 lessons and their quiz banks.
- Lesson and quiz routes.
- Correct quiz answers and explanations.
- Development access: every completed lesson and quiz stays open.
- Future subject-based payment model: not activated during development.
