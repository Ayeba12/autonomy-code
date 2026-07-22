import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/career/ApplyForm";
import { JobHero } from "@/components/career/JobHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { RichText } from "@/components/ui/RichText";
import { content } from "@/content/source";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const jobs = await content.getJobOpenings();
  // Slugs repeat across country tabs — dedupe for the static param list.
  return [...new Set(jobs.map((job) => job.slug))].map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: JobPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const job = await content.getJobOpening(slug);
  if (!job) return { title: "Job Opening" };

  return {
    title: job.title,
    description: `${job.title} — ${job.employmentType}, ${job.city}. Apply now at Stodio.`,
  };
};

/**
 * /career/[slug] — "Job Opening" hero → two-column body (rich-text
 * description + Apply Now form card) → CTA (career-detail.md).
 */
const JobPage = async ({ params }: JobPageProps) => {
  const { slug } = await params;
  const job = await content.getJobOpening(slug);
  if (!job) notFound();

  return (
    <>
      <Navbar tone="light" />
      <main>
        <JobHero job={job} />

        <section className="bg-ink pt-8 pb-28 text-white max-lg:pb-16 max-md:pb-12">
          <div className="container-site grid grid-cols-[1.15fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            {/* Shared RichText uses light-theme colors; remap muted copy to
                `mute` for the dark section (design.md §2 contrast note). */}
            <Reveal className="[&_ol]:text-mute [&_p]:text-mute [&_ul]:text-mute">
              <RichText blocks={job.body} />
            </Reveal>
            <Reveal delay={0.15} className="lg:sticky lg:top-24">
              <ApplyForm />
            </Reveal>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default JobPage;
