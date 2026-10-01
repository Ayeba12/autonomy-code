import type { Metadata } from "next";
import { Inter, Stack_Sans_Headline } from "next/font/google";
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
    default: "The Autonomy Code · The No GraGra Practice",
    template: "%s · The Autonomy Code",
  },
  description:
    "A coaching and strategy practice for accomplished professionals whose expertise lives in scattered pieces. Autonomy is peace, given structure.",
  // Bing Webmaster Tools ownership tag. Removing it un-verifies the site.
  other: { "msvalidate.01": "4E9D545855E6579E0415CB4C284EECD2" },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${inter.variable} ${stackSans.variable}`}>
    <body>
      <SmoothScroll>
        {children}
        <Footer />
        <CookieConsent />
      </SmoothScroll>
    </body>
  </html>
);

export default RootLayout;
