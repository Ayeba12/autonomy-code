import { Button } from "@/components/ui/Button";
import type { LadderTier } from "@/content/types";

interface LadderCardProps {
  tier: LadderTier;
  /** Position in the ladder (0-based); drives the gold numeral. */
  index: number;
}

/**
 * One rung of the Ladder on Work Together (content.md §4.3): gold
 * numeral, name, summary, route. Named, not priced. `tier.price` is
 * deliberately never rendered here; prices appear only on each tier's
 * own landing page (house style §1, money rules).
 */
export const LadderCard = ({ tier, index }: LadderCardProps) => (
  <article className="grid grid-cols-[56px_1fr] items-start gap-x-6 gap-y-6 border-t border-line py-12 max-md:py-8 md:grid-cols-[88px_1fr_auto] md:gap-x-10">
    <p
      aria-hidden
      className="pt-1 font-heading text-h5 text-brand"
    >{`0${index + 1}`}</p>
    <div>
      <h2 className="text-h4">{tier.name}</h2>
      <p className="mt-3 max-w-[600px] text-body-l text-smoke">{tier.summary}</p>
    </div>
    <div className="col-start-2 md:col-start-3 md:self-center">
      <Button
        href={tier.cta.href}
        variant={index === 0 ? "brand" : "outline-dark"}
      >
        {tier.cta.label}
      </Button>
    </div>
  </article>
);
