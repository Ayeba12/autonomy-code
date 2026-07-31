import type { Metadata } from "next";
import Image from "next/image";
import { FitTabs } from "@/components/about/FitTabs";
import { CountUp } from "@/components/motion/CountUp";
import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
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

/* The path steps are drawn from content.md (the full path); house style. */
const pathSteps: { label: string; subLabel: string; icon: string; description: string }[] = [
  {
    label: "Step 1",
    subLabel: "The Scan",
    icon: "/images/process-card-icon-01.svg",
    description:
      "Twenty-five questions across the five pillars surface your pattern and the pillar under most strain.",
  },
  {
    label: "Step 2",
    subLabel: "The Map-Out Session",
    icon: "/images/process-card-icon-2.svg",
    description:
      "Ninety minutes on that one pillar, mapping where ownership was handed away and what reclaiming it asks.",
  },
  {
    label: "Step 3",
    subLabel: "Your Autonomy Map",
    icon: "/images/process-card-icon-03.svg",
    description:
      "Within seventy-two hours you receive the written Personal Autonomy Map. It is yours to keep.",
  },
  {
    label: "Step 4",
    subLabel: "The Walkthrough",
    icon: "/images/process-card-icon-04.svg",
    description:
      "A short call to read the map together and name the next route. The map leads, never pressure.",
  },
];

/** Hover-reveal backgrounds for the numbers cards (Stodio counter pattern). */
const statBackgrounds = [
  "/images/five-pillars.webp",
  "/images/gallery-02.webp",
  "/images/gallery-03.webp",
  "/images/gallery-04.webp",
];

