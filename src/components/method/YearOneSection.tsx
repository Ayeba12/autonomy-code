import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import type { StatItem } from "@/content/types";

const parseStat = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  return { num: Number(match?.[1] ?? 0), suffix: match?.[2] ?? "" };
};

/**
 * The Year One arc beside the porch drawing, and the quiet numbers row
 * (content.md 4.2, 6), counting up as on the home page.
 */
export const YearOneSection = ({ stats }: { stats: StatItem[] }) => (
  <section className="section-gap">
    <div className="container-site">
      <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal delay={0.2} className="w-full max-lg:order-last">
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/about/about-porch.webp"
              alt="Graphite sketch of two wooden chairs and a small table on a porch, one cup drawn in gold"
              width={900}
              height={1200}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:justify-self-end">
          <Reveal>
            <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
              Year One
            </p>
            <h2 className="mt-5 max-w-[520px] text-h2">
              This is not a course. It is a structured system.
            </h2>
          </Reveal>
          <Reveal
            delay={0.15}
            className="mt-6 flex max-w-[520px] flex-col gap-4"
          >
            <p className="text-body-xl text-slate">
              A year, one to one. You work on what you are actually building,
              one pillar at a time where that is what it takes, with diagnostic
              deepening across all five over the year.
            </p>
            <p className="font-heading text-h5 text-ink">
              Held closely, and held to account.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-4 gap-10 max-lg:mt-16 max-lg:grid-cols-2 max-md:gap-6">
        {stats.map((stat, i) => {
          const { num, suffix } = parseStat(stat.value);
          return (
            <Reveal
              key={stat.title}
              delay={i * 0.08}
              className="border-t border-line pt-6"
            >
              <CountUp value={num} suffix={suffix} className="font-heading text-stat" />
              <h3 className="mt-2 font-body text-body-m font-medium">{stat.title}</h3>
              <p className="mt-1 text-body-s text-slate">{stat.description}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
