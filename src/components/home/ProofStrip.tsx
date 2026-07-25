import { Reveal } from "@/components/motion/Reveal";
import type { ProofQuote } from "@/content/types";

/** Proof, quietly: one centered voice, no slider (content.md 4.1). */
export const ProofStrip = ({ quote }: { quote: ProofQuote }) => (
  <section className="section-gap pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <div className="gold-thread mx-auto w-16" aria-hidden />
        <blockquote className="mt-10 max-md:mt-6">
          <p className="font-heading text-h4">
            &ldquo;{quote.quote}&rdquo;
          </p>
          <footer className="mt-6 text-body-m text-smoke">
            {quote.attribution}
          </footer>
        </blockquote>
      </Reveal>
    </div>
  </section>
);
