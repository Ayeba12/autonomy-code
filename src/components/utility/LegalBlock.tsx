import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Numbered long-form block for legal / changelog pages
 * (template `utility-text-block`: brand-red `heading-style-06` + body copy).
 */
export const LegalBlock = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => (
  <Reveal className="flex flex-col gap-4">
    <h2 className="text-h6 font-medium text-brand">{heading}</h2>
    <div className="flex flex-col gap-4 text-body-l text-smoke">{children}</div>
  </Reveal>
);

/** Bulleted list with bold lead-ins, as used across the legal pages. */
export const LegalList = ({
  items,
}: {
  items: { lead?: string; text: string }[];
}) => (
  <ul className="flex list-disc flex-col gap-2.5 pl-5 marker:text-brand">
    {items.map((item, i) => (
      <li key={i}>
        {item.lead && <strong className="font-semibold text-ink">{item.lead} </strong>}
        {item.text}
      </li>
    ))}
  </ul>
);
