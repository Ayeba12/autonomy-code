import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { CompassCta, deliverables } from "./CompassCta";

/**
 * Compass hero (copy v3 §1, verbatim words): the headline on soft ivory
 * beside the drawing of a woman at an open door. A small card on the drawing names the three things the £97
 * holds, each with its cover.
 */
export const CompassHero = () => (
  <section className="m-2 rounded-card bg-paper-2 pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site grid grid-cols-[1.2fr_0.8fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-12">
      <div>
        <Reveal className="flex flex-col items-start gap-6 max-md:gap-5">
          <Tag>The Autonomy Compass</Tag>
          <p className="max-w-[560px] font-heading text-body-l text-slate">
            For coaches and consultants who have built something real, and
            privately sense it was built for the wrong reasons.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-[760px] text-h2 max-md:mt-6">
            You don&rsquo;t have a discipline problem. You have a life you
            never fully claimed.
          </h1>
        </Reveal>
        <Reveal delay={0.2} className="mt-7 flex max-w-[600px] flex-col gap-4">
          <p className="text-body-l text-slate">
            Most people are living a life they didn&rsquo;t fully choose. Not
            because they failed. Because it was built in response to pressure,
            expectation and survival, rather than from deliberate design.
          </p>
          <p className="text-body-l text-ink">
            The Autonomy Compass shows you where that happened, and what to
            claim back first.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-9 flex flex-col items-start gap-3 max-md:mt-7">
          <CompassCta />
          <p className="text-body-s text-slate">
            Twenty-five statements. About ten minutes. One clear first move.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative">
        <div className="overflow-hidden rounded-card">
          <Image
            src="/images/home/tier-scan.webp"
            alt="Graphite sketch of a woman at an open doorway, map in hand, the door frame drawn in gold"
            width={1600}
            height={1200}
            preload
            sizes="(max-width: 1023px) 100vw, 38vw"
            className="aspect-[4/5] w-full object-cover object-[30%_50%] max-lg:aspect-[3/2]"
          />
        </div>
        {/* What the £97 holds, on a small card over the drawing */}
        <div className="absolute -bottom-6 -left-10 w-[300px] rounded-card bg-white p-5 shadow-xl shadow-ink/10 max-lg:left-4 max-md:relative max-md:bottom-auto max-md:left-auto max-md:-mt-10 max-md:mx-4 max-md:w-auto">
          <ul className="flex flex-col gap-3">
            {deliverables.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <Image
                  src={item.cover.src}
                  alt=""
                  width={96}
                  height={96}
                  sizes="44px"
                  className="size-11 shrink-0 rounded-lg object-cover"
                />
                <span className="flex flex-col">
                  <span className="font-heading text-body-xs tracking-[0.16em] text-slate uppercase">
                    {item.step}
                  </span>
                  <span className="font-heading text-body-m text-ink">{item.title}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-line pt-3 font-heading text-body-s text-ink">
            £97 <span className="text-slate">· one payment</span>
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
