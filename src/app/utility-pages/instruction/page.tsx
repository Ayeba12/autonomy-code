import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Instructions",
  description:
    "How to customize this Next.js build: design tokens, fonts, counters, smooth scroll and the content layer.",
};

/* — Local building blocks (template `utility-text-wrap`) — */

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <Reveal className="flex flex-col gap-4 border-b border-line pb-10 last:border-b-0 last:pb-0">
    <h2 className="text-h5">{title}</h2>
    <div className="flex flex-col gap-4 text-body-l text-smoke">{children}</div>
  </Reveal>
);

const SubBlock = ({ title, items }: { title: string; items: ReactNode[] }) => (
  <div className="flex flex-col gap-2.5">
    <h3 className="text-body-xl font-medium text-ink">{title}</h3>
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-body-s text-ink">
    {children}
  </code>
);

const ExternalLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
  >
    {children}
  </a>
);

const codeSample = `import { CountUp } from "@/components/motion/CountUp";

// Counts 0 → 30 once 60% of the element scrolls into view.
<p className="text-stat font-heading">
  <CountUp value={30} suffix="+" />
</p>`;

/* — Page — */

const InstructionPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <h1 className="sr-only">Template instructions</h1>
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <Block title="1. Next.js">
            <p>
              If you&rsquo;re new to Next.js, take a look at the{" "}
              <ExternalLink href="https://nextjs.org/docs">
                Next.js App Router documentation
              </ExternalLink>{" "}
              to understand the basics and essentials. This project runs on
              Next.js 16 with the App Router, TypeScript and Tailwind CSS v4 —
              every route lives under <Code>src/app</Code>.
            </p>
          </Block>

          <Block title="2. Customization">
            <p>
              To make color, font and style modifications easier and quicker,
              this build defines every design token in{" "}
              <Code>src/app/globals.css</Code> inside a Tailwind v4{" "}
              <Code>@theme</Code> block. Change a value there — for example{" "}
              <Code>--color-brand</Code> — and it updates everywhere, because
              components only ever reference tokens like <Code>bg-paper</Code>{" "}
              or <Code>text-smoke</Code>, never raw hex values.
            </p>
            <p>
              Fonts are self-hosted through <Code>next/font/google</Code> in{" "}
              <Code>src/app/layout.tsx</Code>: Stack Sans Headline for headings
              and Inter for body text, exposed as the CSS variables{" "}
              <Code>--font-stack</Code> and <Code>--font-inter</Code> and mapped
              to the <Code>font-heading</Code> / <Code>font-body</Code>{" "}
              utilities.
            </p>
          </Block>

          <Block title="3. Style Guide">
            <p>
              Every token — colors, the full type scale, all button variants,
              tags, radius and spacing — is showcased on the{" "}
              <Link
                href="/utility-pages/style-guide"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                Style Guide page
              </Link>
              . The look and feel of this template can be changed easily, with
              just a few edits to the token block.
            </p>
          </Block>

          <Block title="4. SVG">
            <p>
              Icons in this template are custom made, inline SVG elements drawn
              with <Code>currentColor</Code> — see the spark icon in{" "}
              <Code>src/components/ui/Tag.tsx</Code>. To change their size,
              adjust the Tailwind <Code>size-*</Code> class (or the{" "}
              <Code>width</Code>/<Code>height</Code> attributes); to recolor
              them, change the text color of the parent element.
            </p>
          </Block>

          <Block title="5. How to Adjust the Counters">
            <SubBlock
              title="A. Where to Find It"
              items={[
                <>
                  The counter is the <Code>CountUp</Code> component at{" "}
                  <Code>src/components/motion/CountUp.tsx</Code>.
                </>,
                <>
                  You&rsquo;ll see it used in the stats section (numbers like
                  &ldquo;Projects Completed&rdquo; or &ldquo;Happy
                  Clients&rdquo;).
                </>,
              ]}
            />
            <SubBlock
              title="B. How to Change the Numbers"
              items={[
                <>
                  Simply change the <Code>value</Code> prop (and the optional{" "}
                  <Code>suffix</Code>, e.g. <Code>&quot;+&quot;</Code> or{" "}
                  <Code>&quot;%&quot;</Code>).
                </>,
                <>
                  The animation automatically counts up to the new number — you
                  don&rsquo;t need to edit the component.
                </>,
              ]}
            />
            <SubBlock
              title="C. How to Change the Animation Speed"
              items={[
                <>
                  In the component, look for{" "}
                  <Code>duration: 1.6</Code> inside the <Code>animate()</Code>{" "}
                  call — the count takes 1.6 seconds to complete.
                </>,
                <>
                  Change <Code>1.6</Code> to another value (like{" "}
                  <Code>3</Code> for a slower three-second count).
                </>,
              ]}
            />
            <SubBlock
              title="D. How to Change When It Starts Animating"
              items={[
                <>
                  The animation starts when 60% of the counter is visible
                  because of <Code>useInView(ref, {"{ amount: 0.6 }"})</Code>.
                </>,
                <>
                  Change <Code>0.6</Code> to <Code>0.3</Code> (30%) to start
                  earlier or <Code>0.8</Code> (80%) to start later.
                </>,
              ]}
            />
            <SubBlock
              title="E. How to Add a New Counter"
              items={[
                <>
                  Render <Code>{"<CountUp value={7500} suffix=\"+\" />"}</Code>{" "}
                  anywhere — usually inside an element styled with{" "}
                  <Code>text-stat</Code>.
                </>,
                <>
                  It works automatically, and under{" "}
                  <Code>prefers-reduced-motion</Code> the final value is set
                  instantly instead of animating.
                </>,
              ]}
            />
            <SubBlock
              title="F. Smooth Scroll (Lenis)"
              items={[
                <>
                  This template uses Lenis smooth scrolling via the{" "}
                  <Code>SmoothScroll</Code> provider in{" "}
                  <Code>src/components/motion/SmoothScroll.tsx</Code>, wrapped
                  around the app in <Code>src/app/layout.tsx</Code>. No setup is
                  required — it works automatically.
                </>,
                <>
                  To change the scroll speed, find <Code>lerp: 0.1</Code> and
                  adjust the value (lower = smoother, higher = faster).
                </>,
                <>
                  To disable smooth scroll, remove the{" "}
                  <Code>SmoothScroll</Code> wrapper from the root layout. It is
                  disabled automatically under{" "}
                  <Code>prefers-reduced-motion</Code>.
                </>,
              ]}
            />
            <pre className="overflow-x-auto rounded-2xl bg-coal p-6 text-body-s text-white">
              <code className="font-mono">{codeSample}</code>
            </pre>
          </Block>

          <Block title="6. Content & Components">
            <p>
              All copy and data flow through the content layer in{" "}
              <Code>src/content</Code>: pages call the <Code>content</Code>{" "}
              interface from <Code>src/content/source.ts</Code> (typed by{" "}
              <Code>src/content/types.ts</Code>), which is currently backed by
              local seed data. When a headless CMS is ready, add a new
              implementation and swap one export — no page code changes.
            </p>
            <p>
              Components are organized under <Code>src/components</Code>:{" "}
              <Code>ui/</Code> (buttons, tags, accordions),{" "}
              <Code>motion/</Code> (reveals, marquee, counters, smooth scroll),{" "}
              <Code>site/</Code> (navbar, footer, CTA), <Code>cards/</Code>{" "}
              (project and blog cards) and one folder per page section.
            </p>
          </Block>

          <Block title="7. Still Confused?">
            <p>
              If you still have any confusion or need clarification on
              anything, feel free to reach out to us directly. You can contact
              us via email at{" "}
              <a
                href="mailto:support@codexzel.com"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                support@codexzel.com
              </a>
              . We&rsquo;re happy to help!
            </p>
          </Block>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default InstructionPage;
