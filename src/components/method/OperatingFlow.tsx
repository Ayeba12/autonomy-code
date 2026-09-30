import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { name: "Discover", line: "What is actually there." },
  { name: "Sort", line: "What belongs where." },
  { name: "Interpret", line: "What it means." },
  { name: "Decide", line: "What you will do." },
  { name: "Build", line: "What holds it in place." },
];

/**
 * The operating flow (content.md 4.2): a hand-drawn diagram of the five
 * stations along one gold line, with the five steps ruled beneath it.
 */
export const OperatingFlow = () => (
  <section className="section-gap bg-white py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
            The operating flow
          </p>
          <h2 className="mt-5 text-h2">Five moves, in order.</h2>
        </div>
        <p className="max-w-md text-body-l text-slate">
          Discovery alone can become another hiding place. The work is
          decision-led.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 max-md:mt-8">
        <div className="overflow-hidden rounded-card bg-paper">
          <Image
            src="/images/method/method-flow.webp"
            alt="Hand-drawn diagram of five small sketches along one gold line: a magnifying glass, sorted piles, reading glasses over a page, a tick in a box, and a house frame being built"
            width={2400}
            height={900}
            sizes="100vw"
            className="aspect-[8/3] w-full object-cover max-md:aspect-[2/1]"
          />
        </div>
      </Reveal>

      <ol className="mt-10 grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-4">
        {steps.map((step, i) => (
          <li key={step.name}>
            <Reveal delay={i * 0.08} className="border-t border-line pt-5">
              <span className="font-heading text-body-s tracking-[0.18em] text-brand-hot">
                0{i + 1}
              </span>
              <p className="mt-3 font-heading text-h4">{step.name}</p>
              <p className="mt-2 text-body-m text-slate">{step.line}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
