const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/upgrade-pro-ottawa" : "";

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
    "Ottawa",
    "Gatineau",
    "Orleans",
    "Kanata",
    "Nepean",
    "Barrhaven",
    "Aylmer",
    "Hull",
    "Stittsville",
    "Rockland",
  ],
  tagline: "Painting Done Right. The First Time.",
  description:
    "Professional interior, exterior, and cabinet painting for Ottawa and Gatineau homes. Meticulous prep, premium materials, and finishes that hold up — year after year.",
  formAction: "https://formspree.io/f/placeholder",
  hours: {
    weekday: "Mon-Sat: 7:00 AM - 7:00 PM",
    weekend: "Sun: By Appointment",
  },
  features: [
    "Fully Insured",
    "Interior & Exterior",
    "Free Estimates",
    "Bilingual — EN / FR",
  ],
  instagram: "https://instagram.com/upgrade_proottawa/",
  facebook: "https://www.facebook.com/share/1DuXE2e1M5/",
};

export const galleryImages = [
  { src: img("/photos/tall-01.webp"), alt: "Freshly painted interior feature wall" },
  { src: img("/photos/land-01.webp"), alt: "Open-concept living room with modern paint finish" },
  { src: img("/photos/land-02.webp"), alt: "Crisp white kitchen cabinet repaint" },
  { src: img("/photos/wide-01.webp"), alt: "Large living space with fresh neutral tones" },
  { src: img("/photos/tall-02.webp"), alt: "Staircase and trim painted with a flawless finish" },
  { src: img("/photos/land-03.webp"), alt: "Dining room with precision cut-in work" },
  { src: img("/photos/wide-02.webp"), alt: "Exterior siding refresh in Ottawa" },
  { src: img("/photos/tall-03.webp"), alt: "Bedroom feature wall with a clean modern hue" },
  { src: img("/photos/land-04.webp"), alt: "Spacious kitchen after full cabinet repaint" },
  { src: img("/photos/tall-04.webp"), alt: "Bathroom refresh with new trim and ceiling" },
];

export const parallaxImage = img("/photos/wide-03.webp");
export const heroImages = {
  tall: img("/photos/tall-05.webp"),
  topRight: img("/photos/land-05.webp"),
  bottomRight: img("/photos/land-06.webp"),
};
