"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

interface FitTab {
  title: string;
  text: string;
  image: { src: string; alt: string };
}

/* Tab copy is DK's final wording (content.md §4.7). Verbatim; do not edit. */
const tabs: FitTab[] = [
  {
    title: "Who this is for",
    text: "The woman who looks perfect on the outside while the inside is a turmoil she cannot name, and who is finally ready to stop hiding behind being busy.",
    image: {
      src: "/images/about-fit-01.webp",
      alt: "A woman seated in a quiet sunlit room, looking out of a tall window",
    },
  },
  {
    title: "Who this is not for",
    text: "Anyone looking for motivation, a quick fix, or one more framework to collect. This is quiet, honest, structural work, and it begins with the truth.",
    image: {
      src: "/images/about-fit-02.webp",
      alt: "A man seated by tall windows, looking out over a misty lake at first light",
    },
  },
];

/**
 * "The fit" — Stodio Foundation-tabs pattern: image pane left, vertical
 * tab menu right; selecting a tab cross-fades the image.
 */
export const FitTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-site flex items-center gap-16 max-lg:flex-col max-lg:items-stretch max-lg:gap-10">
        <Reveal className="w-1/2 max-lg:w-full">
          <div
            id="fit-panel"
            role="tabpanel"
            aria-label={tabs[active].title}
            className="relative aspect-[4/5] overflow-hidden rounded-card"
          >
            {tabs.map((tab, i) => (
              <Image
                key={tab.title}
                src={tab.image.src}
                alt={tab.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <div className="w-1/2 max-lg:w-full">
          <Reveal>
            <Tag>The fit</Tag>
            <h2 className="mt-6 text-h3">Stated plainly, both ways.</h2>
          </Reveal>
          <div
            role="tablist"
            aria-label="The fit"
            aria-orientation="vertical"
            className="mt-10 grid grid-cols-1 gap-3"
          >
            {tabs.map((tab, i) => (
              <Reveal key={tab.title} delay={0.1 + i * 0.08}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="fit-panel"
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border p-5 text-left transition-colors duration-300 ${
                    i === active
                      ? "border-brand bg-white"
                      : "border-line hover:bg-paper-2"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="size-4 shrink-0 text-brand"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
                    </svg>
                    <span className="font-heading text-h6">{tab.title}</span>
                  </span>
                  <span className="mt-2 block text-body-m text-smoke">
                    {tab.text}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
