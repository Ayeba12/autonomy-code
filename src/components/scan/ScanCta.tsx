import { Button } from "@/components/ui/Button";

/**
 * The one destination every button on the Compass page points to: the
 * Stripe Payment Link for The Autonomy Compass (copy v3, 29 Sept 2026).
 */
export const COMPASS_HREF = "https://buy.stripe.com/cNi28rb1O2Mn9Th4j9dQQ0y";

/**
 * The gold CTA. Every instance on this page reads exactly
 * "Take the Autonomy Compass · £97" (copy v3). Gold gradient per brand
 * spec: champagne top-light into core gold.
 */
export const ScanCta = ({ className = "" }: { className?: string }) => (
  <Button
    href={COMPASS_HREF}
    variant="brand"
    className={`bg-linear-to-b from-gold-light/70 via-brand to-brand-hot ${className}`}
  >
    Take the Autonomy Compass · £97
  </Button>
);
