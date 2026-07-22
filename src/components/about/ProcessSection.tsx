import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

interface ProcessStep {
  label: string;
  subLabel: string;
  icon: string;
  description: string;
}

/** Copy verbatim from about spec §5 (curly apostrophes preserved). */
const steps: ProcessStep[] = [
  {
    label: "Day 1",
    subLabel: "Kickoff meeting",
    icon: "/images/process-card-icon-01.svg",
    description:
      "We begin with a kickoff meeting where we align on your product, set up our Figma workspace, join your Slack, and create a prioritized task board.",
  },
  {
    label: "Day 2",
    subLabel: "Ideation",
    icon: "/images/process-card-icon-2.svg",
    description:
      "On day two we explore early directions through competitor research, ideation, drafts and sketches, and the first shapes of the solution begin to form.",
  },
  {
    label: "Day 3-4",
    subLabel: "First designs",
    icon: "/images/process-card-icon-03.svg",
    description:
      "After a few days you receive the first round of fresh designs, the new direction starts to come alive, and you share feedback as the momentum builds.",
  },
  {
    label: "Day 5",
    subLabel: "Part of your team",
    icon: "/images/process-card-icon-04.svg",
    description:
      "After week one, weekly syncs keep us aligned, and two design deliveries each week push the product forward. It quickly feels like we’re part of your team.",
  },
];

/**
 * "Our Method" (about spec §5): dark inset band with title row and four
 * white process cards inside a sticky wrapper. "everyproject" is a
 * verbatim quirk from the source.
 */
export const ProcessSection = () => (
  <section className="section-pad bg-white">
    <div className="mx-4 rounded-card bg-ink py-20 text-white max-md:mx-2 max-md:py-12">
      <div className="container-site">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <Reveal>
            <Tag tone="light">Our Method</Tag>
            <h2 className="mt-6 text-h2">A systematic approach to growth.</h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-body-l text-mute">
              {"We’ve spent years refining a process that bridges the gap between raw data and creative excellence, ensuring everyproject is built for long-term scale."}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 max-md:mt-8">
          <div className="sticky top-28 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col rounded-2xl bg-white p-5 text-ink">
                  <p className="flex items-baseline justify-between gap-2 text-body-l font-medium">
                    {step.label}
                    <span className="text-body-s font-normal text-smoke">
                      {step.subLabel}
                    </span>
                  </p>
                  <div className="flex flex-1 items-center justify-center py-12">
                    <Image
                      src={step.icon}
                      alt=""
                      width={64}
                      height={64}
                      className="size-16"
                    />
                  </div>
                  <p className="text-body-s text-smoke">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
