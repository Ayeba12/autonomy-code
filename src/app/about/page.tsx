import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind The Autonomy Code. DK Jonah on hidden captivity, ownership, and building from owned ground.",
};

/* DK's final wording (content.md §4.7). Verbatim; do not edit. */

const heroSub =
  "You are stuck because you are living a life you did not fully claim. I know. I lived there too.";

const intro = [
  "You look capable. Credentialed. Successful, at least on paper. You are everyone's safety net, there for everyone while no one is quite there for you. And still, quietly, something is off that you cannot name.",
  "You are not lazy and you are not lost. You are doing everything right and you still feel captive in a life you are no longer sure you chose.",
  "There is a name for that. Hidden captivity. Handing the key parts of your life to other people, to the world's definitions, to fear, without ever noticing you have done it. It is not that you lack skill. It is that you are living a life you have not fully claimed. I spent most of my own life there. So when I tell you I can see it, I am not guessing.",
];

const movements: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "I am DK Jonah.",
    paragraphs: [
      "I have been called a fixer, a strategist, a knowledge architect. But underneath all of it, I have always been one thing: a detective. Since I was ten years old, I have looked for the clue everyone else walked past, and named the thing a person is feeling before they have found the words for it. People tell me the same thing, again and again: you make me feel seen. That is the whole of my work. I do not just see clues. I see people.",
    ],
  },
  {
    heading:
      "The Autonomy Code was not built from a theory. It was built from my own captivity.",
    paragraphs: [
      "For years I chased the wrong thing. I chased getting better through two decades of chronic illness, hoping for a return to independence. I chased the dream of the independent woman who needs no one and fixes everyone. I chased peace, and financial freedom, and every answer the books and the gurus promised. I had become an expert at helping other people see and solve their problems, and I still could not do it for my own life.",
      "It took my health to force me to stop. To sit quietly with myself and finally hear myself out. And what I found was not that I needed more independence. I needed ownership. I had outsourced so much of my life, to other people's approval, other people's timelines, definitions I never chose. The way out was never to climb alone. It was to choose my own climb.",
    ],
  },
  {
    heading: "That is autonomy.",
    paragraphs: [
      "Not independence from people. Independence from captivity. Enough clarity to know what you want, enough structure to pursue it, and enough self-trust to lead from that place, without losing yourself to pressure, confusion, or fear.",
      "The work changed its name as I changed, from Decisions That Work, to NoGraGra, to The Autonomy Code. Each name was simply me seeing a little more clearly.",
      "Life forced me into my own life. I do not force anyone else. That is why this work is gentle on purpose. No rush. No force. No gra gra. Because I know what it is to be shoved into your own life by pain, and I would rather walk you there with calm.",
    ],
  },
  {
    heading: "So here is what I actually do.",
    paragraphs: [
      "I help capable people who feel quietly captive find exactly where they lost ownership of their life, and build the structure to reclaim it. Not more information. You already have enough information. Ownership.",
    ],
  },
];

const whoFor = {
  heading: "Who this is for",
  body: "The woman who looks perfect on the outside while the inside is a turmoil she cannot name, and who is finally ready to stop hiding behind being busy.",
};

const whoNotFor = {
  heading: "Who this is not for",
  body: "Anyone looking for motivation, a quick fix, or one more framework to collect. This is quiet, honest, structural work, and it begins with the truth.",
};

const parseStat = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  return { num: Number(match?.[1] ?? 0), suffix: match?.[2] ?? "" };
};

/**
 * /about — story-led, image-rich in the Stodio about style (content.md §4.7).
 * The narrative is DK's verbatim copy; the page's own black close is the
 * CTA, so no shared CtaSection here.
 */
