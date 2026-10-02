import type { Metadata } from "next";
import Image from "next/image";
import { CloseBand } from "@/components/ladder/CloseBand";
import { SabiOsSection } from "@/components/ladder/SabiOsSection";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import {
  RESET_CTA_AVATAR,
  RESET_CTA_HREF,
  RESET_CTA_LABEL,
  RESET_CTA_LINE,
} from "@/components/site/ResetCta";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "SABI CORE: One-to-One Strategy Year",
  description:
    "The flagship year of The Autonomy Code. A year of strategy, one to one with DK, built on the SABI OS operating system. A structured system, not a course.",
  path: "/sabi-core",
  image: "/images/og/sabi-core.jpg",
  keywords: ["SABI CORE", "SABI OS", "one to one strategy programme", "year-long coaching programme", "strategy coaching for consultants"],
});

/** Adapted from the Compass lists, set for a year of one-to-one work. */
const forList = [
  "You have built something real, and you are ready to give it a year of structure.",
  "Your private wisdom is stronger than your public clarity, and you want that to change.",
  "You are done borrowing other people's language and frameworks for work that is already yours.",
  "You can hold a steady rhythm, at a pace your real life can keep.",
  "You want to be held closely, and held to account.",
];

const notForList = [
  "You want a hype formula, or someone to shout you into action.",
  "You want a quick fix that ignores your real life.",
  "You are looking for a course to consume rather than a system to build.",
  "You want the work carried out for you. SABI CORE is strategy; the doing stays with you.",
  "You want more information without ownership.",
  "You have not yet taken the Compass. Every engagement begins there.",
];

/** Gold spark bullet, as on the Compass fit lists. */
const Spark = () => (
  <svg className="mt-1.5 size-4 shrink-0 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

const Cross = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-mute"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

/**
 * /sabi-core — the flagship year (content.md §4.5; one-to-one wording per
 * the 30 Sept brief), drawn in the house style. Price appears once,
 * plainly, at the application block. The page carries its own soft
 * close, so the shared CtaSection is deliberately not used here.
 */
const SabiCorePage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      {/* Hero — headline beside two hands drawing one straight line. */}
      <section className="m-2 rounded-card bg-paper pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
        <div className="container-site grid grid-cols-[1.1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <Reveal>
              <Tag>SABI CORE · The flagship year</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-[720px] text-display">
                A year of building from owned ground.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-[520px] text-body-xl text-slate">
                A year, one to one. A structured system, not a course.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-card">
              <Image
                src="/images/reset/reset-move-align.webp"
                alt="Graphite sketch of two hands drawing one straight line along a ruler, the new line in gold"
                width={1200}
                height={1500}
                preload
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-[1fr_2fr] gap-10 max-md:grid-cols-1 max-md:gap-6">
          <Reveal>
            <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
              What it is
            </p>
            <div className="mt-4 w-16 border-t border-line" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[720px] text-body-xxl text-ink">
              SABI CORE is the annual premium programme of The Autonomy Code.
              Across the year you work on what you are actually building, one
              pillar at a time where that is what it takes, with diagnostic
              deepening across all five. It is strategy, one to one: the work
              itself stays in your hands. Held closely, and held to account. No
              gra gra.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One wide calm drawing — a breath between the words and the rooms. */}
      <section className="bg-white pb-24 max-lg:pb-16 max-md:pb-12">
        <div className="container-site">
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-card-lg max-md:rounded-card">
                <Image
                  src="/images/about/about-still-life.webp"
                  alt="Graphite sketch of a closed notebook, a glass of water and a single pebble on a table, the pebble in gold"
                  width={900}
                  height={1200}
                  sizes="100vw"
                  className="aspect-[2/1] w-full object-cover object-[50%_55%] max-md:aspect-[4/3]"
                />
              </div>
              <figcaption className="mt-3 text-center text-body-s text-slate">
                A year is long enough to build something that holds.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* SABI OS: the four rooms and the operating flow (breath accent) */}
      <SabiOsSection />

      {/* Who it is for / not for — two cards, as on the Compass */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <Reveal className="h-full">
            <div className="h-full rounded-card border-t-2 border-brand bg-paper p-10 max-md:p-6">
              <h2 className="text-h5">The year is for you if</h2>
              <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
                {forList.map((item) => (
                  <li key={item} className="flex gap-4">
                    <Spark />
                    <span className="text-body-l text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-card border-t-2 border-brand-soft bg-ink p-10 text-paper max-md:p-6">
              <h2 className="text-h5 text-paper">And not for you if</h2>
              <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
                {notForList.map((item) => (
                  <li key={item} className="flex gap-4">
                    <Cross />
                    <span className="text-body-l text-paper/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How you enter — beside the doorway drawing */}
      <section className="bg-paper py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-[0.8fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <div className="overflow-hidden rounded-card">
              <Image
                src="/images/home/tier-scan.webp"
                alt="Graphite sketch of a woman at an open doorway, map in hand, the door frame drawn in gold"
                width={1600}
                height={1200}
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                How you enter
              </p>
              <p className="mt-5 max-w-[560px] text-body-xxl text-ink">
                SABI CORE follows the Autonomy Compass and the Claim Intensive.
                The Blueprint leads the recommendation. If the year is your
                honest route, you will know why, in writing, before you commit.
              </p>
            </Reveal>

            {/* The application block: the one place the price appears. */}
            {/* TODO: dedicated application form later; /contact carries enquiries until then. */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex max-w-[560px] flex-col items-start gap-6 rounded-card bg-white px-9 py-10 max-md:px-6 max-md:py-8">
                <p className="font-heading text-h4">
                  SABI CORE · £5,000 for the year · one to one with DK.
                </p>
                <Button href="/contact" variant="brand">
                  Apply for SABI CORE
                </Button>
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

      {/* Soft close: the sitewide button, to the Reset, while it is on sale. */}
      <CloseBand
        kicker="If the year is not yet your season, this year's Reset is where to begin."
        title="Three sessions. One seat."
        buttonLabel={RESET_CTA_LABEL}
        buttonHref={RESET_CTA_HREF}
        line={RESET_CTA_LINE}
        avatarSrc={RESET_CTA_AVATAR}
        variant="light"
      />
    </main>
  </>
);

export default SabiCorePage;
