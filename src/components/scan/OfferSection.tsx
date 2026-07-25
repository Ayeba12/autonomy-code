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
 * The offer — three things, one payment (content.md §4.4). The £97 appears
 * here, plainly, at the point of booking. `id="book"` is the interim CTA
 * anchor until the external checkout chain is wired (see ScanCta).
 */
export const OfferSection = () => (
  <section id="book" className="scroll-mt-28 py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
        <h2 className="text-h2">Three things, one payment.</h2>
        <p className="font-heading text-stat leading-none text-brand">£97</p>
      </Reveal>
      <div className="mx-auto mt-14 flex max-w-[760px] flex-col gap-6 max-md:mt-8 max-md:gap-4">
        {included.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <article className="flex gap-8 rounded-card bg-white p-9 max-md:flex-col max-md:gap-3 max-md:p-6">
              <span
                className="font-heading text-h3 leading-none text-brand"
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-h5">{item.title}</h3>
                <p className="mt-3 text-body-m text-smoke">{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-14 flex max-w-[640px] flex-col items-center gap-9 text-center max-md:mt-8 max-md:gap-6">
        <p className="text-body-xl text-ink">
          You leave with one clear reclaim move. Not a list. Not a performance
          plan. One next act of ownership.
        </p>
        <ScanCta />
      </Reveal>
    </div>
  </section>
);
