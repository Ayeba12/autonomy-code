import { Reveal } from "@/components/motion/Reveal";

/** Recognition beat — spare and quiet, generous spacing (content.md §4.4). */
export const Recognition = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="mx-auto flex max-w-[680px] flex-col gap-8 max-md:gap-6">
        <Reveal>
          <h2 className="text-h3">
            Something feels off. Not because you are failing.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-smoke">
            From the outside, your practice may look credible. Your work may be
            respected. Your clients may value what you do. Your experience may
            be real.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-ink">
            But privately, you know something is not fully yours.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-smoke">
            The language. The framework. The positioning. The structure. The way
            you make decisions. The way you execute.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-body-xl text-smoke">
            You may be doing well, but not feeling free. You may know what you
            want, but still struggle to choose it. You may have built something
            that works on the outside, but feels like wearing the wrong clothes
            on the inside.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-heading text-h5 text-ink">
            That is not a discipline problem. It is an ownership problem.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
