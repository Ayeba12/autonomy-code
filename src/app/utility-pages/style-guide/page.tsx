import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Style Guide",
  description:
    "Browse all the basic styles and components inside this UI Kit.",
};

/* — Data: mirrors design.md §2 / §10 exactly — */

const colors = [
  { name: "True Black", token: "ink", hex: "#000000", swatch: "bg-ink" },
  { name: "Metallic Gold", token: "brand", hex: "#B8893A", swatch: "bg-brand" },
  { name: "Gold Shadow", token: "brand-hot", hex: "#7A5A22", swatch: "bg-brand-hot" },
  { name: "Ivory", token: "paper", hex: "#F3EDE0", swatch: "border border-line bg-paper" },
  { name: "Deep Ivory", token: "paper-2", hex: "#ECE4D2", swatch: "border border-line bg-paper-2" },
  { name: "Soft Black", token: "coal", hex: "#1A1A1A", swatch: "bg-coal" },
  { name: "Smoke", token: "smoke", hex: "#5d5d5d", swatch: "bg-smoke" },
  { name: "Mute", token: "mute", hex: "#a5a5a5", swatch: "bg-mute" },
  { name: "Dove", token: "line", hex: "#DADEE1", swatch: "border border-line bg-line" },
  { name: "Breath Blue", token: "breath", hex: "#DDEAF2", swatch: "border border-line bg-breath" },
  { name: "Breath Tint", token: "breath-tint", hex: "#EAF2F8", swatch: "border border-line bg-breath-tint" },
  { name: "Champagne", token: "gold-light", hex: "#F0E2B4", swatch: "border border-line bg-gold-light" },
  { name: "White", token: "white", hex: "#ffffff", swatch: "border border-line bg-white" },
];

const headingStyles = [
  { util: "text-display", meta: "100px · 1.2 · -0.015em", sample: "Display" },
  { util: "text-h2", meta: "64px · 1.3", sample: "Heading 2" },
  { util: "text-h3", meta: "40px · 1.4", sample: "Heading 3" },
  { util: "text-h4", meta: "32px · 1.4", sample: "Heading 4" },
  { util: "text-h5", meta: "28px · 1.5", sample: "Heading 5" },
  { util: "text-h6", meta: "24px · 1.5", sample: "Heading 6" },
  { util: "text-stat", meta: "80px · 1.2", sample: "80+" },
];

const bodyStyles = [
  { util: "text-body-xxl", meta: "22px · 1.2" },
  { util: "text-body-xl", meta: "20px · 1.6" },
  { util: "text-body-l", meta: "18px · 1.5" },
  { util: "text-body-m", meta: "16px · 1.5" },
  { util: "text-body-s", meta: "14px · 1.5" },
  { util: "text-body-xs", meta: "12px · 1.5" },
];

const radiusSteps = [
  { util: "rounded-lg", label: "8px", cls: "rounded-lg" },
  { util: "rounded-xl", label: "12px", cls: "rounded-xl" },
  { util: "rounded-2xl", label: "16px", cls: "rounded-2xl" },
  { util: "rounded-card", label: "24px", cls: "rounded-card" },
  { util: "rounded-card-lg", label: "32px", cls: "rounded-card-lg" },
  { util: "rounded-pill", label: "44px", cls: "rounded-pill" },
];

const gapSteps = [
  { label: "4", cls: "w-1" },
  { label: "8", cls: "w-2" },
  { label: "12", cls: "w-3" },
  { label: "16", cls: "w-4" },
  { label: "20", cls: "w-5" },
  { label: "24", cls: "w-6" },
  { label: "32", cls: "w-8" },
  { label: "36", cls: "w-9" },
  { label: "40", cls: "w-10" },
  { label: "44", cls: "w-11" },
];