/** Tilted four-up showcase under the highlight statement. */
const showcase = [
  { src: "/images/looping-image1.webp", tilt: "-rotate-3", offset: "mt-8" },
  { src: "/images/looping-image2.webp", tilt: "rotate-2", offset: "" },
  { src: "/images/looping-image3.webp", tilt: "-rotate-2", offset: "mt-12" },
  { src: "/images/looping-image4.webp", tilt: "rotate-3", offset: "mt-4" },
];

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
      <Navbar tone="light" />
      <main className="bg-paper">
        {/* Hero — Stodio about hero: black rounded band, centered headline,
            uppercase label row at the base, no buttons */}
        <section className="m-2 flex min-h-[92vh] flex-col rounded-card bg-ink pt-44 pb-10 text-white max-lg:pt-36 max-md:min-h-[80vh] max-md:pt-28">
          <div className="container-site flex flex-1 flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <Reveal>
                <Tag tone="light">Who I am</Tag>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 max-w-[1000px] text-display">
                  You are not stuck
                  <br />
                  because you lack{" "}
                  <ImageWipe
                    src="/images/dk-jonah.png"
                    alt="DK Jonah"
                    trigger="load"
                    delay={0.5}
                    preload
                  />{" "}
                  skill.
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mx-auto mt-8 max-w-[620px] text-body-xl text-mute">
                  {heroSub}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.25}>
              <div className="mt-16 flex items-center justify-between gap-6 font-heading text-body-s tracking-[0.2em] text-mute uppercase max-md:mt-10">
                <span>A NoGraGra Practice</span>
                <span>DK Jonah · Knowledge Architect</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The opening of the narrative — Stodio "Our Story" band */}
        <section className="section-pad bg-white">
          <div className="container-site flex justify-between gap-12 max-lg:flex-col">
            <div className="flex shrink-0 flex-col justify-between gap-14">
              <Reveal>
                <Tag>The story</Tag>
              </Reveal>
              <Reveal delay={0.1} className="flex items-center gap-3">
                <Image
                  src="/images/dk-jonah.png"
                  alt="DK Jonah"
                  width={48}
                  height={48}
                  className="size-12 rounded-full border-2 border-white object-cover"
                />
                <p className="text-body-xl">
                  <span className="text-mute">By</span> DK Jonah
                </p>
              </Reveal>
            </div>

            <div className="max-w-[760px]">
              <Reveal>
                <p className="font-heading text-h5">{intro[0]}</p>
              </Reveal>
              {intro.slice(1).map((paragraph, i) => (
                <Reveal key={i} delay={0.15 + i * 0.05}>
                  <p className="mt-8 text-body-xl text-smoke">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quiet numbers — Stodio counter cards; hover reveals an image */}
        <section className="section-pad bg-paper-2">
          <div className="container-site">
            <Reveal>
              <Tag>Quiet numbers</Tag>
            </Reveal>
            <div className="mt-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {stats.map((stat, i) => {
                const { num, suffix } = parseStat(stat.value);
                return (
                  <Reveal key={stat.title} delay={i * 0.1} className="h-full">
                    <article className="group relative h-full overflow-hidden rounded-2xl p-6">
                      <Image
                        src={statBackgrounds[i % statBackgrounds.length]}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div
                        className="absolute inset-0 bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden
                      />
                      <div className="relative">
                        <CountUp
                          value={num}
                          suffix={suffix}
                          className="font-heading text-stat transition-colors duration-500 group-hover:text-white"
                        />
                        <hr className="mt-4 border-line transition-colors duration-500 group-hover:border-white/30" />
                        <p className="mt-4 text-body-l font-medium transition-colors duration-500 group-hover:text-white">
                          {stat.title}
                        </p>
                        <p className="mt-1 text-body-s text-smoke transition-colors duration-500 group-hover:text-white/80">
                          {stat.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* What drives the work — centered statement + tilted showcase */}
        <section className="pt-24 max-md:pt-14">
          <div className="container-site">
            <Reveal className="text-center">
              <h2 className="mx-auto max-w-[880px] text-h2">
                From hidden captivity to{" "}
                <ImageWipe
                  src="/images/surreal-silhouette-art-1.webp"
                  alt="A figure stepping out of shadow"
                />{" "}
                owned ground. Walked first, then taught.
              </h2>
            </Reveal>
            <div className="mx-auto mt-16 grid max-w-[980px] grid-cols-4 gap-5 max-md:mt-10 max-md:grid-cols-2">
              {showcase.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.12} y={30 + (i % 2) * 30}>
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${item.tilt} ${item.offset}`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 50vw, 245px"
                      className="object-cover"
                    />
                  </div>
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
                    src="/images/dk-jonah.png"
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
                <div className="relative aspect-[593/1017] w-full overflow-hidden rounded-card max-lg:aspect-[4/3]">
                  <Image
                    src="/images/dk-jonah-story.jpeg"
                    alt="DK Jonah"
                    fill
                    sizes="(max-width: 1023px) 100vw, 380px"
                    className="object-cover object-[50%_25%]"
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

        {/* The path — Stodio method-card band, on ivory (black stays for the close) */}
        <section className="pt-8 pb-4 max-md:pt-4">
          <div className="mx-4 rounded-card bg-paper-2 py-20 max-md:mx-2 max-md:py-12">
            <div className="container-site">
              <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
                <Reveal>
                  <Tag>The path</Tag>
                  <h2 className="mt-6 max-w-[560px] text-h2">
                    A structured way in.
                  </h2>
                </Reveal>
                <Reveal delay={0.15} className="max-w-sm">
                  <p className="text-body-l text-smoke">
                    No discovery calls and no pitch. A diagnosis first, then a
                    map, then a route.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:mt-8 max-md:grid-cols-1">
                {pathSteps.map((step, i) => (
                  <Reveal key={step.label} delay={i * 0.1} className="h-full">
                    <article className="flex h-full flex-col rounded-2xl bg-white p-5">
                      <p className="flex items-baseline justify-between gap-2 text-body-l font-medium">
                        {step.label}
                        <span className="text-body-s font-normal text-smoke">
                          {step.subLabel}
                        </span>
                      </p>
                      <div className="flex flex-1 items-center justify-center py-12">
                        <Image
                          src={step.icon}
                          alt=""
                          width={64}
                          height={64}
                          className="size-16"
                        />
                      </div>
                      <p className="text-body-s text-smoke">
                        {step.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who this is for / not for — foundation-tabs pattern */}
        <FitTabs />

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
