import { Button } from "@/components/ui/Button";

/**
 * The one destination every CTA on the Scan page points to.
 *
 * Interim booking chain (content.md §4.4 footnote): until on-site checkout is
 * wired, this href becomes the external Stripe payment link, which hands off
 * to the ChatGPT scan GPT, then the Google form, then booking. Phase two
 * replaces the chain with an embedded scheduler + on-site Stripe (cancellation
 * policy shown before payment). For now the CTA anchors to the offer section.
 */
export const BOOK_HREF = "#book";

/**
 * The gold CTA. Every instance on this page reads exactly
 * "Book Your £97 Ownership Scan" (content.md §4.4). Gold gradient per the
 * Gold gradient per brand spec: champagne top-light into core gold.
 */
export const ScanCta = ({ className = "" }: { className?: string }) => (
  <Button
    href={BOOK_HREF}
    variant="brand"
    className={`bg-linear-to-b from-gold-light/70 via-brand to-brand-hot ${className}`}
  >
    Book Your £97 Ownership Scan
  </Button>
);
