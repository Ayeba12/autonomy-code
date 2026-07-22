import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";
import type { Project } from "@/content/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of search-first digital systems and premium designs that have helped global category leaders dominate their industries.",
};

/** /projects — Hero → 2+2+1 card grid → CTA (projects.md). */
const ProjectsPage = async () => {
  const projects = await content.getProjects();

  // Rows of two; a trailing odd project renders as a full-width single card
  // (template rows `_01`, `_02`, `single`).
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <ProjectsHero />

        <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
          <div className="container-site flex flex-col gap-5">
            {rows.map((row, rowIndex) =>
              row.length === 1 ? (
                <Reveal key={row[0].slug}>
                  <ProjectCard project={row[0]} sizes="100vw" />
                </Reveal>
              ) : (
                <div
                  key={row[0].slug}
                  className="grid grid-cols-2 gap-5 max-md:grid-cols-1"
                >
                  {row.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 0.1}>
                      <ProjectCard
                        project={project}
                        preload={rowIndex === 0 && i === 0}
                      />
                    </Reveal>
                  ))}
                </div>
              ),
            )}
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default ProjectsPage;
