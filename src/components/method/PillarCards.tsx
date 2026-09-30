import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/**
 * The five pillars as the dark hover-row section (Stodio services pattern,
 * as on the home page): each row carries the pillar's drawing as a small
 * tile, the name, the movement and, on hover, the full drawing with its
 * description. Below lg the description sits in the row instead.
 */
export const PillarCards = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="section-gap bg-ink py-24 text-white max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
            The system
          </p>
          <h2 className="mt-5 text-h2">The five pillars</h2>
        </div>
        <p className="max-w-md text-body-l text-mute">
          Five places where ownership is lost, and reclaimed. One of them is
          where yours went.
        </p>
      </Reveal>

      <div className="mt-16 max-lg:mt-10">
        {pillars.map((pillar) => (
          <article
            key={pillar.slug}
            className="group relative border-t border-coal py-7 transition-colors duration-300 last:border-b hover:border-dashed hover:border-brand max-md:py-5"
          >
            <div className="flex items-center gap-8 max-md:gap-4">
              {pillar.image && (
                <Image
                  src={pillar.image.src}
                  alt=""
                  width={160}
                  height={160}
                  sizes="88px"
                  className="size-22 shrink-0 rounded-2xl object-cover max-md:size-14"
                />
              )}
              <div className="flex flex-1 items-baseline justify-between gap-6">
                <div>
                  <h3 className="font-heading text-h2 transition-colors duration-300 group-hover:text-brand max-md:text-h3">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-body-l text-mute">{pillar.movement}</p>
                  {/* Below lg the hover card is hidden, so the copy lives in the row. */}
                  <p className="mt-3 max-w-[560px] text-body-m text-mute lg:hidden">
                    {pillar.description}
                  </p>
                </div>
                <span className="font-heading text-h6 text-brand">{pillar.index}</span>
              </div>
            </div>

            {pillar.image && (
              <div className="pointer-events-none absolute top-1/2 right-24 z-10 w-[300px] -translate-y-1/2 rounded-2xl bg-coal p-4 opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100 max-lg:hidden">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  width={560}
                  height={560}
                  sizes="280px"
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-body-s text-mute">{pillar.name}</p>
                <p className="mt-1 text-body-m text-white">{pillar.description}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
