"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { company } from "@/data/company";
import { BadgeCheck } from "lucide-react";

const serviceOptions = [
  "Interior Painting",
  "Exterior Painting",
  "Kitchen Cabinets",
  "Trim & Doors",
  "Drywall Repair",
  "Wallpaper Removal",
  "Decks & Fences",
  "Commercial",
  "Color Consultation",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    if (formData.get("_gotcha")) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative bg-white border border-slate-200 shadow-xl p-8 md:p-10">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-sky-400 to-sand-400" />
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-sky-50 flex items-center justify-center mx-auto mb-4">
            <BadgeCheck className="w-8 h-8 text-sky-500" />
          </div>
          <h3 className="font-display text-2xl font-black text-slate-900 mb-2">Request Received</h3>
          <p className="text-slate-500 max-w-sm mx-auto">We&rsquo;ll review your project details and get back to you within 24 hours with next steps.</p>
          <button onClick={() => setStatus("idle")} className="mt-6 text-sky-600 hover:text-sky-500 font-display text-sm uppercase tracking-wider font-bold transition-colors duration-300">
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white border border-slate-200 shadow-xl p-6 md:p-8 lg:p-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-sky-400 to-sand-400" />

      <h3 className="font-display text-xl md:text-2xl font-black text-slate-900 mb-1">Request a Quote</h3>
      <p className="text-slate-500 text-sm mb-6">Tell us about your project. We respond within 24 hours.</p>

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
          Something went wrong. Try again or call us at{" "}
          <a href={`tel:${company.phoneRaw}`} className="underline">{company.phone}</a>.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="absolute opacity-0 pointer-events-none h-0 w-0" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cq-name" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Your Name</label>
            <input type="text" id="cq-name" name="name" required placeholder="John Smith" autoComplete="name" className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors placeholder:text-slate-400")} />
          </div>
          <div>
            <label htmlFor="cq-phone" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Phone</label>
            <input type="tel" id="cq-phone" name="phone" required placeholder="(613) 555-1234" autoComplete="tel" className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors placeholder:text-slate-400")} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cq-email" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Email</label>
            <input type="email" id="cq-email" name="email" placeholder="you@email.com" autoComplete="email" className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors placeholder:text-slate-400")} />
          </div>
          <div>
            <label htmlFor="cq-service" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Service</label>
            <select id="cq-service" name="service" required defaultValue="" className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors appearance-none cursor-pointer")}>
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="cq-date" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Target Start Date</label>
          <input type="date" id="cq-date" name="targetStartDate" className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm min-h-[46px] [-webkit-appearance:none] [color-scheme:light] focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors duration-300")} />
        </div>

        <div>
          <label htmlFor="cq-message" className="block text-xs font-display uppercase tracking-wider text-slate-500 mb-1.5 font-bold">Describe Your Project</label>
          <textarea id="cq-message" name="message" rows={4} placeholder="How many rooms, what's being painted, any color ideas, timeline..." className={cn("w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm resize-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors placeholder:text-slate-400")} />
        </div>

        <button type="submit" disabled={status === "submitting"} className={cn("w-full bg-sky-500 text-white font-display uppercase tracking-wider font-bold py-4 text-sm transition-all duration-300 hover:bg-sky-600 active:bg-sky-700 disabled:opacity-60 disabled:pointer-events-none shadow-md shadow-sky-500/20")}>
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : "Send Request"}
        </button>
      </form>
    </div>
  );
}
