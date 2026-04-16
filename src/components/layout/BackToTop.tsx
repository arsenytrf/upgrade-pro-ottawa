"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    setVisible(scrollTop > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const circumference = 2 * Math.PI * 18;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed z-40 flex items-center justify-center",
        "bottom-6 left-6 w-11 h-11",
        "bg-white hover:bg-paint-clay/10 text-paint-ink border border-paint-ink/12 shadow-lg",
        "rounded-full transition-all duration-300 cursor-pointer",
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paint-ink/10" />
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-paint-clay"
          strokeDasharray={circumference} strokeDashoffset={circumference * (1 - progress)} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.1s ease-out" }} />
      </svg>
      <ArrowUp className="w-4 h-4 relative z-10" />
    </button>
  );
}
