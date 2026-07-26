import { Marquee } from "@/components/motion/Marquee";

const tickerItems = [
  "In Conversation",
  "NoGraGra",
  "SABI OS",
  "Knowledge Architecture",
  "Decisions That Work",
];

/**
 * Trust strip: rotating gold spark, one quiet line, and a text ticker
 * of the wider work (Stodio logo-marquee pattern).
 */
export const HomeMarquee = () => (
  <section className="border-y border-dashed border-line bg-white py-6">
    <div className="container-site flex items-center gap-10 max-md:flex-col max-md:items-start max-md:gap-6">
      <div className="flex w-[380px] shrink-0 items-center gap-4 max-md:w-full">
        <svg
          className="size-12 shrink-0 animate-[spin-slow_10s_linear_infinite] text-brand"
          viewBox="0 0 48 48"
          fill="currentColor"
          aria-hidden
        >
          <path d="M24 2l4.3 14.9L43 21.2l-14.7 4.3L24 40.4l-4.3-14.9L5 21.2l14.7-4.3L24 2z" />
        </svg>
        <p className="text-body-m text-smoke">
          Trusted by coaches, consultants, and creatives across 15+ years.
        </p>
      </div>
      <div className="relative min-w-0 flex-1 max-md:w-full">
        <Marquee duration={25} gapClassName="gap-16" ariaLabel="The wider work">
          {tickerItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 font-heading text-h6 whitespace-nowrap text-ink"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-brand" />
              {item}
            </span>
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
        />
      </div>
    </div>
  </section>
);
