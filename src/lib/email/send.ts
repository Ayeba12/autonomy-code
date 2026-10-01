import nodemailer from "nodemailer";
import type { EmailMessage } from "./templates";

/**
 * Sends through the practice's own mailbox over SMTP. Server only.
 *
 *   SMTP_USER   the mailbox address (required)
 *   SMTP_PASS   the mailbox password (required)
 *   SMTP_HOST   defaults to one.com's outgoing server
 *   SMTP_PORT   defaults to 465 (SSL)
 *   ENQUIRY_TO  where enquiries land; defaults to SMTP_USER
 */
const config = () => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  return {
    user,
    pass,
    port,
    host: process.env.SMTP_HOST ?? "send.one.com",
    inbox: process.env.ENQUIRY_TO ?? user,
  };
};

/** True when the mailbox details are present. */
export const emailConfigured = () => config() !== null;

/** The inbox enquiries are delivered to. */
export const enquiryInbox = () => config()?.inbox ?? null;

interface SendInput {
  to: string;
  message: EmailMessage;
  /** Where pressing Reply should go. */
  replyTo?: string;
}

export const sendEmail = async ({ to, message, replyTo }: SendInput) => {
  const settings = config();
  if (!settings) throw new Error("Email is not configured");

  const transport = nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.port === 465,
    auth: { user: settings.user, pass: settings.pass },
  });

  await transport.sendMail({
    from: { name: "The Autonomy Code", address: settings.user },
    to,
    replyTo,
    subject: message.subject,
    html: message.html,
    text: message.text,
  });
};
