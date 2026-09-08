/**
 * The services menu (Services Menu v4, effective 1 September 2026).
 *
 * PUBLIC CONTENT ONLY. The source menu is an internal working document.
 * Its retired price list, the money rules, the margin reasoning behind
 * each number, the build status of the unbuilt operating systems, the
 * open IP threads, and third-party delivery notes are deliberately not
 * represented here and must not be added to these pages.
 *
 * House style: prices live on each service's own page, never on the
 * browse pages that link to them (content.md §26 rule 5).
 */

export type ServiceGroup = "ladder" | "session" | "engagement" | "ongoing";

export interface ServiceSection {
  heading: string;
  body?: string;
  /** Rendered as a hairline list under the heading. */
  items?: string[];
}

export interface ServiceTier {
  label: string;
  price: string;
  note?: string;
}

export interface Service {
  slug: string;
  name: string;
  group: ServiceGroup;
  /** Uppercase label on list rows and the service hero. */
  category: string;
  /** One line, used on the Work Together list. Never carries a price. */
  summary: string;
  /** Hero headline on the service's own page. */
  title: string;
  /** Hero standfirst. */
  intro: string;
  /** Shown once, plainly, on this page only. */
  price: string;
  /** Format line beside the price: duration, shape, cap. */
  format: string;
  sections: ServiceSection[];
  /** Optional price table for the tiered engagements. */
  tiers?: { heading: string; note?: string; rows: ServiceTier[] };
  forList?: string[];
  notForList?: string[];
  cta: { label: string; href: string };
  /** Quiet line under the CTA. */
  ctaNote?: string;
}

