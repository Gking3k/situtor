# Si Tutor — responsive audit

**Date:** 5 November 2026
**Scope:** Shared site shell and all 11 Chemistry curriculum units.  
**Goal:** Prepare the current learning experience for a mobile-first client review before enabling analytics, feedback delivery or paid access.

**Brand update (13 November 2026):** The earlier Ψ-only logo mentioned in this historical audit has been replaced by Rina’s approved Option B Academic Psi + open-book artwork. The current, exact assets and usage rules are documented in `docs/brand-option-b-2026-11-13.md`.

## Changes in this pass

- Added a final shared visual refinement layer (`src/polish.css`) after the base and responsive styles.
- Replaced the generic atom mark with a custom Ψ letterform based on the client's supplied reference; updated the favicon to match.
- Increased lesson body copy, diagram captions, quiz choices and feedback text modestly for easier reading.
- Standardised explanatory diagram captions to remain centred across all phone, tablet and desktop breakpoints.
- Moved the Unit 06 covalent-bond caption outside its horizontally scrollable SVG region so it stays fully visible and centred on phones.
- Moved the mobile navigation panel inside the sticky header so its absolute positioning is anchored to the header rather than the document viewport.
- Added Escape-key dismissal for the mobile menu and retained the menu button's accessible label, `aria-expanded` state and `aria-controls` relationship.
- Added a shared responsive override layer (`src/responsive.css`) after the base and page styles.
- Added consistent width containment and `min-width: 0` protections to page, grid, card, lesson and quiz regions to reduce accidental page-level horizontal overflow.
- Improved narrow-screen wrapping for curriculum entries, headings, lesson text, quiz prompts, answer choices and long scientific terms.
- Made the curriculum summary stack cleanly on phones and reduced the curriculum to a single-column card layout at mobile widths.
- Hardened lesson layouts, mobile table wrappers, formula text, quiz progress/sidebar panels, quiz result panels, footers, FAQ accordions and contact/privacy copy for narrow screens.
- Preserved detailed diagrams at readable dimensions inside local horizontal-scroll viewports where shrinking would make labels too small. Added the same local-scroll treatment to older Unit 03 diagrams.
- Added a short-landscape layout adjustment for small phone screens in landscape orientation.
- Kept reduced-motion handling in place.

## Existing responsive unit treatments retained

- Units 01–05: unit-specific card, flow, comparison and apparatus grids already collapse at mobile breakpoints; Unit 03 detailed figures and Unit 04/05 diagrams use local horizontal scrolling.
- Unit 06: periodic-table and detailed electron/diagram layouts use local scroll areas; the heating-curve key and other card grids collapse to multiple columns or one column at small widths.
- Unit 07: diagram canvases and tables scroll inside their cards; quiz progress and question choices reflow for mobile.
- Unit 08: detailed acid/base and salt diagrams retain readable internal canvases, with captions kept outside the scrolling figure region where the markup provides a viewport.
- Unit 09: the detailed diagrams use dedicated scroll viewports, leaving captions readable beneath each figure.
- Unit 10: SVG diagrams and wide tables scroll inside their own wrappers; content grids stack on mobile.
- Unit 11: SVG diagrams and wide tables scroll inside their own wrappers; concept cards stack on mobile.

## Planned client-review feature scope — not enabled in this build

1. Privacy-conscious aggregate analytics for lesson, quiz and FAQ usage.
2. A real feedback/support delivery workflow behind the existing FAQ/contact experience.
3. A one-time, non-recurring payment that unlocks the full Chemistry collection, keeping the agreed free introductory lesson available. The server must verify payment and enforce entitlement.

The current review build does not enable purchases, accounts, analytics collection or feedback submission.

## Local verification checklist

Run these commands from the project root after installing dependencies:

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Then inspect the following viewport widths in browser responsive mode or on real devices:

| Width | Purpose |
|---:|---|
| 320 px | Small phone; no clipped text or page-level horizontal scrolling |
| 360 px | Common compact Android width |
| 390 px | Common modern phone width |
| 430 px | Large phone width |
| 768 px | Tablet portrait / breakpoint transition |
| 1024 px | Tablet landscape / compact laptop |
| 1440 px | Desktop layout |

Check at least:

- Homepage, Explore curriculum, FAQs, About, Contact and Privacy.
- One lesson each from Units 01, 03, 06, 08, 09, 10 and 11, plus at least one lesson using the common curriculum reader.
- One quiz each from the common quiz template and the newest unit quizzes.
- Mobile menu open/close, Escape dismissal, focus visibility and navigation after a selection.
- No horizontal scrolling on the page itself. Wide tables and detailed diagrams may scroll only inside their own bounded containers.
- Diagrams retain readable labels, arrows and captions; captions must not be hidden inside clipped viewports.
- Quiz options have comfortable touch targets; long questions and answers wrap without pushing the viewport wider.
- Browser back/forward and direct Vercel deep links load correctly.
- Keyboard navigation and reduced-motion preferences remain usable.

## Validation status for this source pass

- Source-level layout audit and shared CSS/header updates completed.
- Shared typography and caption-alignment refinements have been added for all 11 curriculum units.
- Psi-inspired brand symbol is in the header, footer and favicon.
- Full dependency installation did not complete in the working environment, so a full Vite build and live browser viewport inspection could not be performed here.
- Treat the local typecheck/build and the manual viewport checklist above as required before deploying the client-review URL.
