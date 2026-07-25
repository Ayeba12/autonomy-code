import { Reveal } from "@/components/motion/Reveal";

/** Type-led ivory hero for The Method (content.md 4.2). */
export const MethodHero = () => (
  <section className="pt-44 pb-16 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">The Method</p>
        <div className="gold-thread mt-5 w-full max-w-xs" aria-hidden />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-8 max-w-[900px] text-display">
          From hidden captivity to self-governance.
        </h1>
      </Reveal>
    </div>
  </section>
);
