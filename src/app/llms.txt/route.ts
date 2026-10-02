import { faqs as compassFaqs } from "@/content/local/faqs";
import { resetFaqs } from "@/content/reset";
import { services } from "@/content/services";
import { content } from "@/content/source";
import { SITE_URL } from "@/lib/seo";

/** Refresh with the essays. */
export const revalidate = 300;

const link = (title: string, path: string, note: string) =>
  `- [${title}](${SITE_URL}${path}): ${note}`;

/**
 * GET /llms.txt — a plain Markdown guide to the site for AI assistants
 * and answer engines (the llms.txt convention): who this is, what is
 * offered, and where the authoritative page for each thing lives. Built
 * from the same content the pages use, so it cannot drift from them.
 */
export async function GET() {
  const [pillars, ladder, articles] = await Promise.all([
    content.getPillars(),
    content.getLadder(),
    content.getArticles(),
  ]);
  const published = articles.filter((article) => !article.draft);

  const body = [
    "# The Autonomy Code",
    "",
    "> The Autonomy Code is a coaching and strategy practice founded by DK Jonah, Knowledge Architect, also known as The NO GraGra Practice. It works with coaches, consultants and accomplished professionals whose expertise lives in scattered pieces, helping them build from owned ground. Its core idea: autonomy is peace, given structure.",
    "",
    "The practice is deliberately unhurried: no rush, no force, no gra gra. Prices are stated plainly on each offer's own page. The Autonomy Compass is the door to the practice.",
    "",
    "The central distinction: independence is freedom from; autonomy is ownership of.",
    "",
    "The practice works online, on UK time, with clients in London, across the United Kingdom and worldwide.",
    "",
    "## Who it is for",
    "",
    "Capable people whose lives or practices look credible from the outside but do not feel fully theirs. The Autonomy Compass speaks particularly to coaches and consultants. The Annual Reset has a wider audience and does not require running a business.",
    "",
    "## Questions people ask",
    "",
    "### What is The Autonomy Code?",
    "The Autonomy Code is a five-pillar framework for ownership and self-governance, created by DK Jonah. The pillars are Identity, Message, Strategy, Resources and Relationships. It is delivered through The NO GraGra Practice as coaching and strategy work.",
    "",
    "### Who is DK Jonah?",
    "DK Jonah is a Knowledge Architect: she builds the systems that let capable people own their work and their lives rather than perform them. She created The Autonomy Code, founded The NO GraGra Practice, wrote the books NO GraGra and DIY Branding, and created the Decisions That Work framework.",
    "",
    "### What does NO GraGra mean?",
    "NO GraGra means no frantic energy and no unnecessary struggle. Slow first, then precise. It is the deliberate opposite of hustle.",
    "",
    "### What is the difference between independence and autonomy?",
    "Independence is freedom from. Autonomy is ownership of. In this work, autonomy is not independence from people; it is independence from captivity.",
    "",
    "### What is hidden captivity?",
    "Hidden captivity is the condition the work treats: functioning, but not free. A person can be capable and credible on the outside while not living or working fully from their own centre, because their identity, decisions or ways of working were shaped by borrowed standards and structures.",
    "",
    // The next four answer searches from DK's keyword plan, in the words
    // of her own Compass copy.
    "### Something feels off but I don't know what. What is going on?",
    `From the outside, your practice may look credible and your work respected, but privately you know something is not fully yours: the language, the framework, the structure, the way you make decisions. You are not the problem. The ground you are standing on is. The Autonomy Compass shows where that happened and what to claim back first: ${SITE_URL}/autonomy-compass.`,
    "",
    "### Why do I feel stuck when everything is fine? Why am I doing well but not happy?",
    "Most capable people are not failing. They are performing well inside structures that were never built for them: borrowed frameworks, inherited identities, outsourced decisions. You may be doing well, but not feeling free. Most people are not stuck because they lack information. They are stuck because they lack ownership.",
    "",
    "### I know what I want but cannot do it. Why?",
    "You may know what you want, but still struggle to choose it, and keep returning to second-guessing instead of choice. When ownership is missing, everything restarts. When you build from owned ground, you stop second-guessing and start deciding.",
    "",
    "### Why don't productivity systems and plans work for me?",
    "Because the plan was not built from your actual life, capacity, patterns or constraints. So it works in theory, but not in your hands. When energy is high, you move. When capacity drops, everything stalls. You are not undisciplined. You are trying to sustain a life that does not fit inside a structure never designed around how you actually operate.",
    "",
    "### How do I start working with DK Jonah?",
    `The Autonomy Compass (£97) is the door: twenty-five statements, a 90-minute Claim Intensive and a written Autonomy Blueprint. See ${SITE_URL}/autonomy-compass.`,
    "",
    "### What is The Annual Reset?",
    `The Annual Reset is a guided online goal-setting workshop grounded in standards and ownership, held each November and December. The 2026 edition, The Annual Reset 4.0, has the theme Standards. See ${SITE_URL}/annual-reset.`,
    "",
    "## Key terms",
    "",
    "- **Owned ground**: building your work and life from what is genuinely yours, rather than from borrowed frameworks and inherited definitions.",
    "- **Borrowed identity**: a practice built around a structure that works but does not fully belong to you.",
    "- **Claim Intensive**: a 90-minute, one-to-one session on the single pillar your Compass result surfaces.",
    "- **Autonomy Blueprint**: the written document that follows a Claim Intensive: what is going on, what was cleared, and what to build next.",
    "- **SABI CORE**: the flagship year. One to one, strategy only; the client carries out the work.",
    "- **QuietFOCUS**: the practice's letter.",
    "",
    "## What people come to the practice for",
    "",
    link("Personal autonomy and self-leadership", "/method", "the five-pillar method for owning your identity, decisions and direction."),
    link("Identity coaching and clarity coaching", "/autonomy-compass", "the Autonomy Compass finds where ownership went and which pillar to claim first."),
    link("Sustainable productivity", "/method", "capacity-aware work at a pace real life can keep. Slow first, then precise; the opposite of hustle."),
    link("Goal setting and action planning; life planning workshops", "/annual-reset", "the Annual Reset workshop each November and December. A quarterly planning workshop, the Quarterly Reset, is planned for March and April 2027."),
    link("Messaging strategy for coaches and consultants", "/services/communication-clarity-audit", "the Communication Clarity Audit, the Offer Clarity Session and the Message pillar."),
    link("Business strategy and practice development for coaches and consultants", "/sabi-core", "SABI CORE, a year of one-to-one strategy, and Knowledge Architecture."),
    link("Personal brand strategy", "/services/knowledge-architecture", "brand and online presence strategy inside Knowledge Architecture, and the TOP Audit."),
    link("Creative recovery", "/services/willingness-and-recovery", "the Willingness and Recovery intensive, and the open Creative Recovery group on Mondays."),
    link("Accountability and commitment", "/sabi-core", "held closely, and held to account, across a year."),
    "",
    "## The five pillars",
    "",
    ...pillars.map((pillar) => `- **${pillar.name}**: ${pillar.movement} ${pillar.description}`),
    "",
    "## The ladder (in order of depth)",
    "",
    ...[...ladder]
      .sort((a, b) => a.order - b.order)
      .map((tier) => link(tier.name, tier.cta.href, `${tier.summary} Price: ${tier.price}.`)),
    "",
    "## The Annual Reset 4.0",
    "",
    link(
      "The Annual Reset 4.0",
      "/annual-reset",
      "Three live online sessions on 27 November, 4 December and 5 December 2026 at 7 pm UK time. This year's theme is Standards. Early bird £99 until 1 November 2026, then £199; booking closes 24 November 2026; seats in naira are available for Nigeria.",
    ),
    "",
    "## Services",
    "",
    ...services.map((service) =>
      link(service.name, `/services/${service.slug}`, `${service.summary} ${service.price}. ${service.format}`),
    ),
    "",
    "## Key pages",
    "",
    link("The Method", "/method", "What autonomy means here, hidden captivity, the five pillars and the operating flow."),
    link("Work Together", "/work-together", "The whole menu in one view."),
    link("About DK Jonah", "/about", "The story behind the practice."),
    link("Speaking", "/speaking", "Themes, audiences and formats for inviting DK Jonah to speak."),
    link("In Conversation", "/in-conversation", "Interviews, podcasts, talks and panels."),
    link("Contact", "/contact", "Write to the practice."),
    "",
    "## Essays",
    "",
    ...published.map((article) =>
      link(article.title, `/writing/${article.slug}`, article.subtitle || article.excerpt),
    ),
    "",
    "## Common questions: The Autonomy Compass",
    "",
    ...compassFaqs.flatMap((faq) => [`### ${faq.question}`, faq.answer, ""]),
    "## Common questions: The Annual Reset",
    "",
    ...resetFaqs.flatMap((faq) => [`### ${faq.question}`, faq.answer, ""]),
    "## Contact",
    "",
    "- Email: info@theautonomycode.com",
    "- DK Jonah: https://www.dkjonah.com/",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
