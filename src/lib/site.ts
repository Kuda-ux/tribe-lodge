export const site = {
  name: "The Tribe Lodge",
  tagline: "Stay With Us, Create Memories.",
  shortPitch: "Stay in Style. Feel at Home.",
  description:
    "A welcoming hospitality destination in Bulawayo, Zimbabwe — offering peaceful accommodation, conference facilities, on-site dining, laundry, and airport transfers for business and leisure travelers.",
  address: "3 Knotts Way, Hillside, Bulawayo, Zimbabwe",
  city: "Bulawayo, Zimbabwe",
  email: "info@thetribelodge.com",

  // WhatsApp goes to the UK number per business preference
  whatsapp: { display: "+44 7911 717 861", tel: "+447911717861" },

  phones: [
    {
      role: "Reception (Landline)",
      flag: "ZW",
      display: "+263 292 240 074",
      tel: "+263292240074",
      whatsapp: false,
    },
    {
      role: "Reservations (Mobile)",
      flag: "ZW",
      display: "+263 77 876 1925",
      tel: "+263778761925",
      whatsapp: false,
    },
    {
      role: "Mobile",
      flag: "ZW",
      display: "+263 78 423 6202",
      tel: "+263784236202",
      whatsapp: false,
    },
    {
      role: "WhatsApp / UK Office",
      flag: "GB",
      display: "+44 7911 717 861",
      tel: "+447911717861",
      whatsapp: true,
    },
    {
      role: "Zambia Office",
      flag: "ZM",
      display: "+260 97 676 3687",
      tel: "+260976763687",
      whatsapp: false,
    },
  ],

  rooms: [
    {
      slug: "tribal-suite",
      name: "Tribal Suite",
      tagline: "Authentic African elegance",
      priceNoBreakfast: 60,
      priceWithBreakfast: 70,
      features: [
        "Cream velvet upholstered headboard",
        "Hand-woven Tonga basket wall art",
        "King-size bed with premium linen",
        "Tribal accent pillows & throws",
        "En-suite bathroom & free Wi-Fi",
      ],
      images: ["/images/img-05.jpg", "/images/img-07.jpg"],
    },
    {
      slug: "navy-suite",
      name: "Navy Velvet Suite",
      tagline: "Refined sophistication",
      priceNoBreakfast: 60,
      priceWithBreakfast: 70,
      features: [
        "Deep-navy velvet feature headboard",
        "Crystal chandelier & pendant lighting",
        "King bed with gold satin runner",
        "Built-in wardrobes & dressing area",
        "Air conditioning & fast Wi-Fi",
      ],
      images: ["/images/img-02.jpg", "/images/img-03.jpg", "/images/img-01.jpg"],
    },
    {
      slug: "onyx-suite",
      name: "Onyx Presidential Suite",
      tagline: "Bold, modern, executive",
      priceNoBreakfast: 60,
      priceWithBreakfast: 70,
      features: [
        "Black velvet statement headboard",
        "Gold-tone chandelier & pendant lights",
        "King-size bed with premium linen",
        "Spacious work-friendly suite",
        "Air conditioning & fast Wi-Fi",
      ],
      images: ["/images/img-08.jpg", "/images/img-23.jpg", "/images/img-24.jpg"],
    },
  ],

  services: [
    {
      title: "Accommodation",
      description:
        "Three beautifully styled presidential suites — Tribal, Navy and Onyx — designed for restful, peaceful stays.",
      icon: "BedDouble",
    },
    {
      title: "Conference Facilities",
      description:
        "Professional meeting and workshop spaces for corporate gatherings in Bulawayo.",
      icon: "Presentation",
    },
    {
      title: "Food On Site",
      description:
        "Delicious meals on the premises — full breakfast available with selected room rates.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Laundry Services",
      description:
        "Convenient on-site laundry to keep travel effortless during longer stays.",
      icon: "Shirt",
    },
    {
      title: "Airport Transfers",
      description:
        "Branded shuttle pick-ups from J.M. Nkomo International Airport and around Bulawayo.",
      icon: "BusFront",
    },
    {
      title: "Tours & Excursions",
      description:
        "Plan your trip with us — Khami Ruins, Matobo Hills, Hwange National Park and Victoria Falls.",
      icon: "MapPinned",
    },
  ],

  amenities: [
    { title: "Free Wi-Fi", icon: "Wifi" },
    { title: "Free Parking", icon: "Car" },
    { title: "Air Conditioning", icon: "Snowflake" },
    { title: "Swimming Pool", icon: "Waves" },
    { title: "24/7 Security", icon: "ShieldCheck" },
    { title: "Breakfast Buffet", icon: "Coffee" },
    { title: "24-Hour Reception", icon: "Bell" },
    { title: "Personalized Service", icon: "Sparkles" },
  ],

  // What "Why Choose" bullets — taken from official marketing
  whyChoose: [
    "Spacious & elegant presidential suites",
    "Modern amenities for a relaxing stay",
    "Clean, comfortable & secure environment",
    "Excellent service, every time",
  ],

  // Tour destinations (from the Plan Your Trip flyer)
  tours: [
    {
      name: "Matobo Hills",
      description:
        "UNESCO World Heritage site — ancient granite landscapes, Cecil Rhodes' grave and rhino tracking.",
    },
    {
      name: "Khami Ruins",
      description:
        "UNESCO-listed stone city ruins just outside Bulawayo — a glimpse into Zimbabwe's royal past.",
    },
    {
      name: "Hwange National Park",
      description:
        "Zimbabwe's largest game reserve — home to Africa's iconic Big Five and vast elephant herds.",
    },
    {
      name: "Victoria Falls",
      description:
        "One of the Seven Natural Wonders of the World — Mosi-oa-Tunya, 'the smoke that thunders'.",
    },
  ],

  // Image catalog — actual content of every photo
  images: {
    tribalSuite: ["/images/img-05.jpg", "/images/img-07.jpg"],
    navySuite: ["/images/img-02.jpg", "/images/img-03.jpg", "/images/img-01.jpg"],
    onyxSuite: ["/images/img-08.jpg", "/images/img-23.jpg", "/images/img-24.jpg"],
    pool: "/images/img-09.jpg",
    grounds: "/images/img-04.jpg", // branded fence with giraffe cutout
    architecture: ["/images/img-10.jpg", "/images/img-12.jpg"],
    logoColor: "/images/img-13.jpg",
    shuttle: [
      "/images/img-14.jpg",
      "/images/img-15.jpg",
      "/images/img-16.jpg",
      "/images/img-17.jpg",
      "/images/img-18.jpg",
      "/images/img-19.jpg",
      "/images/img-20.jpg",
      "/images/img-22.jpg",
    ],
    flyers: ["/images/img-06.jpg", "/images/img-11.jpg", "/images/img-21.jpg"],
  },

  videos: ["/videos/video-1.mp4", "/videos/video-2.mp4", "/videos/video-3.mp4"],
};

// Gallery — all real photos (excludes flyers); ordered for visual variety
export const galleryImages: string[] = [
  // Star tribal room
  "/images/img-05.jpg",
  // Pool & grounds
  "/images/img-09.jpg",
  // Onyx suite
  "/images/img-08.jpg",
  // Navy suite hero
  "/images/img-02.jpg",
  // Tribal alt
  "/images/img-07.jpg",
  // Grounds branding detail
  "/images/img-04.jpg",
  // Suite living detail
  "/images/img-01.jpg",
  // Onyx alt
  "/images/img-23.jpg",
  // Navy alt
  "/images/img-03.jpg",
  // Architecture rendering
  "/images/img-10.jpg",
  // Onyx alt 2
  "/images/img-24.jpg",
  // Architecture rendering 2
  "/images/img-12.jpg",
  // Shuttle (selection)
  "/images/img-14.jpg",
  "/images/img-22.jpg",
  "/images/img-19.jpg",
];

export type Site = typeof site;
