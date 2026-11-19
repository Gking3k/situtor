# Si Tutor visual refinement — 5 November 2026

> Historical record: the Ψ-only mark described below was superseded on 13 November 2026 by Rina’s approved Option B Academic logo (Psi + open book). See `docs/brand-option-b-2026-11-13.md` for the current canonical assets and usage rules.

## Scope

Project-wide polish based on the client review. This pass changes the shared visual system and caption behaviour across the existing 11 Chemistry units. It does not add analytics, payments, accounts or feedback delivery.

## Branding

- Replaced the generic atom mark in `BrandLogo` with a custom vector Psi (`Ψ`) letterform traced from the client's supplied reference.
- The same silhouette is used in the header, footer and `public/favicon.svg`.
- Retained the `situtor.` wordmark, existing navy/teal palette and dark-footer inverse treatment.

## Typography and alignment

- Increased primary lesson explanation text to approximately 15 px with a comfortable line height.
- Increased lesson list text, quiz choices, quiz feedback, FAQ answers and table text modestly for easier reading.
- Standardised explanatory captions beneath diagrams to be centred at phone, tablet and desktop breakpoints.
- Preserved intentional left alignment for tables, navigation choices, FAQ question controls and ordinary reading layouts where left alignment improves scanning.
- Kept detailed diagram labels inside their SVG illustrations; caption text is not used as a substitute for diagram labels.

## Mobile caption fix

- Moved the Unit 06 covalent-bond explanation outside the horizontally scrollable SVG container. The caption now spans the card width and remains centred while the learner scrolls the illustration.
- Added a final shared style layer, `src/polish.css`, after `styles.css` and `responsive.css` so unit-specific mobile rules cannot inadvertently left-align diagram captions.

## Files changed

- `src/components/BrandLogo.tsx`
- `src/data/chemicalCombinationLessons.tsx`
- `src/main.tsx`
- `src/polish.css`
- `src/styles.css`
- `public/favicon.svg`
- `docs/design-system.md`
- `docs/responsive-audit-2026-11-03.md`

## Validation notes

- TypeScript/TSX syntax transpilation: pass for all source files.
- CSS parsing: pass for all source CSS files.
- Project JSON parsing: pass for package/config JSON files.
- The full `npm run typecheck` and `npm run build` could not be completed in this environment because the package registry install timed out and the local `node_modules` is incomplete. Run `npm ci`, `npm run typecheck` and `npm run build` locally before deployment.
- Complete visual verification in a real mobile browser at 320, 360, 390, 430, 768, 1024 and 1440 px remains a required final check.
