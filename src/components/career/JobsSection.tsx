import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { JobOpening } from "@/content/types";
import { JobTabs } from "./JobTabs";

/** Job listings with country tabs (career.md §5). */
export const JobsSection = ({ jobs }: { jobs: JobOpening[] }) => (
  <section className="bg-ink pb-28 text-white max-lg:pb-16 max-md:pb-12">
    <div className="container-site">
      <Reveal className="mx-auto flex max-w-[880px] flex-col items-center gap-5 text-center">
        <Tag tone="light">Find your next job</Tag>
        <h2 className="text-h2">
          Elevate your career{" "}
          <span className="text-mute">to the next level</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="mt-14 max-md:mt-8">
        <JobTabs jobs={jobs} />
      </Reveal>
    </div>
  </section>
);
