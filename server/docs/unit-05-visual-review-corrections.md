# Unit 05 — Visual and Quiz Review Corrections

## Magnesium oxide coefficient/subscript question

The corrected question distinguishes four ideas:

- The coefficient 2 multiplies the entire formula that follows it.
- `2Mg` counts two magnesium atoms.
- `2MgO` counts two MgO formula units.
- The formula MgO expresses a 1:1 ratio of Mg²⁺ ions to O²⁻ ions in an extended ionic lattice. It should not be taught as a discrete MgO molecule.
- The subscript 2 in O₂ means each oxygen molecule contains two oxygen atoms.

The correct option and answer explanation state these distinctions explicitly.

## Water-formation particle diagram

The revised diagram shows:
- Two H₂ molecules, each with one single covalent bond.
- One O₂ molecule with a double covalent bond.
- Two bent H₂O molecules, each with two O—H single bonds.
- Four hydrogen atoms and two oxygen atoms on both sides of the balanced equation.

The caption makes clear that the diagram is a simplified particle model and is not drawn to scale.

## Three laws of chemical combination diagram — layout and particle-model correction

The comparison is arranged as three independent, equal-height panels with a dedicated caption beneath the SVG. No explanatory sentence is positioned across the panels.

The conservation-of-mass panel uses the carbon combustion example:

`C + O₂ → CO₂`

The particle model shows one carbon atom and one double-bonded oxygen molecule before the reaction, then one linear carbon dioxide molecule after the reaction. It labels the atom inventory (1 C and 2 O on both sides), identifies the closed system, and separates the mass accounting into:

- Reactants: 12 g C + 32 g O₂ = 44 g.
- Product: 44 g CO₂.
- Comparison: 44 g = 44 g.

The constant-composition panel places the two pure-water samples in separate cards and simplifies both H:O mass ratios to 1:8.

The multiple-proportions panel keeps carbon fixed at 12 g, compares 16 g oxygen in CO with 32 g oxygen in CO₂, and visualises the 1:2 comparison with proportional bars.

The diagram uses a wider SVG canvas with horizontal scrolling on narrow screens rather than compressing labels and content into narrow columns.

## Quiz question-card spacing

The former visible `<legend>` caused the browser to render the prompt across the fieldset's top border. The question card now uses:
- A fieldset labelled by its visible question heading using `aria-labelledby`.
- A regular content header with top padding.
- A question number aligned left and topic badge aligned right.
- The prompt below that row.

This removes the browser-specific legend spacing and restores the missing header information.

## Files updated

- `src/data/symbolsFormulaeQuizzes.ts`
- `src/data/symbolsFormulaeLessons.tsx`
- `src/components/QuizExperience.tsx`
- `src/pages/quiz.css`

No payment gates or lesson availability settings were changed.


## Phase 6.14 — laws diagram responsive panel layout

- Replaced the single 1120px-wide three-panel SVG with three independent SVG panels.
- The panels use a responsive CSS grid: three columns on wide screens, two on medium screens, and one column on narrow screens.
- Removed the 980px minimum-width rule and horizontal-scroll dependency that caused the first panel to occupy the visible area on narrow screens.
- Kept the conservation-of-mass example and numerical values unchanged; moved the CO₂ particle group slightly inward so it has additional clearance inside its inner frame.
- Added a short explanatory caption to each panel and retained a shared caption below the group.
