import { Reveal } from "@/components/motion/Reveal";

/** The ground — the reframe before the shift (content.md §4.4). */
export const GroundSection = () => (
  <section className="pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <div className="mx-auto flex max-w-[680px] flex-col gap-8 max-md:gap-6">
        <Reveal>
          <h2 className="text-h3">
            You are not the problem. The ground you are standing on is.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-smoke">
            Most capable people are not failing. They are performing well inside
            structures that were never built for them. Borrowed frameworks.
            Inherited identities. Outsourced decisions. Strategies that
            technically work, but do not truly belong to them.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-ink">
            The mechanism is ownership. Not ownership as a mindset. Ownership as
            an operating condition.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
