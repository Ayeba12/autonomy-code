# The Autonomy Code — autonomycode.com

Website for **The Autonomy Code**, the flagship of The NoGraGra Practice by DK Jonah.
Built on the studio's Next.js 16 template base (see `content.md` for the full content
system and `design.md` for the design system), prepared for **WordPress headless CMS**,
deployed on **Vercel** with **GitHub Actions** CI.

Repo: https://github.com/Ayeba12/autonomy-code.git (push when ready).

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19, TypeScript) |
| Styling | Tailwind CSS v4 — tokens in [`design.md`](./design.md) + `src/app/globals.css` |
| Motion | Lenis (smooth scroll) + Motion (reveals, sliders, counters) |
| Fonts | Inter + Stack Sans Headline via `next/font/google` |
| Content | CMS-agnostic content layer (`src/content`) — local seed data today, WordPress later |
| Hosting | Vercel |
| CI/CD | GitHub Actions (`.github/workflows/ci.yml`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # typecheck
```

## Project structure

```
design.md               Design system — colors, type scale, spacing, motion rules
src/app/                Routes (App Router) — one folder per page
src/components/
  ui/                   Primitives: Button, Tag, ArrowLink, Accordion, RichText
  motion/               SmoothScroll, Reveal, Marquee, CountUp
  site/                 Navbar, Footer, CtaSection, PricingPlans, FaqSection, TestimonialSlider
  home|about|projects|blogs|career|contact|pricing|utility/   page sections
src/content/
  types.ts              Domain models (Project, BlogPost, JobOpening, …)
  source.ts             ContentSource interface + active source export
  local/                Seed data implementing ContentSource
public/images/          All template assets, self-hosted
```

## Content layer → WordPress headless

Every page reads content exclusively through the `ContentSource` interface
(`src/content/source.ts`). Swapping to WordPress requires **zero page changes**:

1. Run WordPress locally with **LocalWP**; install **WPGraphQL** (+ ACF & WPGraphQL for ACF).
2. Model content: posts → `BlogPost`; custom post types `project`, `job`, `testimonial`
   + options pages for pricing/stats/services mirroring `src/content/types.ts`.
3. Implement `src/content/wp/index.ts` — a `ContentSource` backed by WPGraphQL queries
   (endpoint via `WORDPRESS_API_URL` env var).
4. Change one line in `source.ts`: `export { wpContent as content } from "./wp";`
5. Add ISR: revalidate content pages via `revalidateTag(..., "max")` from a WP webhook
   (see `_analysis/next16-notes.md` for the Next 16 two-argument form).

## Deployment (Vercel)

1. Push this repo to GitHub (`git remote add origin … && git push -u origin main`).
2. Import the repo at vercel.com — Next.js is auto-detected, zero config.
3. Set env vars (later: `WORDPRESS_API_URL`) in Vercel project settings.
4. Every push to `main` → production deploy; every PR → preview deploy.
5. CI (`.github/workflows/ci.yml`) runs lint, typecheck and build on each push/PR so
   broken builds never reach Vercel.

## Credits

Design: [Codexzel](https://www.codexzel.com/) — Stodio Webflow template.
Rebuild: Next.js + Tailwind implementation with a CMS-ready content architecture.
