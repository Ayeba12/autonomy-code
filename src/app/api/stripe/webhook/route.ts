import { createHmac, timingSafeEqual } from "node:crypto";
import { emailConfigured, enquiryInbox, sendEmail } from "@/lib/email/send";
import { paymentNotification } from "@/lib/email/templates";
import { addToMailerLite, mailerLiteConfigured, mailerLiteGroupName } from "@/lib/mailerlite";

/**
 * POST /api/stripe/webhook — Stripe calls this when a checkout completes.
 * For each paid checkout:
 *   1. an Annual Reset buyer is added to the MailerLite group, which
 *      starts the welcome automation there (see lib/mailerlite.ts);
 *   2. a notification goes to the practice inbox, saying whether the
 *      buyer reached the list.
 *
 *   STRIPE_WEBHOOK_SECRET  the endpoint's signing secret (whsec_…)
 *
 * The signature is checked by hand (HMAC-SHA256 over "timestamp.body"),
 * so nobody but Stripe can trigger a notification.
 */

/** What each price buys. Payment Links carry no product name in the event. */
const PRODUCTS: Record<string, string> = {
  "gbp:9900": "The Annual Reset 4.0 (early bird)",
  "gbp:19900": "The Annual Reset 4.0",
  "gbp:9700": "The Autonomy Compass",
};

/** The prices whose buyers join the MailerLite group: the Annual Reset. */
const RESET_PRICES = new Set(["gbp:9900", "gbp:19900"]);

const TOLERANCE_SECONDS = 5 * 60;

const verified = (body: string, header: string | null, secret: string) => {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(",").map((part) => {
      const i = part.indexOf("=");
      return [part.slice(0, i), part.slice(i + 1)];
    }),
  );
  const timestamp = Number(parts.t);
  if (!timestamp || !parts.v1) return false;
  if (Math.abs(Date.now() / 1000 - timestamp) > TOLERANCE_SECONDS) return false;
  const expected = createHmac("sha256", secret).update(`${parts.t}.${body}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  return a.length === b.length && timingSafeEqual(a, b);
};

const money = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: currency.toUpperCase() }).format(
    amount / 100,
  );

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return new Response("Not configured", { status: 503 });

  const body = await request.text();
  if (!verified(body, request.headers.get("stripe-signature"), secret)) {
    return new Response("Bad signature", { status: 400 });
  }

  const event = JSON.parse(body) as {
    type: string;
    created: number;
    data: { object: Record<string, unknown> };
  };

  // Only paid checkouts are of interest; everything else is acknowledged.
  if (event.type !== "checkout.session.completed") return Response.json({ received: true });
  const session = event.data.object;
  if (session.payment_status !== "paid") return Response.json({ received: true });

  const amount = Number(session.amount_total ?? 0);
  const currency = String(session.currency ?? "gbp");
  const customer = (session.customer_details ?? {}) as { name?: string; email?: string };

  // 1. The mailing list. A failure here is reported, not retried: the
  //    notification below tells the team to add the buyer by hand.
  let list: string | undefined;
  const group = mailerLiteGroupName();
  if (!RESET_PRICES.has(`${currency}:${amount}`)) {
    list = `Not added to ${group}: ${money(amount, currency)} is not an Annual Reset price (£99 or £199).`;
  } else {
    if (!customer.email) {
      list = `Not added to ${group}: Stripe sent no email address. Add by hand.`;
    } else if (!mailerLiteConfigured()) {
      list = `Not added to ${group}: MailerLite is not connected yet. Add by hand.`;
    } else {
      try {
        await addToMailerLite({ email: customer.email, name: customer.name });
        list = `Added to ${group} in MailerLite.`;
      } catch (error) {
        console.error("Stripe webhook: MailerLite add failed", error);
        list = `NOT added to ${group}: ${error instanceof Error ? error.message : "MailerLite refused"}. Add by hand.`;
      }
    }
  }
  console.log(`Stripe webhook: ${currency}:${amount} ${customer.email ?? "(no email)"} - ${list}`);

  // 2. The notification.
  const inbox = enquiryInbox();
  if (!emailConfigured() || !inbox) {
    // Nothing more to do; answering 2xx stops Stripe repeating the add.
    return Response.json({ received: true, list });
  }

  try {
    await sendEmail({
      to: inbox,
      replyTo: customer.email || undefined,
      message: paymentNotification({
        product: PRODUCTS[`${currency}:${amount}`] ?? "A payment",
        amount: money(amount, currency),
        name: customer.name ?? "",
        email: customer.email ?? "",
        paidAt: new Date(event.created * 1000).toLocaleString("en-GB", {
          dateStyle: "long",
          timeStyle: "short",
          timeZone: "Europe/London",
        }) + " (UK)",
        reference: String(session.id ?? ""),
        list,
      }),
    });
  } catch (error) {
    // The buyer is already on the list, so do not ask Stripe to retry.
    console.error("Stripe webhook: notification not sent", error);
  }

  return Response.json({ received: true });
}
