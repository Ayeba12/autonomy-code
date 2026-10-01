import { allow, field, isEmail, json, readJson } from "@/lib/email/form-request";

/**
 * POST /api/newsletter — the footer and Writing page sign-up. Adds the
 * address to SendFox as a contact. Server only.
 *
 *   SENDFOX_TOKEN    a SendFox personal access token (required)
 *   SENDFOX_LIST_ID  the list to add people to (optional; without it the
 *                    contact is created with no list)
 */
export async function POST(request: Request) {
  const body = await readJson(request);
  if (!body) return json(400, { error: "invalid" });

  // Honeypot: a field people never see. A filled one is a script.
  if (field(body, "website")) return json(200, { ok: true });

  const email = field(body, "email");
  if (!isEmail(email)) return json(400, { error: "invalid" });

  if (!allow(request)) return json(429, { error: "busy" });

  const token = process.env.SENDFOX_TOKEN;
  if (!token) return json(503, { error: "unavailable" });

  const listId = Number(process.env.SENDFOX_LIST_ID);
  const payload = {
    email,
    ...(Number.isInteger(listId) && listId > 0 ? { lists: [listId] } : {}),
  };

  try {
    const response = await fetch("https://api.sendfox.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error("Newsletter: SendFox answered", response.status, await response.text());
      return json(502, { error: "unavailable" });
    }
  } catch (error) {
    console.error("Newsletter: could not reach SendFox", error);
    return json(502, { error: "unavailable" });
  }

  return json(200, { ok: true });
}
