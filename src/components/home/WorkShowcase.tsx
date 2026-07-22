import Link from "next/link";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/types";

/**
 * Selected work: sticky centered title with project rows scrolling
 * over it (home §7). Rows: 2 / 1 / 2 cards.
 */
export const WorkShowcase = ({ projects }: { projects: Project[] }) => {
  const rows: Project[][] = [projects.slice(0, 2), projects.slice(2, 3), projects.slice(3, 5)];

  return (
    <section className="relative bg-white pt-20">
      <div className="container-site">
        <div className="sticky top-[20%] mx-auto max-w-[850px] text-center max-lg:static">
          <Reveal className="flex flex-col items-center gap-5">
            <Tag>Selected work</Tag>
            <h2 className="text-display">Featured projects & creative works</h2>
            <p className="max-w-[580px] text-body-m text-smoke">
              We don&rsquo;t just build websites; we create digital experiences that
              resonate with users and drive long-term business growth.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="mt-28 flex items-start justify-between gap-8 bg-gradient-to-b from-transparent via-white to-white max-lg:mt-12 max-md:flex-col">
            {rows[0].map((project) => (
              <div key={project.slug} className="w-[46%] max-md:w-full">
                <ProjectCard project={project} sizes="(max-width: 767px) 100vw, 46vw" />
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-white pt-24 max-lg:pt-12">
            {rows[1].map((project) => (
              <div key={project.slug} className="w-[62%] max-md:w-full">
                <ProjectCard project={project} sizes="(max-width: 767px) 100vw, 62vw" />
              </div>
            ))}
          </div>
          <div className="flex items-start justify-between gap-8 bg-white pt-24 max-lg:pt-12 max-md:flex-col">
            {rows[2].map((project) => (
              <div key={project.slug} className="w-[46%] max-md:w-full">
                <ProjectCard project={project} sizes="(max-width: 767px) 100vw, 46vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/projects"
        className="group mt-24 flex items-center justify-center gap-3 border-y border-dashed border-brand/40 py-6 transition-colors duration-300 hover:bg-paper max-lg:mt-12"
      >
        <svg
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
        </svg>
        <span className="text-h5 transition-colors duration-300 group-hover:text-brand">
          All Cases
        </span>
        <span className="text-body-m text-brand">(05)</span>
      </Link>
    </section>
  );
};
