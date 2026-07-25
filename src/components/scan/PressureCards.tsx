import { Reveal } from "@/components/motion/Reveal";

const pressures = [
  {
    title: "Borrowed Identity",
    body: "You built your practice around a structure that works, but does not fully belong to you. The framework may be competent. The language may be polished. The positioning may even be profitable. But it still feels rented. Your private wisdom is stronger than your public clarity. You are performing the role, but not fully inhabiting it.",
  },
  {
    title: "Scattered Ownership",
    body: "Your knowledge, offers, ideas, obligations, and possibilities are spread across too many places with no clear centre holding them together. You are capable, but under-leveraged. You do a lot, but it does not compound. You know what you want, but you keep returning to second-guessing instead of choice.",
  },
  {
    title: "Unsupported Execution",
    body: "You keep trying to execute through plans that were not built from your actual life, capacity, patterns, or constraints. So the plan works in theory, but not in your hands. When energy is high, you move. When capacity drops, everything stalls. You are not undisciplined. You are trying to sustain ownership inside a structure that was never designed around how you actually operate.",
  },
];

/** The three pressures — white cards, gold numerals (content.md §4.4). */
export const PressureCards = () => (
  <section className="pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[780px] text-center">
        <h2 className="text-h4">
          The briefing will help you see three places ownership may have been
          outsourced.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-md:mt-8">
        {pressures.map((pressure, i) => (
          <Reveal key={pressure.title} delay={i * 0.12} className="h-full">
            <article className="flex h-full flex-col rounded-card bg-white p-9 max-md:p-6">
              <span className="font-heading text-stat leading-none text-brand" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-6 text-h5">{pressure.title}</h3>
              <p className="mt-4 text-body-m text-smoke">{pressure.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
