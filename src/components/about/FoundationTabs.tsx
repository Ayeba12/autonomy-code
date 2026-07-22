"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

interface FoundationTab {
  title: string;
  text: string;
  image: string;
}

/**
 * Tab copy is leftover template placeholder (Lorem Ipsum / roofing) —
 * kept verbatim per about spec §7. Alt "Foundation Image " keeps the
 * source's trailing space.
 */
const tabs: FoundationTab[] = [
  {
    title: "Our Mission",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
    image: "/images/foundation-image.webp",
  },
  {
    title: "Enhance Efficiency & Results",
    text: "We are passionate about empowering homeowners and businesses to take control of their roofing needs.",
    image: "/images/foundation-tba-image-02.webp",
  },
  {
    title: "Sustainable Collaborations",
    text: "We are dedicated to revolutionizing the way homeowners and businesses approach roofing solutions.",
    image: "/images/foundation-tab-image-03.webp",
  },
];

/**
 * "Our Foundation" (about spec §7): image pane left, vertical tab menu
 * right; selecting a tab swaps the image. "drivenby" is a verbatim quirk.
 */
export const FoundationTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-white">
      <div className="container-site flex items-center gap-16 max-lg:flex-col max-lg:items-stretch max-lg:gap-10">
        <Reveal className="w-1/2 max-lg:w-full">
          <div
            id="foundation-panel"
            role="tabpanel"
            aria-label={tabs[active].title}
            className="relative aspect-[4/5] overflow-hidden rounded-card"
          >
            {tabs.map((tab, i) => (
              <Image
                key={tab.title}
                src={tab.image}
                alt="Foundation Image "
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
            <Tag>Our Foundation</Tag>
            <h2 className="mt-6 text-h3">Built on purpose, drivenby performance</h2>
          </Reveal>
          <div
            role="tablist"
            aria-label="Our foundation"
            aria-orientation="vertical"
            className="mt-10 grid grid-cols-1 gap-3"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="foundation-panel"
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-5 text-left transition-colors duration-300 ${
                  i === active
                    ? "border-coal bg-paper"
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
                <span className="mt-2 block text-body-m text-smoke">{tab.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
