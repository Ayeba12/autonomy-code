import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CompassCta } from "./CompassCta";

/**
 * The close (copy v3 §10, verbatim words): the page's black panel, the
 * words beside the drawing of a woman tracing her route across a map.
 * Replaces the shared CtaSection; do not render both.
 */
export const CompassClose = () => (
  <section className="py-24 max-lg:py-16 max-md:py-10">
    <div className="container-site">
      <div className="relative overflow-hidden rounded-card-lg bg-ink p-5 max-md:rounded-card">
        <div
          className="absolute -right-24 -bottom-32 size-96 rounded-full bg-brand/15 blur-3xl"
          aria-hidden
        />
        <div className="relative grid grid-cols-[1.1fr_0.9fr] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-8">
          <div className="flex flex-col items-start gap-8 py-12 pl-10 max-lg:order-2 max-lg:px-5 max-lg:pt-0 max-lg:pb-8 max-md:gap-6 max-md:px-2">
            <Reveal>
              <h2 className="text-h3 text-white max-md:text-h4">
                If your practice works on the outside but does not feel fully
                yours on the inside, do not add another borrowed system.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-xl text-mute">
                You don&rsquo;t need a better plan. You need a life you have
                actually claimed.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col items-start gap-3">
              <CompassCta />
              <p className="text-body-s text-mute">
                Walk away knowing exactly where it went, and what to claim
                first.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full overflow-hidden rounded-card">
              <Image
                src="/images/scan/scan-map.webp"
                alt="Graphite sketch of a woman leaning over an unrolled map, one finger on the route she has chosen, drawn in gold"
                width={1800}
                height={1012}
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="h-full min-h-[420px] w-full object-cover max-lg:aspect-[16/10] max-lg:min-h-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
