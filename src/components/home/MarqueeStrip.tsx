import { services } from "@/data/services";

export default function MarqueeStrip() {
  // Duplicate for infinite scroll effect
  const items = [...services, ...services];

  return (
    <section className="bg-sky-500 py-4 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((service, i) => (
          <span key={i} className="flex items-center gap-3 mx-6">
            <span
              className="w-2 h-2 bg-white/40 shrink-0"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
            />
            <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
              {service.title}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
