# Si Tutor brand update — Option B Academic

**Date:** 13 November 2026  
**Decision:** Rina selected Option B (Psi + open book).

## Canonical design

Preserve the approved artwork: a gold Psi with gold rays above an open deep-green book with gold accents, paired with the deep-green `situtor` wordmark and gold full stop. Do not redraw or reinterpret the symbol.

## Website lockup

- `src/assets/si-tutor-option-b-mark.png` — original approved mark artwork on its warm-ivory rounded app tile; retained as a source/reference asset.
- `src/assets/si-tutor-option-b-symbol.svg` — scalable vector-traced website version of the approved Psi + book artwork, without the ivory tile or its shadow. It preserves the original silhouette, gold/green palette and page details while remaining crisp at mobile and desktop sizes.
- `src/assets/si-tutor-option-b-symbol.png` — retained as the original transparent raster reference; it is no longer used by the shared website lockup.
- `src/components/BrandLogo.tsx` — shared header/footer lockup. It uses the SVG symbol and renders `situtor.` as live Manrope typography for crisp scaling.
- Header wordmark — deep green with a gold full stop.
- Footer wordmark — light lettering with a gold full stop for contrast on the dark footer; the symbol artwork remains unchanged.
- `public/favicon.png`, `public/favicon.svg`, and `public/apple-touch-icon.png` — retain the approved warm-ivory app-tile treatment for browser and home-screen icons.

The website header and footer do not place the logo inside an extra ivory/cream container. The footer lockup sits directly on the dark footer background.

## Scope boundary

This change is branding implementation only. It does not implement student accounts, payment processing, analytics or feedback delivery. Those remain separate, sequential development stages after review and approval.
