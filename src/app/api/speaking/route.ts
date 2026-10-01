import { allow, field, isEmail, json, oneLine, readJson } from "@/lib/email/form-request";
import { emailConfigured, enquiryInbox, sendEmail } from "@/lib/email/send";
import { speakingConfirmation, speakingNotification } from "@/lib/email/templates";

/**
 * POST /api/speaking — the Speaking enquiry form. Sends the enquiry to
 * the practice inbox, then a confirmation to the host.
 */
export async function POST(request: Request) {
  const body = await readJson(request);
  if (!body) return json(400, { error: "invalid" });

  // Honeypot: a field people never see. A filled one is a script.
  if (field(body, "website")) return json(200, { ok: true });

  const fields = {
    name: oneLine(field(body, "name")),
    email: field(body, "email"),
    organisation: oneLine(field(body, "organisation")),
    eventDate: oneLine(field(body, "eventDate", 32)),
    format: oneLine(field(body, "format")),
    aboutTheRoom: field(body, "aboutTheRoom", 5000),
  };
  if (!fields.name || !isEmail(fields.email) || !fields.aboutTheRoom) {
    return json(400, { error: "invalid" });
  }

  if (!allow(request)) return json(429, { error: "busy" });

  const inbox = enquiryInbox();
  if (!emailConfigured() || !inbox) return json(503, { error: "unavailable" });

  try {
    await sendEmail({
      to: inbox,
      replyTo: fields.email,
      message: speakingNotification(fields),
    });
  } catch (error) {
    console.error("Speaking form: could not send to the inbox", error);
    return json(502, { error: "unavailable" });
  }

  // The host's copy is a courtesy; the enquiry is already delivered.
  try {
    await sendEmail({ to: fields.email, message: speakingConfirmation(fields) });
  } catch (error) {
    console.error("Speaking form: confirmation not sent", error);
  }

  return json(200, { ok: true });
}
