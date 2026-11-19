# Si Tutor design system — v0.1

## Brand
- Name: Si Tutor (working name; confirm domain and trademark clearance before launch)
- Tagline: Science, made easier.
- Personality: intelligent, approachable, playful, premium and modern
- Audience: senior secondary learners; first collection is SS1 Chemistry

## Approved logo — Option B Academic
- Rina selected **Option B**: the gold Greek Psi with gold rays above an open deep-green book with gold accents, paired with the `situtor.` wordmark and gold full stop.
- `src/assets/si-tutor-option-b-mark.png` preserves the approved artwork on its warm-ivory rounded app tile as the source/reference mark.
- `src/assets/si-tutor-option-b-symbol.png` is the transparent website symbol, with the original Psi/book artwork retained and the ivory tile removed.
- `src/components/BrandLogo.tsx` combines that transparent symbol with live Manrope typography. The header wordmark is deep green; the footer wordmark uses a light tone for contrast on the dark footer. Both retain the gold full stop.
- Do not redraw, reinterpret or simplify the Psi/book illustration. Keep its rays, book shape, gold treatment and proportions intact.
- Do not add a cream/ivory backing or rounded container to the website header or footer lockup. The original tile treatment remains appropriate for `public/favicon.png`, `public/favicon.svg` and `public/apple-touch-icon.png`.

## Colour tokens
| Token | Value | Intended use |
|---|---|---|
| Midnight navy | `#14243B` | Primary text, dark panels, footer |
| Soft white | `#F8FAFC` | Main page background |
| Deep teal | `#0F766E` | Primary actions and meaningful highlights |
| Bright teal | `#14B8A6` | Illustrative accents |
| Sunshine yellow | `#FBBF24` | Small highlights and decorative details |
| Brand green | `#013A2C` | Header wordmark and book illustration |
| Brand gold | `#C3921C` | Psi symbol and wordmark full stop |
| Warm ivory | `#FFF6DF` | Browser/app icon tile; not a website header/footer backing |
| Lavender mist | `#EEF2FF` | Secondary surfaces |
| Mint | `#DDF4EE` | Learning highlights |

## Typography
- Headings: Manrope, 700–800
- Body: DM Sans, 400–600
- Lesson explanations target approximately 15 px on phones and desktops, with a comfortable 1.85–1.9 line-height.
- Diagram captions and explanatory figure notes remain centred at every breakpoint and should be large enough to read without zooming.
- Quiz choices and feedback should remain comfortably readable and tappable on phones.
- Keep body copy readable, use comfortable line-height and avoid long, dense text blocks.

## UI principles
- Spacious layouts and clear hierarchy.
- Rounded cards, restrained shadows and subtle borders.
- Use playful colour in illustrations and learning moments, not on every surface.
- Give all interactive elements hover, focus, pressed, disabled, loading and error states.
- Do not use colour alone to communicate correctness or status.
- Respect reduced-motion preferences.
- Design phone layouts as a first-class experience.

## Imagery
Prefer purposeful scientific diagrams and original illustrations over generic stock photos. Keep formulas and diagrams legible at phone width. Confirm licensing for any external imagery before launch.
