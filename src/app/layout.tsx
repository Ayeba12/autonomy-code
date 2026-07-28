import type { Metadata } from "next";
import { Inter, Stack_Sans_Headline } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CookieConsent } from "@/components/site/CookieConsent";
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
    default: "The Autonomy Code · A NoGraGra Practice",
    template: "%s · The Autonomy Code",
  },
  description:
    "A coaching and strategy practice for accomplished professionals whose expertise lives in scattered pieces. Autonomy is peace, given structure.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${inter.variable} ${stackSans.variable}`}>
    <body>
      <SmoothScroll>
        {children}
        <Footer />
        <CookieConsent />
      </SmoothScroll>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
