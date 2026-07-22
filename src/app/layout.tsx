import type { Metadata } from "next";
import { Inter, Stack_Sans_Headline } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stackSans = Stack_Sans_Headline({
  subsets: ["latin"],
  variable: "--font-stack",
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Stodio — Next-Gen Design Agency",
    template: "%s — Stodio",
  },
  description:
    "Next-gen design agency for growing brands. Branding, mobile & web app design for startups and giants.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${inter.variable} ${stackSans.variable}`}>
    <body>
      <SmoothScroll>
        {children}
        <Footer />
      </SmoothScroll>
    </body>
  </html>
);

export default RootLayout;
