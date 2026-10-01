import { Button } from "@/components/ui/Button";

/**
 * The one destination every button on the Compass page points to: the
 * Stripe Payment Link for The Autonomy Compass (copy v3, 29 Sept 2026).
 */
export const COMPASS_HREF = "https://buy.stripe.com/cNi28rb1O2Mn9Th4j9dQQ0y";

/** Every button on the page reads exactly this (copy v3). */
export const COMPASS_CTA_LABEL = "Take the Autonomy Compass · £97";

/**
 * The gold CTA. Gold gradient per brand spec: champagne top-light into
 * core gold.
 */
export const CompassCta = ({ className = "" }: { className?: string }) => (
  <Button
    href={COMPASS_HREF}
    variant="brand"
    className={`bg-linear-to-b from-gold-light/70 via-brand to-brand-hot ${className}`}
  >
    {COMPASS_CTA_LABEL}
  </Button>
);

/** Small uppercase label used for eyebrows across the page. */
export const Eyebrow = ({
  children,
  className = "text-slate",
}: {
  children: string;
  className?: string;
}) => (
  <p className={`font-heading text-body-s tracking-[0.2em] uppercase ${className}`}>
    {children}
  </p>
);

/** The three deliverables, shared by the hero card and the offer. */
export const deliverables = [
  {
    step: "01 · See",
    title: "The Autonomy Compass",
    cover: {
      src: "/images/compass/compass-cover.webp",
      alt: "Cover of The Autonomy Compass: a small figure at the centre of layered paper contours, a blue arrow pointing outward. Find where to begin.",
    },
  },
  {
    step: "02 · Choose",
    title: "The Claim Intensive",
    cover: {
      src: "/images/compass/claim-intensive-cover.webp",
      alt: "Cover of The Claim Intensive: a small figure at the hub of paper paths, one blue path lifting away as a bridge. Choose what changes.",
    },
  },
  {
    step: "03 · Build",
    title: "The Autonomy Blueprint",
    cover: {
      src: "/images/compass/blueprint-cover.webp",
      alt: "Cover of The Autonomy Blueprint: a small figure at the foot of paper steps, a blue line climbing them. Build a way that fits.",
    },
  },
];
