"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { JobOpening } from "@/content/types";
import { PinIcon } from "./icons";

/**
 * Country-tabbed job list (career.md §5). The tab menu renders BELOW the
 * panes, matching the template DOM; panes cross-fade ~300ms on switch.
 * Countries derive from the job data (USA / Germany / Japan / Australia).
 */
export const JobTabs = ({ jobs }: { jobs: JobOpening[] }) => {
  const baseId = useId();
  const reduced = useReducedMotion();
  const countries = useMemo(
    () => [...new Set(jobs.map((job) => job.country))],
    [jobs],
  );
  const [active, setActive] = useState(0);
  const country = countries[active];
  const visible = jobs.filter((job) => job.country === country);

  return (
    <div>
      <motion.div
        key={country}
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="border-b border-coal"
      >
        {visible.map((job) => (
          <Link
            key={job.slug}
            href={`/career/${job.slug}`}
            className="group flex items-center justify-between gap-8 border-t border-coal py-8 max-md:flex-col max-md:items-start max-md:gap-4 max-md:py-6"
          >
            <h3 className="text-h4 text-white transition-colors duration-300 group-hover:text-mute">
              {job.title}
            </h3>
            <div className="flex shrink-0 items-center gap-8 text-body-l text-mute max-lg:gap-5">
              <span>{job.employmentType}</span>
              {/* Template demo meta: every listing row shows the same category. */}
              <span>Strategy</span>
              <span>{job.city}</span>
              <span
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-coal text-white transition-colors duration-300 group-hover:border-brand group-hover:bg-brand"
                aria-hidden
              >
                <svg
                  className="size-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </motion.div>

      <div
        role="tablist"
        aria-label="Job locations"
        className="mt-12 flex flex-wrap justify-center gap-3 max-md:mt-8"
      >
        {countries.map((c, i) => (
          <button
            key={c}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`flex min-h-11 items-center gap-2 rounded-pill border px-5 py-2.5 text-body-m font-medium transition-colors duration-300 ${
              active === i
                ? "border-white bg-white text-ink"
                : "border-coal text-white hover:border-mute"
            }`}
          >
            <PinIcon className="size-4 shrink-0" />
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};
