import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/types";

/**
 * "Other Projects" cross-navigation (project-details.md §4): title block +
 * exactly two listing-style project cards.
 */
export const OtherProjects = ({ projects }: { projects: Project[] }) => {
  if (projects.length === 0) return null;

  return (
    <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
      <div className="container-site">
        <Reveal>
          <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
            <div>
              <Tag>Projects</Tag>
              <h2 className="mt-6 text-h2">Other Projects</h2>
            </div>
            <p className="max-w-[320px] text-body-m text-smoke">
              A small, senior team embedded directly into your product.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
