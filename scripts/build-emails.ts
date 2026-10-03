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
import { masterclassPublicInvite, masterclassReplay, masterclassSecondInvite, resetEarlyBirdReminder, resetJoiningLink, resetMasterclassInvite, resetOneWeek, resetWelcome } from "../src/lib/email/templates";

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

/** The Luma registration page for the 17 October masterclass. */
const LUMA_LINK = process.env.LUMA_LINK ?? "https://luma.com/rt1bwt3q";

const invite = resetMasterclassInvite({ lumaUrl: LUMA_LINK, unsubscribeUrl: "{$unsubscribe}" });
fs.writeFileSync(path.join(out, "masterclass-invite-buyers.html"), invite.html);
fs.writeFileSync(path.join(out, "masterclass-invite-buyers.txt"), `Subject: ${invite.subject}\n\n${invite.text}\n`);
console.log("emails/masterclass-invite-buyers.html", invite.html.length, "bytes");

/** The Luma page for the 21 November repeat run (not created yet). */
const LUMA_LINK_NOV = process.env.LUMA_LINK_NOV ?? "https://REPLACE-WITH-THE-NOVEMBER-LUMA-LINK";

const more = {
  "reset-early-bird-reminder": resetEarlyBirdReminder({ unsubscribeUrl: "{$unsubscribe}" }),
  "masterclass-invite-november": masterclassSecondInvite({ lumaUrl: LUMA_LINK_NOV, unsubscribeUrl: "{$unsubscribe}" }),
};
for (const [name, message] of Object.entries(more)) {
  fs.writeFileSync(path.join(out, `${name}.html`), message.html);
  fs.writeFileSync(path.join(out, `${name}.txt`), `Subject: ${message.subject}\n\n${message.text}\n`);
  console.log(`emails/${name}.html`, message.html.length, "bytes");
}

/** Replace before sending: the replay recording and the hosted Standard Trace PDF. */
const REPLAY_LINK = process.env.REPLAY_LINK ?? "https://REPLACE-WITH-THE-REPLAY-LINK";
const PDF_LINK = process.env.PDF_LINK ?? "https://REPLACE-WITH-THE-STANDARD-TRACE-PDF-LINK";

const october = {
  "masterclass-invite-public": masterclassPublicInvite({ lumaUrl: LUMA_LINK, unsubscribeUrl: "{$unsubscribe}" }),
  "masterclass-replay": masterclassReplay({ replayUrl: REPLAY_LINK, pdfUrl: PDF_LINK, unsubscribeUrl: "{$unsubscribe}" }),
};
for (const [name, message] of Object.entries(october)) {
  fs.writeFileSync(path.join(out, `${name}.html`), message.html);
  fs.writeFileSync(path.join(out, `${name}.txt`), `Subject: ${message.subject}

${message.text}
`);
  console.log(`emails/${name}.html`, message.html.length, "bytes");
}
