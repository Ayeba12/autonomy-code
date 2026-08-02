import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** Line icons, one per pressure — quiet strokes in brand gold. */
const icons: Record<string, ReactNode> = {
  "Borrowed Identity": (
    // Two frames: the solid self behind a dashed, borrowed outline.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="3.5" width="13" height="13" rx="3" strokeDasharray="3 3" />
      <rect x="7.5" y="7.5" width="13" height="13" rx="3" />
    </svg>
  ),
  "Scattered Ownership": (
    // Pieces adrift around one held centre.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="4.5" cy="5.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="4.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="19.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="20.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Unsupported Execution": (
    // A plan line that holds, then drops past the dashed ground.
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 8h6l3.5 4L16 6l5 6" />
      <path d="M3 18.5h18" strokeDasharray="3 3" />
      <path d="M16 6v0" />
    </svg>
  ),
};

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

/** The three pressures — white cards with line icons and gold numerals (content.md §4.4). */
export const PressureCards = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
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
            <article className="flex h-full flex-col rounded-card bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5 max-md:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-paper text-brand [&_svg]:size-7">
                  {icons[pressure.title]}
                </span>
                <span
                  className="font-heading text-h4 leading-none text-brand/60"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-7 text-h5">{pressure.title}</h3>
              <p className="mt-4 text-body-m text-smoke">{pressure.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
