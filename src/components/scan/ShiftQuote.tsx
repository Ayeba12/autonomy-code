import { Reveal } from "@/components/motion/Reveal";

/**
 * The shift pull-quote — THE one Breath Blue accent on this page
 * (content.md §2: one accent per page, used like a single open window).
 */
export const ShiftQuote = () => (
  <section className="bg-breath">
    <div className="container-site py-28 max-lg:py-20 max-md:py-14">
      <div className="mx-auto flex max-w-[880px] flex-col items-center gap-10 text-center max-md:gap-7">
        <Reveal>
          <blockquote className="font-heading text-h3">
            When ownership is missing, everything restarts. When ownership is
            installed, everything compounds.
          </blockquote>
        </Reveal>
        <div className="gold-thread w-16" aria-hidden />
        <Reveal delay={0.15} className="flex flex-col gap-2.5">
          <p className="text-body-xl text-ink">
            When you build from owned ground, you stop second-guessing and start
            deciding.
          </p>
          <p className="text-body-xl text-ink">
            You stop performing and start inhabiting.
          </p>
          <p className="text-body-xl text-ink">
            You stop restarting and start building.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
