# Stodio — Design System

Source of truth for the Stodio agency site rebuild (Next.js + Tailwind v4). Every token below was
extracted from the original Webflow template CSS (`stodio.webflow.*.opt.min.css`) — do not invent
values; extend this file when a new token is genuinely needed.

---

## 1. Brand essence

Editorial, high-contrast, Swiss-adjacent agency aesthetic. Near-black ink on warm off-white,
one aggressive red accent used sparingly (icons, tags, hover states, selection). Large condensed
display headlines, generous whitespace, pill buttons, subtle blur-reveal motion. Dark inset bands
(#0a0a0a) alternate with light sections to create rhythm.

## 2. Color tokens

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0a0a0a` | Ink: headings, body on light, dark section backgrounds |
| `brand` | `#de322d` | Accent red: tag icons, highlights, hovers, brand moments only |
| `bg-light` | `#f3f3f3` | Page background (body) |
| `bg-primary` | `#f1f2f1` | Alternate light surface |
| `secondary-bg` | `#232323` | Soft-black surfaces: cards on dark, secondary buttons |
| `text-secondary` | `#5d5d5d` | Muted body text on light |
| `mute` | `#a5a5a5` | Muted text on dark, placeholders, meta text |
| `border` | `#e6e6e6` | Hairlines on light |
| `border-black` | `#232323` | Hairlines on dark |
| `white` | `#ffffff` | Text on dark, light buttons |

Contrast notes (ui-ux-pro-max: ≥4.5:1 body text): `#5d5d5d` on `#f3f3f3` ≈ 6.6:1 ✓;
`#a5a5a5` on `#0a0a0a` ≈ 8.6:1 ✓; never use `mute` on light backgrounds for body copy.

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Display / headings / tags | **Stack Sans Headline** (Google Fonts) | Condensed grotesque; weight 400–500; tight tracking |
| Body / UI | **Inter** (Google Fonts) | 400 regular, 500 medium, 600 semibold |

Load both via `next/font/google` with `display: swap`, subsets `latin`, CSS variables
`--font-heading` / `--font-body`.

### Type scale (desktop → 991px → 767px → 479px)

| Style | Size | Line-height | Letter-spacing |
|---|---|---|---|
| `heading-big` | 100 → 80 → 40px | 1.2em | -0.015em |
| `h1` | 100 → 64 → 60 → 38px | 1.2em | -0.015em |
| `h2` | 64 → 56 → 48 → 36px | 1.3em | -1.5px |
| `h3` | 40 → 36 → 32 → 28px | 1.4em | -0.015em |
| `h4` | 32 → 24px | 1.4em | -1px |
| `h5` | 28 → 20px | 1.5em | -0.05em |
| `h6` | 24 → 20px | 1.5em | -0.05em |
| `text-80` (stat numbers) | 80 → 60 → 40 → 28px | 1.2em | — |
| `text-xxl` | 22 → 20 → 18 → 16px | 1.2em | 0 |
| `text-xl` | 20 → 18px | 1.6em | -0.02em |
| `text-l` | 18 → 16px | 1.5em | -0.01em |
| `text-m` (body default) | 16px | 1.5em | -0.05em |
| `text-s` | 14px | 1.5em | 0 |
| `text-sm` | 12px | 1.5em | 0 |

Headings render in Stack Sans Headline at weight 400 (500 for h3/h4 variants). Body default:
Inter 400, `text-m`, color `primary` on `bg-light`.

## 4. Spacing & layout

- **Container**: `max-width: 1440px`, centered, padding-inline `40px` desktop / `20px` ≤767px.
- **Gap scale** (desktop values; step down one notch per breakpoint): 4, 8, 12, 16, 20, 24, 32, 36, 40, 44px.
- **Section rhythm**: large sections pad ~100–140px block on desktop, ~60–80px tablet, ~40–48px mobile.
- **Breakpoints** (match Webflow): 1440+, 1439–992, 991–768, 767–480, 479-.
- Dark sections are full-bleed `#0a0a0a`; inner cards on dark use `#232323` with `border-black` hairlines.

## 5. Radius

| Token | Value |
|---|---|
| `radius-4 / 8 / 12 / 16 / 24 / 32` | 4–32px (cards, images, inputs; step down on mobile) |
| `radius-44` | 44px — pill buttons |
| `radius-100` | 100% — avatars, icon dots |

## 6. Components

### Buttons
- Pill (`radius-44`), padding `12px 20px`, Inter 500, `transition: all .35s`.
- Variants: **light** (white bg / primary text — used on dark), **dark** (`#232323` bg / white text),
  **brand** (`#de322d` bg / white text), **outline** (transparent, 1px border).
- Hover: dual-layer text roll — two stacked labels inside `overflow:hidden`, translateY swap
  (~0.35s cubic-bezier). No layout shift (ui-ux-pro-max: stable hover states).
- Icon buttons: 44×44 min target, arrow icon, `cursor-pointer` everywhere.

### Tags / eyebrows
Stack Sans Headline, `text-l`, with a 20×20 red icon (asterisk/spark) preceding the label.
White on dark sections, primary on light.

### Cards
- Project/blog cards: image with `radius-16/24`, hover = subtle image zoom (scale 1.05, ~0.6s) +
  title color shift. Meta row: category label + date in `text-s` mute.
- On-dark cards (`#232323`): white headings, `mute` body.

### Forms
Inputs: light bg, 1px `border`, radius 12px, padding ~12–16px, Inter `text-m`,
placeholder `mute`; focus ring visible (brand or primary outline). Labels always present.
Newsletter (footer): pill input group — white bg pill, 8px padding, submit button inside right.

### Navbar
Floating pill bar (light: `#f3f3f3` bg, 1px `border`, radius 120px, padding `8px 8px 8px 16px`),
logo left, links center, CTA button right. "Pages" dropdown = mega-panel with page links +
thumbnails. Dark variant on dark heroes. Mobile: hamburger → full overlay.

### Footer
Dark `#0a0a0a`. Newsletter row ("Stay updated with Rise news"), link columns (Home, Studio,
Projects, Career, Blog, Contact + utility pages), social icons, huge "STODIO AGENCY" outline
wordmark at bottom, copyright row.

### Marquee
Infinite CSS-transform loop (e.g. careers: OPEN ROLES ✳ WE ARE HIRING ✳ …), duplicated track,
pause-free, linear timing. Respect `prefers-reduced-motion`: freeze marquees.

### FAQ / accordions
Question row + plus/close icon rotate, height auto-animate ~300ms ease. One open at a time.

### Stats / counters
`text-80` numbers with odometer-style digit roll on scroll into view; label `text-s` underneath.

## 7. Motion

- **Smooth scroll**: Lenis, `lerp: 0.1` site-wide (desktop only; native on touch).
- **Scroll reveals**: fade-up + blur — initial `opacity:0; translateY(20–40px); filter:blur(6–10px)`,
  animate to clear over ~0.8s cubic-bezier(.25,.1,.25,1), staggered 80–120ms within groups.
- **Hero image wipe**: width 0→100% reveal on load (about page hero).
- **Micro-interactions**: 150–350ms; only `transform`/`opacity`/`filter` (compositor-friendly).
- **Reduced motion**: all reveals collapse to instant opacity, marquees stop, Lenis disabled
  under `prefers-reduced-motion: reduce`.

## 8. Imagery

Duotone-heavy editorial photography (red/orange gel portraits), webp, `next/image` with proper
`sizes`; alt text mandatory. Radius per card spec. No emoji as icons — inline SVG only
(template's own icon set in `/public/images`).

## 9. Accessibility checklist (per ui-ux-pro-max)

- Body text ≥16px mobile; contrast ≥4.5:1 (see §2 notes).
- Visible focus states on all interactive elements; tab order = visual order.
- `aria-label` on icon-only buttons; `label for` on every form input.
- Touch targets ≥44×44px; `cursor-pointer` on all clickables.
- Marquees/reveals honor `prefers-reduced-motion`.
- One consistent max-width container everywhere; no horizontal scroll at 375/768/1024/1440.

## 10. Tailwind v4 mapping (implemented in `src/app/globals.css`)

| Template token | Tailwind token | Utility examples |
|---|---|---|
| primary `#0a0a0a` | `ink` | `bg-ink`, `text-ink` |
| brand `#de322d` | `brand` (+ `brand-hot` `#f7413d`) | `text-brand`, `bg-brand` |
| bg-light `#f3f3f3` | `paper` | `bg-paper` |
| bg-primary `#f1f2f1` | `paper-2` | `bg-paper-2` |
| secondary-bg `#232323` | `coal` | `bg-coal`, `border-coal` |
| text-secondary `#5d5d5d` | `smoke` | `text-smoke` |
| mute `#a5a5a5` | `mute` | `text-mute` |
| border `#e6e6e6` | `line` | `border-line` |

Type utilities: `text-display`, `text-h2`…`text-h6`, `text-stat`, `text-body-xxl/xl/l/m/s/xs`
(fluid clamp() sizes with paired line-height + letter-spacing). Fonts: `font-heading`
(Stack Sans Headline), `font-body` (Inter) via next/font variables. Radius: `rounded-card`
(24px), `rounded-card-lg` (32px), `rounded-pill` (44px). Layout helpers: `container-site`,
`section-pad`, `section-gap`, `marquee-track` (+ `spin-slow` keyframes).
Components reference tokens (`bg-paper`, `text-smoke`) — never raw hex in JSX.
