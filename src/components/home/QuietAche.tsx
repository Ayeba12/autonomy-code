import { Reveal } from "@/components/motion/Reveal";

/** The quiet ache: a short recognition beat with generous space (content.md 4.1). */
export const QuietAche = () => (
  <section className="section-gap">
    <div className="container-site">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <h2 className="text-h3">
            From the outside, your work looks credible. Privately, it feels
            scattered.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-body-xl text-smoke max-md:mt-5">
            You are doing a lot, but you cannot see the shape of it. You
            second-guess decisions you are qualified to make. That is not a
            discipline problem. It is an ownership problem.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
