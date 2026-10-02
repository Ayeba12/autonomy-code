import { createHmac, timingSafeEqual } from "node:crypto";
import { emailConfigured, enquiryInbox, sendEmail } from "@/lib/email/send";
import { paymentNotification } from "@/lib/email/templates";

/**
 * POST /api/stripe/webhook — Stripe calls this when a checkout completes.
 * Each paid checkout sends a notification to the practice inbox.
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

  const inbox = enquiryInbox();
  if (!emailConfigured() || !inbox) return new Response("Email not configured", { status: 503 });

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
      }),
    });
  } catch (error) {
    // A non-2xx answer makes Stripe try again later.
    console.error("Stripe webhook: notification not sent", error);
    return new Response("Email failed", { status: 500 });
  }

  return Response.json({ received: true });
}
