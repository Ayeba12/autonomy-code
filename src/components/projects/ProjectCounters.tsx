import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared detail-page counter values (project-details.md §2.6). These are
 * template constants — identical on all five projects — and intentionally
 * differ from the home-page stats seed (80+ Success Score, 100% Years).
 */
const counters = [
  {
    value: 1,
    suffix: "%",
    title: "Expert-Vetted",
    description:
      "Recognized in the top 1% of freelancers for consistent quality, trust, and expertise.",
  },
  {
    value: 30,
    suffix: "+",
    title: "Clients served",
    description: "From startups to giants - each treated like our only one.",
  },
  {
    value: 80,
    suffix: "+",
    title: "Success Score",
    description: "All 5-star reviews. No compromises. No “just okay.”",
  },
  {
    value: 100,
    suffix: "%",
    title: "Years of expertise",
    description:
      "Deep experience in UX, branding, and growth-driven design for real-world products.",
  },
];

/** Four odometer counters on the project detail page. */
export const ProjectCounters = () => (
  <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
    <div className="container-site grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
      {counters.map((stat, i) => (
        <Reveal key={stat.title} delay={i * 0.1}>
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
            className="font-heading text-stat"
          />
          <hr className="mt-4 border-dashed border-line" />
          <h3 className="mt-4 font-body text-body-xl font-semibold">
            {stat.title}
          </h3>
          <p className="mt-2 text-body-s text-smoke">{stat.description}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
