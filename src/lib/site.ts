export const site = {
  name: "The Tribe Lodge",
  tagline: "Stay With Us, Create Memories.",
  shortPitch: "A place where comfort meets culture.",
  motto: "A place where comfort meets culture",
  description:
    "A welcoming hospitality destination in Bulawayo, Zimbabwe — eight individually styled presidential suites, conference facilities, on-site dining, laundry, airport transfers and curated tours.",
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

  // Pricing — single rate, all 8 suites are presidential class
  pricing: {
    roomOnly: 60,
    withBreakfast: 70,
    currency: "USD",
  },

  // 8 individually-styled presidential suites — all superking, en-suite, A/C
  suites: [
    {
      slug: "onyx-i",
      number: "01",
      name: "Onyx",
      style: "Black velvet",
      image: "/images/img-25.jpg",
    },
    {
      slug: "onyx-ii",
      number: "02",
      name: "Onyx II",
      style: "Black velvet",
      image: "/images/img-28.jpg",
    },
    {
      slug: "sapphire",
      number: "03",
      name: "Sapphire",
      style: "Navy velvet",
      image: "/images/img-31.jpg",
    },
    {
      slug: "indigo",
      number: "04",
      name: "Indigo",
      style: "Navy velvet",
      image: "/images/img-29.jpg",
    },
    {
      slug: "heritage",
      number: "05",
      name: "Heritage",
      style: "Sand velvet · woven baskets",
      image: "/images/img-30.jpg",
    },
    {
      slug: "acacia",
      number: "06",
      name: "Acacia",
      style: "Champagne · gold chandelier",
      image: "/images/img-34.jpg",
    },
    {
      slug: "savannah",
      number: "07",
      name: "Savannah",
      style: "Champagne · tribal plates",
      image: "/images/img-32.jpg",
    },
    {
      slug: "tribal",
      number: "08",
      name: "Tribal",
      style: "Cream velvet · Tonga baskets",
      image: "/images/img-05.jpg",
    },
  ],

  // What every presidential suite includes
  suiteFeatures: [
    "Superking-size bed with premium linen",
    "Velvet upholstered feature headboard",
    "Air conditioning & free fast Wi-Fi",
    "En-suite bathroom with hot shower",
    "Built-in wardrobes & dressing area",
    "Bedside lamps & ambient lighting",
    "Daily housekeeping & fresh towels",
    "24-hour reception & secure parking",
  ],

  services: [
    {
      title: "Presidential Accommodation",
      description:
        "Eight individually styled presidential suites — every one with a superking bed, en-suite bathroom and air-conditioning.",
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

  whyChoose: [
    "Eight spacious presidential suites — all with superking beds",
    "Modern amenities for a relaxing stay",
    "Clean, comfortable & secure environment",
    "Excellent personalised service, every time",
  ],

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

  // Image catalog
  images: {
    pool: "/images/img-09.jpg",
    grounds: "/images/img-04.jpg",
    architecture: ["/images/img-10.jpg", "/images/img-12.jpg"],
    logoColor: "/images/img-13.jpg",
    // Only the branded marketing flyer (all on-vehicle photos lack Tribe branding)
    shuttle: ["/images/img-21.jpg"],
    flyers: ["/images/img-06.jpg", "/images/img-11.jpg", "/images/img-21.jpg"],
  },

  videos: ["/videos/video-1.mp4", "/videos/video-2.mp4", "/videos/video-3.mp4"],
};

export type Suite = (typeof site.suites)[number];

// Hero slideshow — three of the most striking new bright images
export const heroSlides = [
  {
    src: "/images/img-34.jpg",
    alt: "Acacia Suite — champagne headboard with hand-woven Tonga baskets and gold chandelier",
    caption: "Acacia Suite",
  },
  {
    src: "/images/img-25.jpg",
    alt: "Onyx Suite — black velvet feature headboard, bright modern interior",
    caption: "Onyx Suite",
  },
  {
    src: "/images/img-30.jpg",
    alt: "Heritage Suite — sand velvet headboard with woven baskets and green accent",
    caption: "Heritage Suite",
  },
];

// Gallery — bright, beautiful curated set (no unbranded shuttle photos)
export type GalleryCategory = "Suites" | "Pool & Grounds" | "Architecture" | "Tours";
export const galleryItems: { src: string; title: string; category: GalleryCategory }[] = [
  // Suites — lead with the new bright photos
  { src: "/images/img-34.jpg", title: "Acacia Suite", category: "Suites" },
  { src: "/images/img-25.jpg", title: "Onyx Suite", category: "Suites" },
  { src: "/images/img-31.jpg", title: "Sapphire Suite", category: "Suites" },
  { src: "/images/img-30.jpg", title: "Heritage Suite", category: "Suites" },
  { src: "/images/img-32.jpg", title: "Savannah Suite", category: "Suites" },
  { src: "/images/img-28.jpg", title: "Onyx II", category: "Suites" },
  { src: "/images/img-29.jpg", title: "Indigo Suite", category: "Suites" },
  { src: "/images/img-05.jpg", title: "Tribal Suite", category: "Suites" },
  { src: "/images/img-33.jpg", title: "Savannah — Wide View", category: "Suites" },
  { src: "/images/img-26.jpg", title: "Onyx — Detail", category: "Suites" },
  // Pool & grounds
  { src: "/images/img-09.jpg", title: "Swimming Pool & Gazebo", category: "Pool & Grounds" },
  { src: "/images/img-04.jpg", title: "Branded Steel Fence", category: "Pool & Grounds" },
  // Architecture / vision
  { src: "/images/img-10.jpg", title: "Master Plan — Aerial", category: "Architecture" },
  { src: "/images/img-12.jpg", title: "Guest Block Facade", category: "Architecture" },
  // Tours — branded marketing flyer only
  { src: "/images/img-21.jpg", title: "Plan Your Trip With Us", category: "Tours" },
];

export type Site = typeof site;
