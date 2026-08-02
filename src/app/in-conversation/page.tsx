import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { VideoGrid } from "@/components/video/VideoGrid";
import { content } from "@/content/source";
import { VIDEO_SECTIONS } from "@/content/video-sections";

export const metadata: Metadata = {
  title: "In Conversation",
  description:
    "Interviews, podcasts, talks, and more. Where the work has been spoken aloud, watchable in place.",
};

/**
 * /in-conversation — the video hub (content.md §4.9). Four sections of
 * click-to-play cards, four latest each; every section links to its own
 * archive. Empty sections stay off the page.
 */
const InConversationPage = async () => {
  const videos = await content.getVideos();
  const sections = VIDEO_SECTIONS.map((def) => ({
    ...def,
    items: videos.filter((video) => video.section === def.slug),
  })).filter((section) => section.items.length > 0);

  return (
    <>
      <Navbar tone="light" />
      <main>
        {/* Hero — dark image band on the Stodio blogs-hero pattern */}
        <section className="relative isolate m-2 overflow-hidden rounded-card pt-44 pb-24 max-lg:pt-36 max-md:pt-28 max-md:pb-14">
          <Image
            src="/images/in-conversation-hero.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/50" aria-hidden />
          <div className="container-site">
            <Reveal className="flex flex-col items-center gap-5 text-center text-white">
              <Tag tone="light">In Conversation</Tag>
              <h1 className="max-w-[760px] text-display">
                Where the work has been spoken aloud.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Video sections — latest four each, archives one step away */}
        <section className="bg-white section-pad">
          <div className="container-site flex flex-col gap-20 max-md:gap-12">
            {sections.map((section) => (
              <div key={section.slug}>
                <Reveal className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start max-md:gap-3">
                  <h2 className="text-h4">{section.name}</h2>
                  <ArrowLink href={`/in-conversation/${section.slug}`}>
                    View all
                  </ArrowLink>
                </Reveal>
                <div className="mt-8 max-md:mt-6">
                  <VideoGrid videos={section.items.slice(0, 4)} />
                </div>
              </div>
            ))}

            {/* The quiet line for hosts */}
            <Reveal className="flex items-center gap-3 max-md:flex-col max-md:items-start">
              <p className="text-body-l text-smoke">
                Hosting a stage of your own?
              </p>
              <ArrowLink href="/speaking">See Speaking</ArrowLink>
            </Reveal>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default InConversationPage;
