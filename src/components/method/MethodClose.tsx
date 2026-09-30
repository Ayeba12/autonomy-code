import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { DiagonalLink } from "@/components/ui/DiagonalLink";

/**
 * The close line before the shared black band (content.md 4.2): the
 * diagnosis line beside the doorway drawing, with the way to the Compass.
 */
export const MethodClose = () => (
  <section className="section-gap pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <div className="grid grid-cols-[1fr_0.8fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <Reveal>
            <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
              Where it begins
            </p>
            <p className="mt-5 max-w-[640px] font-heading text-h2">
              Every case begins the same way. With a diagnosis.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[520px] text-body-xl text-slate">
              Twenty-five statements, a 90-minute Claim Intensive, and a
              written Autonomy Blueprint you keep.
            </p>
            <div className="mt-8">
              <DiagonalLink href="/autonomy-compass">The Autonomy Compass</DiagonalLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/home/tier-scan.webp"
              alt="Graphite sketch of a woman at an open doorway, map in hand, the door frame drawn in gold"
              width={1600}
              height={1200}
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
