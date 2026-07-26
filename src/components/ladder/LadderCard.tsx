import Image from "next/image";
import Link from "next/link";
import type { LadderTier } from "@/content/types";

interface LadderCardProps {
  tier: LadderTier;
  /** Full-width single card (the trailing "2 + 1" row) vs half-width pair card. */
  wide?: boolean;
  /** Preload the image (first card above the fold of the grid). */
  preload?: boolean;
}

/**
 * One rung of the Ladder on Work Together (content.md §4.3), rebuilt on the
 * Stodio ProjectCard pattern: large editorial image with hover zoom, then
 * name, summary, and the gold route. Named, not priced. `tier.price` is
 * deliberately never rendered here; prices appear only on each tier's own
 * landing page (house style §1, money rules).
 */
export const LadderCard = ({
  tier,
  wide = false,
  preload = false,
}: LadderCardProps) => (
  <Link href={tier.cta.href} className="group block">
    <div className="overflow-hidden rounded-card">
      {tier.image ? (
        <Image
          src={tier.image.src}
          alt={tier.image.alt}
          width={tier.image.width ?? (wide ? 1440 : 960)}
          height={tier.image.height ?? (wide ? 640 : 720)}
          sizes={wide ? "100vw" : "(max-width: 767px) 100vw, 50vw"}
          preload={preload}
          className={`w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105 ${
            wide ? "aspect-[21/9] max-md:aspect-[4/3]" : "aspect-[4/3]"
          }`}
        />
      ) : (
        <div
          aria-hidden
          className={`w-full bg-paper-2 ${
            wide ? "aspect-[21/9] max-md:aspect-[4/3]" : "aspect-[4/3]"
          }`}
        />
      )}
    </div>
    <div className="flex items-start justify-between gap-8 pt-6 max-md:flex-col max-md:gap-4 max-md:pt-4">
      <div>
        <h2 className="text-h4 transition-colors duration-300 group-hover:text-brand">
          {tier.name}
        </h2>
        <p className="mt-3 max-w-[600px] text-body-l text-smoke">
          {tier.summary}
        </p>
      </div>
      {/* Gold route — a styled span, not a nested link; the card is the link. */}
      <span className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-pill bg-brand px-5 py-3 text-body-m font-medium text-white transition-all duration-350 group-hover:rounded-2xl md:mt-2">
        <span>{tier.cta.label}</span>
        <Image
          src="/images/button-icon-white.svg"
          alt=""
          width={16}
          height={16}
          className="size-4"
        />
      </span>
    </div>
  </Link>
);
