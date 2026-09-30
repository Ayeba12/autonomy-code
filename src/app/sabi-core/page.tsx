import type { Metadata } from "next";
import Image from "next/image";
import { CloseBand } from "@/components/ladder/CloseBand";
import { LadderHero } from "@/components/ladder/LadderHero";
import { SabiOsSection } from "@/components/ladder/SabiOsSection";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { RESET_CTA_HREF, RESET_CTA_LABEL, RESET_CTA_LINE } from "@/components/site/ResetCta";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "SABI CORE",
  description:
    "The flagship year of The Autonomy Code. A year, one to one with DK, built on the SABI OS operating system. A structured system, not a course.",
};

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
  "You want more information without ownership.",
  "You have not yet taken the Compass. Every engagement begins there.",
];

/**
 * /sabi-core — the flagship year (content.md §4.5; one-to-one wording per
 * the 30 Sept brief). Price appears once, plainly, at the application
 * block. The page carries its own soft close, so the shared CtaSection is
 * deliberately not used here.
 */
const SabiCorePage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <LadderHero
        eyebrow="SABI CORE · The flagship year"
        title="A year of building from owned ground."
        sub="A year, one to one. A structured system, not a course."
      />

      {/* What it is */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-[1fr_2fr] gap-10 max-md:grid-cols-1 max-md:gap-6">
          <Reveal>
            <h2 className="text-h6">What it is</h2>
            <div className="mt-4 w-16 border-t border-line" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[720px] text-body-xxl text-ink">
              SABI CORE is the annual premium programme of The Autonomy Code.
              Across the year you work on what you are actually building, one
              pillar at a time where that is what it takes, with diagnostic
              deepening across all five. Held closely, and held to account. No
              gra gra.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One wide calm image — a breath between the words and the rooms. */}
      <section className="bg-white pb-24 max-lg:pb-16 max-md:pb-12">
        <div className="container-site">
          <Reveal>
            <div className="overflow-hidden rounded-card-lg max-md:rounded-card">
              <Image
                src="/images/sabi-core-band.webp"
                alt="An open notebook with a gold ribbon on an oak desk beside a bright window"
                width={1440}
                height={720}
                sizes="100vw"
                className="aspect-2/1 w-full object-cover object-[50%_30%] max-md:aspect-4/3"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SABI OS: the four rooms and the operating flow (breath accent) */}
      <SabiOsSection />

      {/* Who it is for / not for */}
      <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site grid grid-cols-2 gap-x-16 gap-y-12 max-md:grid-cols-1">
          <Reveal>
            <h2 className="text-h5">The year is for you if</h2>
            <ul className="mt-6">
              {forList.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-4 text-body-l text-smoke"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h5">And not for you if</h2>
            <ul className="mt-6">
              {notForList.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-4 text-body-l text-smoke"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* How you enter */}
      <section className="bg-paper py-24 max-lg:py-16 max-md:py-12">
        <div className="container-site">
          <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
            <h2 className="text-h6">How you enter</h2>
            <div className="w-16 border-t border-line" />
            <p className="text-body-xxl text-ink">
              SABI CORE follows the Autonomy Compass and the Claim Intensive.
              The Blueprint leads the recommendation. If the year is your
              honest route, you will know why, in writing, before you commit.
            </p>
          </Reveal>

          {/* The application block: the one place the price appears. */}
          {/* TODO: dedicated application form later; /contact carries enquiries until then. */}
          <Reveal delay={0.1}>
            <div className="mx-auto mt-16 flex max-w-[720px] flex-col items-center gap-6 rounded-card bg-paper-2 px-10 py-14 text-center max-md:mt-10 max-md:px-6 max-md:py-10">
              <p className="font-heading text-h4">
                SABI CORE · £5,000 for the year · one to one with DK.
              </p>
              <Button href="/contact" variant="brand">
                Apply for SABI CORE
              </Button>
              {/* Money rules: every financial decision carries a 24-hour written hold. */}
              <p className="text-body-s text-smoke">
                A 24-hour written hold sits before any financial decision. No
                rush. No force.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Soft close: the sitewide button, to the Reset, while it is on sale. */}
      <CloseBand
        kicker="If the year is not yet your season, this year's Reset is where to begin."
        title="Three sessions. One seat."
        buttonLabel={RESET_CTA_LABEL}
        buttonHref={RESET_CTA_HREF}
        line={RESET_CTA_LINE}
      />
    </main>
  </>
);

export default SabiCorePage;
