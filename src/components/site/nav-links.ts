/** Navigation structure shared by Navbar (mega dropdown) and mobile menu. */

export interface NavPageLink {
  label: string;
  href: string;
  thumb: string;
}

export const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Project", href: "/projects", badge: "05" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
] as const;

export const dropdownColumns: NavPageLink[][] = [
  [
    { label: "Home", href: "/", thumb: "/images/dropdown-item-image.webp" },
    { label: "Studio", href: "/about", thumb: "/images/dropdown-item-image-02.webp" },
    { label: "Projects", href: "/projects", thumb: "/images/dropdown-item-image-03.webp" },
    { label: "Projects Single", href: "/projects/xenitho", thumb: "/images/dropdown-item-image-3-2.webp" },
    { label: "Blog", href: "/blogs", thumb: "/images/dropdown-item-image-4.webp" },
    { label: "Blogs Single", href: "/blogs/the-power-of-minimalist-design", thumb: "/images/dropdown-item-image-5.webp" },
  ],
  [
    { label: "Pricing", href: "/pricing", thumb: "/images/dropdown-item-image-7.webp" },
    { label: "Career", href: "/career", thumb: "/images/dropdown-item-image-8.webp" },
    { label: "Career Single", href: "/career/digital-pr-executive-rise-live", thumb: "/images/dropdown-item-image-9.webp" },
    { label: "Contact", href: "/contact", thumb: "/images/dropdown-item-image-6.webp" },
    { label: "Style Guide", href: "/utility-pages/style-guide", thumb: "/images/10.webp" },
    { label: "Instructions", href: "/utility-pages/instruction", thumb: "/images/frame-2147230133.webp" },
  ],
  [
    { label: "Privacy Policy", href: "/utility-pages/privacy-policy", thumb: "/images/dropdown-item-image-11.webp" },
    { label: "Terms & Conditions", href: "/utility-pages/terms-conditions", thumb: "/images/dropdown-item-image-12.webp" },
    { label: "404 Page", href: "/404-page", thumb: "/images/dropdown-item-image-3.webp" },
    { label: "Protected Page", href: "/401", thumb: "/images/dropdown-item-image-14.webp" },
    { label: "License Page", href: "/utility-pages/license", thumb: "/images/dropdown-item-image-15.webp" },
  ],
];

export const footerColumns = [
  [
    { label: "Home", href: "/" },
    { label: "Studio", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blogs" },
  ],
  [
    { label: "Career Single", href: "/career/digital-pr-executive-rise-live" },
    { label: "Projects Single", href: "/projects/xenitho" },
    { label: "Blogs Single", href: "/blogs/the-power-of-minimalist-design" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "Style Guide", href: "/utility-pages/style-guide" },
    { label: "Changelog", href: "/utility-pages/changelog" },
    { label: "License", href: "/utility-pages/license" },
    { label: "Password", href: "/401" },
    { label: "404", href: "/404-page" },
  ],
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://web.facebook.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];
