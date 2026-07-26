import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/**
 * The five pillars as the dark hover-row section (Stodio services pattern):
 * bg-ink rows, gold index numerals, hover reveals the pillar image card with
 * its description. Below lg the description sits in the row instead.
 */
export const PillarCards = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="section-gap bg-ink py-24 text-white max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-white">The system</p>
        <h2 className="mt-4 text-h2">The five pillars</h2>
      </Reveal>

      <div className="mt-16 max-lg:mt-10">
        {pillars.map((pillar) => (
          <article
            key={pillar.slug}
            className="group relative border-t border-coal py-8 transition-colors duration-300 last:border-b hover:border-dashed hover:border-brand max-md:py-6"
          >
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <h3 className="font-heading text-h2 transition-colors duration-300 group-hover:text-brand">
                  {pillar.name}
                </h3>
                <p className="mt-2 text-body-l text-mute">{pillar.movement}</p>
              </div>
              <span className="font-heading text-h6 text-brand">
                {pillar.index}
              </span>
            </div>

            {/* Below lg the hover card is hidden, so the copy lives in the row. */}
            <p className="mt-4 max-w-[560px] text-body-l text-mute lg:hidden">
              {pillar.description}
            </p>

            {pillar.image && (
              <div className="pointer-events-none absolute top-1/2 right-24 z-10 w-[300px] -translate-y-1/2 rounded-2xl bg-coal p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100 max-lg:hidden">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  width={280}
                  height={180}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-body-s text-mute">{pillar.name}</p>
                <p className="mt-1 text-body-m text-white">
                  {pillar.description}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
