import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Recognition beat (content.md §4.4, verbatim words): the misty path
 * beside the prose — a calm two-column split on the Stodio about pattern.
 */
export const Recognition = () => (
  <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1060px] grid-cols-[0.85fr_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal className="sticky top-32 max-lg:static">
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/scan-path.webp"
              alt="A stone path climbing into the mist"
              width={1122}
              height={1402}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-4/5 w-full object-cover max-lg:aspect-3/2"
            />
          </div>
        </Reveal>
        <div className="flex flex-col gap-8 max-md:gap-6">
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
    </div>
  </section>
);
