import { Reveal } from "@/components/motion/Reveal";

/** The close line before the shared black band (content.md 4.2). */
export const MethodClose = () => (
  <section className="section-gap pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[760px] text-center">
        <p className="font-heading text-h3">
          Every case begins the same way. With a diagnosis.
        </p>
      </Reveal>
    </div>
  </section>
);
