import type { SpeakingInfo } from "../types";

/** Speaking (content.md §4.11). Rates by enquiry, in writing. */
export const speaking: SpeakingInfo = {
  themes: [
    "Autonomy and hidden captivity",
    "Self-trust and decisions",
    "Knowledge architecture, turning expertise into owned systems",
    "The NoGraGra philosophy, building without force",
  ],
  audiences: [
    "Professional communities",
    "Women's leadership rooms",
    "Creator and consultant audiences",
    "Teams navigating change",
  ],
  formats: [
    {
      name: "Keynote or conference talk",
      note: "A single clear idea, held calmly. Faith-aware context available.",
    },
    {
      name: "Half-day workshop or facilitation",
      note: "Frameworks used live, with the room working.",
    },
    {
      name: "Panels and interviews",
      note: "Conversation, not performance. Rates for all formats by enquiry, in writing.",
    },
  ],
};
