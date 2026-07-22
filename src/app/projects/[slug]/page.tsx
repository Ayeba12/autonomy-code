import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OtherProjects } from "@/components/projects/OtherProjects";
import { ProjectCounters } from "@/components/projects/ProjectCounters";
import { ProjectDetailBody } from "@/components/projects/ProjectDetailBody";
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero";
import { ProjectTestimonial } from "@/components/projects/ProjectTestimonial";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";
import type { Project } from "@/content/types";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const projects = await content.getProjects();
  return projects.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = await content.getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: `${project.name} — ${project.service} project by Stodio.`,
    openGraph: {
      images: [project.thumbnail.src],
    },
  };
};

/**
 * /projects/[slug] — Hero → main image + Challenges/Solutions/Results →
 * counters → testimonial → Other Projects → CTA (project-details.md).
 */
const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = await content.getProject(slug);
  if (!project) notFound();

  const allProjects = await content.getProjects();
  const otherProjects = project.otherProjects
    .map((other) => allProjects.find((p) => p.slug === other))
    .filter((p): p is Project => p != null);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <ProjectDetailHero project={project} />
        <ProjectDetailBody project={project} />
        <ProjectCounters />
        <ProjectTestimonial />
        <OtherProjects projects={otherProjects} />
        <CtaSection />
      </main>
    </>
  );
};

export default ProjectPage;
