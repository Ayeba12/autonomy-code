import type { PricingPlan } from "../types";

/**
 * Seed data from `_analysis/home.md` §8 "Pricing".
 * Annual prices keep the source's space after "$" verbatim ("$ 1,250 /mo").
 * Template fix applied per seeding rules: the Focus plan's duplicated
 * "One active design slot" feature is replaced with "Weekly progress updates".
 * (The "Annualy" tab-label typo lives in UI copy, not in this data.)
 */
export const pricingPlans: PricingPlan[] = [
  {
    name: "Focus",
    monthlyPrice: "$1,450 /mo",
    annualPrice: "$ 1,250 /mo",
    blurb: "Ideal for early-stage visionaries.",
    features: [
      "One active design slot",
      "48-hour average delivery",
      "Direct dashboard collaboration",
      "Weekly progress updates",
      "Full source file ownership",
    ],
    cta: { label: "START A PROJECT", href: "/contact", variant: "dark" },
    highlighted: false,
  },
  {
    name: "Momentum",
    monthlyPrice: "$2,950 /mo",
    annualPrice: "$ 2,450 /mo",
    blurb: "Scaling your brand at high velocity.",
    features: [
      "Two active design slots",
      "24-hour priority delivery",
      "Full-stack creative solutions",
      "Weekly strategy video calls",
      "Priority support queue access",
    ],
    cta: { label: "GET STARTED", href: "/contact", variant: "brand" },
    highlighted: true,
  },
  {
    name: "Empire",
    monthlyPrice: "Custom Pricing",
    annualPrice: "Custom Pricing",
    blurb: "A dedicated creative department.",
    features: [
      "Unlimited active design slots",
      "Same-day instant turnaround",
      "Dedicated creative art lead",
      "White-label ready deliverables",
      "24/7 VIP private channel",
    ],
    cta: { label: "Reach out", href: "/contact", variant: "dark" },
    highlighted: false,
  },
];
