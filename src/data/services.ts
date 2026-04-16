import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim, full rooms. Clean lines, zero splatter, drop cloths on every surface. We move your furniture, protect your floors, and leave the place cleaner than we found it.",
    icon: "PaintBucket",
    slug: "interior",
  },
  {
    title: "Exterior Painting",
    description:
      "Siding, stucco, brick, decks, doors, fences. Proper pressure-washing, scraping, and priming — the part most painters skip. Finishes that hold up through Ottawa winters.",
    icon: "Home",
    slug: "exterior",
  },
  {
    title: "Kitchen Cabinet Painting",
    description:
      "Our specialty. Doors removed, full degrease, sand until smooth, spray only — two coats of primer and three coats of paint. Cured properly before reinstall. Factory-smooth result at a fraction of replacement cost.",
    icon: "ChefHat",
    slug: "cabinets",
  },
  {
    title: "Accent Walls",
    description:
      "Bold colour, textured finishes, feature walls that anchor a room. We handle the prep, masking, and clean edges so the statement lands exactly right.",
    icon: "Palette",
    slug: "accent",
  },
  {
    title: "Trim Work",
    description:
      "Baseboards, crown, casings, interior doors. Sprayed or brushed depending on the look you want �� always dust-free and crisp-edged.",
    icon: "DoorOpen",
    slug: "trim",
  },
];
