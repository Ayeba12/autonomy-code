import { Reveal } from "@/components/motion/Reveal";
import { ScanCta } from "./ScanCta";

const included = [
  {
    title: "The Ownership Scan.",
    body: "A 25-question pre-assessment completed conversationally before the call. You answer from your current reality, not from who you wish you were.",
  },
  {
    title: "The 90-minute Autonomy Map-Out Session.",
    body: "A live 1:1 session focused on the one priority pillar the scan surfaces. Identity. Resources. Strategy. We do not try to fix everything. We find the first place ownership needs to be reclaimed.",
  },
  {
    title: "The Personal Autonomy Map.",
    body: "A written, personalised map delivered 48 to 72 hours after the session. You also receive a 15-minute walkthrough call so you can understand the map clearly and know what to do first.",
  },
];

/**
 * The offer (content.md §4.4, verbatim words) — the three deliverables as
 * a numbered rail beside a sticky booking card holding the £97 and the
 * gold CTA. `id="book"` is the interim CTA anchor (see ScanCta).
 */
export const OfferSection = () => (
  <section
    id="book"
    className="scroll-mt-28 bg-white py-28 max-lg:py-20 max-md:py-14"
  >
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-h2">Three things, one payment.</h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-[1060px] grid-cols-[1fr_360px] items-start gap-10 max-lg:grid-cols-1 max-md:mt-8">
        {/* The numbered rail */}
        <div className="flex flex-col">
          {included.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="relative flex gap-8 pb-12 pl-2 max-md:gap-5 max-md:pb-8">
                {/* Rail line connecting the steps */}
                {i < included.length - 1 && (
                  <span
                    className="absolute top-14 left-[26px] h-[calc(100%-3.5rem)] w-px bg-line max-md:left-[22px]"
                    aria-hidden
                  />
                )}
                <span className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-paper font-heading text-h6 text-brand max-md:size-10">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="text-h5">{item.title}</h3>
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
                The Ownership Scan
              </p>
              <p className="bg-linear-to-b from-gold-light via-brand-soft to-brand bg-clip-text font-heading text-stat leading-none text-transparent">
                £97
              </p>
              <div className="w-16 border-t border-white/15" aria-hidden />
              <p className="text-body-l text-white">
                You leave with one clear reclaim move. Not a list. Not a
                performance plan. One next act of ownership.
              </p>
              <ScanCta />
              <p className="text-body-s text-mute">A map, not a verdict.</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  </section>
);
