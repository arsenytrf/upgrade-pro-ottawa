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
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);

    if (currentY > 200) {
      setHideNav(currentY > lastScrollY);
    } else {
      setHideNav(false);
    }

    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
          hideNav && "-translate-y-full"
        )}
      >
        <nav
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-200/80 shadow-sm"
              : "bg-transparent"
          )}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
            {/* Logo — angular construction mark */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-sky-500 flex items-center justify-center transition-all duration-300 group-hover:bg-sky-600" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                <span className="font-display text-white text-sm font-bold">UP</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="font-display text-[15px] font-bold tracking-tight text-slate-900 block">
                  UPGRADE PRO
                </span>
                <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-sky-600 uppercase block">
                  Ottawa Painters
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-body font-medium tracking-wide transition-colors duration-300",
                      isActive
                        ? "text-sky-600"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-sky-400" />
                    )}
                  </Link>
                );
              })}

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>

              <Link
                href={ctaLink.href}
                className="ml-1 px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-display font-bold tracking-wide transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30"
                style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
              >
                FREE ESTIMATE
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="p-2 text-sky-600 hover:text-sky-700 transition-colors duration-300"
                aria-label="Call now"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed nav */}
      <div className="h-18" />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
