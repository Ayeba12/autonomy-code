import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

interface CloseBandProps {
  /** Quiet line above the heading. */
  kicker?: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
  /** Small line beneath the button (dates, for the Reset). */
  line?: string;
}

/**
 * Soft close: the page's single black band (content.md §2, ink used
 * sparingly). No urgency devices.
 */
export const CloseBand = ({
  kicker,
  title,
  buttonLabel,
  buttonHref,
  line,
}: CloseBandProps) => (
  <section className="bg-ink">
    <div className="container-site py-24 max-md:py-16">
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center">
        {kicker && <p className="text-body-l text-mute">{kicker}</p>}
        <h2 className="text-h2 text-white">{title}</h2>
        <Button href={buttonHref} variant="brand" className="mt-2">
          {buttonLabel}
        </Button>
        {line && <p className="text-body-s text-mute">{line}</p>}
      </Reveal>
    </div>
  </section>
);
