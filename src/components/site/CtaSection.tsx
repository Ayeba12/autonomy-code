import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/** Shared pre-footer CTA ("Transform Your Ideas Today"). */
export const CtaSection = () => (
  <section className="bg-white py-24 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto flex max-w-[888px] flex-col items-center gap-5 text-center">
        <Tag>Get Started</Tag>
        <h2 className="text-display">Transform Your Ideas Today</h2>
        <Button href="/contact" variant="brand" className="mt-3">
          Book a Consultation
        </Button>
      </Reveal>
    </div>
  </section>
);
