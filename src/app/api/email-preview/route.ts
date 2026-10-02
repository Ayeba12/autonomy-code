import {
  paymentNotification,
  contactConfirmation,
  contactNotification,
  speakingConfirmation,
  speakingNotification,
} from "@/lib/email/templates";

const contact = {
  firstName: "Ebi",
  lastName: "Okoro",
  email: "ebi@example.com",
  message:
    "I have been reading the essays for a few weeks.\n\nI would like to understand where the Compass sits before SABI CORE, and whether it suits someone who already has a practice running.",
};

const speaking = {
  name: "Ada Nwosu",
  email: "ada@example.com",
  organisation: "Women in Consulting Network",
  eventDate: "2027-03-12",
  format: "Keynote or conference talk",
  aboutTheRoom:
    "About 120 independent consultants, most of them five to fifteen years in.\n\nWe would like the room to leave with one clear idea about building on their own terms.",
};

const templates = {
  "contact-new": () => contactNotification(contact),
  "contact-received": () => contactConfirmation(contact),
  "speaking-new": () => speakingNotification(speaking),
  "speaking-received": () => speakingConfirmation(speaking),
  "payment-new": () =>
    paymentNotification({
      product: "The Annual Reset 4.0 (early bird)",
      amount: "£99.00",
      name: "Ebi Okoro",
      email: "ebi@example.com",
      paidAt: "2 October 2026 at 14:05 (UK)",
      reference: "cs_live_a1B2c3D4",
    }),
};

/**
 * GET /api/email-preview?t=contact-new — renders an email template with
 * sample details, for checking the design in a browser. Development
 * only; it answers 404 on the live site.
 */
export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }
  const key = new URL(request.url).searchParams.get("t") ?? "contact-new";
  const template = templates[key as keyof typeof templates];
  if (!template) return new Response("Unknown template", { status: 404 });

  // Point the images at the local server so unpublished ones show.
  const origin = new URL(request.url).origin;
  const html = template().html.replaceAll("https://www.theautonomycode.com/images/", `${origin}/images/`);
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
