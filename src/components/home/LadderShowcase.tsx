import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { LadderTier } from "@/content/types";

/** "The door. Twenty-five questions…" → "The door." */
const firstSentence = (text: string) => {
  const idx = text.indexOf(".");
  return idx === -1 ? text : text.slice(0, idx + 1);
};

const TierCard = ({ tier, sizes }: { tier: LadderTier; sizes: string }) => (
  <Link href={tier.cta.href} className="group block overflow-hidden rounded-card">
    {tier.image && (
      <div className="overflow-hidden rounded-card">
        <Image
          src={tier.image.src}
          alt={tier.image.alt}
          width={1200}
          height={900}
          sizes={sizes}
          className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
      </div>
    )}
    <div className="flex items-center justify-between gap-4 pt-4">
      <h3 className="text-h4 transition-colors duration-300 group-hover:text-brand">
        {tier.name}
      </h3>
      <p className="text-body-s tracking-wide text-smoke uppercase">
        {firstSentence(tier.summary)}
      </p>
    </div>
  </Link>
);

/**
 * The Ladder in the Stodio sticky-title showcase pattern: centered title
 * stays pinned while the three tier cards scroll over it.
 */
export const LadderShowcase = ({ tiers }: { tiers: LadderTier[] }) => {
  const rows: LadderTier[][] = [tiers.slice(0, 2), tiers.slice(2, 3)];

  return (
    <section className="relative pt-24 max-md:pt-14">
      <div className="container-site">
        <div className="sticky top-[20%] mx-auto max-w-[850px] text-center max-lg:static">
          <Reveal className="flex flex-col items-center gap-5">
            <Tag>Work together</Tag>
            <h2 className="text-display">One clear next step</h2>
            <p className="max-w-[580px] text-body-m text-smoke">
              Three ways to work together, each one deeper than the last.
              Every path begins with the Scan.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="mt-28 flex items-start justify-between gap-8 bg-gradient-to-b from-transparent via-paper to-paper max-lg:mt-12 max-md:flex-col">
            {rows[0].map((tier) => (
              <div key={tier.slug} className="w-[46%] max-md:w-full">
                <TierCard tier={tier} sizes="(max-width: 767px) 100vw, 46vw" />
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-paper pt-24 max-lg:pt-12">
            {rows[1].map((tier) => (
              <div key={tier.slug} className="w-[62%] max-md:w-full">
                <TierCard tier={tier} sizes="(max-width: 767px) 100vw, 62vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/work-together"
        className="group mt-24 flex items-center justify-center gap-3 border-y border-line py-6 transition-colors duration-300 hover:border-brand hover:bg-paper-2 max-lg:mt-12"
      >
        <svg
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
        </svg>
        <span className="text-h5 transition-colors duration-300 group-hover:text-brand">
          The whole path
        </span>
        <span className="text-body-m text-brand">(03)</span>
      </Link>
    </section>
  );
};
