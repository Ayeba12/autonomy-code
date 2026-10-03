/**
 * The house email templates: ivory ground, one white card, a graphite
 * drawing across the top, gold for the one action, and the black footer
 * band. Table layout with inline styles so every mail client renders it.
 * Images are JPG/PNG (webp is not safe in email) and load from the live
 * site.
 */

const SITE = "https://www.theautonomycode.com";

const color = {
  ink: "#000000",
  slate: "#454545",
  mute: "#a5a5a5",
  paper: "#f3ede0",
  paper2: "#ece4d2",
  line: "#e3ddd0",
  brand: "#b8893a",
  brandHot: "#7a5a22",
  brandSoft: "#c9a05c",
  white: "#ffffff",
};

const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export interface EmailMessage {
  subject: string;
  html: string;
  text: string;
}

interface Row {
  label: string;
  value: string;
}

interface LayoutInput {
  /** Hidden inbox preview line. */
  preheader: string;
  image: { file: string; alt: string };
  eyebrow: string;
  title: string;
  /** Paragraphs under the title (plain text; escaped here). */
  intro: string[];
  rows?: Row[];
  /** A longer block of the sender's own words. */
  quote?: { label: string; body: string };
  button?: { label: string; href: string };
  /** Paragraphs straight after the button, before any steps. */
  afterButton?: string[];
  /** A short numbered list under the button. */
  steps?: { label: string; items: string[] };
  /** A second way in, one sentence ending in a text link, right under the button. */
  buttonLink?: { lead: string; label: string; href: string };
  /** Paragraphs after the button and steps. */
  outro?: string[];
  /** One sentence ending in a text link (e.g. the community). */
  linkLine?: { lead: string; label: string; href: string };
  /** Closing line and sign-off lines, e.g. ["See you Friday.", "DK Jonah", …]. */
  signature?: string[];
  /** A quiet closing line under the button. */
  note?: string;
  /** Why the reader is getting this; defaults to "because you booked a seat". */
  footerReason?: string;
  /** Unsubscribe link for emails sent by a mailing tool (a merge tag is fine). */
  unsubscribeUrl?: string;
}

/** Escape user-supplied text for HTML. */
export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/**
 * Escaped body text. Merge tags such as {$name|default('there')} belong
 * to the mailing tool, so the quotes inside them are put back.
 */
