# Unit 09 diagram visual review — 2 November 2026

## Review findings and changes

### 1. Water sources and groundwater
- Rebuilt the cross-section with four separate source information cards.
- Moved the well and borehole descriptions away from their shafts.
- Separated infiltration, surface-water, spring and water-table labels.
- Made the groundwater zone and source-protection explanation easier to distinguish.

### 2. Water molecule
- Repositioned the explanatory labels so they no longer cover the oxygen atom or O–H bonds.
- Reworded the angle heading as “about 104.5 degrees” for legibility.
- Explained partial positive and partial negative ends in words rather than relying only on Greek delta symbols.
- Kept the statement that partial charges are not full ionic charges.

### 3. Water pollution
- Reorganised farm runoff, sewage and industrial sources into evenly spaced cards.
- Separated the land, river and groundwater areas.
- Clarified that contaminants can enter surface water through runoff and can also seep towards groundwater.

### 4. Simple distillation
- Separated the flask, condenser and receiving-flask labels.
- Made the lower-end cooling-water inlet and upper-end outlet clear.
- Moved the non-volatile-impurity note away from the heating illustration.
- Kept the safety reminder separate from the gentle-heat label.

## Responsive rendering

Each of the four figures is placed inside its own `.u9-diagram-viewport`. At desktop widths the SVG fits the available content width. On narrow screens the illustration itself can be scrolled horizontally, while the explanatory caption remains outside the scroll area and wraps as normal text.

## Checks performed

- Rendered all four SVG figures to PNG and inspected their combined contact sheet.
- Transpiled all 71 TypeScript/TSX source files: no syntax diagnostics.
- Confirmed five Water lessons and five matching quiz banks.
- Confirmed all 60 quiz questions have four answer choices, valid answer indexes and explanations.
- Confirmed all five lesson routes and five quiz routes are present.

A full project `npm run typecheck` and `npm run build` still need to be run in the user's installed environment; this visual-only patch does not claim those full commands have passed.
