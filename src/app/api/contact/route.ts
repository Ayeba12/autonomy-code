import { allow, field, isEmail, json, oneLine, readJson } from "@/lib/email/form-request";
import { emailConfigured, enquiryInbox, sendEmail } from "@/lib/email/send";
import { contactConfirmation, contactNotification } from "@/lib/email/templates";

/**
 * POST /api/contact — the Contact form. Sends the message to the
 * practice inbox, then a confirmation to the visitor.
 */
export async function POST(request: Request) {
  const body = await readJson(request);
  if (!body) return json(400, { error: "invalid" });

  // Honeypot: a field people never see. A filled one is a script.
  if (field(body, "website")) return json(200, { ok: true });

  const fields = {
    firstName: oneLine(field(body, "firstName")),
    lastName: oneLine(field(body, "lastName")),
    email: field(body, "email"),
    message: field(body, "message", 5000),
  };
  if (!fields.firstName || !fields.lastName || !isEmail(fields.email)) {
    return json(400, { error: "invalid" });
  }

  if (!allow(request)) return json(429, { error: "busy" });

  const inbox = enquiryInbox();
  if (!emailConfigured() || !inbox) return json(503, { error: "unavailable" });

  try {
    await sendEmail({
      to: inbox,
      replyTo: fields.email,
      message: contactNotification(fields),
    });
  } catch (error) {
    console.error("Contact form: could not send to the inbox", error);
    return json(502, { error: "unavailable" });
  }

  // The visitor's copy is a courtesy; the message is already delivered.
  try {
    await sendEmail({ to: fields.email, message: contactConfirmation(fields) });
  } catch (error) {
    console.error("Contact form: confirmation not sent", error);
  }

  return json(200, { ok: true });
}
