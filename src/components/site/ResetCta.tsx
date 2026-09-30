import { Button } from "@/components/ui/Button";

/**
 * The main button, sitewide, while the Annual Reset is on sale
 * (pre-launch brief, 30 Sept 2026): header, body closes and footer all
 * carry this label, this destination, and this line beneath.
 */
export const RESET_CTA_LABEL = "Take your seat · The Annual Reset 4.0";
export const RESET_CTA_HREF = "/annual-reset";
export const RESET_CTA_LINE = "27 November, 4 and 5 December 2026 · 7 pm UK · Online";

interface ResetCtaProps {
  variant?: "brand" | "gold" | "light";
  /** Show the date line beneath the button. */
  line?: boolean;
  /** Colour class for the date line; defaults suit an ivory ground. */
  lineClassName?: string;
  className?: string;
  arrow?: boolean;
}

export const ResetCta = ({
  variant = "brand",
  line = true,
  lineClassName = "text-smoke",
  className = "",
  arrow = true,
}: ResetCtaProps) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <Button href={RESET_CTA_HREF} variant={variant} arrow={arrow}>
      {RESET_CTA_LABEL}
    </Button>
    {line && <p className={`text-body-s ${lineClassName}`}>{RESET_CTA_LINE}</p>}
  </div>
);
