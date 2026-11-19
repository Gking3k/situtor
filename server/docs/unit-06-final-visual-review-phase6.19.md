# Unit 6 — final visual corrections (Phase 6.19)

This final pass addresses the five issues identified in the latest review screenshots. It changes only the Unit 6 lesson illustration source and the project status documentation; lesson prose outside the affected SVGs, quiz content, answer keys, routes and development access are unchanged.

## 1. Hydrogen bonding between water molecules

- The illustration represents two separate bent H2O molecules.
- Solid lines show the polar covalent O-H bonds within each molecule.
- Two lone pairs (four non-bonding electrons) are shown on each oxygen as two visually distinct pairs, rather than as one continuous row.
- The dashed line begins at the partially positive hydrogen on the first water molecule and approaches the oxygen edge/lone-pair region of the second molecule. It is drawn behind the acceptor oxygen so it does not cross the electron dots.
- The caption explicitly identifies the dashed line as an intermolecular attraction, not a covalent bond.
- The diagram is a simplified 2-D teaching model, not a to-scale depiction of molecular orbitals or three-dimensional electron density.

## 2. Group 1 and Period 3 diagram

- Group 1 is shown vertically with lithium above sodium.
- Period 3 is shown horizontally with all eight elements from sodium through argon.
- The horizontal guide begins under sodium, so the first element in Period 3 is included.
- The arrow is explained as a reading guide showing the sequence across the period, not the movement of particles.
- Shell arrangements shown are 2,8,1 through 2,8,8 for sodium through argon; the group comparison shows one outer-shell electron for lithium and sodium.

## 3. Heating curve

- The "Liquid warms" label has been moved clear of the second rising segment.
- "Gas warms" sits below and away from the final rising segment.
- Temperature-constant labels remain above the melting and boiling plateaus; phase labels remain below them.
- Axis labels remain Temperature (vertical) and Heat supplied (horizontal).

## 4. Coordinate covalent bond arrow

- Replaced the manually constructed open chevron with an SVG marker arrowhead that renders consistently.
- The arrow begins at nitrogen's lone pair and points towards H+.
- A separate short callout explains the electron-pair donation without colliding with the arrow.
- The same arrow treatment is used in desktop and mobile diagrams.

## 5. Ionic electron-transfer annotation

- Replaced the long free-floating sentence with a centred, bordered callout above the transfer arrow.
- The updated wording is: "One electron fills chlorine’s vacant 8th position".
- The callout does not overlap the sodium/chlorine headings or the transfer arrow.

## Validation performed

- TypeScript JSX transpilation completed with zero syntax diagnostics.
- All six diagram functions remain defined exactly once.
- The coordinate and ionic SVG arrow markers include explicit viewBoxes.
- No quiz data, answer keys, routes or access metadata were modified.
- A full application typecheck and Vite build still need to be run locally because this working copy does not contain `node_modules`.
