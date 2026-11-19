# Unit 6 visual audit — Phase 6.17

Reviewed the six user-supplied screenshots and corrected the underlying SVG/React diagrams.

## Issues found and addressed

1. **Groups and periods:** the Period 3 connector passed through element cards and crossed symbols/configurations. It now uses short connector segments in the gaps between cards; the Group 1 connector is separate.
2. **Heating curve:** the `Solid warms` label overlapped the first `Temperature constant` label; liquid/boiling labels also competed with the curve. Labels now have separate positions above/below the relevant segments, with phase mixtures named explicitly.
3. **States of matter:** the previous diagram showed different particle counts (25 solid, 16 liquid, 10 gas) and weak motion cues. It now uses 16 schematic particles in each phase and clearer vibration/sliding/random-motion arrows.
4. **Hydrogen bonding:** the label box obscured the dashed attraction. It is moved above the line; the oxygen lone-pair region is marked, while the dashed line remains between a δ+ hydrogen and a neighbouring δ− oxygen.
5. **Coordinate bonding:** the desktop figure already contained before/after panels, but the global 600px SVG minimum width cropped the after panel on a narrow screen. A stacked mobile-specific diagram now presents both stages and the equation. The desktop view also labels the three H atoms in NH3.
6. **Ionic bonding:** the seven chlorine outer electrons were evenly spaced, so the figure did not show an obvious vacant eighth position; the transfer arrow ended near an occupied dot. The electrons now occupy seven of eight positions and the arrow points to the vacancy. The panels explicitly state that inner shells are omitted, and resulting ion arrangements are shown.

## Science checks

- Group 1 example: Li 2,1 and Na 2,8,1 have one outer electron.
- Period 3 examples Na–P shown all have three occupied shells.
- Na transfers one outer electron to Cl; resulting shell arrangements are Na+ 2,8 and Cl− 2,8,8. The overall equation remains 2Na + Cl2 -> 2NaCl.
- NH3 + H+ -> NH4+ is shown as donor-pair formation; the ammonium ion has four equivalent N—H bonds after formation.
- Each phase panel uses 16 particles solely for comparison; diagrams are labelled schematic and not to scale.
- The heating curve distinguishes warming segments from the melting and boiling plateaus.

## Files changed

- `src/data/chemicalCombinationLessons.tsx`
- `src/pages/unit-six-lessons.css`

No lesson order, quiz content, catalogue access flags, or payment logic was changed. All Unit 6 lessons and quizzes remain available during development.
