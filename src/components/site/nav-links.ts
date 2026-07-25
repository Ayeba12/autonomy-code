/** Navigation structure shared by the Navbar, its "More" menu, and the Footer. */

export interface NavLink {
  label: string;
  href: string;
}

export const primaryLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "The Method", href: "/method" },
  { label: "Work Together", href: "/work-together" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "In Conversation", href: "/in-conversation" },
];

/** Small calm "More" menu (replaces the template mega dropdown). */
export const moreLinks: NavLink[] = [
  { label: "The Ownership Scan", href: "/ownership-scan" },
  { label: "SABI CORE", href: "/sabi-core" },
  { label: "Legacy", href: "/legacy" },
  { label: "The Wider Work", href: "/wider-work" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "The Method", href: "/method" },
      { label: "Work Together", href: "/work-together" },
      { label: "About", href: "/about" },
      { label: "Writing", href: "/writing" },
      { label: "In Conversation", href: "/in-conversation" },
    ],
  },
  {
    title: "The Ladder",
    links: [
      { label: "The Ownership Scan", href: "/ownership-scan" },
      { label: "SABI CORE", href: "/sabi-core" },
      { label: "Legacy", href: "/legacy" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "The Wider Work", href: "/wider-work" },
      { label: "Speaking", href: "/speaking" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

/** Placeholder hrefs until the client supplies live profiles (content.md §8). */
export const socialLinks: NavLink[] = [
  { label: "Substack", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];
