# Unit 6 — Heating curve layout correction (Phase 6.21)

## Why the previous design was retired

The graph labels were repeatedly being placed against diagonal segments. This created a fragile layout: small changes in SVG scaling could make “Liquid warms” and “Gas warms” appear to touch or cross the curve.

## New design

The graph itself now contains only:
- Temperature and heat-supplied axes.
- The five-segment heating curve.
- Four marked phase-transition boundaries.
- Numbered markers 1–5 identifying the five stages from left to right.

All descriptive stage labels have been moved into a separate five-item key below the graph:
1. Solid warms — solid only; temperature rises.
2. Melting — solid and liquid coexist; temperature stays constant.
3. Liquid warms — liquid only; temperature rises.
4. Boiling — liquid and gas coexist; temperature stays constant.
5. Gas warms — gas only; temperature rises.

The key uses five columns on wide screens, three columns on medium screens, two on mobile, and one column on very narrow screens. The heating-curve SVG itself has no forced 600px minimum width and scales to the available width.

## Scientific intent

For a pure substance at fixed pressure, the rising sections represent warming within one state. The flat sections represent phase changes at constant temperature. The numbered markers match the ordered key below the graph.

## Scope

Only `src/data/chemicalCombinationLessons.tsx` and `src/pages/unit-six-lessons.css` are changed. Lesson wording outside the diagram, quizzes, answer keys, routes, and development access settings are unchanged.
