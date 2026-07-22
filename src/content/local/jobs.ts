import type { JobOpening, RichBlock } from "../types";

/**
 * Seed data from `_analysis/career.md` §5 (country-tab grouping) and
 * `_analysis/career-detail.md` §3a (the one captured job body, reused for
 * every opening — matching the template, where all five slugs render the
 * same rich-text description).
 *
 * Slugs repeat across countries because the template lists the same job
 * under several tabs; `getJobOpening` returns the first match.
 *
 * Body headings are <h6> in the source; RichBlock's closest level is "h4".
 * Note (verbatim template quirk): the body says "Senior UI/UX Designer"
 * regardless of the job title.
 */

const jobBody: RichBlock[] = [
  { type: "h4", text: "The Role" },
  {
    type: "p",
    text: "We are looking for a Senior UI/UX Designer to join our studio. You will be responsible for turning complex problems into intuitive, beautiful, and functional digital experiences. From initial wireframes to high-fidelity prototypes, you will lead the design process for world-class tech products.",
  },
  { type: "h4", text: "Responsibilities" },
  {
    type: "ul",
    items: [
      "End-to-End Design: Lead projects from discovery and user research to final UI delivery.",
      "Prototyping: Create interactive prototypes in Figma to test and validate ideas.",
      "Design Systems: Build and maintain scalable design systems for consistent product growth.",
      "Collaboration: Work closely with developers to ensure pixel-perfect implementation.",
      "Strategy: Align user needs with business goals to drive measurable ROI.",
    ],
  },
  { type: "h4", text: "Requirements" },
  {
    type: "ul",
    items: [
      "Experience: 5+ years of design experience in a creative agency or tech startup.",
      "Toolbox: Mastery of Figma. Familiarity with Webflow, Framer, or Adobe Suite is a plus.",
      "Portfolio: A strong showcase of shipped products and clear case studies.",
      "Mindset: A problem-solver who values simplicity and user-centric logic.",
    ],
  },
  { type: "h4", text: "Benefits" },
  {
    type: "ul",
    items: [
      "Salary: Up to £55k (Based on experience).",
      "Flexibility: Hybrid working model with a focus on work-life balance.",
      "Perks: Private healthcare, pension scheme, and your birthday off.",
      "Growth: Annual learning budget and rapid career progression.",
      "Unique: Access to our \"Bucket List\" scheme to fund your personal dreams.",
    ],
  },
];

function job(country: string, title: string, slug: string): JobOpening {
  return {
    slug,
    title,
    country,
    // All listing rows share the same demo meta: Full Time · Manchester, UK.
    city: "Manchester, UK",
    employmentType: "Full Time",
    body: jobBody,
  };
}

export const jobOpenings: JobOpening[] = [
  // Tab 1 — USA
  job("USA", "Digital PR Executive - Rise Live", "digital-pr-executive---rise-live"),
  job("USA", "Senior Paid Social Manager", "senior-paid-social-manager"),
  job("USA", "Digital PR Manager", "digital-pr-manager"),
  // Tab 2 — Germany
  job("Germany", "Strategy Lead", "strategy-lead"),
  job("Germany", "Digital PR Executive - Rise Live", "digital-pr-executive---rise-live"),
  job("Germany", "Senior Paid Social Manager", "senior-paid-social-manager"),
  job("Germany", "Social Lead", "social-lead"),
  job("Germany", "Digital PR Manager", "digital-pr-manager"),
  // Tab 3 — Japan
  job("Japan", "Digital PR Executive - Rise Live", "digital-pr-executive---rise-live"),
  job("Japan", "Senior Paid Social Manager", "senior-paid-social-manager"),
  // Tab 4 — Australia
  job("Australia", "Strategy Lead", "strategy-lead"),
  job("Australia", "Social Lead", "social-lead"),
];
