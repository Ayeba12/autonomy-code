import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { SpeakingEnquiryForm } from "@/components/speaking/SpeakingEnquiryForm";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite DK Jonah to speak on autonomy, self-trust, and knowledge architecture. Keynotes, workshops, and panels. Rates by enquiry, in writing.",
};

/** Gold spark bullet (matches the Tag icon). */
const Spark = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-brand"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/**
 * /speaking — enquiry page for event hosts (content.md §4.11).
 * The one page where the Scan steps back: no CtaSection, no scan buttons.
 */
const SpeakingPage = async () => {
  const speaking = await content.getSpeaking();

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero */}
        <section className="pt-48 pb-16 max-lg:pt-40 max-md:pt-32 max-md:pb-10">
          <div className="container-site">
            <Reveal className="max-w-[860px]">
              <Tag>Speaking</Tag>
              <h1 className="mt-6 text-display">
                A calm voice for rooms that think.
              </h1>
              <p className="mt-6 max-w-[600px] text-body-xl text-smoke">
                Talks, workshops, and panels on autonomy, self-trust, and the
                quiet structure under a working life. Gentle on purpose.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Themes — list beside one calm image */}
        <section className="pb-20 max-md:pb-12">
          <div className="container-site">
            <div className="grid grid-cols-2 items-stretch gap-16 max-lg:grid-cols-1 max-lg:gap-10">
              <div>
                <Reveal>
                  <div className="h-px w-16 bg-line" aria-hidden />
                  <h2 className="mt-7 text-h3">Themes</h2>
                </Reveal>
                <ul className="mt-10">
                  {speaking.themes.map((theme, i) => (
                    <li key={theme}>
                      <Reveal delay={i * 0.06}>
                        <div className="flex items-start gap-3 border-b border-line py-5">
                          <Spark />
                          <span className="text-body-xl">{theme}</span>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal
                delay={0.1}
                className="relative min-h-[420px] overflow-hidden rounded-card max-lg:aspect-[3/2] max-lg:min-h-0"
              >
                <Image
                  src="/images/looping-image3.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="pb-20 max-md:pb-12">
          <div className="container-site">
            <Reveal>
              <div className="h-px w-16 bg-line" aria-hidden />
              <h2 className="mt-7 text-h3">Who she speaks to</h2>
            </Reveal>
            <div className="mt-10 grid max-w-[900px] grid-cols-2 gap-x-10 gap-y-6 max-md:grid-cols-1">
              {speaking.audiences.map((audience, i) => (
                <Reveal key={audience} delay={i * 0.06}>
                  <p className="border-t border-line pt-4 text-body-l">
                    {audience}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="pb-20 max-md:pb-12">
          <div className="container-site">
            <Reveal>
              <div className="h-px w-16 bg-line" aria-hidden />
              <h2 className="mt-7 text-h3">Formats</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
              {speaking.formats.map((format, i) => (
                <Reveal key={format.name} delay={i * 0.08}>
                  <div className="h-full rounded-card bg-white p-8 max-md:p-6">
                    <h3 className="text-h6">{format.name}</h3>
                    <div className="mt-4 h-px w-8 bg-line" aria-hidden />
                    <p className="mt-4 text-body-m text-smoke">{format.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 text-body-l">Rates by enquiry, in writing.</p>
              <p className="mt-1 text-body-s text-smoke">
                NHS and lived-experience work runs on a separate pathway.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Light proof — quote and clip slots, quiet placeholders */}
        <section className="pb-20 max-md:pb-12">
          <div className="container-site">
            <Reveal>
              <div className="h-px w-16 bg-line" aria-hidden />
              <h2 className="mt-7 text-h3">In the room</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6 max-md:grid-cols-1">
              <Reveal>
                <figure className="flex h-full flex-col justify-between gap-6 rounded-card bg-breath-tint p-10 max-md:p-7">
                  <blockquote className="text-h6">
                    A word from a recent host will sit here, chosen with care.
                  </blockquote>
                  <figcaption className="text-body-s text-smoke">
                    Host quote to follow
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid aspect-video place-items-center rounded-card border border-dashed border-line bg-white/60">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <svg
                      className="size-10 text-smoke"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <circle cx="20" cy="20" r="18" />
                      <path d="M17 14l9 6-9 6V14z" fill="currentColor" stroke="none" />
                    </svg>
                    <p className="text-body-s text-smoke">
                      A short clip from the stage will live here.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section className="pb-24 max-md:pb-14" id="enquire">
          <div className="container-site">
            <div className="max-w-[640px]">
              <Reveal>
                <div className="h-px w-16 bg-line" aria-hidden />
                <h2 className="mt-7 text-h3">Enquire</h2>
                <p className="mt-4 text-body-l text-smoke">
                  A few lines about the room are enough. Every reply comes in
                  writing.
                </p>
              </Reveal>
              <div className="mt-10">
                <SpeakingEnquiryForm
                  formats={speaking.formats.map((format) => format.name)}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SpeakingPage;