export const services: Service[] = [
  /* ---------------------------------------------------------------- */
  /* The Ladder                                                       */
  /* ---------------------------------------------------------------- */
  {
    slug: "pillar-intensive",
    name: "The Pillar Intensive",
    group: "ladder",
    category: "Step two",
    summary:
      "Ninety minutes on the one pillar your Scan surfaced, with a first act you can do alone.",
    title: "Ninety minutes on the pillar that surfaced.",
    intro:
      "The Scan names the pillar. This is where you work it: one pillar, held closely, until the captivity is named precisely and loosened once.",
    price: "£250",
    format: "90 minutes, one to one. After the Ownership Scan.",
    sections: [
      {
        heading: "What it is",
        body: "A single live session on the one pillar your Scan surfaced, run on the instrument built for that pillar. Not a general coaching hour. The pillar decides the shape of the session, so the work is specific from the first minute.",
      },
      {
        heading: "What happens in the room",
        items: [
          "The captivity is named precisely, in your own words rather than borrowed ones.",
          "It is loosened once, while you are in the room and can feel it move.",
          "You leave with one first act you can carry out alone, without me and without permission.",
        ],
      },
      {
        heading: "Before and after",
        body: "Your Scan is read in full beforehand, so no live minutes are spent gathering what you have already told me. The written output follows the session.",
      },
    ],
    forList: [
      "You have taken the Ownership Scan and have your Personal Autonomy Map.",
      "You want depth on one pillar rather than a tour of all five.",
      "You are ready to act on one thing rather than plan five.",
    ],
    notForList: [
      "You have not yet taken the Scan. The pillar is discovered there, not chosen off a shelf.",
      "You want a general conversation about your practice.",
      "You want a plan for everything at once.",
    ],
    cta: { label: "Take the Ownership Scan first", href: "/ownership-scan" },
    ctaNote: "Every engagement begins at the Scan. No exceptions.",
  },

  /* ---------------------------------------------------------------- */
  /* Sessions                                                         */
  /* ---------------------------------------------------------------- */
  {
    slug: "wetin-you-sabi",
    name: "Wetin You Sabi Session",
    group: "session",
    category: "Single session",
    summary: "Sixty minutes to name what you already know.",
    title: "Name what you already know.",
    intro:
      "You have been doing this for years. The knowing is real and it is yours. What is missing is the name for it, and names are what let other people find the work.",
    price: "£150",
    format: "60 minutes, one to one.",
    sections: [
      {
        heading: "What it is",
        body: "One hour to surface what you actually know and say it plainly. Most people arrive able to do the thing and unable to describe it, which is why the market keeps mistaking them for beginners.",
      },
      {
        heading: "What you leave with",
        items: [
          "Your knowledge named, in language you recognise as your own.",
          "The shape of it: what it covers, where it stops, who it is for.",
          "A first way to say it out loud without shrinking or inflating.",
        ],
      },
      {
        heading: "What it is not",
        body: "This is one hour to name what you know. Building from it is a different piece of work: that is Knowledge Architecture, and it runs over six to eight weeks.",
      },
    ],
    forList: [
      "Your private wisdom is stronger than your public clarity.",
      "You can do the work but go quiet when asked to describe it.",
      "You want one honest hour rather than a programme.",
    ],
    notForList: [
      "You want the framework built and written for you. That is Knowledge Architecture.",
      "You want reassurance rather than precision.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote: "Every reply comes in writing. Nothing is quoted on a call.",
  },
  {
    slug: "offer-clarity",
    name: "Offer Clarity Session",
    group: "session",
    category: "Single session",
    summary: "What you are actually selling, on one page.",
    title: "What are you actually selling?",
    intro:
      "Not what you do. Not what you love. What somebody can buy, and why the person who needs it would recognise it as theirs.",
    price: "£200",
    format: "One session, one to one, with a written Offer Map.",
    sections: [
      {
        heading: "What it is",
        body: "A working session that ends with your offer written down in one page: buyer, problem, method, result. Four parts, and most stalled offers are missing exactly one of them.",
      },
      {
        heading: "The one-page Offer Map",
        items: [
          "Buyer: who this is for, specifically enough to recognise themselves.",
          "Problem: what is actually wrong, in their words rather than yours.",
          "Method: what you do about it, named and owned.",
          "Result: what is different afterwards, stated without inflation.",
        ],
      },
    ],
    forList: [
      "You are selling something and cannot say it in one sentence.",
      "You have several offers and suspect they are all the same one.",
      "You keep rewriting the page and it keeps not landing.",
    ],
    notForList: [
      "You want copy written for you.",
      "You have not decided whether you want to sell anything yet.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote: "Every reply comes in writing. Nothing is quoted on a call.",
  },
  {
    slug: "synccheck",
    name: "SyncCheck Intensive",
    group: "session",
    category: "Single session",
    summary: "Two hours across all five pillars, with a written report.",
    title: "All five pillars, in one sitting.",
    intro:
      "Wider than the Pillar Intensive and deeper than the Scan. Two hours across Identity, Message, Strategy, Resources and Relationships, and a written report you keep.",
    price: "£275",
    format: "Two hours, one to one. Written report follows.",
    sections: [
      {
        heading: "What it is",
        body: "A full pass across all five pillars in one sitting, for people who want the whole picture rather than one pillar worked closely. It goes wider than the Pillar Intensive by design, and it trades some depth for that width.",
      },
      {
        heading: "What you leave with",
        items: [
          "A read on all five pillars rather than the one that shouted loudest.",
          "Where the load is actually sitting, which is rarely where it feels like it is.",
          "A written report, so the findings survive the session.",
        ],
      },
      {
        heading: "How it differs",
        body: "The Ownership Scan is the door and surfaces one pillar to work. The Pillar Intensive goes deep on that one. SyncCheck goes across all five at once. If you want depth, take the Intensive. If you want the map, take this.",
      },
    ],
    forList: [
      "You want the whole picture in one sitting.",
      "You suspect the problem is not where you have been looking.",
      "You want findings in writing rather than in memory.",
    ],
    notForList: [
      "You want one pillar worked to depth. That is the Pillar Intensive.",
      "You want a plan built and delivered. That is an engagement.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote: "Every reply comes in writing. Nothing is quoted on a call.",
  },
  {
    slug: "willingness-and-recovery",
    name: "Willingness and Recovery",
    group: "session",
    category: "Seven-day intensive",
    summary: "Seven days in the Creative Recovery lane.",
    title: "Willingness comes before method.",
    intro:
      "For the person who knows what to do and cannot begin. Seven days in the Creative Recovery lane, working on willingness rather than technique, because technique is not what is missing.",
    price: "£197",
    format: "Seven-day intensive. Creative Recovery lane.",
    sections: [
      {
        heading: "What it is",
        body: "A seven-day intensive for creative work that has stalled. It does not start with a plan, because a plan is not what is blocking you. It starts with willingness, which is the thing that has to return first.",
      },
      {
        heading: "Across the seven days",
        items: [
          "What stopped, and when. Named without blame.",
          "The weights being carried, most of which were handed to you.",
          "Willingness practised in small daily acts rather than declared.",
          "One thing attempted, badly and on purpose.",
        ],
      },
      {
        heading: "The open room stays open",
        body: "The Creative Recovery group meets with no charge and anyone can join it. This intensive is the deeper lane beside it, not a gate in front of it.",
      },
    ],
    forList: [
      "You know exactly what to do and have not been able to start.",
      "You have tried discipline and it did not touch the problem.",
      "You would rather practise willingness than be talked into motivation.",
    ],
    notForList: [
      "You want technique, tools or a productivity system.",
      "You want to be shouted into action.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote: "Every reply comes in writing. Nothing is quoted on a call.",
  },

  /* ---------------------------------------------------------------- */
  /* Knowledge work                                                   */
  /* ---------------------------------------------------------------- */
  {
    slug: "knowledge-architecture",
    name: "Knowledge Architecture",
    group: "engagement",
    category: "The engagement",
    summary:
      "Six to eight weeks turning what you know into owned, written property.",
    title: "Everything that makes a practice work usually lives in one head.",
    intro:
      "This is the work of getting it out and writing it down, so it can be run, taught, sold and left behind. Not coaching, and not a session. A defined engagement with a beginning and an end.",
    price: "From £2,000",
    format: "Six to eight weeks. One to four phases.",
    sections: [
      {
        heading: "Phase 01 · Discovery and Excavation",
        body: "The Core Scan diagnostic, a review of the material you already have, an Identity Reconciliation memo, and a Buyer Definition. What is here, what is true, and who it is for.",
      },
      {
        heading: "Phase 02 · Knowledge Architecture and the Solution Frame",
        body: "The engine, and the reason the engagement exists. Years of practice converted into named, owned frameworks that a new person can run without you in the room.",
      },
      {
        heading: "Phase 03 · Brand Strategy",
        body: "Positioning built for the buyer identified in Phase 01, rather than for a general audience nobody can picture.",
      },
      {
        heading: "Phase 04 · Online Presence Strategy",
        body: "Channels, email, and what goes where and why. Strategy, not build. Building is a separate engagement and is never assumed to be inside this one.",
      },
    ],
    tiers: {
      heading: "The three ways in",
      note: "Each tier is one number, not a range.",
      rows: [
        { label: "One phase", price: "£2,000", note: "One phase only." },
        { label: "Two phases", price: "£3,500" },
        {
          label: "All four phases",
          price: "£5,000",
          note: "The full engagement.",
        },
      ],
    },
    forList: [
      "You have built something real and it lives mostly in your head.",
      "You want your method named and owned rather than borrowed.",
      "You want work that someone else could run without you present.",
    ],
    notForList: [
      "You want one hour to name what you know. That is the Wetin You Sabi Session.",
      "You want the work delivered without your involvement. You are needed throughout.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote:
      "Money before work: full payment or a 70 per cent deposit before the engagement begins.",
  },
  {
    slug: "communication-clarity-audit",
    name: "Communication Clarity Audit",
    group: "engagement",
    category: "The audit",
    summary:
      "A page-by-page examination of the communication you already have.",
    title: "What is already there, examined properly.",
    intro:
      "Most practices do not have a communication problem so much as a consistency problem. This is a page-by-page look at what already exists, and what it is actually telling people.",
    price: "From £1,200",
    format: "Priced by page count. Two and a half weeks.",
    sections: [
      {
        heading: "What it is",
        body: "A page-by-page examination of communication that already exists: what it says, what it contradicts, and what it is quietly costing you. The pattern that prompted it was a platform review where one brand appeared five different ways, with a competing name sitting on the registration page.",
      },
      {
        heading: "Standard and Premium",
        body: "Standard is guidance and the strategic roadmap: what is wrong, why, and the order to fix it in. Premium includes the same audit with the copy written for you.",
      },
      {
        heading: "The non-negotiables",
        items: [
          "Two formal feedback checkpoints, built into the timeline rather than open-ended revision.",
          "A two and a half week window. It does not stretch.",
          "One person with actual authority on the project, not a messenger.",
          "Client availability throughout. Absence stops the clock, it does not extend the scope.",
        ],
      },
    ],
    tiers: {
      heading: "By page count",
      note: "Standard is guidance and roadmap. Premium adds the written copy.",
      rows: [
        { label: "Up to 5 pages", price: "£1,200", note: "Premium £3,000" },
        { label: "6 to 10 pages", price: "£2,000", note: "Premium £5,000" },
        {
          label: "11 pages and above",
          price: "£3,500",
          note: "Premium £8,000",
        },
      ],
    },
    forList: [
      "You have a body of communication already and suspect it is not consistent.",
      "You want to know what to fix and in what order.",
      "You can give the engagement one person with real authority for two and a half weeks.",
    ],
    notForList: [
      "You are already taking Knowledge Architecture. The review of existing material sits inside that.",
      "You want ongoing copywriting rather than an audit.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote:
      "Commitment Circle members receive a member rate. Ask when you enquire.",
  },
  {
    slug: "top-audit",
    name: "TOP Audit",
    group: "engagement",
    category: "The audit",
    summary: "Your online presence, examined through nine steps and six lenses.",
    title: "Your online presence, examined properly.",
    intro:
      "What the internet currently says about your practice, and whether any of it is what you meant. Nine steps, six lenses, one written answer.",
    price: "£500",
    format: "Six to eight weeks alongside your own work.",
    sections: [
      {
        heading: "What it is",
        body: "A structured review of your online presence: what exists, what it says, what it omits, and what somebody arriving cold would conclude about you within a minute.",
      },
      {
        heading: "How it runs",
        items: [
          "Nine steps, in order, so nothing is examined out of sequence.",
          "Six lenses across the same material, because one pass only ever catches one kind of problem.",
          "A written answer at the end, in the order it should be acted on.",
        ],
      },
    ],
    forList: [
      "Your presence grew over years and nobody has looked at it as a whole.",
      "You want to know what a stranger actually sees.",
      "You want the fixes in priority order rather than a long list.",
    ],
    notForList: [
      "You want the fixes carried out for you. That is implementation.",
      "You want a page-by-page copy review. That is the Communication Clarity Audit.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote: "Every reply comes in writing. Nothing is quoted on a call.",
  },

  /* ---------------------------------------------------------------- */
  /* Ongoing                                                          */
  /* ---------------------------------------------------------------- */
  {
    slug: "implementation",
    name: "Implementation",
    group: "ongoing",
    category: "Ongoing, add-on only",
    summary: "Ongoing delivery, once the strategy exists. Never sold on its own.",
    title: "Once the thinking is done, someone has to run it.",
    intro:
      "Ongoing implementation for practices that already have the strategy written. This is an add-on to work already done, never a starting point.",
    price: "From £450 a month",
    format: "Monthly. Add-on only.",
    sections: [
      {
        heading: "What it is",
        body: "Ongoing delivery of a strategy that already exists on paper. It is deliberately not available on its own, because implementing a plan nobody has built yet is how practices end up busy and unowned.",
      },
      {
        heading: "The shapes it takes",
        items: [
          "One platform, run properly rather than everywhere at once.",
          "Full online presence: all platforms, email and website together.",
          "Operational management, with a setup month before the monthly rhythm begins.",
        ],
      },
    ],
    tiers: {
      heading: "The three shapes",
      note: "Add-on only. Strategy comes first.",
      rows: [
        {
          label: "One platform",
          price: "From £450 a month",
          note: "Rises with long-form video.",
        },
        {
          label: "Full online presence",
          price: "From £1,500 a month",
          note: "All platforms, email, website.",
        },
        {
          label: "Operational management",
          price: "£1,500, then £1,000",
          note: "Setup month, then monthly.",
        },
      ],
    },
    forList: [
      "The strategy exists and is written down.",
      "You want it run consistently rather than in bursts.",
    ],
    notForList: [
      "You do not yet have a strategy. Start with an engagement.",
      "You want a one-off piece of delivery.",
    ],
    cta: { label: "Enquire in writing", href: "/contact" },
    ctaNote:
      "One new strategic client a month. This is a capacity, not a volume plan.",
  },
];

export const serviceBySlug = (slug: string): Service | null =>
  services.find((service) => service.slug === slug) ?? null;

/** A row on the Work Together menu. Never carries a price. */
export interface MenuRow {
  name: string;
  summary: string;
  href: string;
}

export interface MenuGroup {
  key: string;
  label: string;
  note: string;
  rows: MenuRow[];
}

const rowFor = (slug: string): MenuRow => {
  const service = serviceBySlug(slug);
  if (!service) throw new Error(`unknown service: ${slug}`);
  return {
    name: service.name,
    summary: service.summary,
    href: `/services/${service.slug}`,
  };
};

/**
 * The menu as it appears on Work Together. The Ladder is rendered as
 * cards above this; these are the groups beside it.
 */
export const menuGroups: MenuGroup[] = [
  {
    key: "sessions",
    label: "Sessions",
    note: "Single engagements. One question, answered properly.",
    rows: [
      rowFor("wetin-you-sabi"),
      rowFor("offer-clarity"),
      rowFor("synccheck"),
      rowFor("willingness-and-recovery"),
    ],
  },
  {
    key: "knowledge-work",
    label: "Knowledge work",
    note: "Six to eight week engagements with a beginning and an end.",
    rows: [
      rowFor("knowledge-architecture"),
      rowFor("communication-clarity-audit"),
      rowFor("top-audit"),
    ],
  },
  {
    key: "ongoing",
    label: "Ongoing",
    note: "Add-on only, once the strategy exists.",
    rows: [rowFor("implementation")],
  },
  {
    key: "stage",
    label: "The stage",
    note: "Rooms that think, and the rate that comes with them.",
    rows: [
      {
        name: "Speaking",
        summary:
          "Keynotes, workshops and panels. Rates by enquiry, in writing.",
        href: "/speaking",
      },
    ],
  },
];
