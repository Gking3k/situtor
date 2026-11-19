# Unit 08 — Visual refinement record (2 November 2026)

This revision updates the diagrams in the complete Unit 08 source package. It does not change the six-lesson structure or quiz set.

## Rebuilt figures

1. **Sodium chloride crystal and aqueous solution:** the crystal is shown as an alternating Na⁺/Cl⁻ lattice slice. The solution panel now shows separated, hydrated ions; water orientation is distinguished (oxygen end towards Na⁺, hydrogen ends towards Cl⁻); and the arrows show Na⁺ moving towards the negative cathode and Cl⁻ towards the positive anode. The figure explains that the solution can conduct because ions are mobile, while ions in the solid lattice are fixed.
2. **Acid–alkali titration:** the 0 mL callout no longer collides with the scale label. Numbered apparatus markers correspond to a separate, readable key for the burette, stopcock/tip, conical flask, white tile, and retort stand/clamp. The meniscus and downward-increasing scale reading are stated separately.
3. **Solubility factors:** the temperature illustration now has a labelled solubility axis and tick values, with an explicit note that curves depend on the salt. The pressure panel shows gas above the liquid under increased pressure. The stirring/crushing panel makes clear that these factors usually speed dissolving but do not raise the final equilibrium amount at the same temperature.
4. **Moisture changes:** the hygroscopic, deliquescent and efflorescent panels distinguish solid moisture uptake, uptake followed by dissolution, and water loss from hydrated crystals. Examples are labelled: silica gel, calcium chloride and washing soda decahydrate.

## Learning-content reinforcement

The NaCl conductivity explanation now explains partial-charge orientation in hydration: the oxygen end of water points towards sodium ions, and hydrogen ends point towards chloride ions. The water-of-crystallisation lesson adds a worked breakdown of the washing-soda efflorescence equation:

`Na₂CO₃·10H₂O(s) → Na₂CO₃·H₂O(s) + 9H₂O(g)`

The explanation identifies decahydrate and monohydrate, explains why nine water molecules are released, interprets `(s)` and `(g)`, and verifies the atom counts on both sides.

## Checks

- The 4 revised SVG figures were rendered to preview PNGs and visually inspected for layout collisions and readability.
- All TSX files were parsed/transpiled with TypeScript after the changes.
- The full Vite production build and real browser desktop/mobile checks still require locally installed project dependencies; this revision does not claim those checks were completed.

### Final readability pass

- Increased supporting label, axis, legend and explanatory text sizes across the four revised figures while preserving panel spacing.
- Re-rendered all four SVG components after the font-size pass and reran source, quiz-integrity and route checks.
- The standalone SVG rendering is a source-level visual check; a full in-browser responsive check still requires dependencies to be installed locally.
