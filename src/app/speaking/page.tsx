import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { SpeakingEnquiryForm } from "@/components/speaking/SpeakingEnquiryForm";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import type { ImageRef } from "@/content/types";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Speaking: Invite DK Jonah to Speak",
  description:
    "Invite DK Jonah to speak on autonomy, self-trust, and knowledge architecture. Keynotes, workshops, and panels. Rates by enquiry, in writing.",
  path: "/speaking",
  image: "/images/og/speaking.jpg",
  keywords: ["DK Jonah speaker", "keynote speaker on autonomy", "self-trust talk", "knowledge architecture workshop", "women's leadership speaker", "self-leadership", "sustainable productivity", "personal autonomy", "speaker on autonomy at work", "neurodiversity speaker UK", "neurodivergent speaker UK", "Black female speaker UK", "Black History Month speaker UK", "Black History Month workplace speaker", "women's network speaker UK", "employee network speaker UK", "ERG speaker UK", "NHS speaker wellbeing", "public sector speaker UK", "away day facilitator UK", "lunch and learn speaker UK", "webinar speaker UK", "autism speaker UK", "autistic speaker UK", "autism speaker UK workplace", "neurodivergent keynote speaker", "Black woman speaker London", "Black History Month speaker hire", "neurodiversity at work training UK"],
});

/** A drawing for each theme, in the order the content lists them. */
const themeArt: ImageRef[] = [
  {
    src: "/images/method/method-hero.webp",
    alt: "Graphite drawing of a woman walking out of a room drawn as a lattice of thin bars, onto open ground, the path ahead in gold",
  },
  {
    src: "/images/pillars/pillar-strategy.webp",
    alt: "Graphite sketch of a woman leaning over a map, one finger on the route she has chosen, drawn in gold",
  },
  {
    src: "/images/pillars/pillar-resources.webp",
    alt: "Graphite sketch of a woman at an open cabinet of well-ordered tools and ledgers, lifting out one key drawn in gold",
  },
  {
    src: "/images/about/about-porch.webp",
    alt: "Graphite sketch of two wooden chairs and a small table on a porch, one cup drawn in gold",
  },
];

/** A drawing for each format, in the order the content lists them. */
const formatArt: ImageRef[] = [
  {
    src: "/images/pillars/pillar-message.webp",
    alt: "Graphite sketch of a woman writing one clear line in gold across a large sheet, crumpled drafts pushed aside",
  },
  {
    src: "/images/reset/reset-move-align.webp",
    alt: "Graphite sketch of two hands drawing one straight line along a ruler, the new line in gold",
  },
  {
    src: "/images/pillars/pillar-relationships.webp",
    alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
  },
];

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children }: { children: string }) => (
  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">{children}</p>
);

/**
 * /speaking — enquiry page for event hosts (content.md §4.11), drawn in
 * the house style. The one page where the Compass steps back: no
 * CtaSection, no Compass buttons.
 */
const SpeakingPage = async () => {
  const speaking = await content.getSpeaking();

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero — the headline beside a room at work */}
        <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site grid grid-cols-[1fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <Reveal className="max-w-[640px]">
              <Tag>Speaking</Tag>
              <h1 className="mt-6 text-display">A calm voice for rooms that think.</h1>
              <p className="mt-6 max-w-[560px] text-body-xl text-slate">
                Talks, workshops, and panels on autonomy, self-trust, and the
                quiet structure under a working life. Gentle on purpose.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/home/tier-sabi-core.webp"
                  alt="Graphite sketch of five people around a large table working over one plan, one of them standing to explain it, the plan's grid drawn in gold"
                  width={1600}
                  height={1200}
                  preload
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Themes — four cards, each with its drawing */}
        <section className="pt-24 pb-20 max-lg:pt-16 max-md:pt-12 max-md:pb-14">
          <div className="container-site">
            <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <Eyebrow>Themes</Eyebrow>
                <h2 className="mt-4 text-h2">Four things she talks about.</h2>
              </div>
              <p className="max-w-[380px] pb-2 text-body-m text-slate">
                Each one held calmly, and built for the room in front of her.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:mt-8 max-md:grid-cols-1">
              {speaking.themes.map((theme, i) => (
                <Reveal key={theme} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-card bg-white">
                    {themeArt[i] && (
                      <Image
                        src={themeArt[i].src}
                        alt={themeArt[i].alt}
                        width={1000}
                        height={1250}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-7 max-md:p-6">
                      <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                        0{i + 1}
                      </span>
                      <p className="mt-3 font-heading text-h6 text-ink">{theme}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences — quiet ruled grid on white */}
        <section className="bg-white py-20 max-md:py-12">
          <div className="container-site grid grid-cols-[320px_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-8">
            <Reveal>
              <Eyebrow>Who she speaks to</Eyebrow>
              <h2 className="mt-4 text-h3">The rooms.</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 max-md:grid-cols-1">
              {speaking.audiences.map((audience, i) => (
                <Reveal key={audience} delay={i * 0.06}>
                  <p className="flex items-center gap-3 border-t border-line py-5 text-body-l text-ink">
                    <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    {audience}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Formats — three cards, each with its drawing */}
        <section className="py-24 max-lg:py-16 max-md:py-12">
          <div className="container-site">
            <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <Eyebrow>Formats</Eyebrow>
                <h2 className="mt-4 text-h2">Three ways into a room.</h2>
              </div>
              <div className="max-w-[380px] pb-2">
                <p className="text-body-m text-ink">Rates by enquiry, in writing.</p>
                <p className="mt-1 text-body-s text-slate">
                  NHS and lived-experience work runs on a separate pathway.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-md:mt-8">
              {speaking.formats.map((format, i) => (
                <Reveal key={format.name} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-card bg-white">
                    {formatArt[i] && (
                      <Image
                        src={formatArt[i].src}
                        alt={formatArt[i].alt}
                        width={1000}
                        height={1250}
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-8 max-md:p-6">
                      <h3 className="text-h5">{format.name}</h3>
                      <div className="mt-4 h-px w-8 bg-line" aria-hidden />
                      <p className="mt-4 text-body-m text-slate">{format.note}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* "In the room" (host quote + clip) returns once there is a real
            quote and a working clip; placeholders removed 30 Sept 2026. */}

        {/* Enquiry — the form beside a quiet room */}
        <section className="bg-white py-24 max-lg:py-16 max-md:py-12" id="enquire">
          <div className="container-site grid grid-cols-[1fr_0.8fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="max-w-[640px]">
              <Reveal>
                <Eyebrow>Enquire</Eyebrow>
                <h2 className="mt-4 text-h3">A few lines about the room are enough.</h2>
                <p className="mt-4 text-body-l text-slate">Every reply comes in writing.</p>
              </Reveal>
              <div className="mt-10">
                <SpeakingEnquiryForm formats={speaking.formats.map((format) => format.name)} />
              </div>
            </div>
            <Reveal delay={0.1} className="lg:sticky lg:top-32 max-lg:hidden">
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/about/about-window.webp"
                  alt="Graphite sketch of a woman seated by a tall window, looking out over a misty lake, the dawn line drawn in gold"
                  width={900}
                  height={1200}
                  sizes="35vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpeakingPage;
