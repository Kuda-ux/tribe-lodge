import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

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

const BASE_URL = "https://thetribelodge.co.zw";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "The Tribe Lodge | Luxury Accommodation in Bulawayo, Zimbabwe",
    template: "%s | The Tribe Lodge — Bulawayo, Zimbabwe",
  },
  description:
    "The Tribe Lodge — A place where comfort meets culture. 8 presidential suites with superking beds in Hillside, Bulawayo. From $60/night. Conference facilities, on-site dining, airport transfers & curated tours. Book now.",

  keywords: [
    "The Tribe Lodge",
    "Bulawayo accommodation",
    "Bulawayo lodge",
    "Hillside Bulawayo",
    "Zimbabwe lodge",
    "presidential suites Bulawayo",
    "luxury accommodation Bulawayo",
    "hotel Bulawayo Zimbabwe",
    "bed and breakfast Bulawayo",
    "conference facilities Bulawayo",
    "airport transfer Bulawayo",
    "Matobo Hills tour",
    "Victoria Falls tour",
    "where to stay Bulawayo",
    "Bulawayo hotel",
    "Zimbabwe accommodation",
    "business travel Bulawayo",
    "thetribelodge.co.zw",
  ],

  authors: [{ name: "The Tribe Lodge", url: BASE_URL }],
  creator: "KuWeX Studios",
  publisher: "The Tribe Lodge",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "The Tribe Lodge",
    locale: "en_ZW",
    title: "The Tribe Lodge — A place where comfort meets culture",
    description:
      "8 individually styled presidential suites in Hillside, Bulawayo. Superking beds, en-suite bathrooms, air-conditioning. From $60/night. Conference facilities, curated tours & airport transfers.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The Tribe Lodge — Presidential Suites in Bulawayo, Zimbabwe",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@thetribelodge",
    creator: "@thetribelodge",
    title: "The Tribe Lodge — A place where comfort meets culture",
    description:
      "8 presidential suites in Hillside, Bulawayo, Zimbabwe. From $60/night. Book now.",
    images: [OG_IMAGE],
  },

  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/logo.jpg" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "cb9e0a28b7d8003e",
  },

  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#15100B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Geo tags — boost local Zimbabwe / Bulawayo searches */}
        <meta name="geo.region" content="ZW-BU" />
        <meta name="geo.placename" content="Bulawayo, Zimbabwe" />
        <meta name="geo.position" content="-20.1325;28.6261" />
        <meta name="ICBM" content="-20.1325, 28.6261" />
        {/* Mobile web-app */}
        <meta name="application-name" content="The Tribe Lodge" />
        <meta name="apple-mobile-web-app-title" content="Tribe Lodge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