const AboutPage = async () => {
  const stats = await content.getStats();
  const [dkIntro, ownCaptivity, thatIsAutonomy, whatIDo] = movements;

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero — centered display headline with an inline portrait wipe */}
        <section className="pt-48 pb-16 max-lg:pt-40 max-md:pt-32 max-md:pb-10">
          <div className="container-site">
            <div className="flex flex-col items-center text-center">
              <Reveal>
                <h1 className="max-w-[1000px] text-display">
                  You are not stuck
                  <br />
                  because you lack{" "}
                  <ImageWipe
                    src="/images/portrait-of-a-woman-1-1.webp"
                    alt="DK Jonah"
                    trigger="load"
                    delay={0.5}
                    preload
                  />{" "}
                  skill.
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mx-auto mt-8 max-w-[620px] text-body-xl text-smoke">
                  {heroSub}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The opening of the narrative */}
        <section className="pb-8 max-md:pb-4">
          <div className="container-site">
            <div className="mx-auto max-w-[760px]">
              {intro.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="mt-6 text-body-xl first:mt-0">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* I am DK Jonah — inline portrait wipe in the heading */}
        <section className="pt-16 max-md:pt-10">
          <div className="container-site">
            <div className="mx-auto max-w-[760px]">
              <Reveal>
                <h2 className="text-h3">
                  I am{" "}
                  <ImageWipe
                    src="/images/portrait-of-a-woman-1.webp"
                    alt="DK Jonah"
                  />{" "}
                  DK Jonah.
                </h2>
              </Reveal>
              {dkIntro.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="mt-6 text-body-xl">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Built from my own captivity — two-column beat with a side image */}
        <section className="pt-20 max-md:pt-12">
          <div className="container-site">
            <div className="grid grid-cols-[1fr_auto] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
              <div className="max-w-[620px]">
                <Reveal>
                  <h2 className="text-h3">{ownCaptivity.heading}</h2>
                </Reveal>
                {ownCaptivity.paragraphs.map((paragraph, i) => (
                  <Reveal key={i} delay={0.05 + i * 0.05}>
                    <p className="mt-6 text-body-xl">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2} className="w-full lg:w-[380px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card max-lg:aspect-[4/3]">
                  <Image
                    src="/images/dynamic-portrait-motion-1.webp"
                    alt="Portrait of a woman in motion, hair sweeping across the frame"
                    fill
                    sizes="(max-width: 1023px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* That is autonomy · So here is what I actually do */}
        <section className="pt-20 pb-24 max-md:pt-12 max-md:pb-14">
          <div className="container-site">
            <div className="mx-auto max-w-[760px]">
              {[thatIsAutonomy, whatIDo].map((movement) => (
                <div
                  key={movement.heading}
                  className="mt-20 first:mt-0 max-md:mt-14"
                >
                  <Reveal>
                    <h2 className="max-w-[640px] text-h3">
                      {movement.heading}
                    </h2>
                  </Reveal>
                  {movement.paragraphs.map((paragraph, i) => (
                    <Reveal key={i} delay={0.05 + i * 0.05}>
                      <p className="mt-6 text-body-xl">{paragraph}</p>
                    </Reveal>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiet numbers — odometer counters (Stodio stats pattern) */}
        <section className="bg-paper-2 py-20 max-md:py-12">
          <div className="container-site">
            <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:gap-8">
              {stats.map((stat, i) => {
                const { num, suffix } = parseStat(stat.value);
                return (
                  <Reveal key={stat.title} delay={i * 0.08}>
                    <div className="border-t border-line pt-5">
                      <CountUp
                        value={num}
                        suffix={suffix}
                        className="font-heading text-stat"
                      />
                      <p className="mt-2 text-body-l font-medium">
                        {stat.title}
                      </p>
                      <p className="mt-1 text-body-s text-smoke">
                        {stat.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who this is for / not for */}
        <section className="py-20 max-md:py-12">
          <div className="container-site">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {[whoFor, whoNotFor].map((block, i) => (
                <Reveal key={block.heading} delay={i * 0.08}>
                  <div className="h-full rounded-card bg-white p-10 max-md:p-7">
                    <h3 className="text-h5">{block.heading}</h3>
                    <p className="mt-5 text-body-l">{block.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Close — the page's one black band, and its CTA */}
        <section className="p-4 pb-0 max-md:p-2 max-md:pb-0">
          <div className="overflow-hidden rounded-card bg-ink text-white">
            <div className="container-site py-24 max-md:py-14">
              <Reveal className="mx-auto flex max-w-[760px] flex-col items-center gap-8 text-center">
                <h2 className="text-h2 text-white">
                  Every case begins the same way.
                  <span className="block">With a diagnosis.</span>
                </h2>
                <Button href="/ownership-scan" variant="brand">
                  Take the Ownership Scan
                </Button>
                <ArrowLink href="#" className="text-white">
                  Read my full story
                </ArrowLink>
                <p className="mt-6 text-body-xs tracking-[0.3em] text-mute">
                  DK JONAH · NOGRAGRA · THE AUTONOMY CODE
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
