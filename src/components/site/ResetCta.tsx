import { Button } from "@/components/ui/Button";

/**
 * The main button, sitewide, while the Annual Reset is on sale: a white
 * pill with the Reset cover figure on the left and a diagonal arrow (the
 * Stodio "Book a call" pattern), reading "The Annual Reset 4.0". Header,
 * body closes and footer all use it, with the date line beneath where
 * there is room.
 */
export const RESET_CTA_LABEL = "The Annual Reset 4.0";
export const RESET_CTA_HREF = "/annual-reset";
export const RESET_CTA_LINE = "27 November, 4 and 5 December 2026 · 7 pm UK · Online";
/** The woman from the Reset cover art, cropped to her face. */
export const RESET_CTA_AVATAR = "/images/reset/reset-avatar.webp";

interface ResetCtaProps {
  variant?: "brand" | "gold" | "light";
  /** Show the date line beneath the button. */
  line?: boolean;
  /** Colour class for the date line; defaults suit an ivory ground. */
  lineClassName?: string;
  className?: string;
  buttonClassName?: string;
}

/** The button alone, for places that lay out their own line. */
export const ResetButton = ({
  variant = "light",
  className = "",
}: {
  variant?: "brand" | "gold" | "light";
  className?: string;
}) => (
  <Button
    href={RESET_CTA_HREF}
    variant={variant}
    avatarSrc={RESET_CTA_AVATAR}
    className={className}
  >
    {RESET_CTA_LABEL}
  </Button>
);

export const ResetCta = ({
  variant = "light",
  line = true,
  lineClassName = "text-smoke",
  className = "",
  buttonClassName = "",
}: ResetCtaProps) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <ResetButton variant={variant} className={buttonClassName} />
    {line && <p className={`text-body-s ${lineClassName}`}>{RESET_CTA_LINE}</p>}
  </div>
);
