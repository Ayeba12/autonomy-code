import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/** The signs, as three short lines beside the drawing. */
const signs = ["Moving", "Producing", "Helping", "Leading"];

/**
 * The condition it treats: hidden captivity (content.md 4.2), set as a
 * two-column beat with a drawing of a capable woman at a tidy desk, a
 * faint cage around it with the door ajar, the lamp in gold.
 */
export const HiddenCaptivity = () => (
  <section className="section-gap">
    <div className="container-site">
      <div className="grid grid-cols-[1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <Reveal>
            <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
              The condition it treats
            </p>
            <h2 className="mt-5 text-h2">Hidden captivity.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[520px] text-body-xl text-slate">
              Functioning, but not free.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-center gap-2 font-heading text-h6 text-ink">
                  <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                  {sign}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[520px] text-body-xl text-slate">
              But not fully from your centre.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="w-full">
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/method/method-captivity.webp"
              alt="Graphite drawing of a capable woman working at a tidy desk, a faint birdcage drawn around it with its door ajar, the desk lamp in gold"
              width={1000}
              height={1250}
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="aspect-[4/5] w-full object-cover max-lg:aspect-[4/3]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
