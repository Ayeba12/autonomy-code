import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The ground — the reframe before the shift (content.md §4.4). The prose
 * sits beside a drawing of the borrowed floor, one plank laid solid in
 * gold, mirroring the Recognition split above it.
 */
export const GroundSection = () => (
  <section className="pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1060px] grid-cols-[1fr_0.85fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="flex flex-col gap-8 max-md:gap-6">
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
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/scan/scan-ground.webp"
              alt="Graphite sketch of a woman standing steady on a floor of mismatched, tilting planks, the one solid plank under her feet drawn in gold"
              width={1000}
              height={1250}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-4/5 w-full object-cover max-lg:aspect-3/2"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
