"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/content/types";

/** FAQ accordion group — one item open at a time (design.md §6). */
export const Accordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="flex w-full max-w-[690px] flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`bg-paper px-7 py-6 transition-all duration-300 max-md:px-5 max-md:py-4 ${
              isOpen ? "rounded-2xl" : "rounded-pill max-md:rounded-2xl"
            } hover:rounded-2xl`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-body-xl font-medium">{item.question}</span>
              <span className="relative size-4 shrink-0" aria-hidden>
                <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-ink" />
                <span
                  className={`absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                    isOpen ? "scale-y-0" : ""
                  }`}
                />
              </span>
            </button>
            <div
              id={`${baseId}-panel-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-body-m text-smoke">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
