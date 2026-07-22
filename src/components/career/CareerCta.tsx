import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { SparkIcon } from "./icons";

/**
 * "Interested?" header + infinite hiring ticker (career.md §3).
 * The template loops 6 items — "OPEN ROLES" repeats — with white
 * spark separators.
 */
const marqueeItems = [
  "OPEN ROLES",
  "WE ARE HIRING",
  "OPEN ROLES",
  "WORK WITH US",
  "NOW HIRING",
  "APPLY TODAY",
];

export const CareerCta = () => (
  <section className="bg-ink pt-24 pb-20 text-white max-lg:pt-16 max-lg:pb-14 max-md:pt-12 max-md:pb-10">
    <div className="container-site">
      <Reveal className="mx-auto flex max-w-[880px] flex-col items-center gap-5 text-center">
        <Tag tone="light">Interested?</Tag>
        <h2 className="text-h2">
          Great talent deserves great challenges.{" "}
          <span className="text-mute">Join the elite</span>
        </h2>
      </Reveal>
    </div>

    <div className="mt-16 max-lg:mt-10 max-md:mt-8">
      <Marquee duration={35} gapClassName="gap-10" ariaLabel="We are hiring">
        {marqueeItems.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-10"
          >
            <SparkIcon className="size-7 shrink-0 text-white max-md:size-5" />
            <span className="font-heading text-h3 whitespace-nowrap uppercase">
              {label}
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  </section>
);
