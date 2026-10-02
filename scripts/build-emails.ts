/**
 * Writes the emails that a mailing tool sends (not the site) as
 * ready-to-paste HTML into emails/.
 *
 *   npx tsx scripts/build-emails.ts
 *
 * MailerLite merge tags are left in place: {$unsubscribe} is filled in by
 * MailerLite. Replace TELEGRAM_LINK below with the real waiting-room link
 * before running, or edit the button link inside MailerLite.
 */
import fs from "node:fs";
import path from "node:path";
import { resetJoiningLink, resetOneWeek, resetWelcome } from "../src/lib/email/templates";

const TELEGRAM_LINK = process.env.TELEGRAM_LINK ?? "https://t.me/+f6_8zOiOoK1kY2U0";

const out = path.resolve(import.meta.dirname, "../emails");
fs.mkdirSync(out, { recursive: true });

const welcome = resetWelcome({ telegramUrl: TELEGRAM_LINK, unsubscribeUrl: "{$unsubscribe}" });
fs.writeFileSync(path.join(out, "annual-reset-welcome.html"), welcome.html);
fs.writeFileSync(path.join(out, "annual-reset-welcome.txt"), `Subject: ${welcome.subject}\n\n${welcome.text}\n`);
console.log("emails/annual-reset-welcome.html", welcome.html.length, "bytes");

/** Replace before sending: the live session link for Audit. */
const JOINING_LINK = process.env.JOINING_LINK ?? "https://REPLACE-WITH-THE-JOINING-LINK";

const followUps = {
  "annual-reset-one-week": resetOneWeek({ telegramUrl: TELEGRAM_LINK, unsubscribeUrl: "{$unsubscribe}" }),
  "annual-reset-joining-link": resetJoiningLink({ joiningUrl: JOINING_LINK, telegramUrl: TELEGRAM_LINK, unsubscribeUrl: "{$unsubscribe}" }),
};
for (const [name, message] of Object.entries(followUps)) {
  fs.writeFileSync(path.join(out, `${name}.html`), message.html);
  fs.writeFileSync(path.join(out, `${name}.txt`), `Subject: ${message.subject}\n\n${message.text}\n`);
  console.log(`emails/${name}.html`, message.html.length, "bytes");
}
