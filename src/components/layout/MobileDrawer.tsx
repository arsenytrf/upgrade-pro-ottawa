"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { navLinks, ctaLink } from "@/data/navigation";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300, mass: 0.8 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 30, stiffness: 300, mass: 0.8 },
  },
} as const;

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 200, delay: 0.1 + i * 0.08 },
  }),
} as const;

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-900/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl overflow-y-auto flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-sky-500 flex items-center justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                  <span className="font-display text-white text-xs font-bold">UP</span>
                </div>
                <div className="leading-tight">
                  <span className="font-display text-sm font-bold tracking-tight text-slate-900 block">
                    UPGRADE PRO
                  </span>
                  <span className="font-display text-[9px] font-semibold tracking-[0.2em] text-sky-600 uppercase block">
                    Ottawa Painters
                  </span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Gradient accent line */}
            <div className="h-[3px] bg-gradient-to-r from-sky-500 via-sky-400 to-sand-400" />

            {/* Navigation links */}
            <nav className="px-7 pt-10 pb-8 space-y-4 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={link.href} onClick={onClose} className="block group">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors uppercase tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-7 h-px bg-slate-100" />

            {/* Contact info */}
            <div className="px-7 py-5 space-y-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm">{company.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Clock className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm">{company.hours.weekday}</span>
              </div>
            </div>

            {/* Licensed badge */}
            <div className="mx-7 flex items-center gap-2 px-4 py-3 bg-sky-50 border border-sky-200">
              <div className="h-2 w-2 bg-sky-500" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
              <span className="text-xs text-sky-700 font-display font-bold tracking-wide">
                FULLY INSURED · EN / FR
              </span>
            </div>

            {/* CTA button */}
            <div className="px-7 py-7">
              <Link
                href={ctaLink.href}
                onClick={onClose}
                className="relative flex items-center justify-center gap-2 w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-display font-bold text-sm tracking-wide overflow-hidden transition-colors group shadow-lg shadow-sky-500/20"
                style={{ clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  FREE ESTIMATE
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
