import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/**
 * The work behind it — all five pillars on an ink band (user direction:
 * five, not §4.4's three; heading adjusted to match). Hairline rows hold
 * the long movement lines at every width.
 */
export const WorkBehind = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="rounded-card-lg bg-ink px-14 py-16 max-lg:px-10 max-md:rounded-card max-md:px-6 max-md:py-10">
        <Reveal className="max-w-[760px]">
          <h2 className="text-h4 text-white">
            The Autonomy Code moves you from hidden captivity to
            self-governance through five pillars:
          </h2>
        </Reveal>
        <div className="mt-12 max-md:mt-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.06}>
              <div className="flex items-center gap-10 border-t border-white/15 py-5 max-lg:gap-6 max-md:flex-wrap max-md:gap-x-4 max-md:gap-y-2">
                {pillar.image && (
                  <Image
                    src={pillar.image.src}
                    alt=""
                    width={160}
                    height={160}
                    sizes="80px"
                    className="size-20 shrink-0 rounded-2xl object-cover max-md:size-14"
                  />
                )}
                <span className="w-8 shrink-0 font-heading text-body-s text-brand-soft max-md:w-auto">
                  {pillar.index}
                </span>
                <h3 className="w-52 shrink-0 font-heading text-h5 text-white max-md:w-auto">
                  {pillar.name}
                  <span className="text-brand">.</span>
                </h3>
                <p className="text-body-l text-mute max-md:basis-full">{pillar.movement}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/15" aria-hidden />
        </div>
        <Reveal className="mt-12 max-w-[680px] max-md:mt-8">
          <p className="text-body-xl text-white">
            The goal is not to force yourself into another borrowed system. The
            goal is to see where ownership went, and reclaim the first piece.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
