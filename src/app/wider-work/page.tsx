import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { DiagonalArrow } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import type { WiderWorkLink } from "@/content/types";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "The Wider Work",
  description:
    "The Autonomy Code is the storefront of a wider practice. These are the other rooms of the house.",
  path: "/wider-work",
  image: "/images/og/wider-work.jpg",
});

/** Link-out card with its drawing; rooms without an address render quietly, marked "Coming soon". */
const WiderWorkCard = ({ link, index }: { link: WiderWorkLink; index: number }) => {
  const live = link.href !== "#";
  const inner = (
    <>
      {link.image && (
        <div className="overflow-hidden rounded-t-card">
          <Image
            src={link.image.src}
            alt={link.image.alt}
            width={1000}
            height={1250}
            sizes="(max-width: 767px) 100vw, 50vw"
            className={`aspect-[3/2] w-full object-cover transition-transform duration-600 ease-out ${
              live ? "group-hover:scale-105" : "opacity-80"
            }`}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8 max-md:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
            Room {String(index + 1).padStart(2, "0")}
          </p>
          {live ? (
            <DiagonalArrow className="mt-0.5 text-ink transition-colors duration-300 group-hover:text-brand" />
          ) : (
            <span className="text-body-s text-slate italic">Coming soon</span>
          )}
        </div>
        <h2 className="mt-3 text-h5 text-ink transition-colors duration-300 group-hover:text-brand">
          {link.name}
        </h2>
        <p className="mt-3 text-body-m text-slate">{link.description}</p>
      </div>
    </>
  );

  const cardClasses = "group flex h-full flex-col overflow-hidden rounded-card bg-white";

  if (!live) return <div className={cardClasses}>{inner}</div>;

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
 * /wider-work — DK's other worlds, without pulling focus (content.md §4.10),
 * drawn in the house style: the house on its porch in the hero, one
 * drawing per room. No closing CTA: this page links out and stays quiet.
 */
const WiderWorkPage = async () => {
  const links = await content.getWiderWork();

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero — the other rooms of the house, beside the house itself */}
        <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site grid grid-cols-[1fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <Reveal className="flex max-w-[640px] flex-col items-start gap-5">
              <Tag>The Wider Work</Tag>
              <h1 className="text-display">The other rooms of the house.</h1>
              <p className="text-body-xl text-slate">
                The Autonomy Code is the storefront of a wider practice. These
                are the other rooms of the house. Each stands on its own ground;
                this site stays focused on the Code.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/home/hero-peace-given-structure.webp"
                  alt="Graphite drawing of a woman sitting at ease on the porch of a small house she has made her own, the timber frame drawn in gold"
                  width={2400}
                  height={1645}
                  preload
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover object-[70%_50%]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Five rooms, each with its drawing */}
        <section className="pt-20 pb-24 max-lg:pt-14 max-md:pt-10 max-md:pb-14">
          <div className="container-site">
            <Reveal className="mb-10 flex items-end justify-between gap-8 max-md:mb-6 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                  The rooms
                </p>
                <h2 className="mt-4 text-h3">Five doors, each on its own ground.</h2>
              </div>
              <p className="max-w-[380px] pb-1 text-body-m text-slate">
                Every one opens in its own tab and stays out of the way of the
                Code.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {links.map((link, i) => (
                <Reveal key={link.name} delay={(i % 2) * 0.1} className="h-full">
                  <WiderWorkCard link={link} index={i} />
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