const bodyText = (value: string) =>
  escapeHtml(value).replace(/\{\$[^}]*\}/g, (tag) => tag.replace(/&#39;/g, "'"));

/** Escaped, with the sender's line breaks kept. */
const multiline = (value: string) => escapeHtml(value).replace(/\r?\n/g, "<br />");

const eyebrowStyle = `margin:0;font-family:${font};font-size:11px;line-height:16px;letter-spacing:2.2px;text-transform:uppercase;color:${color.brandHot};`;

const renderRows = (rows: Row[]) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border-top:1px solid ${color.line};">
${rows
  .map(
    (row) => `<tr>
<td valign="top" width="150" style="padding:14px 12px 14px 0;border-bottom:1px solid ${color.line};font-family:${font};font-size:11px;line-height:20px;letter-spacing:1.6px;text-transform:uppercase;color:${color.slate};">${escapeHtml(row.label)}</td>
<td valign="top" style="padding:14px 0;border-bottom:1px solid ${color.line};font-family:${font};font-size:15px;line-height:22px;color:${color.ink};">${escapeHtml(row.value)}</td>
</tr>`,
  )
  .join("\n")}
</table>`;

const renderQuote = (quote: { label: string; body: string }) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
<tr><td style="background:${color.paper};border-radius:16px;border-left:3px solid ${color.brand};padding:22px 24px;">
<p style="${eyebrowStyle}color:${color.slate};">${escapeHtml(quote.label)}</p>
<p style="margin:10px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.ink};">${multiline(quote.body)}</p>
</td></tr>
</table>`;

const renderSteps = (steps: { label: string; items: string[] }) =>
  `<p style="${eyebrowStyle}margin:34px 0 0;color:${color.slate};">${escapeHtml(steps.label)}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;border-top:1px solid ${color.line};">
${steps.items
  .map(
    (item, i) => `<tr>
<td valign="top" width="44" style="padding:14px 0;border-bottom:1px solid ${color.line};font-family:${font};font-size:13px;line-height:24px;font-weight:600;letter-spacing:1.4px;color:${color.brandHot};">0${i + 1}</td>
<td valign="top" style="padding:14px 0;border-bottom:1px solid ${color.line};font-family:${font};font-size:15px;line-height:24px;color:${color.ink};">${escapeHtml(item)}</td>
</tr>`,
  )
  .join("\n")}
</table>`;

const renderLinkLine = (line: { lead: string; label: string; href: string }, top: number) =>
  `<p style="margin:${top}px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.slate};">${escapeHtml(line.lead)} <a href="${escapeHtml(line.href)}" style="color:${color.brandHot};font-weight:600;text-decoration:underline;">${escapeHtml(line.label)}</a></p>`;

const renderButton = (button: { label: string; href: string }) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:32px;">
<tr><td style="border-radius:999px;background:${color.brand};">
<a href="${escapeHtml(button.href)}" style="display:inline-block;padding:14px 28px;font-family:${font};font-size:15px;line-height:20px;font-weight:600;color:${color.white};text-decoration:none;border-radius:999px;">${escapeHtml(button.label)}&nbsp;&nbsp;&#8599;</a>
</td></tr>
</table>`;

const layout = (input: LayoutInput) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light only" />
<title>${escapeHtml(input.title)}</title>
</head>
<body style="margin:0;padding:0;background:${color.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${color.paper};">${escapeHtml(input.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${color.paper};">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">

<tr><td style="padding:0 8px 22px;">
<a href="${SITE}" style="text-decoration:none;"><img src="${SITE}/images/email/logo.png" width="105" height="48" alt="The Autonomy Code" style="display:block;border:0;" /></a>
</td></tr>

<tr><td style="background:${color.white};border-radius:24px;overflow:hidden;">
<img src="${SITE}/images/email/${input.image.file}" width="600" alt="${escapeHtml(input.image.alt)}" style="display:block;width:100%;height:auto;border:0;border-radius:24px 24px 0 0;" />
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:36px 36px 40px;">
<p style="${eyebrowStyle}">${escapeHtml(input.eyebrow)}</p>
<h1 style="margin:12px 0 0;font-family:${font};font-size:30px;line-height:36px;font-weight:600;letter-spacing:-0.6px;color:${color.ink};">${escapeHtml(input.title)}</h1>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;"><tr><td style="width:48px;height:2px;background:${color.brand};font-size:0;line-height:0;">&nbsp;</td></tr></table>
${input.intro
  .map(
    (paragraph) =>
      `<p style="margin:18px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.slate};">${bodyText(paragraph)}</p>`,
  )
  .join("\n")}
${input.rows?.length ? renderRows(input.rows) : ""}
${input.quote ? renderQuote(input.quote) : ""}
${input.button ? renderButton(input.button) : ""}
${input.buttonLink ? renderLinkLine(input.buttonLink, 18) : ""}
${(input.afterButton ?? [])
  .map(
    (paragraph) =>
      `<p style="margin:22px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.slate};">${bodyText(paragraph)}</p>`,
  )
  .join("\n")}
${input.steps ? renderSteps(input.steps) : ""}
${(input.outro ?? [])
  .map(
    (paragraph) =>
      `<p style="margin:22px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.slate};">${bodyText(paragraph)}</p>`,
  )
  .join("\n")}
${input.linkLine ? renderLinkLine(input.linkLine, 22) : ""}
${
  input.signature?.length
    ? `${input.signature[0] ? `<p style="margin:26px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.ink};">${escapeHtml(input.signature[0])}</p>` : ""}
<p style="margin:${input.signature[0] ? 14 : 26}px 0 0;font-family:${font};font-size:16px;line-height:24px;color:${color.ink};"><strong>${escapeHtml(input.signature[1] ?? "")}</strong><br /><span style="font-size:14px;color:${color.slate};">${escapeHtml(input.signature[2] ?? "")}</span></p>`
    : ""
}
${
  input.note
    ? `<p style="margin:22px 0 0;font-family:${font};font-size:13px;line-height:20px;color:${color.slate};">${escapeHtml(input.note)}</p>`
    : ""
}
</td></tr>
</table>
</td></tr>

<tr><td style="height:12px;font-size:0;line-height:0;">&nbsp;</td></tr>

<tr><td style="background:${color.ink};border-radius:24px;padding:30px 36px;">
<p style="margin:0;font-family:${font};font-size:13px;line-height:18px;font-weight:700;letter-spacing:3px;color:${color.white};">THE AUTONOMY CODE</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:14px;"><tr><td style="width:36px;height:1px;background:${color.brandSoft};font-size:0;line-height:0;">&nbsp;</td></tr></table>
<p style="margin:14px 0 0;font-family:${font};font-size:13px;line-height:20px;color:${color.mute};">The NO GraGra Practice · DK Jonah</p>
<p style="margin:4px 0 0;font-family:${font};font-size:13px;line-height:20px;color:${color.mute};">No rush. No force. No gra gra.</p>
<p style="margin:16px 0 0;font-family:${font};font-size:13px;line-height:20px;"><a href="${SITE}" style="color:${color.brandSoft};text-decoration:none;">theautonomycode.com</a></p>
${
  input.unsubscribeUrl
    ? `<p style="margin:14px 0 0;font-family:${font};font-size:12px;line-height:18px;color:${color.mute};">You are receiving this ${escapeHtml(input.footerReason ?? "because you booked a seat")}. <a href="${input.unsubscribeUrl}" style="color:${color.mute};text-decoration:underline;">Unsubscribe</a></p>`
    : ""
}
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

/** Plain-text twin of an email, for clients that do not render HTML. */
const plain = (input: LayoutInput) =>
  [
    input.title,
    "",
    ...input.intro,
    ...(input.rows?.length
      ? ["", ...input.rows.map((row) => `${row.label}: ${row.value}`)]
      : []),
    ...(input.quote ? ["", `${input.quote.label}:`, input.quote.body] : []),
    ...(input.button ? ["", `${input.button.label}: ${input.button.href}`] : []),
    ...(input.buttonLink ? [`${input.buttonLink.lead} ${input.buttonLink.href}`] : []),
    ...(input.afterButton?.length ? ["", ...input.afterButton] : []),
    ...(input.steps ? ["", input.steps.label.toUpperCase(), ...input.steps.items.map((item, i) => `${i + 1}. ${item}`)] : []),
    ...(input.outro?.length ? ["", ...input.outro] : []),
    ...(input.linkLine ? ["", `${input.linkLine.lead} ${input.linkLine.href}`] : []),
    ...(input.signature?.length ? ["", ...input.signature.filter(Boolean)] : []),
    ...(input.note ? ["", input.note] : []),
    "",
    "The Autonomy Code · The NO GraGra Practice · DK Jonah",
    SITE,
  ].join("\n");

const build = (subject: string, input: LayoutInput): EmailMessage => ({
  subject,
  html: layout(input),
  text: plain(input),
});

/** Only rows that were actually filled in. */
const filled = (rows: Row[]) => rows.filter((row) => row.value.trim() !== "");

export interface ContactFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/** To the practice inbox: someone has used the Contact form. */
export const contactNotification = (fields: ContactFields): EmailMessage => {
  const name = `${fields.firstName} ${fields.lastName}`.trim();
  return build(`New message from ${name}`, {
    preheader: `${name} has written through the Contact page.`,
    image: {
      file: "contact-new.jpg",
      alt: "Graphite sketch of a woman writing one clear line in gold across a sheet, crumpled drafts pushed aside",
    },
    eyebrow: "New message · Contact page",
    title: `${fields.firstName} has written.`,
    intro: ["A message came in through the Contact page. Reply goes straight to them."],
    rows: filled([
      { label: "Name", value: name },
      { label: "Email", value: fields.email },
    ]),
    quote: fields.message.trim()
      ? { label: "Their message", body: fields.message }
      : undefined,
    button: { label: `Reply to ${fields.firstName}`, href: `mailto:${fields.email}` },
    note: fields.message.trim() ? undefined : "No message was written, only the contact details.",
  });
};

/** To the visitor: their Contact message arrived. */
export const contactConfirmation = (fields: ContactFields): EmailMessage =>
  build("Your message has arrived", {
    preheader: "Thank you for writing. The reply comes in writing.",
    image: {
      file: "contact-received.jpg",
      alt: "Graphite sketch of a woman seated by a tall window, looking out over a misty lake, the dawn line drawn in gold",
    },
    eyebrow: "Message received",
    title: "Your message has arrived.",
    intro: [
      `Thank you for writing, ${fields.firstName}. Every message is read, and the reply comes in writing.`,
      "No rush. No force.",
    ],
    quote: fields.message.trim()
      ? { label: "What you sent", body: fields.message }
      : undefined,
    button: { label: "Read the writing", href: `${SITE}/writing` },
    note: "If you did not send this message, you can ignore this email.",
  });

export interface SpeakingFields {
  name: string;
  email: string;
  organisation: string;
  eventDate: string;
  format: string;
  aboutTheRoom: string;
}

/** "2026-11-27" → "27 November 2026"; anything else passes through. */
const readableDate = (value: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const speakingRows = (fields: SpeakingFields, withContact: boolean) =>
  filled([
    ...(withContact
      ? [
          { label: "Name", value: fields.name },
          { label: "Email", value: fields.email },
        ]
      : []),
    { label: "Organisation", value: fields.organisation },
    { label: "Event date", value: readableDate(fields.eventDate) },
    { label: "Format", value: fields.format },
  ]);

/** To the practice inbox: a speaking enquiry. */
export const speakingNotification = (fields: SpeakingFields): EmailMessage =>
  build(`Speaking enquiry from ${fields.name}`, {
    preheader: `${fields.name} is asking about a room.`,
    image: {
      file: "speaking-new.jpg",
      alt: "Graphite sketch of five people around a large table working over one plan, the plan's grid drawn in gold",
    },
    eyebrow: "New enquiry · Speaking page",
    title: `${fields.name} is asking about a room.`,
    intro: ["A speaking enquiry came in through the Speaking page. Reply goes straight to them."],
    rows: speakingRows(fields, true),
    quote: { label: "About the room", body: fields.aboutTheRoom },
    button: { label: `Reply to ${fields.name.split(" ")[0]}`, href: `mailto:${fields.email}` },
  });

/** To the host: their speaking enquiry arrived. */
export const speakingConfirmation = (fields: SpeakingFields): EmailMessage =>
  build("Your speaking enquiry has arrived", {
    preheader: "Thank you. Every reply comes in writing.",
    image: {
      file: "speaking-received.jpg",
      alt: "Graphite sketch of two wooden chairs and a small table on a porch, one cup drawn in gold",
    },
    eyebrow: "Enquiry received",
    title: "Your enquiry has arrived.",
    intro: [
      `Thank you, ${fields.name.split(" ")[0]}. A few lines about the room are enough to begin.`,
      "Every reply comes in writing, with rates set out plainly.",
    ],
    rows: speakingRows(fields, false),
    quote: { label: "About the room", body: fields.aboutTheRoom },
    button: { label: "See the speaking page", href: `${SITE}/speaking` },
    note: "If you did not send this enquiry, you can ignore this email.",
  });

export interface PaymentFields {
  /** What was bought, as best the amount identifies it. */
  product: string;
  /** Formatted, e.g. "£99.00". */
  amount: string;
  name: string;
  email: string;
  /** When Stripe recorded it, already formatted for the reader. */
  paidAt: string;
  /** Stripe's own reference for the checkout, for looking it up. */
  reference: string;
  /** What happened with the mailing list, in plain words. Optional. */
  list?: string;
}

/** To the practice inbox: a payment went through on Stripe. */
export const paymentNotification = (fields: PaymentFields): EmailMessage =>
  build(`Payment received: ${fields.product} · ${fields.amount}`, {
    preheader: `${fields.name || fields.email} paid ${fields.amount} for ${fields.product}.`,
    image: {
      file: "payment-new.jpg",
      alt: "Graphite sketch of a woman at an open cabinet of well-ordered tools, lifting out one key drawn in gold",
    },
    eyebrow: "Payment received · Stripe",
    title: `${fields.amount} for ${fields.product}.`,
    intro: ["A payment went through on Stripe. The details are below."],
    rows: filled([
      { label: "Paid for", value: fields.product },
      { label: "Amount", value: fields.amount },
      { label: "Name", value: fields.name },
      { label: "Email", value: fields.email },
      { label: "When", value: fields.paidAt },
      { label: "Mailing list", value: fields.list ?? "" },
      { label: "Reference", value: fields.reference },
    ]),
    button: fields.email
      ? { label: `Write to ${(fields.name || "the buyer").split(" ")[0]}`, href: `mailto:${fields.email}` }
      : undefined,
    note: "Stripe holds the full record of this payment in its dashboard.",
  });

/**
 * The Annual Reset welcome email, sent to each buyer by the MailerLite
 * automation on the "Reset 2026" group. `telegramUrl` and `unsubscribeUrl`
 * may be MailerLite merge tags; scripts/build-emails.mjs writes the
 * ready-to-paste HTML into emails/.
 */
export const resetWelcome = ({
  telegramUrl,
  unsubscribeUrl,
}: {
  telegramUrl: string;
  unsubscribeUrl?: string;
}): EmailMessage =>
  build("Your seat is taken · The Annual Reset 4.0", {
    preheader: "The three sessions, what arrives before them, and where to wait until we begin.",
    image: {
      file: "reset-welcome.jpg",
      alt: "Graphite sketch of a woman at a table, drawing one line in gold on the page in front of her",
    },
    eyebrow: "The Annual Reset 4.0 · Standards",
    title: "Your seat is taken.",
    intro: [
      "Thank you. Your seat at The Annual Reset 4.0 is confirmed, and there is nothing you need to prepare.",
      "The joining link, the REset Portfolio, the LifeSync Stencil and the PACE Planner will follow by email before the first session. Everything is digital.",
    ],
    rows: [
      { label: "Audit", value: "Friday 27 November, 7 pm UK" },
      { label: "Align", value: "Friday 4 December, 7 pm UK" },
      { label: "Anchor", value: "Saturday 5 December, 7 pm UK" },
      { label: "Where", value: "Online. Every session is recorded and yours to keep." },
    ],
    quote: {
      label: "Until we begin",
      body: "The waiting room on Telegram is open now, for orientation and practical help. There is no teaching there before the sessions, and nothing is sold. Come in when you are ready.",
    },
    button: { label: "Join the waiting room", href: telegramUrl },
    note: "Sessions are at 7 pm UK time, so please check the hour in your own time zone. Questions? Write to info@theautonomycode.com.",
    unsubscribeUrl,
  });

/** MailerLite's first-name tag, with a fallback when no name is held. */
const GREETING = "Hi {$name|default('there')},";

interface ResetFollowUp {
  /** The Telegram community link. */
  telegramUrl: string;
  unsubscribeUrl?: string;
}

const community = (telegramUrl: string) => ({
  lead: "Join the Reset community on Telegram for updates between sessions:",
  label: "open the community",
  href: telegramUrl,
});

/**
 * "One week to Audit" — send on 20 November to the Reset 2026 group.
 * Copy supplied by the team in DK's voice; kept verbatim.
 */
export const resetOneWeek = ({ telegramUrl, unsubscribeUrl }: ResetFollowUp): EmailMessage =>
  build("One week to Audit", {
    preheader: "One small task between now and Friday 27 November.",
    image: {
      file: "reset-one-week.jpg",
      alt: "Graphite sketch of a woman walking, her footprints trailing behind her, the first one in gold",
    },
    eyebrow: "The Annual Reset 4.0 · Audit",
    title: "One week to Audit.",
    intro: [
      GREETING,
      "One week from today, we sit down together for Audit.",
      "Between now and then, one small task. Don't prepare a story. When we walk your year, walk it as it really was, not the version you tell at parties. That's all. The hard part is honesty, not effort.",
      "Your joining link arrives in a few days.",
    ],
    rows: [{ label: "Audit", value: "Friday 27 November · 7 pm UK, 8 pm Nigeria" }],
    linkLine: community(telegramUrl),
    signature: ["Slow first, then precise.", "DK Jonah", "The NO GraGra Practice"],
    unsubscribeUrl,
  });

/**
 * The joining-link email — send between 23 and 25 November to the
 * Standards group. Copy supplied by the team in DK's voice; kept verbatim.
 */
export const resetJoiningLink = ({
  joiningUrl,
  telegramUrl,
  unsubscribeUrl,
}: ResetFollowUp & { joiningUrl: string }): EmailMessage =>
  build("Your joining link - The Annual Reset 4.0", {
    preheader: "Audit is almost here. Friday 27 November, 7 pm UK (8 pm Nigeria).",
    image: {
      file: "reset-joining.jpg",
      alt: "Graphite sketch of a woman with a magnifying glass tracing footprints across a ledger back to the first, in gold",
    },
    eyebrow: "The Annual Reset 4.0 · Audit",
    title: "Your joining link.",
    intro: [GREETING, "Audit is almost here. Friday 27 November, 7 pm UK (8 pm Nigeria)."],
    button: { label: "Join the session", href: joiningUrl },
    steps: {
      label: "Before we begin",
      items: [
        "Find somewhere quiet. This is work you do with yourself, so give it a real seat.",
        "Have your REset Portfolio printed or open on your tablet.",
        "Block 7-9 pm. Two hours, with me, for the year you actually had.",
      ],
    },
    afterButton: [
      "Add it to your calendar now, and set a reminder for ten minutes before. We start on time, and we start gently.",
    ],
    outro: [
      "Can't make it live? The recording arrives afterwards, so a missed session never costs you the Reset. But come if you can - Audit lands differently in the room.",
    ],
    linkLine: community(telegramUrl),
    signature: ["See you Friday.", "DK Jonah", "The NO GraGra Practice"],
    unsubscribeUrl,
  });

/**
 * The buyers' invitation to the free masterclass on 17 October — send to
 * the Standards group (the public invite goes to everyone else). Copy
 * supplied by the team in DK's voice; kept verbatim.
 */
export const resetMasterclassInvite = ({
  lumaUrl,
  unsubscribeUrl,
}: {
  lumaUrl: string;
  unsubscribeUrl?: string;
}): EmailMessage =>
  build("A warm-up for your Reset - Saturday", {
    preheader: "A free live masterclass on Saturday 17 October: The Standard You Never Chose.",
    image: {
      file: "reset-masterclass.jpg",
      alt: "Graphite sketch of a woman holding ropes handed to her by other people, one of them in gold leading back to a crowd",
    },
    eyebrow: "Free masterclass · Saturday 17 October",
    title: "The Standard You Never Chose.",
    intro: [
      GREETING,
      "You have your seat at The Annual Reset 4.0. Here is something to do with the wait.",
      "On Saturday 17 October, I'm running a free live masterclass: The Standard You Never Chose.",
    ],
    rows: [
      { label: "When", value: "Saturday 17 October · 9 am UK / 9 am Lagos" },
      { label: "Length", value: "75 minutes" },
      { label: "Where", value: "Live on Luma" },
    ],
    button: { label: "Register here", href: lumaUrl },
    afterButton: [
      "We'll take one standard you live by and trace it back to where it actually came from. You'll leave with the Standard Trace, a one-page PDF you can use on any standard, any time.",
      "Think of it as the appetiser for Audit. The work you'll do on 27 November starts here, so arriving with one standard already traced puts you ahead of the room.",
      "No cost, nothing to buy. You've already bought.",
    ],
    signature: ["See you Saturday.", "DK Jonah", "The NO GraGra Practice"],
    unsubscribeUrl,
  });

/**
 * Early-bird reminder — send 28 or 29 October to masterclass registrants
 * who have not bought. Copy supplied by the team in DK's voice; kept verbatim.
 */
export const resetEarlyBirdReminder = ({ unsubscribeUrl }: { unsubscribeUrl?: string }): EmailMessage =>
  build("Your early bird ends Sunday", {
    preheader: "Early bird pricing for The Annual Reset 4.0 ends Sunday 1 November.",
    image: {
      file: "reset-early-bird.jpg",
      alt: "Graphite sketch of a bare foot stepping onto a single gold line",
    },
    eyebrow: "The Annual Reset 4.0 · Early bird",
    title: "Your early bird ends Sunday.",
    intro: [
      GREETING,
      "A few days ago you traced a standard back to where it came from. You saw how far back it went. That was one standard.",
      "The Annual Reset 4.0 takes all of them through the full work: Audit, Align and Anchor. Three live sessions, the REset Portfolio, the LifeSync Stencil, the PACE Planner and the GROWTH Goals framework.",
      "Early bird pricing ends Sunday 1 November. After that, it's £199.",
    ],
    button: { label: "Take your seat", href: `${SITE}/annual-reset` },
    buttonLink: {
      lead: "In Nigeria? Pay in naira through Selar:",
      label: "selar.com/8256775544",
      href: "https://selar.com/8256775544",
    },
    outro: ["This isn't a countdown. It's just the fact, so you can decide with all the information."],
    signature: ["", "DK Jonah", "The NO GraGra Practice"],
    footerReason: "because you registered for the masterclass",
    unsubscribeUrl,
  });

/**
 * Second masterclass invitation — send mid-November for the 21 November
 * repeat run, to everyone. Copy supplied by the team in DK's voice; kept verbatim.
 */
export const masterclassSecondInvite = ({
  lumaUrl,
  unsubscribeUrl,
}: {
  lumaUrl: string;
  unsubscribeUrl?: string;
}): EmailMessage =>
  build("One more chance to trace a standard", {
    preheader: "The Standard You Never Chose runs again on Saturday 21 November. Live, free, 75 minutes.",
    image: {
      file: "reset-masterclass.jpg",
      alt: "Graphite sketch of a woman holding ropes handed to her by other people, one of them in gold leading back to a crowd",
    },
    eyebrow: "Free masterclass · Saturday 21 November",
    title: "One more chance to trace a standard.",
    intro: [
      GREETING,
      "Last month I ran The Standard You Never Chose live, and people kept asking for one more date. Here it is.",
    ],
    rows: [
      { label: "When", value: "Saturday 21 November · 9 am UK / 10 am Lagos" },
      { label: "Length", value: "75 minutes, live, free" },
    ],
    button: { label: "Register here", href: lumaUrl },
    afterButton: [
      "Same work: one standard, traced back to its source, and the Standard Trace PDF to take with you.",
      "If you're coming to the Reset, treat it as a warm-up before Audit the following Friday. If you're still deciding, come see the work for yourself.",
    ],
    signature: ["See you Saturday.", "DK Jonah", "The NO GraGra Practice"],
    footerReason: "because you are on DK Jonah's mailing list",
    unsubscribeUrl,
  });
