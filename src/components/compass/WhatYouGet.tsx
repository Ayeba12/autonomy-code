import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CompassCta, deliverables } from "./CompassCta";

/** What each deliverable is (copy v3 §7, verbatim). */
const bodies = [
  "Twenty-five statements you take before the call. For each one, you choose how true it is of you right now, not how you would like it to be. It takes about ten minutes. Your result shows the shape of your five pillars, your profile, the pillar to claim first, and one move you can make straight away.",
  "Ninety minutes, live, one-to-one, on the single pillar that lets the others hold. We do not try to fix everything. We work the area your result brings into focus.",
  "Written after the session: what is going on, what we cleared, and what to build next. It comes with a 15-minute walkthrough call so you know exactly what to do first, plus the recording and playbook, so you can keep working from it.",
];

/**
 * What you get (copy v3 §7, verbatim words): the three deliverables as
 * cards with DK's covers, then the black price strip with the £97 and the
 * gold button straight to Stripe.
 */
export const WhatYouGet = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14" id="what-you-get">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-h2">Three things, one payment.</h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-md:mt-8">
        {deliverables.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col rounded-card-lg bg-white p-3 max-lg:grid max-lg:grid-cols-[260px_1fr] max-lg:items-center max-md:flex max-md:rounded-card">
              <div className="overflow-hidden rounded-card">
                <Image
                  src={item.cover.src}
                  alt={item.cover.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 260px, 33vw"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-6 pb-5 max-md:px-3">
                <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                  {item.step}
                </span>
                <h3 className="mt-2 text-h5">{item.title}.</h3>
                <p className="mt-3 text-body-m text-slate">{bodies[i]}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* The price strip — the one black panel in the offer */}
      <Reveal delay={0.1}>
        <div className="relative mt-6 overflow-hidden rounded-card-lg bg-ink px-12 py-12 max-lg:px-8 max-md:rounded-card max-md:px-6 max-md:py-9">
          <div
            className="absolute -top-32 -left-16 size-80 rounded-full bg-brand/20 blur-3xl"
            aria-hidden
          />
          <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-8 max-lg:text-center">
            <div className="flex flex-col gap-2 max-lg:items-center">
              <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                The Autonomy Compass
              </p>
              <p className="bg-linear-to-b from-gold-light via-brand-soft to-brand bg-clip-text font-heading text-stat leading-none text-transparent">
                £97
              </p>
              <p className="text-body-s text-mute">Everything above, one payment.</p>
            </div>
            <p className="max-w-[440px] border-l border-white/15 pl-12 text-body-l text-white max-lg:mx-auto max-lg:border-l-0 max-lg:pl-0">
              You leave with one clear move. Not a list. Not a performance plan.
              One next act of ownership.
            </p>
            <div className="flex flex-col items-center gap-3">
              <CompassCta />
              <p className="text-body-s text-mute">A reading, not a verdict.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
