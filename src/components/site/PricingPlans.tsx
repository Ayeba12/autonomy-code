"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { PricingPlan } from "@/content/types";

type Billing = "monthly" | "annually";

/** Tab labels (template typo "Annualy" corrected). */
const billingTabs: { key: Billing; label: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "annually", label: "Annually" },
];

interface PricingPlansProps {
  plans: PricingPlan[];
  /**
   * "section" (default): self-contained home-page section with its own
   * eyebrow + heading. "bare": billing toggle + cards only — used on
   * /pricing, whose hero already carries the heading (pricing.md §1–2).
   */
  variant?: "section" | "bare";
}

/** Pricing section with Monthly/Annually tabs and 3 plan cards (home §8). */
export const PricingPlans = ({ plans, variant = "section" }: PricingPlansProps) => {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      className={
        variant === "section"
          ? "section-gap bg-paper py-20 max-md:py-12"
          : "bg-paper pb-24 max-md:pb-14"
      }
    >
      <div className="container-site">
        <Reveal className={variant === "section" ? "relative" : "flex justify-end max-md:justify-start"}>
          {variant === "section" && (
            <>
              <Tag>Pricing Plans</Tag>
              <h2 className="mt-6 text-h2">Ready to scale your brand?</h2>
            </>
          )}
          <div
            className={
              variant === "section"
                ? "absolute top-0 right-0 flex rounded-full bg-white p-1 max-md:static max-md:mt-6 max-md:inline-flex"
                : "flex rounded-full bg-white p-1"
            }
            role="tablist"
            aria-label="Billing period"
          >
            {billingTabs.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={billing === key}
                onClick={() => setBilling(key)}
                className={`rounded-full px-5 py-2.5 text-body-m font-medium transition-colors duration-300 ${
                  billing === key ? "bg-ink text-white" : "text-ink hover:bg-paper-2"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className={`flex flex-col rounded-card bg-white p-7 max-md:p-5 ${
                plan.highlighted ? "border-2 border-brand" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="size-5 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
                </svg>
                <span className="font-heading text-body-l">{plan.name}</span>
              </div>
              <h3 className="mt-6 font-heading text-h3">
                {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
              </h3>
              <p className="mt-1 text-body-s text-smoke">{plan.blurb}</p>
              <ul className="mt-7 flex flex-col gap-3.5 border-t border-line pt-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-body-m">
                    <svg
                      className="size-5 shrink-0 rounded-full bg-paper p-1 text-ink"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="m3 8.5 3.5 3.5L13 5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <Button
                  href={plan.cta.href}
                  variant={plan.cta.variant}
                  className="w-full uppercase"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
