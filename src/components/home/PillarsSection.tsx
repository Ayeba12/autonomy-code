import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Pillar } from "@/content/types";

/**
 * The five pillars as a dark hover-row list (Stodio services pattern):
 * each row reveals the pillar's image and movement on hover.
 */
export const PillarsSection = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="bg-ink pt-20 pb-40 text-white max-lg:pb-24">
    <div className="container-site">
      <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <Reveal>
          <Tag tone="light">The Autonomy Code</Tag>
          <div className="mt-6 flex items-center gap-5">
            <h2 className="text-h2">The Five</h2>
            <Image
              src="/images/five-pillars.webp"
              alt=""
              width={120}
              height={72}
              className="h-16 w-28 rounded-full object-cover max-md:h-10 max-md:w-16"
            />
            <h2 className="text-h2">Pillars</h2>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="max-w-md">
          <p className="text-body-l text-mute">
            Identity, Message, Strategy, Resources, Relationships. Five places
            where ownership is lost, and reclaimed.
          </p>
        </Reveal>
      </div>

      <div className="mt-28 max-lg:mt-16">
        {pillars.map((pillar) => (
          <Link
            key={pillar.slug}
            href="/method"
            className="group relative block border-t border-coal py-8 transition-colors duration-300 last:border-b hover:border-dashed hover:border-brand max-md:py-5"
          >
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-h2 font-semibold transition-colors duration-300 group-hover:text-brand">
                {pillar.name}
              </h3>
              <span className="text-h6 text-mute">[{pillar.index}]</span>
            </div>
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
                <p className="mt-1 text-body-m text-white">{pillar.movement}</p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  </section>
);
