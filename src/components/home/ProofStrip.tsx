import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { ProofQuote } from "@/content/types";

/** Proof, quietly: one centered voice with a small portrait (content.md §4.1). */
export const ProofStrip = ({ quote }: { quote: ProofQuote }) => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <blockquote>
          <p className="font-heading text-h3">&ldquo;{quote.quote}&rdquo;</p>
          <footer className="mt-8 flex items-center justify-center gap-3 max-md:mt-6">
            {quote.avatar && (
              <Image
                src={quote.avatar.src}
                alt={quote.avatar.alt}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
            )}
            <span className="text-body-m text-smoke">{quote.attribution}</span>
          </footer>
        </blockquote>
      </Reveal>
    </div>
  </section>
);
