import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import type { ConversationItem } from "@/content/types";

export const metadata: Metadata = {
  title: "In Conversation",
  description:
    "Interviews, talks, and podcast appearances. Where the work has been spoken aloud.",
};

const SECTION_ORDER: ConversationItem["section"][] = [
  "Interviews",
  "Talks & Panels",
  "Podcast",
];

/** Hairline row: linked when a URL exists, quiet span when it is still to come. */
const ConversationRow = ({ item }: { item: ConversationItem }) => {
  const meta = (
    <span className="text-body-m text-smoke">
      {item.host} · {item.year}
    </span>
  );

  if (item.href === "#") {
    return (
      <div className="flex items-center justify-between gap-6 py-5 max-md:flex-col max-md:items-start max-md:gap-1.5">
        <div className="flex flex-col gap-1">
          <span className="font-heading text-h6 text-ink">{item.title}</span>
          {meta}
        </div>
        <span className="shrink-0 text-body-s text-smoke italic">
          Link coming
        </span>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-6 py-5 max-md:flex-col max-md:items-start max-md:gap-1.5"
    >
      <div className="flex flex-col gap-1">
        <span className="font-heading text-h6 text-ink transition-colors duration-300 group-hover:text-brand">
          {item.title}
        </span>
        {meta}
      </div>
      <svg
        className="size-5 shrink-0 text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand max-md:hidden"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M4 10h12M11 4.5 16.5 10 11 15.5" />
      </svg>
    </a>
  );
};

/** /in-conversation — proof and presence, quietly (content.md §4.9). */
const InConversationPage = async () => {
  const conversations = await content.getConversations();
  const sections = SECTION_ORDER.map((name) => ({
    name,
    items: conversations.filter((item) => item.section === name),
  })).filter((section) => section.items.length > 0);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — ivory, type-led */}
        <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal className="flex max-w-[760px] flex-col items-start gap-5">
              <Tag>In Conversation</Tag>
              <div className="gold-thread w-16" aria-hidden />
              <h1 className="text-display">
                Where the work has been spoken aloud.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Three sections of hairline rows */}
        <section className="bg-white section-pad">
          <div className="container-site flex max-w-[1088px] flex-col gap-16 max-md:gap-10">
            {sections.map((section) => (
              <Reveal key={section.name}>
                <h2 className="text-h4">{section.name}</h2>
                <div className="mt-6">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-line first:border-t"
                    >
                      <ConversationRow item={item} />
                    </div>
                  ))}
                </div>
              </Reveal>
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
