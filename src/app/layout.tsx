import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  preload: true,
});

export const metadata: Metadata = {
  title: "The Tribe Lodge — Peaceful Stays in Bulawayo, Zimbabwe",
  description:
    "The Tribe Lodge offers comfortable accommodation, conference facilities, on-site food and laundry in a peaceful Bulawayo setting. Presidential rooms from $60. Book your stay today.",
  keywords: [
    "The Tribe Lodge",
    "Bulawayo lodge",
    "Bulawayo accommodation",
    "Zimbabwe lodge",
    "Hillside Bulawayo",
    "conference facilities Bulawayo",
    "Presidential rooms Bulawayo",
  ],
  metadataBase: new URL("https://thetribelodge.com"),
  openGraph: {
    title: "The Tribe Lodge — Stay With Us, Create Memories.",
    description:
      "Peaceful accommodation in Bulawayo, Zimbabwe. Presidential rooms, conference facilities, on-site food and laundry.",
    type: "website",
    locale: "en_ZW",
    images: ["/images/img-05.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tribe Lodge",
    description: "Peaceful accommodation in Bulawayo, Zimbabwe.",
    images: ["/images/img-05.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#15100B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
