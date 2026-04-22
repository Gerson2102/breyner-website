import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { SITE_URL } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Automotive storyteller documenting the intersection of machinery, night culture, and Costa Rica's exotic-car scene. Editorial photography, production, and events. Founder of Suburban Drivers.";

const ogImage = "/placeholders/instagram/vintage-ferrari-yellow-stripe-night.webp";

export const metadata: Metadata = {
  title: "Steve LePerk — The Nocturnal Monograph",
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Steve LePerk — The Nocturnal Monograph",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Steve LePerk",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Steve LePerk — The Nocturnal Monograph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve LePerk — The Nocturnal Monograph",
    description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-accent focus:text-surface focus:px-4 focus:py-2 focus:font-headline focus:uppercase focus:tracking-[0.25em] focus:text-xs"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
