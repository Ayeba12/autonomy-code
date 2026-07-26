import { Reveal } from "@/components/motion/Reveal";

const steps = ["Discover", "Sort", "Interpret", "Decide", "Build"];

/**
 * The operating flow (content.md 4.2): five steps as a five-column row
 * ruled by dove hairlines, gold step numerals.
 */
export const OperatingFlow = () => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">The operating flow</p>
      </Reveal>
      <ol className="mt-12 grid grid-cols-5 gap-6 max-md:mt-8 max-md:grid-cols-1 max-md:gap-5">
        {steps.map((step, i) => (
          <li key={step}>
            <Reveal delay={i * 0.08} className="border-t border-line pt-5">
              <span className="font-heading text-body-s text-brand">
                0{i + 1}
              </span>
              <p className="mt-3 font-heading text-h4">{step}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal delay={0.2} className="mt-14 max-w-[640px] max-md:mt-8">
        <p className="text-body-xl text-smoke">
          Discovery alone can become another hiding place. The work is
          decision-led.
        </p>
      </Reveal>
    </div>
  </section>
);
