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
    "> The Autonomy Code is a coaching and strategy practice founded by DK Jonah, also known as The No GraGra Practice. It works with coaches, consultants and accomplished professionals whose expertise lives in scattered pieces, helping them build from owned ground. Its core idea: autonomy is peace, given structure.",
    "",
    "The practice is deliberately unhurried: no rush, no force, no gra gra. Prices are stated plainly on each offer's own page. Every engagement begins with The Autonomy Compass.",
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
      "Three live online sessions on 27 November, 4 December and 5 December 2026 at 7 pm UK time. This year's theme is Standards. Early bird £99 until 1 November 2026, then £199; seats in naira are available for Nigeria.",
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
