import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/** The five pillars at a glance: dove hairlines, gold numerals, one line each (content.md 4.1). */
export const PillarsGlance = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">
          The five pillars, at a glance
        </p>
      </Reveal>
      <ul className="mt-10 max-md:mt-6">
        {pillars.map((pillar, i) => (
          <li key={pillar.slug} className="border-t border-line last:border-b">
            <Reveal
              delay={i * 0.06}
              className="grid grid-cols-[3rem_1fr] items-baseline gap-x-6 gap-y-1 py-7 md:grid-cols-[3rem_240px_1fr] md:gap-x-10 max-md:py-5"
            >
              <span className="font-heading text-h6 text-brand">
                {pillar.index}
              </span>
              <h3 className="text-h4">{pillar.name}</h3>
              <p className="text-body-l text-smoke max-md:col-start-2">
                {pillar.movement}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
