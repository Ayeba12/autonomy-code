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
  /** A quiet closing line under the button. */
  note?: string;
}

/** Escape user-supplied text for HTML. */
export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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
      `<p style="margin:18px 0 0;font-family:${font};font-size:16px;line-height:26px;color:${color.slate};">${escapeHtml(paragraph)}</p>`,
  )
  .join("\n")}
${input.rows?.length ? renderRows(input.rows) : ""}
${input.quote ? renderQuote(input.quote) : ""}
${input.button ? renderButton(input.button) : ""}
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
<p style="margin:14px 0 0;font-family:${font};font-size:13px;line-height:20px;color:${color.mute};">The No GraGra Practice · DK Jonah</p>
<p style="margin:4px 0 0;font-family:${font};font-size:13px;line-height:20px;color:${color.mute};">No rush. No force. No gra gra.</p>
<p style="margin:16px 0 0;font-family:${font};font-size:13px;line-height:20px;"><a href="${SITE}" style="color:${color.brandSoft};text-decoration:none;">theautonomycode.com</a></p>
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
    ...(input.note ? ["", input.note] : []),
    "",
    "The Autonomy Code · The No GraGra Practice · DK Jonah",
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
