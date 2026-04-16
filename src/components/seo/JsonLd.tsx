import { company, siteUrl } from "@/data/company";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": `${siteUrl}/#business`,
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-home.png`,
  description: company.description,
  telephone: company.phone,
  email: company.email,
  founder: {
    "@type": "Person",
    name: company.owner,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  areaServed: company.cities.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city === "Gatineau" || city === "Aylmer" || city === "Hull" ? "QC" : "ON",
    },
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, E-Transfer",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Cabinet Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accent Walls" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trim Work" } },
    ],
  },
  sameAs: [company.instagram, company.facebook],
  aggregateRating: undefined, // Add when reviews are available
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: company.name,
  publisher: { "@id": `${siteUrl}/#business` },
  inLanguage: "en-CA",
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
