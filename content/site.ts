export type AspectRatio = "3/4" | "4/3" | "1/1" | "16/9" | "21/9" | "9/16";

export type WorkTile = {
  id: string;
  title: string;
  context: string;
  aspect: AspectRatio;
  placeholder: string;
  alt: string;
  span?: "sm" | "md" | "lg" | "xl";
};

export type SDTile = {
  id: string;
  placeholder: string;
  alt: string;
  caption: string;
};

const IG = "/placeholders/instagram";

export const site = {
  brand: {
    name: "Steve LePerk",
    wordmark: "STEVE LEPERK",
    tagline: "The Nocturnal Monograph",
    roles: "Photography · Production · Events",
  },

  nav: [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#suburban-drivers", label: "Suburban Drivers" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],

  hero: {
    headline: "STEVE LEPERK",
    sub: "Photography · Production · Events",
    scrollCue: "Scroll to enter",
    frames: [
      {
        id: "challenger-halo",
        src: `${IG}/challenger-hellcat-red-halo.webp`,
        alt: "Red Dodge Challenger Hellcat with a dramatic halo light effect — nocturnal portrait.",
        caption: "Frame 01 — Red Halo",
      },
      {
        id: "night-ferrari",
        src: `${IG}/vintage-ferrari-yellow-stripe-night.webp`,
        alt: "Vintage Ferrari with a yellow racing stripe, photographed at night under ambient street light.",
        caption: "Frame 02 — Nocturnal Editorial",
      },
      {
        id: "mustang-rain",
        src: `${IG}/mustang-roush-rear-rain.webp`,
        alt: "Roush Mustang tail detail with rain on the decklid at night.",
        caption: "Frame 03 — Rain, Matte, Rear",
      },
    ],
  },

  manifesto: {
    eyebrow: "Manifesto",
    body: "An automotive storyteller documenting the intersection of machinery, night culture, and Costa Rica's exotic-car scene. Six years behind the lens — and at the wheel of the community it was made for.",
    attribution: "— Steve LePerk, Founder of Suburban Drivers",
    backdrop: {
      src: `${IG}/mclaren-f1-wheel-orange-brakes.webp`,
      alt: "Glowing orange brake caliper inside a McLaren F1 wheel — atmospheric detail.",
    },
  },

  work: {
    eyebrow: "Selected Work",
    sectionTitle: "Selected Work",
    tiles: [
      {
        id: "carrera-triptych",
        title: "911 GT3 RS",
        context: "La Cascada",
        aspect: "16/9",
        span: "xl",
        placeholder: `${IG}/porsche-gt3rs-scooter-track.webp`,
        alt: "Silver Porsche 911 GT3 RS parked on a mountain bridge with a waterfall cascading behind — cinematic editorial frame.",
      },
      {
        id: "ferrari-488-pista",
        title: "Ferrari 488 Pista",
        context: "Red with White Stripe",
        aspect: "3/4",
        placeholder: `${IG}/ferrari-488-pista-red-white-stripe.webp`,
        alt: "Red Ferrari 488 Pista with center white racing stripe.",
      },
      {
        id: "ferrari-sf90-front",
        title: "Ferrari SF90",
        context: "Matte Dossier",
        aspect: "3/4",
        placeholder: `${IG}/ferrari-sf90-matte-black-front.webp`,
        alt: "Matte-black Ferrari SF90 front three-quarter, low contrast light.",
      },
      {
        id: "crest-badge",
        title: "Crest",
        context: "Detail Study",
        aspect: "1/1",
        placeholder: `${IG}/porsche-yellow-crest-badge.webp`,
        alt: "Macro of a Porsche crest badge on a yellow painted panel.",
      },
      {
        id: "mclaren-f1-carbon",
        title: "McLaren F1",
        context: "Midnight Carbon",
        aspect: "3/4",
        placeholder: `${IG}/mclaren-f1-green-side-carbon.webp`,
        alt: "Green McLaren F1 side profile, carbon detail visible.",
      },
      {
        id: "mclaren-720s-livery",
        title: "McLaren 720S GT3",
        context: "Orange Livery",
        aspect: "4/3",
        placeholder: `${IG}/mclaren-720s-gt3-dunkin-livery.webp`,
        alt: "McLaren 720S GT3 race car in orange partnership livery in the paddock.",
      },
      {
        id: "huracan-tecnica",
        title: "Huracán Técnica",
        context: "Studio A",
        aspect: "3/4",
        placeholder: `${IG}/lamborghini-huracan-tecnica-grey.webp`,
        alt: "Grey Lamborghini Huracán Técnica photographed in a controlled studio.",
      },
      {
        id: "sf90-closeup",
        title: "911 GTS",
        context: "Yellow Detail",
        aspect: "1/1",
        placeholder: `${IG}/porsche-gts-yellow-rear-taillight.webp`,
        alt: "Yellow Porsche 911 GTS rear taillight and spoiler — editorial macro detail.",
      },
      {
        id: "gt4rs-hills",
        title: "718 GT4 RS",
        context: "Carbon Mirror",
        aspect: "3/4",
        placeholder: `${IG}/porsche-gt4rs-pink-carbon-mirror.webp`,
        alt: "Pink Porsche 718 GT4 RS with a carbon-fibre wing mirror, editorial detail.",
      },
      {
        id: "bmw-m4-csl",
        title: "BMW M4 CSL",
        context: "Main Street",
        aspect: "4/3",
        placeholder: `${IG}/bmw-m4-csl-white-street.webp`,
        alt: "White BMW M4 CSL parked on a downtown street at dusk.",
      },
      {
        id: "gt3-warehouse",
        title: "911 GT3",
        context: "The Warehouse",
        aspect: "3/4",
        placeholder: `${IG}/porsche-911-gt3-white-rear-industrial.webp`,
        alt: "White Porsche 911 GT3 rear, photographed against an industrial backdrop.",
      },
      {
        id: "gt3-cup",
        title: "911 GT3 Cup",
        context: "Track Day",
        aspect: "3/4",
        placeholder: `${IG}/porsche-911-gt3-cup-red-track.webp`,
        alt: "Red Porsche 911 GT3 Cup car on a track paddock during a race weekend.",
      },
    ] satisfies WorkTile[],
  },

  services: {
    eyebrow: "Practice",
    sectionTitle: "Services",
    items: [
      {
        number: "01",
        title: "Photography",
        body: "Visual storytelling for the automotive world. Editorial stills shot on the line between machinery and myth.",
        placeholder: `${IG}/porsche-911-gt3-white-rear-wing.webp`,
        alt: "White Porsche 911 GT3 rear wing detail — editorial automotive photography sample.",
      },
      {
        number: "02",
        title: "Event Production",
        body: "Full-scale coordination and content coverage. From intimate meets to brand activations built around culture.",
        placeholder: `${IG}/suburban-event-festival-motores.webp`,
        alt: "Suburban Drivers Festival de Motores event — crowd and cars on display.",
      },
      {
        number: "03",
        title: "Brand Partnerships",
        body: "Narrative content for premium automotive brands. Campaign work with the voice of the community embedded.",
        placeholder: `${IG}/lamborghini-revuelto-white-red-carpet.webp`,
        alt: "White Lamborghini Revuelto on a red carpet at a brand activation.",
      },
    ],
  },

  suburbanDrivers: {
    eyebrow: "A Parallel Venture",
    headline: "SUBURBAN DRIVERS",
    tiles: [
      {
        id: "sd-breyner-track",
        placeholder: `${IG}/breyner-porsche-cap-track.webp`,
        alt: "Steveon the grid at a track day, Porsche cap, camera in hand.",
        caption: "On The Grid",
      },
      {
        id: "sd-viper-meet",
        placeholder: `${IG}/dodge-viper-yellow-meet.webp`,
        alt: "Yellow Dodge Viper at a Suburban Drivers car meet.",
        caption: "Viper Meet",
      },
      {
        id: "sd-moto-kawasaki",
        placeholder: `${IG}/motorcycle-meet-kawasaki-green.webp`,
        alt: "Green Kawasaki motorcycle at a bike-and-car meet.",
        caption: "Two-Wheel Chapter",
      },
      {
        id: "sd-revuelto-carpet",
        placeholder: `${IG}/lamborghini-revuelto-white-red-carpet.webp`,
        alt: "White Lamborghini Revuelto on a red carpet.",
        caption: "Revuelto, Red Carpet",
      },
      {
        id: "sd-mercedes-w124",
        placeholder: `${IG}/mercedes-w124-slammed-white.webp`,
        alt: "Slammed white Mercedes W124 — street build.",
        caption: "Slammed W124",
      },
      {
        id: "sd-mustang-classic",
        placeholder: `${IG}/ford-mustang-classic-black-1960s.webp`,
        alt: "Classic 1960s black Ford Mustang.",
        caption: "Classic Mustang",
      },
      {
        id: "sd-breyner-green-porsche",
        placeholder: `${IG}/breyner-green-porsche-friend.webp`,
        alt: "Stevewith a friend in front of a green Porsche.",
        caption: "Friends & Machinery",
      },
      {
        id: "sd-california-gravel",
        placeholder: `${IG}/ferrari-california-red-gravel.webp`,
        alt: "Red Ferrari California on gravel, daylight.",
        caption: "California, Gravel",
      },
      {
        id: "sd-rx7-red",
        placeholder: `${IG}/mazda-rx7-red-front.webp`,
        alt: "Red Mazda RX-7 front view at a meet.",
        caption: "RX-7",
      },
      {
        id: "sd-tiburon-paddock",
        placeholder: `${IG}/hyundai-tiburon-racing-71.webp`,
        alt: "Hyundai Tiburon race car #71 in the paddock.",
        caption: "Paddock 71",
      },
      {
        id: "sd-civic-racing",
        placeholder: `${IG}/honda-civic-yellow-racing-197.webp`,
        alt: "Yellow Honda Civic racing car #197.",
        caption: "Civic 197",
      },
      {
        id: "sd-breyner-hotlap",
        placeholder: `${IG}/breyner-strawhat-hotlap.webp`,
        alt: "Stevebetween sessions at a track — straw hat, hotlap board.",
        caption: "Hotlap Board",
      },
      {
        id: "sd-urus-mall",
        placeholder: `${IG}/lamborghini-urus-green-mall.webp`,
        alt: "Green Lamborghini Urus outside a downtown mall display.",
        caption: "Urus Display",
      },
      {
        id: "sd-718-pink-mall",
        placeholder: `${IG}/porsche-718-gt4-pink-mall.webp`,
        alt: "Pink Porsche 718 GT4 at a mall activation.",
        caption: "GT4 Pink",
      },
    ] satisfies SDTile[],
    blurb: "Sports & Exotic Car Club · Est. 2019 · 11,000+ members strong.",
    blurbEs: "Club de Autos Deportivos y Exóticos · Est. 2019 · 11,000+ miembros.",
  },

  about: {
    eyebrow: "About",
    title: "Behind the Lens",
    portraitPrimary: {
      src: `${IG}/breyner-portrait-911-gt3.webp`,
      alt: "Steve LePerk portrait with a Porsche 911 GT3 in frame — editorial.",
    },
    portraitAccent: {
      src: `${IG}/breyner-strawhat-flag.webp`,
      alt: "Stevein a straw hat holding the Costa Rica flag on a racing grid.",
    },
    bio: [
      "Steve LePerk is an automotive photographer and audiovisual producer based in Costa Rica. His work lives at the intersection of editorial precision and insider access — built from six years of shaping the country's exotic-car community from within.",
      "As the founder of Suburban Drivers, he documents what he helped create: a culture of machinery, craft, and night. Every frame is made by someone who was in the room before the camera came out.",
    ],
    stats: [
      { value: "6+", label: "Years Behind the Lens" },
      { value: "120+", label: "Events Covered" },
      { value: "11K", label: "Community Members" },
    ],
  },

  contact: {
    eyebrow: "Contact",
    headline: "Let's make something worth watching.",
    body: "Brand campaigns, commissioned shoots, event coverage, or press inquiries.",
    projectTypes: [
      "Photography commission",
      "Event coverage",
      "Brand partnership",
      "Editorial / press",
      "Other",
    ],
    channels: [
      { label: "Instagram", href: "https://instagram.com/steve_leperk" },
      { label: "Suburban Drivers", href: "https://instagram.com/suburbandrivers" },
      { label: "Email", href: "mailto:hello@breynerleperk.com" },
    ],
  },

  footer: {
    wordmark: "STEVE LEPERK",
    tagline: "The Nocturnal Monograph",
    line: "Automotive storyteller documenting the intersection of machinery and culture through a cinematic lens.",
    socials: [
      { label: "Instagram", href: "https://instagram.com/steve_leperk" },
      { label: "Suburban Drivers", href: "https://instagram.com/suburbandrivers" },
    ],
    nav: [
      { href: "#work", label: "Work" },
      { href: "#services", label: "Services" },
      { href: "#suburban-drivers", label: "Suburban Drivers" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    location: "San José · Costa Rica",
    copyright: `© ${new Date().getFullYear()} Steve LePerk. All rights reserved.`,
  },
} as const;
