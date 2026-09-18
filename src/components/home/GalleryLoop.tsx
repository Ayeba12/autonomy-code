import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { pillars } from "@/content/local/pillars";

/**
 * Full-bleed looping strip (Stodio gallery pattern) carrying the five
 * pillar drawings, each labelled with its number and name.
 */
export const GalleryLoop = () => (
  <section className="bg-white pt-16 max-md:pt-10">
    <Marquee duration={40} gapClassName="gap-5" ariaLabel="The five pillars">
      {pillars.map((pillar) => (
        <figure
          key={pillar.slug}
          className="relative h-[576px] w-[30vw] shrink-0 overflow-hidden rounded-card bg-paper max-lg:h-[350px] max-lg:w-[250px] max-md:h-[220px] max-md:w-[180px]"
        >
          {pillar.image && (
            <Image
              src={pillar.image.src}
              alt={pillar.image.alt}
              width={640}
              height={800}
              sizes="(max-width: 767px) 180px, (max-width: 1023px) 250px, 30vw"
              className="size-full object-cover"
            />
          )}
          <figcaption className="absolute bottom-5 left-5 flex items-baseline gap-2 rounded-pill bg-ink/85 px-4 py-2 font-heading text-body-s text-paper max-md:bottom-3 max-md:left-3 max-md:px-3 max-md:py-1.5 max-md:text-body-xs">
            <span className="text-brand-soft">{pillar.index}</span>
            <span>{pillar.name}</span>
          </figcaption>
        </figure>
      ))}
    </Marquee>
  </section>
);
