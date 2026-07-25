import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/** The single black close band, once per page (content.md §4.1 soft close). */
export const CtaSection = () => (
  <section className="p-4 pb-0 max-md:p-2 max-md:pb-0">
    <div className="overflow-hidden rounded-card bg-ink text-white">
      <div aria-hidden className="gold-thread" />
      <div className="container-site py-24 max-md:py-14">
        <Reveal className="mx-auto flex max-w-[888px] flex-col items-center gap-5 text-center">
          <Tag tone="light">When you are ready</Tag>
          <h2 className="text-display">The door is one step.</h2>
          <p className="text-body-xl text-mute">No rush. No force. No gra gra.</p>
          <Button href="/ownership-scan" variant="brand" className="mt-3">
            Take the Ownership Scan
          </Button>
        </Reveal>
      </div>
    </div>
  </section>
);
