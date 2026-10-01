import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/** "The language. The framework. …" — set as quiet chips. */
const notYours = [
  "The language.",
  "The framework.",
  "The positioning.",
  "The structure.",
  "The way you make decisions.",
  "The way you execute.",
];

/**
 * Something feels off (copy v3 §2, verbatim words): the heading across
 * the top, then the borrowed jacket held beside the prose.
 */
export const Recognition = () => (
  <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal>
        <h2 className="max-w-[880px] text-h2">
          Something feels off. Not because you are failing.
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-[0.8fr_1fr] items-start gap-20 max-lg:mt-10 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal className="lg:sticky lg:top-32">
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/scan/scan-borrowed-jacket.webp"
              alt="Graphite sketch of a composed professional woman in a tailored jacket a size too big for her, pulling one loose thread, drawn in gold, from the cuff"
              width={1000}
              height={1250}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-4/5 w-full object-cover max-lg:aspect-3/2"
            />
          </div>
        </Reveal>
        <div className="flex flex-col gap-8 max-md:gap-6">
          <Reveal>
            <p className="text-body-xl text-slate">
              From the outside, your practice may look credible. Your work may
              be respected. Your clients may value what you do. Your experience
              may be real.
            </p>
          </Reveal>
          <Reveal>
            <p className="border-l-2 border-brand pl-6 font-heading text-h4 text-ink">
              But privately, you know something is not fully yours.
            </p>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-2.5">
              {notYours.map((item) => (
                <li
                  key={item}
                  className="rounded-pill border border-line bg-paper px-4 py-2 font-heading text-body-m text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="text-body-xl text-slate">
              You may be doing well, but not feeling free. You may know what you
              want, but still struggle to choose it. You may have built
              something that works on the outside, but feels like wearing the
              wrong clothes on the inside.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-body-xl text-slate">
              You have tried to think your way out. You have tried to plan your
              way out. Goal setting. Productivity systems. Courses.{" "}
              <span className="text-ink">None of it touched what actually hurts.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
