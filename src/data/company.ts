const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/upgrade-pro-ottawa" : "";
export const siteUrl = "https://arsenytrf.github.io/upgrade-pro-ottawa";

const img = (p: string) => `${basePath}${p}`;

export const company = {
  name: "Upgrade Pro",
  shortName: "Upgrade Pro",
  phone: "(343) 297-1912",
  phoneRaw: "3432971912",
  email: "zelnychenko@gmail.com",
  owner: "Vasyl Zelnychenko",
  location: "Ottawa, ON",
  serviceArea: "Ottawa & Gatineau",
  cities: [
    "Ottawa","Gatineau","Orleans","Kanata","Nepean",
    "Barrhaven","Aylmer","Hull","Stittsville","Rockland",
  ],
  tagline: "Painting Done Right. The First Time.",
  description:
    "Professional interior, exterior, and kitchen cabinet painting for Ottawa and Gatineau homes. Benjamin Moore and Sherwin-Williams paints, meticulous prep, and finishes that hold up — year after year.",
  formAction: "https://formspree.io/f/placeholder",
  hours: {
    weekday: "Mon-Sat: 7:00 AM - 7:00 PM",
    weekend: "Sun: By Appointment",
  },
  features: ["Fully Insured","Interior & Exterior","Free Estimates","On-Time Delivery"],
  instagram: "https://instagram.com/upgrade_proottawa/",
  facebook: "https://www.facebook.com/share/1DuXE2e1M5/",
};

/* ------------------------------------------------------------------
   All 26 photos, grouped by aspect
   ------------------------------------------------------------------ */
export const wide = [1,2,3,4,5,6,7].map((n) => img(`/photos/wide-${String(n).padStart(2,"0")}.webp`));
export const land = [1,2,3,4,5,6].map((n) => img(`/photos/land-${String(n).padStart(2,"0")}.webp`));
export const tall = [1,2,3,4,5,6,7,8,9,10].map((n) => img(`/photos/tall-${String(n).padStart(2,"0")}.webp`));
export const vert = [1,2,3].map((n) => img(`/photos/vert-${String(n).padStart(2,"0")}.webp`));

/* Hero allocations */
export const heroImages = {
  main:    land[5],      // white kitchen — full-bleed hero backdrop
  portrait: tall[0],     // hero inset portrait card
  thumbs:  [tall[1], tall[2], tall[3]],
};

/* Vasyl portrait */
export const vasylPhoto = img("/photos/vasyl.webp");

/* Section backdrops */
export const sectionImages = {
  stats:    wide[1],
  whyUs:    vasylPhoto,  // Vasyl portrait for "the crew" side
  parallax: wide[2],
  cta:      wide[6],
  area:     wide[5],
  process:  [vert[1], vert[2], tall[4], tall[5]],
};

/* Service cards — 5 photos, one per service (matches services.ts order) */
export const servicePhotos = [
  tall[6],   // interior
  wide[3],   // exterior
  land[0],   // cabinets
  land[5],   // accent walls
  tall[7],   // trim
];

/* Big gallery — the remaining work shots */
export const galleryImages = [
  { src: land[3], alt: "Interior paint — Ottawa home" },
  { src: land[4], alt: "Kitchen cabinet repaint" },
  { src: land[5], alt: "Feature wall" },
  { src: tall[0], alt: "Clean trim work" },
  { src: tall[1], alt: "Bedroom repaint" },
  { src: tall[2], alt: "Hallway refresh" },
  { src: tall[3], alt: "Stair & banister" },
  { src: wide[0], alt: "Full room after" },
  { src: wide[3], alt: "Exterior siding project" },
  { src: land[0], alt: "Kitchen finished" },
];

/* Logo */
export const logoSrc = img("/logo.png");

/* Back-compat */
export const parallaxImage = sectionImages.parallax;
