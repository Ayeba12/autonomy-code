import { Reveal } from "@/components/motion/Reveal";

/** The three parts of autonomy, drawn out of the definition (content.md 4.2). */
const parts = [
  { word: "Clarity", line: "Enough to know what you want." },
  { word: "Structure", line: "Enough to pursue it." },
  { word: "Self-trust", line: "Enough to lead from that place." },
];

/** What autonomy means: the page's single breath-blue accent (content.md 4.2). */
export const AutonomyMeaning = () => (
  <section className="section-gap bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[820px] text-center">
        <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
          What autonomy means
        </p>
        <p className="mt-8 font-heading text-h3 text-ink max-md:mt-6">
          Autonomy is not independence from people. It is independence from
          captivity.
        </p>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-3 gap-6 max-md:mt-10 max-md:grid-cols-1">
        {parts.map((part, i) => (
          <Reveal key={part.word} delay={0.1 + i * 0.08} className="h-full">
            <div className="flex h-full flex-col items-center gap-3 rounded-card bg-white/70 px-6 py-8 text-center">
              <span className="flex size-9 items-center justify-center rounded-full border border-brand/40 font-heading text-body-s text-brand-hot">
                {i + 1}
              </span>
              <p className="font-heading text-h5 text-ink">{part.word}</p>
              <p className="text-body-m text-slate">{part.line}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
