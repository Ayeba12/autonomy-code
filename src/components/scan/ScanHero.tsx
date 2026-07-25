import { Reveal } from "@/components/motion/Reveal";
import { ScanCta } from "./ScanCta";

/** Scan hero: type-led on ivory ground, gold thread under the eyebrow (content.md §4.4). */
export const ScanHero = () => (
  <section className="pt-44 pb-16 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site flex flex-col items-center text-center">
      <Reveal className="flex flex-col items-center">
        <p className="max-w-[600px] font-heading text-body-l text-smoke">
          For coaches and consultants who know their private wisdom is stronger
          than their public clarity.
        </p>
        <div className="gold-thread mt-6 w-16" aria-hidden />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-9 max-w-[1100px] text-h2 max-md:mt-6">
          <span className="block">You don&rsquo;t have a discipline problem.</span>
          <span className="block">You have an ownership problem.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-[740px] text-body-xl text-smoke">
          Watch this private briefing to see where ownership may have been
          outsourced in your identity, capacity, or strategy, and how to reclaim
          the first piece without forcing yourself into another borrowed system.
        </p>
      </Reveal>
      <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-4 max-md:mt-8">
        <ScanCta />
        <p className="text-body-s text-smoke">A map, not a verdict.</p>
      </Reveal>
    </div>
  </section>
);
