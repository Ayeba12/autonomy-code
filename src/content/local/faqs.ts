import type { FaqItem } from "../types";

/**
 * Seed data from `_analysis/home.md` §9 "FAQ" (template demo content —
 * four answers share the same lorem ipsum placeholder).
 */

const LOREM_ANSWER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const faqs: FaqItem[] = [
  {
    question: "What services does your agency provide?",
    answer: LOREM_ANSWER,
  },
  {
    question: "How do you approach a new project?",
    answer: LOREM_ANSWER,
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      'You can easily book an appointment by clicking the "Book Appointment" button on our website or by calling our front desk directly.',
  },
  {
    question: "How do you handle revisions?",
    answer: LOREM_ANSWER,
  },
  {
    question: "How much do your services cost?",
    answer: LOREM_ANSWER,
  },
];
