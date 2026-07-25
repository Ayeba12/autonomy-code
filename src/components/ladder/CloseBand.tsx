import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

interface CloseBandProps {
  /** Quiet line above the heading. */
  kicker?: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

/**
 * Soft close: the page's single black band (content.md §2, ink used
 * sparingly), opened by the gold thread. No urgency devices.
 */
export const CloseBand = ({
  kicker,
  title,
  buttonLabel,
  buttonHref,
}: CloseBandProps) => (
  <section className="bg-ink">
    <div className="gold-thread" />
    <div className="container-site py-24 max-md:py-16">
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center">
        {kicker && <p className="text-body-l text-mute">{kicker}</p>}
        <h2 className="text-h2 text-white">{title}</h2>
        <Button href={buttonHref} variant="brand" className="mt-2">
          {buttonLabel}
        </Button>
      </Reveal>
    </div>
  </section>
);
