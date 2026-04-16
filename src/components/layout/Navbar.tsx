"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";
import { navLinks, ctaLink } from "@/data/navigation";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <nav
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "bg-paint-bone/90 backdrop-blur-xl border-b border-paint-ink/10"
              : "bg-transparent"
          )}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-20 flex items-center justify-between gap-6">
            {/* Logo — serif wordmark + swatch row */}
            <Link href="/" className="flex items-center gap-3 group min-w-0">
              <span className="flex items-center gap-0.5">
                <span className="block w-2 h-2 rounded-full bg-paint-navy" />
                <span className="block w-2 h-2 rounded-full bg-paint-oak" />
                <span className="block w-2 h-2 rounded-full bg-paint-clay" />
              </span>
              <span className="editorial-display-upright text-xl md:text-2xl tracking-tight text-paint-ink truncate">
                Upgrade <em className="editorial-display">Pro</em>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative label-eyebrow transition-colors duration-300",
                      isActive ? "text-paint-ink" : "text-paint-ink/60 hover:text-paint-ink"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-px bg-paint-ink" />
                    )}
                  </Link>
                );
              })}

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-1.5 text-sm text-paint-ink/70 hover:text-paint-ink transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>

              <Link
                href={ctaLink.href}
                className="pill bg-paint-ink text-paint-bone hover:bg-paint-navy text-xs"
              >
                {ctaLink.label}
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="p-2 text-paint-ink hover:text-paint-navy transition-colors"
                aria-label="Call now"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 text-paint-ink hover:text-paint-navy transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16 md:h-20" />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