const sidebarLinks = [
  { label: "Color Style", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Buttons", href: "#buttons" },
  { label: "Tags & Links", href: "#components" },
  { label: "Radius & Spacing", href: "#spacing" },
];

/* — Local building blocks — */

/** Sub-title pill (template `.sg-sub-title`). */
const SectionPill = ({ children }: { children: string }) => (
  <div className="w-fit rounded-pill bg-white px-5 py-2.5">
    <Tag>{children}</Tag>
  </div>
);

const GuideSection = ({
  id,
  pill,
  children,
}: {
  id: string;
  pill: string;
  children: ReactNode;
}) => (
  <Reveal>
    <section id={id} className="flex scroll-mt-36 flex-col gap-8" aria-label={pill}>
      <SectionPill>{pill}</SectionPill>
      {children}
    </section>
  </Reveal>
);

/* — Page — */

const StyleGuidePage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Styles"
          title="Style Guide"
          subline="Browse all the basic styles and components inside this UI Kit"
        />

        <div className="flex items-start gap-24 max-lg:flex-col max-lg:gap-10">
          {/* Sticky sidebar anchor nav */}
          <aside className="sticky top-36 w-full max-w-[417px] shrink-0 rounded-2xl border border-line bg-paper-2 p-6 max-lg:static max-lg:max-w-none">
            <nav aria-label="Style guide sections" className="flex flex-col gap-3">
              {sidebarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 rounded-lg bg-white p-4 text-body-l font-medium text-ink transition-colors duration-300 hover:text-brand"
                >
                  <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-20">
            {/* 1. Colors */}
            <GuideSection id="colors" pill="Color Style">
              <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2">
                {colors.map((color) => (
                  <div key={color.token} className="flex flex-col gap-3">
                    <div className={`min-h-[152px] rounded-2xl ${color.swatch}`} />
                    <div className="flex items-center justify-between gap-2 rounded-pill border border-line bg-white py-1.5 pr-1.5 pl-4">
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate text-body-m font-medium">
                          {color.name}
                        </span>
                        <span className="truncate text-body-xs text-smoke">
                          {color.token}
                        </span>
                      </span>
                      <span className="shrink-0 rounded-pill bg-paper px-3 py-1.5 text-body-s text-smoke">
                        {color.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 rounded-card border border-line bg-white p-8 max-md:p-5">
                <p className="text-body-s text-smoke">
                  <span className="font-medium text-ink">gold-thread</span> · the
                  signature divider (champagne into gold into shadow)
                </p>
                <div aria-hidden className="gold-thread" />
              </div>
            </GuideSection>

            {/* 2. Typography */}
            <GuideSection id="typography" pill="Typography">
              <p className="font-heading text-h3 break-words text-ink">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>

              <div className="flex flex-col">
                <div className="grid grid-cols-[220px_1fr] items-baseline gap-6 border-b border-line py-3 text-body-s text-smoke max-md:grid-cols-1 max-md:gap-1">
                  <span>Text style · size · line height</span>
                  <span>Specimen — Stack Sans Headline</span>
                </div>
                {headingStyles.map((style) => (
                  <div
                    key={style.util}
                    className="grid grid-cols-[220px_1fr] items-baseline gap-6 border-b border-line py-6 max-md:grid-cols-1 max-md:gap-2"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="text-body-m font-medium">{style.util}</span>
                      <span className="text-body-s text-smoke">{style.meta}</span>
                    </span>
                    <span className={`font-heading break-words text-ink ${style.util}`}>
                      {style.sample}
                    </span>
                  </div>
                ))}
              </div>

              <SectionPill>Body Text</SectionPill>
              <div className="flex flex-col">
                <div className="grid grid-cols-[220px_1fr] items-baseline gap-6 border-b border-line py-3 text-body-s text-smoke max-md:grid-cols-1 max-md:gap-1">
                  <span>Text style · size · line height</span>
                  <span>Specimen — Inter</span>
                </div>
                {bodyStyles.map((style) => (
                  <div
                    key={style.util}
                    className="grid grid-cols-[220px_1fr] items-baseline gap-6 border-b border-line py-5 max-md:grid-cols-1 max-md:gap-2"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="text-body-m font-medium">{style.util}</span>
                      <span className="text-body-s text-smoke">{style.meta}</span>
                    </span>
                    <span className={`text-smoke ${style.util}`}>
                      Editorial, high-contrast, Swiss-adjacent agency aesthetic.
                    </span>
                  </div>
                ))}
                <div className="grid grid-cols-[220px_1fr] items-baseline gap-6 py-5 max-md:grid-cols-1 max-md:gap-2">
                  <span className="text-body-m font-medium">Weights</span>
                  <span className="flex flex-wrap gap-6 text-body-l">
                    <span className="font-normal">Regular 400</span>
                    <span className="font-medium">Medium 500</span>
                    <span className="font-semibold">Semibold 600</span>
                  </span>
                </div>
              </div>
            </GuideSection>

            {/* 3. Buttons */}
            <GuideSection id="buttons" pill="Buttons">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-5 rounded-card border border-line bg-white p-8 max-md:p-5">
                  <p className="text-body-s text-smoke">On light — dark · brand · outline-dark</p>
                  <div className="flex flex-wrap items-center gap-5">
                    <Button href="#buttons" variant="dark">
                      Button
                    </Button>
                    <Button href="#buttons" variant="brand">
                      Button
                    </Button>
                    <Button href="#buttons" variant="outline-dark">
                      Button
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 rounded-card bg-ink p-8 max-md:p-5">
                  <p className="text-body-s text-mute">On dark — light · outline-light</p>
                  <div className="flex flex-wrap items-center gap-5">
                    <Button href="#buttons" variant="light">
                      Button
                    </Button>
                    <Button href="#buttons" variant="outline-light">
                      Button
                    </Button>
                  </div>
                </div>
              </div>
            </GuideSection>

            {/* 4. Tags & links */}
            <GuideSection id="components" pill="Tags & Links">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-10 rounded-card border border-line bg-white p-8 max-md:p-5">
                  <Tag>Tag on light</Tag>
                  <ArrowLink href="#components">Arrow link</ArrowLink>
                </div>
                <div className="flex flex-wrap items-center gap-10 rounded-card bg-ink p-8 max-md:p-5">
                  <Tag tone="light">Tag on dark</Tag>
                </div>
              </div>
            </GuideSection>

            {/* 5. Radius & spacing */}
            <GuideSection id="spacing" pill="Radius & Spacing">
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
                {radiusSteps.map((step) => (
                  <div key={step.util} className="flex flex-col gap-3">
                    <div className={`h-24 w-full border border-line bg-white ${step.cls}`} />
                    <p className="text-body-s text-smoke">
                      <span className="font-medium text-ink">{step.util}</span> · {step.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 rounded-card border border-line bg-white p-8 max-md:p-5">
                <p className="text-body-s text-smoke">
                  Gap scale — 4 / 8 / 12 / 16 / 20 / 24 / 32 / 36 / 40 / 44px
                </p>
                <div className="flex flex-wrap items-end gap-6">
                  {gapSteps.map((step) => (
                    <div key={step.label} className="flex flex-col items-center gap-2">
                      <div className={`h-11 rounded-sm bg-brand ${step.cls}`} />
                      <span className="text-body-xs text-smoke">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GuideSection>
          </div>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default StyleGuidePage;
