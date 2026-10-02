import type { Service } from "@/content/services";
import type { Article, FaqItem } from "@/content/types";
import { SAME_AS, SITE_NAME, SITE_URL, absoluteUrl } from "./seo";

/**
 * schema.org builders. The organisation, DK, and the website carry fixed
 * ids so every other page can point at them rather than repeat them.
 */
const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#dk-jonah`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const CONTEXT = "https://schema.org";

/** What the practice and DK are known for, in searchers' words. */
const TOPICS = [
  "Autonomy",
  "Personal autonomy",
  "Ownership",
  "Self-governance",
  "Self-trust",
  "Hidden captivity",
  "Personal standards",
  "Goal setting",
  "Decision making",
  "Knowledge architecture",
  "Coaching for coaches and consultants",
  "Strategy for knowledge workers",
  "NO GraGra",
  "Self-leadership",
  "Sustainable productivity",
  "Productivity coaching",
  "Clarity coaching",
  "Identity coaching",
  "Goal setting and action planning",
  "Life planning workshops",
  "Personal brand strategy",
  "Messaging strategy for coaches and consultants",
  "Business strategy for coaches and consultants",
  "Practice development",
  "Creative recovery",
  "Accountability and commitment",
];

/** Sitewide: who runs this, who she is, and what the site is. */
export const siteSchema = () => ({
  "@context": CONTEXT,
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "The NO GraGra Practice",
      url: SITE_URL,
      logo: absoluteUrl("/images/email/logo.png"),
      description:
        "A coaching and strategy practice for accomplished professionals whose expertise lives in scattered pieces. Autonomy is peace, given structure.",
      slogan: "Autonomy is peace, given structure.",
      knowsAbout: TOPICS,
      founder: { "@id": PERSON_ID },
      email: "info@theautonomycode.com",
      sameAs: SAME_AS,
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "DK Jonah",
      url: `${SITE_URL}/about`,
      image: absoluteUrl("/images/dk-jonah-portrait.webp"),
      jobTitle: "Knowledge Architect",
      description:
        "Knowledge Architect. Founder of The Autonomy Code and The NO GraGra Practice, author of NO GraGra and DIY Branding, and creator of the Decisions That Work framework.",
      worksFor: { "@id": ORG_ID },
      knowsAbout: TOPICS,
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
  ],
});

/** Breadcrumb trail: [name, path] pairs from the home page down. */
export const breadcrumbSchema = (trail: [string, string][]) => ({
  "@context": CONTEXT,
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"] as [string, string], ...trail].map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absoluteUrl(path),
  })),
});

/** A page of questions and answers, as shown on the page itself. */
export const faqSchema = (faqs: FaqItem[]) => ({
  "@context": CONTEXT,
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

/** An essay. */
export const articleSchema = (article: Article) => {
  const url = `${SITE_URL}/writing/${article.slug}`;
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: article.title,
    description: article.subtitle || article.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "en-GB",
    articleSection: article.pillar,
    keywords: [article.pillar, "autonomy", "ownership", "self-trust"].join(", "),
    about: { "@type": "Thing", name: `${article.pillar} (pillar of The Autonomy Code)` },
    ...(article.heroImage ? { image: [absoluteUrl(article.heroImage.src)] } : {}),
    author: { "@id": PERSON_ID, "@type": "Person", name: "DK Jonah" },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
};

/** "£250" → "250"; anything that is not one plain figure → null. */
const plainPrice = (price: string) => {
  const match = /^£([\d,]+)$/.exec(price.trim());
  return match ? match[1].replace(/,/g, "") : null;
};

/** One service on the menu, with its price where that is a single figure. */
export const serviceSchema = (service: Service) => {
  const url = `${SITE_URL}/services/${service.slug}`;
  const price = plainPrice(service.price);
  return {
    "@context": CONTEXT,
    "@type": "Service",
    name: service.name,
    description: service.intro,
    url,
    serviceType: service.category,
    audience: { "@type": "Audience", audienceType: "Coaches, consultants and knowledge workers" },
    keywords: service.keywords.join(", "),
    image: absoluteUrl(service.image.src),
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: "GBP",
            url,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
};

/** The Autonomy Compass: the £97 front door. */
export const compassSchema = (description: string) => ({
  "@context": CONTEXT,
  "@type": "Service",
  name: "The Autonomy Compass",
  description,
  serviceType: "Ownership assessment with a one-to-one session and written Blueprint",
  audience: { "@type": "Audience", audienceType: "Coaches and consultants" },
  url: `${SITE_URL}/autonomy-compass`,
  image: absoluteUrl("/images/compass/compass-cover.webp"),
  provider: { "@id": ORG_ID },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    price: "97",
    priceCurrency: "GBP",
    url: `${SITE_URL}/autonomy-compass`,
    availability: "https://schema.org/InStock",
  },
});

/** The Annual Reset 4.0: three live online sessions. */
export const resetEventSchema = (description: string) => {
  const url = `${SITE_URL}/annual-reset`;
  const session = (name: string, start: string) => ({
    "@type": "Event",
    name: `The Annual Reset 4.0 · ${name}`,
    startDate: start,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url },
  });
  return {
    "@context": CONTEXT,
    "@type": "Event",
    name: "The Annual Reset 4.0",
    description,
    about: ["Goal setting and action planning", "Life planning", "Personal standards", "Ownership"],
    keywords: "annual reset workshop, goal setting and action planning, life planning workshop, standards, year-end review, online workshop",
    url,
    image: [absoluteUrl("/images/og/annual-reset.jpg")],
    startDate: "2026-11-27T19:00:00+00:00",
    endDate: "2026-12-05",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url },
    organizer: { "@id": ORG_ID, "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    performer: { "@id": PERSON_ID, "@type": "Person", name: "DK Jonah" },
    offers: [
      {
        "@type": "Offer",
        name: "Early bird",
        price: "99",
        priceCurrency: "GBP",
        url: `${SITE_URL}/annual-reset/checkout`,
        availability: "https://schema.org/InStock",
        validThrough: "2026-10-31T23:59:59+00:00",
      },
      {
        "@type": "Offer",
        name: "Standard",
        price: "199",
        priceCurrency: "GBP",
        url: `${SITE_URL}/annual-reset/checkout`,
        availability: "https://schema.org/InStock",
        validFrom: "2026-11-01T00:00:00+00:00",
      },
    ],
    subEvent: [
      session("Audit", "2026-11-27T19:00:00+00:00"),
      session("Align", "2026-12-04T19:00:00+00:00"),
      session("Anchor", "2026-12-05T19:00:00+00:00"),
    ],
  };
};

/** The About page: a profile of DK. */
export const profileSchema = () => ({
  "@context": CONTEXT,
  "@type": "ProfilePage",
  url: `${SITE_URL}/about`,
  mainEntity: { "@id": PERSON_ID },
});
