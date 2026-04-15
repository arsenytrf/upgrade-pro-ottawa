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

  return (
    <div
      className={cn("max-w-3xl mb-12 md:mb-16", alignClasses[align], className)}
    >
      {label && (
        <div className="mb-3 md:mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-bold",
              light ? "text-sky-600" : "text-sky-400"
            )}
          >
            <span className={cn("w-8 h-[3px]", light ? "bg-gradient-to-r from-sky-500 to-sand-400" : "bg-gradient-to-r from-sky-400 to-sky-300")} aria-hidden="true" />
            {label}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]",
          light ? "text-slate-950" : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            light ? "text-slate-500" : "text-slate-400"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
