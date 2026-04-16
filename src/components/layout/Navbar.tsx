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

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 12), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => { setDrawerOpen(false); }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <nav
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-paint-ink/95 backdrop-blur-md border-b border-paint-cream/10"
              : "bg-gradient-to-b from-paint-ink/70 via-paint-ink/40 to-transparent"
          )}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 h-16 md:h-20 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="w-9 h-9 bg-paint-clay flex items-center justify-center shrink-0">
                <span className="display-heavy text-paint-cream text-sm leading-none">UP</span>
              </span>
              <div className="leading-tight">
                <span className="display-cond text-paint-cream text-lg md:text-xl block">UPGRADE PRO</span>
                <span className="stencil text-paint-cream/55 block">Ottawa Painters</span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative stencil transition-colors duration-300",
                      isActive ? "text-paint-clay" : "text-paint-cream/70 hover:text-paint-cream"
                    )}
                  >
                    {link.label}
                    {isActive && <span className="absolute -bottom-2 left-0 right-0 h-px bg-paint-clay" />}
                  </Link>
                );
              })}

              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 text-sm text-paint-cream/75 hover:text-paint-cream transition-colors">
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>

              <Link href={ctaLink.href} className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust !py-3 !px-5">
                {ctaLink.label}
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a href={`tel:${company.phoneRaw}`} className="p-2 text-paint-cream hover:text-paint-clay" aria-label="Call now">
                <Phone className="h-5 w-5" />
              </a>
              <button onClick={() => setDrawerOpen(true)} className="p-2 text-paint-cream hover:text-paint-clay" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
