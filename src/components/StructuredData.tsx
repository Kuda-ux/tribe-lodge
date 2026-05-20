import { site } from "@/lib/site";

const BASE = "https://thetribelodge.co.zw";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. LodgingBusiness (main entity) ──────────────────────────
      {
        "@type": "LodgingBusiness",
        "@id": `${BASE}/#lodging`,
        name: site.name,
        alternateName: "Tribe Lodge Bulawayo",
        description:
          "8 individually styled presidential suites in Hillside, Bulawayo. A place where comfort meets culture. Superking beds, en-suite bathrooms, air-conditioning, conference facilities, on-site dining, airport transfers and curated tours.",
        slogan: site.motto,
        url: BASE,
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/logo.jpg`,
          width: 320,
          height: 140,
        },
        image: [
          `${BASE}/og-image.jpg`,
          `${BASE}/images/img-34.jpg`,
          `${BASE}/images/img-25.jpg`,
          `${BASE}/images/img-31.jpg`,
          `${BASE}/images/img-30.jpg`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Knotts Way",
          addressLocality: "Hillside",
          addressRegion: "Bulawayo",
          postalCode: "",
          addressCountry: "ZW",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.1325,
          longitude: 28.6261,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
        telephone: site.phones[0].tel,
        email: site.email,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Bank Transfer",
        priceRange: "$$",
        checkinTime: "12:00",
        checkoutTime: "10:00",
        numberOfRooms: 8,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
          { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
          { "@type": "LocationFeatureSpecification", name: "Breakfast Available", value: true },
          { "@type": "LocationFeatureSpecification", name: "Airport Transfers", value: true },
          { "@type": "LocationFeatureSpecification", name: "Conference Facilities", value: true },
          { "@type": "LocationFeatureSpecification", name: "Laundry Service", value: true },
        ],
        starRating: { "@type": "Rating", ratingValue: "4" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "24",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.facebook.com/thetribelodge",
          "https://www.instagram.com/thetribelodge",
        ],
        containsPlace: site.suites.map((s) => ({
          "@type": "HotelRoom",
          "@id": `${BASE}/#suite-${s.slug}`,
          name: `${s.name} Suite — Presidential`,
          description: `${s.style}. Superking bed, en-suite bathroom, air-conditioning, free Wi-Fi.`,
          occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
          bed: { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Superking" },
          offers: {
            "@type": "Offer",
            name: "Room Only",
            price: site.pricing.roomOnly,
            priceCurrency: "USD",
          },
        })),
      },
      // ── 2. WebSite (enables Google Sitelinks Search Box) ────────────
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${BASE}/#lodging` },
        inLanguage: "en-ZW",
      },
      // ── 3. LocalBusiness (duplicate signal for local pack) ──────────
      {
        "@type": ["LocalBusiness", "Hotel"],
        "@id": `${BASE}/#local`,
        name: site.name,
        url: BASE,
        telephone: site.phones[1]?.tel ?? site.phones[0].tel,
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Knotts Way",
          addressLocality: "Hillside",
          addressRegion: "Bulawayo",
          addressCountry: "ZW",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.1325,
          longitude: 28.6261,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "$$",
        image: `${BASE}/og-image.jpg`,
      },
      // ── 4. FAQ (boosts search real-estate with rich snippets) ────────
      {
        "@type": "FAQPage",
        "@id": `${BASE}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a room at The Tribe Lodge cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rooms start from $60 per night for room only, or $70 per night with breakfast included.",
            },
          },
          {
            "@type": "Question",
            name: "What type of rooms does The Tribe Lodge offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Tribe Lodge offers 8 individually styled presidential suites, all featuring superking-size beds, en-suite bathrooms, air-conditioning and free Wi-Fi.",
            },
          },
          {
            "@type": "Question",
            name: "Where is The Tribe Lodge located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Tribe Lodge is located at 3 Knotts Way, Hillside, Bulawayo, Zimbabwe — in one of Bulawayo's most peaceful leafy suburbs.",
            },
          },
          {
            "@type": "Question",
            name: "Does The Tribe Lodge offer airport transfers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, The Tribe Lodge offers branded shuttle airport transfers to and from J.M. Nkomo International Airport. Please share your flight details when booking.",
            },
          },
          {
            "@type": "Question",
            name: "Does The Tribe Lodge have conference facilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, professional conference and meeting facilities are available for corporate events, workshops and presentations.",
            },
          },
          {
            "@type": "Question",
            name: "What tours can I book through The Tribe Lodge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Tribe Lodge offers curated tours to Matobo Hills UNESCO World Heritage Site, Khami Ruins, Hwange National Park and Victoria Falls.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
