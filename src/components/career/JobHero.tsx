import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { JobOpening } from "@/content/types";
import { ClockIcon, PinIcon } from "./icons";

/** Dark text-only job-detail hero with location + type meta (career-detail.md §1). */
export const JobHero = ({ job }: { job: JobOpening }) => (
  <section className="bg-ink pt-48 pb-16 text-white max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal className="flex flex-col items-center gap-5 text-center">
        <Tag tone="light">Job Opening</Tag>
        <h1 className="max-w-[880px] text-display">{job.title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-6 text-body-l max-md:gap-4">
          <span className="flex items-center gap-2">
            <PinIcon className="size-4 shrink-0" aria-hidden />
            {job.city}
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="size-4 shrink-0" aria-hidden />
            {job.employmentType}
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);
