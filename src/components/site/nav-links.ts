/** Navigation structure shared by the Navbar, its "More" menu, and the Footer. */

export interface NavLink {
  label: string;
  href: string;
}

export const primaryLinks: NavLink[] = [
  { label: "The Method", href: "/method" },
  { label: "Work Together", href: "/work-together" },
  { label: "About", href: "/about" },
  { label: "In Conversation", href: "/in-conversation" },
  { label: "Contact", href: "/contact" },
];

export interface MegaLink extends NavLink {
  thumb: string;
}

/** "More" mega menu (Stodio Pages-dropdown pattern), two titled columns. */
export const megaColumns: { title: string; links: MegaLink[] }[] = [
  {
    title: "The Ladder",
    links: [
      { label: "The Ownership Scan", href: "/ownership-scan", thumb: "/images/dynamic-motion-scene-1-2.webp" },
      { label: "SABI CORE", href: "/sabi-core", thumb: "/images/dynamic-portrait-motion-1.webp" },
      { label: "Legacy", href: "/legacy", thumb: "/images/projects-thumbnail-image-03.webp" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "The Wider Work", href: "/wider-work", thumb: "/images/looping-image4.webp" },
      { label: "Speaking", href: "/speaking", thumb: "/images/looping-image3.webp" },
      { label: "Writing", href: "/writing", thumb: "/images/foundation-tab-image-03.webp" },
    ],
  },
];

/** Flat list for the mobile menu. */
export const moreLinks: NavLink[] = [
  { label: "The Ownership Scan", href: "/ownership-scan" },
  { label: "SABI CORE", href: "/sabi-core" },
  { label: "Legacy", href: "/legacy" },
  { label: "Writing", href: "/writing" },
  { label: "The Wider Work", href: "/wider-work" },
  { label: "Speaking", href: "/speaking" },
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
