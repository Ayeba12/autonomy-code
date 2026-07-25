import { Reveal } from "@/components/motion/Reveal";

/** The condition it treats: hidden captivity (content.md 4.2). */
export const HiddenCaptivity = () => (
  <section className="section-gap">
    <div className="container-site">
      <div className="grid grid-cols-2 items-end gap-10 max-lg:grid-cols-1">
        <Reveal>
          <p className="font-heading text-body-l text-ink">
            The condition it treats
          </p>
          <h2 className="mt-4 text-h2">Hidden captivity.</h2>
        </Reveal>
        <Reveal delay={0.15} className="max-w-[560px] lg:justify-self-end">
          <p className="text-body-xl text-smoke">
            Functioning, but not free. Moving, producing, helping, leading, but
            not fully from your centre.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
