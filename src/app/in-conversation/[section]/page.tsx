import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { VideoGrid } from "@/components/video/VideoGrid";
import { content } from "@/content/source";
import { VIDEO_SECTIONS, videoSectionBySlug } from "@/content/video-sections";

interface SectionPageProps {
  params: Promise<{ section: string }>;
}

export const generateStaticParams = async () =>
  VIDEO_SECTIONS.map((section) => ({ section: section.slug }));

export const generateMetadata = async ({
  params,
}: SectionPageProps): Promise<Metadata> => {
  const { section } = await params;
  const def = videoSectionBySlug(section);
  if (!def) return {};
  return {
    title: `${def.name} · In Conversation`,
    description: def.blurb,
  };
};

/**
 * /in-conversation/[section] — one shared archive template for all four
 * sections: every video, newest first, same click-to-play cards as the
 * hub. No pagination until a section outgrows a calm single grid.
 */
const SectionArchivePage = async ({ params }: SectionPageProps) => {
  const { section } = await params;
  const def = videoSectionBySlug(section);
  if (!def) notFound();

  const videos = await content.getVideos();
  const items = videos.filter((video) => video.section === def.slug);
  const count = `${items.length} conversation${items.length === 1 ? "" : "s"}`;

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Compact paper hero; the dark image band stays unique to the hub */}
        <section className="bg-paper pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <Tag>In Conversation</Tag>
              <h1 className="mt-6 text-h1">{def.name}</h1>
              <p className="mt-4 max-w-[560px] text-body-xl text-smoke">
                {def.blurb}
              </p>
              <p className="mt-6 font-heading text-body-s tracking-[0.14em] text-mute uppercase">
                {count}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white section-pad">
          <div className="container-site">
            {items.length > 0 ? (
              <VideoGrid videos={items} />
            ) : (
              <Reveal>
                <p className="text-body-l text-smoke">
                  Nothing here yet. The first conversation is on its way.
                </p>
              </Reveal>
            )}
            <Reveal className="mt-16 max-md:mt-10">
              <ArrowLink href="/in-conversation">
                All of In Conversation
              </ArrowLink>
            </Reveal>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default SectionArchivePage;
