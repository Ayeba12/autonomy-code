import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import type { WiderWorkLink } from "@/content/types";

export const metadata: Metadata = {
  title: "The Wider Work",
  description:
    "The Autonomy Code is the storefront of a wider practice. These are the other rooms of the house.",
};

/** Link-out card; placeholders render quietly with a "Coming soon" note. */
const WiderWorkCard = ({ link }: { link: WiderWorkLink }) => {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-h5 text-ink transition-colors duration-300 group-hover:text-brand">
          {link.name}
        </h2>
        {link.href === "#" ? (
          <span className="shrink-0 pt-2 text-body-s text-smoke italic">
            Coming soon
          </span>
        ) : (
          <svg
            className="mt-2 size-5 shrink-0 text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M5 15 15 5M7 5h8v8" />
          </svg>
        )}
      </div>
      <p className="mt-3 text-body-l text-smoke">{link.description}</p>
    </>
  );

  const cardClasses =
    "group flex h-full flex-col rounded-card bg-white p-8 max-md:p-6";

  if (link.href === "#") {
    return <div className={cardClasses}>{inner}</div>;
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardClasses} transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5`}
    >
      {inner}
    </a>
  );
};

/**
 * /wider-work — DK's other worlds, without pulling focus (content.md §4.10).
 * No closing CTA: this page links out and stays quiet.
 */
const WiderWorkPage = async () => {
  const links = await content.getWiderWork();

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — ivory, type-led, intro verbatim */}
        <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal className="flex max-w-[760px] flex-col items-start gap-5">
              <Tag>The Wider Work</Tag>
              <div className="h-px w-16 bg-line" aria-hidden />
              <h1 className="text-display">The other rooms of the house.</h1>
              <p className="text-body-xl text-smoke">
                The Autonomy Code is the storefront of a wider practice. These
                are the other rooms of the house. Each stands on its own ground;
                this site stays focused on the Code.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Five link-out cards */}
        <section className="bg-paper pb-20 max-lg:pb-14 max-md:pb-10">
          <div className="container-site">
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {links.map((link, i) => (
                <Reveal key={link.name} delay={(i % 2) * 0.1} className="h-full">
                  <WiderWorkCard link={link} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WiderWorkPage;
