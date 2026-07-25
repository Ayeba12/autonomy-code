import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/** The five pillars as full cards: white on ivory, gold numerals (content.md 4.2). */
export const PillarCards = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">The system</p>
        <h2 className="mt-4 text-h2">The five pillars</h2>
      </Reveal>
      <div className="mt-12 flex flex-col gap-6 max-md:mt-8 max-md:gap-4">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.slug} delay={i * 0.05}>
            <article className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-4 rounded-card bg-white p-10 md:grid-cols-[3rem_280px_1fr] md:gap-x-10 max-md:p-6">
              <span className="font-heading text-h6 text-brand">
                {pillar.index}
              </span>
              <div>
                <h3 className="text-h4">{pillar.name}</h3>
                <p className="mt-2 text-body-l font-medium">
                  {pillar.movement}
                </p>
              </div>
              <p className="self-center text-body-l text-smoke max-md:col-start-2">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
