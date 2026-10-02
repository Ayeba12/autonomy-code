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
import { resetWelcome } from "../src/lib/email/templates";

const TELEGRAM_LINK = process.env.TELEGRAM_LINK ?? "https://t.me/REPLACE-WITH-THE-WAITING-ROOM-LINK";

const out = path.resolve(import.meta.dirname, "../emails");
fs.mkdirSync(out, { recursive: true });

const welcome = resetWelcome({ telegramUrl: TELEGRAM_LINK, unsubscribeUrl: "{$unsubscribe}" });
fs.writeFileSync(path.join(out, "annual-reset-welcome.html"), welcome.html);
fs.writeFileSync(path.join(out, "annual-reset-welcome.txt"), `Subject: ${welcome.subject}\n\n${welcome.text}\n`);
console.log("emails/annual-reset-welcome.html", welcome.html.length, "bytes");
