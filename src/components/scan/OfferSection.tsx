import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScanCta } from "./ScanCta";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Line icons, one per deliverable, in the same stroke family as the pressure cards. */
const icons: Record<string, ReactNode> = {
  scan: (
    // Twenty-five questions: a list with one line ticked.
    <svg {...iconProps}>
      <path d="M8 6.5h12M8 12h12M8 17.5h12" />
      <path d="m3.5 6.5 1 1 2-2" />
      <circle cx="4.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  session: (
    // Ninety minutes, one to one: a clock face with the hand held.
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  map: (
    // The written map: a folded sheet with one route on it.
    <svg {...iconProps}>
      <path d="M3.5 6.5 9 4.5l6 2 5.5-2v13L15 19.5l-6-2-5.5 2v-13Z" />
      <path d="M9 4.5v13M15 6.5v13" />
    </svg>
  ),
};

/** A drawing beside each deliverable, from the house set. */
const art: Record<string, { src: string; alt: string }> = {
  scan: {
    src: "/images/reset/reset-move-audit.webp",
    alt: "Graphite sketch of a woman with a magnifying glass tracing footprints across a ledger back to the first, in gold",
  },
  session: {
    src: "/images/pillars/pillar-relationships.webp",
    alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
  },
  map: {
    src: "/images/scan/scan-map.webp",
    alt: "Graphite sketch of a woman leaning over a map, one finger on the route she has chosen, drawn in gold",
  },
};

const included = [
  {
    icon: "scan",
    title: "The Autonomy Compass.",
    body: "Twenty-five statements you take before the call. For each one, you choose how true it is of you right now, not how you would like it to be. It takes about ten minutes. Your result shows the shape of your five pillars, your profile, the pillar to claim first, and one move you can make straight away.",
  },
  {
    icon: "session",
    title: "The Claim Intensive.",
    body: "Ninety minutes, live, one-to-one, on the single pillar that lets the others hold. We do not try to fix everything. We work the area your result brings into focus.",
  },
  {
    icon: "map",
    title: "The Autonomy Blueprint.",
    body: "Written after the session: what is going on, what we cleared, and what to build next. It comes with a 15-minute walkthrough call so you know exactly what to do first, plus the recording and playbook, so you can keep working from it.",
  },
];

/**
 * What you get (copy v3 §7, verbatim words): the three deliverables as a
 * numbered rail beside a sticky price card holding the £97 and the gold
 * CTA, which goes straight to Stripe.
 */
export const OfferSection = () => (
  <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-h2">Three things, one payment.</h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-[1060px] grid-cols-[1fr_360px] items-start gap-10 max-lg:grid-cols-1 max-md:mt-8">
        {/* The numbered rail */}
        <div className="flex flex-col">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="relative flex gap-8 pb-12 max-md:gap-5 max-md:pb-8">
                {/* Rail line connecting the steps */}
                {i < included.length - 1 && (
                  <span
                    className="absolute top-28 left-14 h-[calc(100%-7rem)] w-px bg-line max-md:top-24 max-md:left-12"
                    aria-hidden
                  />
                )}
                <div className="relative z-10 shrink-0 overflow-hidden rounded-2xl bg-paper">
                  <Image
                    src={art[item.icon].src}
                    alt={art[item.icon].alt}
                    width={1000}
                    height={1250}
                    sizes="112px"
                    className="size-28 object-cover max-md:size-24"
                  />
                  <span className="absolute right-2 bottom-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-brand [&_svg]:size-4">
                    {icons[item.icon]}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-h5">{item.title}</h3>
                  <p className="mt-3 text-body-m text-smoke">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* The booking card — the one ink moment in the offer band. */}
        <Reveal delay={0.15} className="sticky top-32 max-lg:static">
          <aside className="relative overflow-hidden rounded-card bg-ink p-10 text-center max-md:p-7">
            {/* Soft gold glow behind the price */}
            <div
              className="absolute -top-28 left-1/2 size-64 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-7 max-md:gap-5">
              <p className="flex items-center gap-2.5 font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                <svg
                  className="size-3.5 text-brand"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
                </svg>
                The Autonomy Compass
              </p>
              <p className="bg-linear-to-b from-gold-light via-brand-soft to-brand bg-clip-text font-heading text-stat leading-none text-transparent">
                £97
              </p>
              <p className="text-body-s text-mute">Everything above, one payment.</p>
              <div className="w-16 border-t border-white/15" aria-hidden />
              <p className="text-body-l text-white">
                You leave with one clear move. Not a list. Not a performance
                plan. One next act of ownership.
              </p>
              <ScanCta />
              <p className="text-body-s text-mute">A reading, not a verdict.</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  </section>
);
