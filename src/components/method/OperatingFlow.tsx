import { Fragment } from "react";
import { Reveal } from "@/components/motion/Reveal";

const steps = ["Discover", "Sort", "Interpret", "Decide", "Build"];

/** The operating flow: five steps separated by gold-thread ticks (content.md 4.2). */
export const OperatingFlow = () => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal className="text-center">
        <p className="font-heading text-body-l text-ink">The operating flow</p>
      </Reveal>
      <Reveal delay={0.1}>
        <ol className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 max-md:mt-8 md:gap-x-8">
          {steps.map((step, i) => (
            <Fragment key={step}>
              {i > 0 && (
                <li aria-hidden className="gold-thread w-10 max-md:w-6" />
              )}
              <li className="font-heading text-h4">{step}</li>
            </Fragment>
          ))}
        </ol>
      </Reveal>
      <Reveal
        delay={0.2}
        className="mx-auto mt-12 max-w-[640px] text-center max-md:mt-8"
      >
        <p className="text-body-xl text-smoke">
          Discovery alone can become another hiding place. The work is
          decision-led.
        </p>
      </Reveal>
    </div>
  </section>
);
