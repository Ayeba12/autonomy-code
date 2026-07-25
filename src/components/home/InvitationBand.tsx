import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/** The one invitation: the page's single breath-blue accent, no price (content.md 4.1). */
export const InvitationBand = () => (
  <section className="section-gap bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center max-md:gap-6">
        <h2 className="text-h3">
          Twenty-five questions. Your pattern, your strained pillar, and your
          first move.
        </h2>
        <Button href="/ownership-scan" variant="brand">
          Take the Ownership Scan
        </Button>
      </Reveal>
    </div>
  </section>
);
