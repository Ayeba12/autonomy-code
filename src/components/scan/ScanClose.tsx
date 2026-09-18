import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ScanCta } from "./ScanCta";

/**
 * The close — the single black section this page is allowed
 * (content.md §1: black holds, it never floods). The gilded book sits
 * low in the dark, a quiet object rather than a backdrop. Replaces the
 * shared CtaSection; do not render both.
 */
export const ScanClose = () => (
  <section className="py-24 max-lg:py-16 max-md:py-10">
    <div className="container-site">
      <div className="relative isolate overflow-hidden rounded-card-lg bg-ink px-10 py-24 max-lg:py-16 max-md:rounded-card max-md:px-6 max-md:py-12">
        <Image
          src="/images/scan/scan-map.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-bottom"
        />
        {/* Ink wash over the drawing so the white type reads; deeper at the
            top where the headline sits, the map showing through below. */}
        <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-ink via-ink/60 to-ink/10"
          aria-hidden
        />
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-9 text-center max-md:gap-6">
          <Reveal>
            <h2 className="text-h3 text-white">
              If your practice works on the outside but does not feel fully
              yours on the inside, do not add another borrowed system.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body-xl text-mute">
              Find where ownership has been outsourced. Reclaim the first piece.
              Build from owned ground.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col items-center gap-4">
            <ScanCta />
            <p className="text-body-s text-mute">
              Walk away knowing exactly where it went, and what to reclaim
              first.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
