const BANNER_ITEMS = [
  "Interior Painting","Exterior Painting","Kitchen Cabinets","Accent Walls",
  "Trim Work","Ottawa","Gatineau","Fully Insured","Free Estimates",
];

export default function MarqueeStrip() {
  const items = [...BANNER_ITEMS, ...BANNER_ITEMS];
  return (
    <section aria-label="Services banner" className="bg-paint-clay text-paint-cream py-4 overflow-hidden border-y border-paint-ink/15">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-5 shrink-0 px-5">
            <span className="display-heavy italic text-xl md:text-4xl">{t}</span>
            <span className="w-3 h-3 bg-paint-cream rotate-45" />
          </span>
        ))}
      </div>
    </section>
  );
}
