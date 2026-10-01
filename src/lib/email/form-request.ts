/** Shared guards for the form endpoints. Server only. */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value: string) => value.length <= 256 && EMAIL_PATTERN.test(value);

/** A trimmed string field from a JSON body, capped in length. */
export const field = (body: Record<string, unknown>, key: string, max = 256) => {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
};

/** Header-safe single line (names end up in subjects). */
export const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export const readJson = async (request: Request) => {
  try {
    const body: unknown = await request.json();
    return body && typeof body === "object" ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
};

/**
 * A light per-address limit: five submissions in ten minutes. Kept in
 * memory, so it is best effort across server instances; it is there to
 * blunt a script, not to be a firewall.
 */
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

export const allow = (request: Request) => {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(key, recent);
    return false;
  }
  hits.set(key, [...recent, now]);
  return true;
};

export const json = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status });
