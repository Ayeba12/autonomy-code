import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ScanCta } from "./ScanCta";

/**
 * Scan hero (content.md §4.4, verbatim words): type on ivory ground with
 * the Stodio inline image wipe — a brass key opening inside the headline.
 */
export const ScanHero = () => (
  <section className="pt-44 pb-16 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site flex flex-col items-center text-center">
      <Reveal className="flex flex-col items-center gap-7 max-md:gap-5">
        <Tag>The Ownership Scan</Tag>
        <p className="max-w-[600px] font-heading text-body-l text-smoke">
          For coaches and consultants who know their private wisdom is stronger
          than their public clarity.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-9 max-w-[1100px] text-h2 max-md:mt-6">
          <span className="block">
            You don&rsquo;t have a discipline problem.
          </span>
          <span className="block">
            You have an{" "}
            <ImageWipe
              src="/images/scan-key.webp"
              alt="A brass key resting on a sunlit oak table"
              trigger="load"
              preload
              delay={0.5}
              className="mx-1"
            />{" "}
            ownership problem.
          </span>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-[740px] text-body-xl text-smoke">
          Watch this private briefing to see where ownership may have been
          outsourced in your identity, capacity, or strategy, and how to reclaim
          the first piece without forcing yourself into another borrowed system.
        </p>
      </Reveal>
      <Reveal
        delay={0.3}
        className="mt-10 flex flex-col items-center gap-4 max-md:mt-8"
      >
        <ScanCta />
        <p className="text-body-s text-smoke">A map, not a verdict.</p>
      </Reveal>
    </div>
  </section>
);
