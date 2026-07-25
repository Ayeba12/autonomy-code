import { Reveal } from "@/components/motion/Reveal";
import type { StatItem } from "@/content/types";

/** The Year One arc, cohort delivery, and the quiet numbers (content.md 4.2, 6). */
export const YearOneSection = ({ stats }: { stats: StatItem[] }) => (
  <section className="section-gap">
    <div className="container-site">
      <div className="grid grid-cols-2 items-end gap-10 max-lg:grid-cols-1">
        <Reveal>
          <p className="font-heading text-body-l text-ink">Year One</p>
          <h2 className="mt-4 max-w-[520px] text-h2">
            This is not a course. It is a structured system.
          </h2>
        </Reveal>
        <Reveal
          delay={0.15}
          className="flex max-w-[560px] flex-col gap-4 lg:justify-self-end"
        >
          <p className="text-body-xl text-smoke">
            Delivered in quarterly cohorts. One pillar per quarter, with
            diagnostic deepening across all five over the year.
          </p>
          <p className="text-body-xl text-smoke">
            Small cohorts, held gently and held to account.
          </p>
        </Reveal>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-10 max-lg:mt-14 max-lg:grid-cols-2 max-md:gap-6">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.title}
            delay={i * 0.08}
            className="border-t border-line pt-6"
          >
            <p className="font-heading text-stat">{stat.value}</p>
            <h3 className="mt-2 font-body text-body-m font-medium">
              {stat.title}
            </h3>
            <p className="mt-1 text-body-s text-smoke">{stat.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
