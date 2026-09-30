import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/** The numbers in DK's copy (v3 §6), given a counting pulse. */
const stats = [
  { value: 15, suffix: "", label: "years" },
  { value: 300, suffix: "+", label: "trained" },
  { value: 150, suffix: "+", label: "mentored" },
  { value: 30, suffix: "+", label: "coached" },
];

/** "My body of work includes:" — the names, worn as quiet chips. */
const bodyOfWork = [
  "The Autonomy Code",
  "NO GraGra",
  "SABI",
  "SyncCHECK",
  "PACE",
  "MAP",
];

/**
 * About DK Jonah (copy v3 §6, verbatim words): an editorial profile card,
 * full-height portrait beside the story, counted numbers, the body of
 * work as chips, and the two client stories as a paired breath-tint band.
 */
export const AboutDk = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[400px_1fr] overflow-hidden rounded-card-lg bg-white max-lg:grid-cols-1 max-md:rounded-card">
        <div className="relative min-h-[600px] max-lg:min-h-0 max-lg:aspect-3/2">
          <Image
            src="/images/dk-jonah-portrait.webp"
            alt="DK Jonah"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-8 p-12 max-lg:p-8 max-md:gap-6 max-md:p-6">
          <Reveal>
            <Tag>About DK Jonah</Tag>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-heading text-h5 text-ink">
              I have lived this, and I have spent more than a decade helping
              other people out of it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">
              Chronic illness. Interrupted ambition. A PhD I walked away from. A
              life rebuilt from the inside out. That is where the work began. It
              is not where it stayed.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">
              Since then I have built and refined these systems with coaches,
              consultants, creatives and knowledge workers, across real life,
              real constraints, and real responsibility. People who already had
              the expertise, but could not yet see the shape of it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <p className="font-heading text-h3 text-ink max-md:text-h4">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-body-s text-smoke">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">My body of work includes:</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {bodyOfWork.map((name) => (
                <li
                  key={name}
                  className="rounded-pill border border-line px-4 py-2 font-heading text-body-s text-ink"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Client proof — two stories, one quote, beneath the profile. */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-6 grid max-w-[1160px] grid-cols-[1fr_1.2fr] gap-12 rounded-card-lg bg-breath-tint p-12 max-lg:grid-cols-1 max-lg:gap-8 max-lg:p-8 max-md:rounded-card max-md:p-6">
          <div className="flex flex-col gap-6">
            <p className="text-body-l text-smoke">
              Chinedu, a Pan-African tech operator, came in hidden behind years
              of serious work, credible, capable, but invisible to the people who
              needed to find him. He left with a named framework, a market-facing
              voice, and a clear path forward.
            </p>
            <p className="text-body-l text-smoke">
              Suleman, a senior military officer, came to this work already
              capable, already trusted with a great deal, and used to being the
              one others relied on. He said afterwards that he had never realised
              how much of his own life he had quietly handed to other people.
              Once he could see it, the pieces started connecting.
            </p>
          </div>
          <div>
            <blockquote>
              <div className="mb-6 w-12 border-t border-brand" aria-hidden />
              <p className="font-heading text-h4">
                Nothing new was added to him. What was already his was
                returned.
              </p>
            </blockquote>
            <p className="mt-8 text-body-l text-ink max-md:mt-6">
              That is what this work does. It does not manufacture identity. It
              returns ownership.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
