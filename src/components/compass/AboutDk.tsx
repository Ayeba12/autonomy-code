import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./CompassCta";

/** The numbers in DK's copy (v3 §6), given a counting pulse. */
const stats = [
  { value: 15, suffix: "", label: "years" },
  { value: 300, suffix: "+", label: "trained" },
  { value: 150, suffix: "+", label: "mentored" },
  { value: 30, suffix: "+", label: "coached" },
];

/** "My body of work includes:" — the names, worn as quiet chips. */
const bodyOfWork = ["The Autonomy Code", "NO GraGra", "SABI", "SyncCHECK", "PACE", "MAP"];

/**
 * About DK Jonah (copy v3 §6, verbatim words): portrait beside the
 * story, the numbers in a ruled row, the body of work as chips, then the
 * two client stories as a pair of cards and the closing line.
 */
export const AboutDk = () => (
  <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="grid grid-cols-[0.7fr_1fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal>
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/dk-jonah-portrait.webp"
              alt="DK Jonah"
              width={593}
              height={573}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="aspect-square w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <div className="flex flex-col gap-7 max-md:gap-5">
          <Reveal>
            <Eyebrow>About DK Jonah</Eyebrow>
          </Reveal>
          <Reveal>
            <p className="font-heading text-h3 text-ink max-md:text-h4">
              I have lived this, and I have spent more than a decade helping
              other people out of it.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-body-l text-slate">
              Chronic illness. Interrupted ambition. A PhD I walked away from. A
              life rebuilt from the inside out. That is where the work began. It
              is not where it stayed.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-body-l text-slate">
              Since then, I have built and refined these systems with coaches,
              consultants, creatives and knowledge workers, across real life,
              real constraints, and real responsibility. People who already had
              the expertise but could not yet see its shape.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <p className="font-heading text-h3 text-ink max-md:text-h4">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-body-s text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-body-m text-slate">My body of work includes:</p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {bodyOfWork.map((name) => (
                <li
                  key={name}
                  className="rounded-pill border border-line bg-paper px-4 py-2 font-heading text-body-s text-ink"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Client proof — two stories side by side */}
      <div className="mt-20 grid grid-cols-2 gap-6 max-lg:mt-14 max-md:grid-cols-1">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-card-lg bg-paper p-10 max-md:rounded-card max-md:p-6">
            <p className="text-body-l text-slate">
              Chinedu, a Pan-African tech operator, came in hidden behind years
              of serious work, credible, capable, but invisible to the people
              who needed to find him. He left with a named framework, a
              market-facing voice, and a clear path forward.
            </p>
            <blockquote className="mt-auto pt-8">
              <div className="mb-5 w-12 border-t-2 border-brand" aria-hidden />
              <p className="font-heading text-h4 text-ink max-md:text-h5">
                Nothing new was added to him. What was already his was returned.
              </p>
            </blockquote>
          </article>
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <article className="flex h-full flex-col rounded-card-lg bg-paper p-10 max-md:rounded-card max-md:p-6">
            <p className="text-body-l text-slate">
              Another client came to this work already capable, already
              trusted with a great deal, and used to being the one others
              relied on. He said afterwards that he had never
              realised how much of his own life he had quietly handed to other
              people.
            </p>
            <p className="mt-auto pt-8 font-heading text-h4 text-ink max-md:text-h5">
              Once he could see it, the pieces started connecting.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-16 max-w-[760px] text-center max-md:mt-10">
        <p className="font-heading text-h4 text-ink max-md:text-h5">
          That is what this work does. It does not manufacture identity. It
          returns ownership.
        </p>
      </Reveal>
    </div>
  </section>
);
