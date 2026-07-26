import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { StatItem } from "@/content/types";

const parseStat = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  return { num: Number(match?.[1] ?? 0), suffix: match?.[2] ?? "" };
};

/** Quiet numbers: four odometer counters (Stodio stats pattern). */
export const HomeStats = ({ stats }: { stats: StatItem[] }) => (
  <section className="bg-white pt-20 pb-32 max-lg:pb-24 max-md:pt-12 max-md:pb-14">
    <div className="container-site">
      <Tag>Quiet numbers</Tag>
      <div className="mt-10 grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
        {stats.map((stat, i) => {
          const { num, suffix } = parseStat(stat.value);
          return (
            <Reveal key={stat.title} delay={i * 0.1}>
              <CountUp value={num} suffix={suffix} className="font-heading text-stat" />
              <hr className="mt-4 border-dashed border-line" />
              <h3 className="mt-4 font-body text-body-xl font-semibold">{stat.title}</h3>
              <p className="mt-2 text-body-s text-smoke">{stat.description}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
