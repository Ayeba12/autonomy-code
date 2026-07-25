import { Reveal } from "@/components/motion/Reveal";

const movements = [
  { name: "Identity", movement: "From Borrowed Identity to Owned Ground." },
  { name: "Resources", movement: "From Scattered Ownership to Owned Capacity." },
  { name: "Strategy", movement: "From Unsupported Execution to Self-Governance." },
];

/** The work behind it — three pillar movements on dove hairlines (content.md §4.4). */
export const WorkBehind = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <h2 className="text-h4">
          The Autonomy Code moves you from hidden captivity to self-governance
          through three pillars:
        </h2>
      </Reveal>
      <div className="mx-auto mt-14 max-w-[760px] max-md:mt-8">
        {movements.map((pillar, i) => (
          <Reveal key={pillar.name} delay={i * 0.1}>
            <div className="flex items-baseline justify-between gap-6 border-t border-line py-6 max-md:flex-col max-md:gap-1">
              <h3 className="font-heading text-h5">
                {pillar.name}
                <span className="text-brand">.</span>
              </h3>
              <p className="text-body-l text-smoke">{pillar.movement}</p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" aria-hidden />
      </div>
      <Reveal className="mx-auto mt-14 max-w-[680px] text-center max-md:mt-8">
        <p className="text-body-xl text-ink">
          The goal is not to force yourself into another borrowed system. The
          goal is to see where ownership went, and reclaim the first piece.
        </p>
      </Reveal>
    </div>
  </section>
);
