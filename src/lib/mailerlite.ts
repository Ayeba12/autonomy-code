/**
 * MailerLite: adds a buyer to a group, which starts the group's welcome
 * automation there. Server only.
 *
 *   MAILERLITE_API_KEY     an API token from MailerLite > Integrations > API
 *   MAILERLITE_GROUP_ID    the group to add buyers to, or
 *   MAILERLITE_GROUP_NAME  its name (defaults to "Standards"); the id is
 *                          looked up when only the name is given
 */
const API = "https://connect.mailerlite.com/api";

const headers = (key: string) => ({
  Authorization: `Bearer ${key}`,
  "Content-Type": "application/json",
  Accept: "application/json",
});

export const mailerLiteConfigured = () => Boolean(process.env.MAILERLITE_API_KEY);

/** The group's display name, for messages to the team. */
export const mailerLiteGroupName = () => process.env.MAILERLITE_GROUP_NAME ?? "Standards";

const groupId = async (key: string) => {
  if (process.env.MAILERLITE_GROUP_ID) return process.env.MAILERLITE_GROUP_ID;
  const name = mailerLiteGroupName();
  const response = await fetch(`${API}/groups?filter[name]=${encodeURIComponent(name)}&limit=25`, {
    headers: headers(key),
  });
  if (!response.ok) throw new Error(`MailerLite groups answered ${response.status}`);
  const body = (await response.json()) as { data?: { id: string; name: string }[] };
  const match = body.data?.find((group) => group.name.toLowerCase() === name.toLowerCase());
  if (!match) throw new Error(`MailerLite has no group named "${name}"`);
  return match.id;
};

/**
 * Creates the subscriber (or updates them if they exist) and puts them
 * in the group. Throws with a plain reason if anything fails.
 */
export const addToMailerLite = async ({ email, name }: { email: string; name?: string }) => {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) throw new Error("MailerLite is not configured");
  const group = await groupId(key);
  const response = await fetch(`${API}/subscribers`, {
    method: "POST",
    headers: headers(key),
    body: JSON.stringify({
      email,
      ...(name ? { fields: { name } } : {}),
      groups: [group],
    }),
  });
  if (!response.ok) {
    throw new Error(`MailerLite answered ${response.status}: ${(await response.text()).slice(0, 200)}`);
  }
};
