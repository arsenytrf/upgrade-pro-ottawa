const COLORS = [
  { hex: "#1E2E4A", name: "Ottawa Navy",     code: "No. 01" },
  { hex: "#3F5A3B", name: "Studio Moss",     code: "No. 02" },
  { hex: "#8B5E34", name: "Heritage Oak",    code: "No. 03" },
  { hex: "#B8533F", name: "Kiln Clay",       code: "No. 04" },
  { hex: "#2A2826", name: "Kendall Charcoal",code: "No. 05" },
  { hex: "#BDB09A", name: "Mushroom",        code: "No. 06" },
  { hex: "#E7DFCE", name: "Cloud",           code: "No. 07" },
  { hex: "#F5F0E6", name: "Bone",            code: "No. 08" },
  { hex: "#1F1C17", name: "Ink",             code: "No. 09" },
];

export default function MarqueeStrip() {
  const items = [...COLORS, ...COLORS];
  return (
    <section
      aria-label="Signature paint swatches"
      className="bg-paint-bone py-5 overflow-hidden border-y border-paint-ink/10"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-3 mx-6 shrink-0">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: c.hex }} />
            <span className="label-eyebrow text-paint-ink/70">{c.code}</span>
            <span className="editorial-display-upright text-xl text-paint-ink">{c.name}</span>
            <span className="label-eyebrow text-paint-ink/30 ml-2">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
