import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const textColor = light ? "text-paint-ink" : "text-paint-bone";
  const muted = light ? "text-paint-ink/60" : "text-paint-bone/60";

  return (
    <div className={cn("max-w-4xl mb-12 md:mb-16", alignClasses[align], className)}>
      {label && (
        <span className={cn("label-eyebrow", muted)}>{label}</span>
      )}
      <h2 className={cn("mt-4 editorial-display-upright text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]", textColor)}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-6 text-base sm:text-lg leading-relaxed max-w-2xl", muted, align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
