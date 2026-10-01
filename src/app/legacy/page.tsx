import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { DiagonalArrow } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { pillars } from "@/content/local/pillars";
import type { ImageRef } from "@/content/types";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Legacy Builder",
  description:
    "The deepest room of the practice. One to two people at a time, rare and private, by invitation.",
  path: "/legacy",
});

/** The room in four plain facts, each taken from the copy below. */
const facts = [
  "One to two people at a time.",
  "A year beside DK.",
  "Across all five pillars.",
  "By invitation only.",
];

interface RouteStep {
  label: string;
  line: string;
  href?: string;
  image: ImageRef;
}

/** How a person arrives at Legacy: the ladder, in order. */
const route: RouteStep[] = [
  {
    label: "The Autonomy Compass",
    line: "The door. Every engagement begins here.",
    href: "/autonomy-compass",
    image: {
      src: "/images/home/tier-scan.webp",
      alt: "Graphite sketch of a woman at an open doorway, map in hand, the door frame drawn in gold",
    },
  },
  {
    label: "SABI CORE",
    line: "The flagship year, one to one with DK.",
    href: "/sabi-core",
    image: {
      src: "/images/pillars/pillar-relationships.webp",
      alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
    },
  },
  {
    label: "Legacy Builder",
    line: "When the Blueprint makes the route plain.",
    image: {
      src: "/images/about/about-porch.webp",
      alt: "Graphite sketch of two wooden chairs and a small table on a porch, one cup drawn in gold",
    },
  },
];

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children }: { children: string }) => (
  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">{children}</p>
);

/** One step on the route; the first two link on, the last is this room. */
const RouteCard = ({ step, index }: { step: RouteStep; index: number }) => {
  const body = (
    <>
      <div className="overflow-hidden rounded-card bg-paper">
        <Image
          src={step.image.src}
          alt={step.image.alt}
          width={1200}
          height={900}
          sizes="(max-width: 767px) 100vw, 33vw"
          className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4 pt-5">
        <p className="font-heading text-body-s tracking-[0.16em] text-brand-hot uppercase">
          {String(index + 1).padStart(2, "0")}
          {!step.href && " · This room"}
        </p>
        {step.href && (
          <DiagonalArrow className="text-ink transition-colors duration-300 group-hover:text-brand" />
        )}
      </div>
      <h3 className="mt-2 text-h5 transition-colors duration-300 group-hover:text-brand">
        {step.label}
      </h3>
      <p className="mt-2 text-body-m text-slate">{step.line}</p>
    </>
  );

  return step.href ? (
    <Link href={step.href} className="group block h-full">
      {body}
    </Link>
  ) : (
    <div className="h-full">{body}</div>
  );
};

/**
 * /legacy — the deepest tier, named without being sold (content.md §4.6),
 * drawn in the house style. The copy stays verbatim and quiet; the
 * drawings carry the room. No CtaSection: the page closes on its own
 * enquiry block, where the one price line appears.
 */
const LegacyPage = () => (
  <>
    <Navbar tone="dark" />
    <main className="bg-paper">
      {/* Hero — the headline beside two women at a desk with an open book */}
      <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
        <div className="container-site grid grid-cols-[1.1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Reveal>
              <Tag>Legacy Builder · By invitation</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-[720px] text-display">The deepest room.</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-[520px] text-body-xl text-slate">
                One to two people at a time. Rare and private, by invitation.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-card">
              <Image
                src="/images/home/tier-legacy.webp"
                alt="Graphite sketch of two women in quiet conversation at a desk by a tall window, a bound book open between them, its page edges in gold"
                width={1600}
                height={1200}
                preload
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it is — the body copy beside the room in four facts */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-[1.6fr_1fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <Eyebrow>What it is</Eyebrow>
            <p className="mt-5 max-w-[720px] text-body-xxl text-ink">
              Legacy Builder is the highest-depth engagement of the practice: a year
              beside DK across all five pillars, for a person whose work
              carries weight beyond themselves. It is not applied for so much
              as arrived at. Most Legacy Builder conversations begin inside SABI
              CORE, when the Blueprint makes the route plain.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="border-b border-line">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-4 border-t border-line py-5 text-body-l text-ink"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* The five pillars — the whole ground the year covers */}
      <section className="py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site">
          <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
            <div>
              <Eyebrow>The ground</Eyebrow>
              <h2 className="mt-4 text-h2">All five pillars, held together.</h2>
            </div>
            <p className="max-w-[380px] pb-2 text-body-m text-slate">
              Every pillar the practice works with, held across the one
              year.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-md:mt-8 max-md:grid-cols-1 max-md:gap-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-card bg-white max-md:flex-row max-md:items-center">
                  {pillar.image && (
                    <Image
                      src={pillar.image.src}
                      alt={pillar.image.alt}
                      width={1000}
                      height={1000}
                      sizes="(max-width: 767px) 112px, (max-width: 1023px) 33vw, 20vw"
                      className="aspect-square w-full object-cover max-md:aspect-auto max-md:min-h-28 max-md:w-28 max-md:shrink-0 max-md:self-stretch"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6 max-md:px-5 max-md:py-4">
                    <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                      {pillar.index}
                    </span>
                    <p className="mt-2 font-heading text-h6 text-ink">{pillar.name}</p>
                    <p className="mt-2 text-body-s text-slate">{pillar.movement}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The route — how Legacy is arrived at, along a gold thread */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site">
          <Reveal className="max-w-[640px]">
            <Eyebrow>The route</Eyebrow>
            <h2 className="mt-4 text-h2">Arrived at, not applied for.</h2>
          </Reveal>
          <div className="relative mt-12 max-md:mt-8">
            <div
              className="absolute top-0 right-0 left-0 h-px bg-brand/40 max-md:hidden"
              aria-hidden
            />
            <div className="grid grid-cols-3 gap-x-5 gap-y-10 pt-10 max-md:grid-cols-1 max-md:pt-0">
              {route.map((step, i) => (
                <Reveal key={step.label} delay={i * 0.08} className="relative h-full">
                  <span
                    className="absolute -top-[45px] left-0 size-2.5 rounded-full bg-brand max-md:hidden"
                    aria-hidden
                  />
                  <RouteCard step={step} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquire — the one price line, beside the window at dawn. The
          page's single breath accent. */}
      <section className="bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-[0.8fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <div className="overflow-hidden rounded-card">
              <Image
                src="/images/about/about-window.webp"
                alt="Graphite sketch of a woman seated by a tall window, looking out over a misty lake, the dawn line drawn in gold"
                width={900}
                height={1200}
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Enquire</Eyebrow>
              <p className="mt-5 max-w-[560px] text-body-xxl text-ink">
                If Legacy Builder is your honest route, the conversation begins in
                writing.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex max-w-[560px] flex-col items-start gap-6 rounded-card bg-white px-9 py-10 max-md:px-6 max-md:py-8">
                <p className="font-heading text-h4">
                  Legacy Builder · £10,000 · done with you · by invitation only.
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                  <Button href="/contact" variant="brand">
                    Enquire in writing
                  </Button>
                  <ArrowLink href="/autonomy-compass">Begin with the Compass</ArrowLink>
                </div>
                {/* Money rules: every financial decision carries a 24-hour written hold. */}
                <p className="text-body-s text-slate">
                  A 24-hour written hold sits before any financial decision. No
                  rush. No force.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default LegacyPage;
