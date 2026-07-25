import { Reveal } from "@/components/motion/Reveal";

/** The close line before the shared black band (content.md 4.2). */
export const MethodClose = () => (
  <section className="section-gap pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <div className="gold-thread mx-auto w-16" aria-hidden />
        <p className="mt-10 font-heading text-h3 max-md:mt-6">
          Every case begins the same way. With a diagnosis.
        </p>
      </Reveal>
    </div>
  </section>
);
