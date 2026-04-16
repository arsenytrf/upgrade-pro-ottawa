"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Clock } from "lucide-react";
import { company, logoSrc } from "@/data/company";
import { navLinks, ctaLink } from "@/data/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const linkVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-paint-ink/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[86%] max-w-sm bg-paint-ink text-paint-cream flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-paint-cream/10">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <img src={logoSrc} alt="Upgrade Pro" className="h-10 w-auto" />
                <span className="sr-only">Upgrade Pro · Ottawa Painters</span>
              </Link>
              <button onClick={onClose} className="p-2 text-paint-cream/60 hover:text-paint-cream" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-6 py-10 flex-1 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 display-heavy uppercase text-5xl text-paint-cream hover:text-paint-clay transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 py-6 border-t border-paint-cream/15 space-y-3">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3 text-paint-cream/80 hover:text-paint-cream">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-paint-cream/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{company.location}</span>
              </div>
              <div className="flex items-center gap-3 text-paint-cream/70">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{company.hours.weekday}</span>
              </div>
              <Link href={ctaLink.href} onClick={onClose} className="mt-4 btn-hard bg-paint-clay text-paint-cream w-full justify-center">
                {ctaLink.label}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
