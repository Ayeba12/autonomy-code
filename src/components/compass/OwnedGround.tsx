import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** The word being left behind: quiet. */
const From = ({ children }: { children: ReactNode }) => (
  <span className="text-slate">{children}</span>
);

/** The word being moved towards: underlined in gold. */
const To = ({ children }: { children: ReactNode }) => (
  <span className="underline decoration-brand decoration-2 underline-offset-[6px]">
    {children}
  </span>
);

/**
 * You are not the problem (copy v3 §4, verbatim words), the hinge of the
 * page: the reframe beside the solid plank, then the pull quote on the
 * page's one breath-blue band.
 */
export const OwnedGround = () => (
  <>
    <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
      <div className="container-site grid grid-cols-[1fr_0.8fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="flex flex-col gap-8 max-md:gap-6">
          <Reveal>
            <h2 className="text-h2">
              You are not the problem. The ground you are standing on is.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-body-xl text-slate">
              Most capable people are not failing. They are performing well
              inside structures that were never built for them. Borrowed
              frameworks. Inherited identities. Outsourced decisions.
              Strategies that technically work but don&rsquo;t truly belong to
              them.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-body-xl text-slate">
              Most people are not stuck because they lack information.{" "}
              <span className="text-ink">
                They are stuck because they lack ownership.
              </span>
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-card bg-paper p-8 max-md:p-6">
              <p className="font-heading text-h5 text-ink">
                The mechanism is ownership. Not ownership as a mindset.
                Ownership as an operating condition.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/scan/scan-ground.webp"
              alt="Graphite sketch of a woman standing steady on a floor of mismatched, tilting planks, the one solid plank under her feet drawn in gold"
              width={1000}
              height={1250}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-4/5 w-full object-cover max-lg:aspect-3/2"
            />
          </div>
        </Reveal>
      </div>
    </section>

    {/* The pull quote — the page's single breath-blue accent */}
    <section className="bg-breath py-28 max-lg:py-20 max-md:py-14">
      <div className="container-site">
        <div className="mx-auto flex max-w-[920px] flex-col items-center gap-12 text-center max-md:gap-8">
          <Reveal>
            <blockquote className="font-heading text-h2 text-ink max-md:text-h3">
              When ownership is missing, everything restarts. When ownership is
              installed, everything compounds.
            </blockquote>
          </Reveal>
          <div className="w-16 border-t border-brand" aria-hidden />
          <Reveal className="flex flex-col gap-4 font-heading text-h5 text-ink max-md:text-h6">
            <p>
              When you build from owned ground, you stop <From>second-guessing</From>{" "}
              and start <To>deciding</To>.
            </p>
            <p>
              You stop <From>performing</From> and start <To>inhabiting</To>.
            </p>
            <p>
              You stop <From>restarting</From> and start <To>building</To>.
            </p>
          </Reveal>
          <Reveal>
            <p className="rounded-pill bg-white px-7 py-3 font-heading text-body-l text-ink">
              This is not motivation. This is architecture.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);
