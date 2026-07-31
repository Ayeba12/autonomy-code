import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The condition it treats: hidden captivity (content.md 4.2), set as a
 * two-column beat with a quiet editorial image.
 */
export const HiddenCaptivity = () => (
  <section className="section-gap">
    <div className="container-site">
      <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <Reveal>
            <p className="font-heading text-body-l text-ink">
              The condition it treats
            </p>
            <h2 className="mt-4 text-h2">Hidden captivity.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[520px] text-body-xl text-smoke">
              Functioning, but not free. Moving, producing, helping, leading,
              but not fully from your centre.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="w-full lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-card max-lg:max-w-none lg:ml-auto">
            <Image
              src="/images/method-captivity.webp"
              alt="Ripples widening on a misty lake at sunrise"
              fill
              sizes="(max-width: 1023px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
