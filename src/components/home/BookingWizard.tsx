"use client";

import { useState } from "react";
import {
  Home, Hammer, ChefHat, DoorOpen, Scissors, TreePine, Building2, Palette, PaintBucket,
  CheckCircle2, ArrowRight, ArrowLeft, Phone, Send, Loader2, Shield, Check,
  Clock, Ruler, User, type LucideIcon,
} from "lucide-react";
import { company } from "@/data/company";

interface ServiceOption { id: string; label: string; icon: LucideIcon; desc: string; }
interface ScopeOption { id: string; label: string; }
interface TimelineOption { id: string; label: string; desc: string; }

interface WizardData {
  service: string;
  scope: string;
  scopeNotes: string;
  timeline: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  details: string;
}

const SERVICES: ServiceOption[] = [
  { id: "interior", label: "Interior Painting", icon: PaintBucket, desc: "Walls, ceilings, accent walls" },
  { id: "exterior", label: "Exterior Painting", icon: Home, desc: "Siding, stucco, brick, trim" },
  { id: "cabinets", label: "Kitchen Cabinets", icon: ChefHat, desc: "Sprayed, factory-smooth finish" },
  { id: "trim", label: "Trim & Doors", icon: DoorOpen, desc: "Baseboards, crown, casings" },
  { id: "drywall", label: "Drywall Repair", icon: Hammer, desc: "Patching + prep before paint" },
  { id: "wallpaper", label: "Wallpaper Removal", icon: Scissors, desc: "Strip, repair, repaint" },
  { id: "decks", label: "Decks & Fences", icon: TreePine, desc: "Staining, sealing, refinish" },
  { id: "commercial", label: "Commercial", icon: Building2, desc: "Offices, rentals, retail" },
  { id: "color", label: "Color Consultation", icon: Palette, desc: "Free with every quote" },
];

const SCOPES: ScopeOption[] = [
  { id: "single-room", label: "Single Room" },
  { id: "few-rooms", label: "A Few Rooms" },
  { id: "whole-interior", label: "Whole Interior" },
  { id: "whole-exterior", label: "Whole Exterior" },
  { id: "cabinets-only", label: "Cabinets Only" },
  { id: "trim-only", label: "Trim / Doors Only" },
  { id: "not-sure", label: "Not Sure Yet" },
];

const TIMELINES: TimelineOption[] = [
  { id: "asap", label: "ASAP", desc: "Ready to start within a month" },
  { id: "1-3", label: "1–3 Months", desc: "Planning, getting quotes" },
  { id: "3-6", label: "3–6 Months", desc: "Early planning phase" },
  { id: "6-plus", label: "6+ Months", desc: "Long-term project" },
  { id: "exploring", label: "Just Exploring", desc: "Gathering ideas & info" },
];

const STEPS = [
  { num: 1, label: "Project",  icon: Hammer },
  { num: 2, label: "Scope",    icon: Ruler },
  { num: 3, label: "Timeline", icon: Clock },
  { num: 4, label: "Contact",  icon: User },
  { num: 5, label: "Confirm",  icon: CheckCircle2 },
];

const INPUT =
  "w-full bg-paint-ink/60 border border-paint-cream/20 px-4 py-3.5 text-sm text-paint-cream placeholder:text-paint-cream/35 focus:border-paint-clay focus:bg-paint-ink focus:outline-none transition-colors";

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState<WizardData>({
    service: "", scope: "", scopeNotes: "", timeline: "",
    firstName: "", lastName: "", phone: "", email: "", address: "", details: "",
  });

  const update = (f: Partial<WizardData>) => setData((p) => ({ ...p, ...f }));

  const canAdvance = () => {
    switch (step) {
      case 1: return !!data.service;
      case 2: return !!data.scope;
      case 3: return !!data.timeline;
      case 4: return !!data.firstName && !!data.phone;
      default: return true;
    }
  };

  const serviceName  = SERVICES.find((s) => s.id === data.service)?.label || "";
  const scopeName    = SCOPES.find((s) => s.id === data.scope)?.label || "";
  const timelineName = TIMELINES.find((t) => t.id === data.timeline)?.label || "";

  async function handleSubmit() {
    setStatus("loading");
    const fd = new FormData();
    fd.append("service", serviceName);
    fd.append("scope", scopeName);
    fd.append("scopeNotes", data.scopeNotes);
    fd.append("timeline", timelineName);
    fd.append("firstName", data.firstName);
    fd.append("lastName", data.lastName);
    fd.append("phone", data.phone);
    fd.append("email", data.email);
    fd.append("address", data.address);
    fd.append("details", data.details);
    fd.append(
      "message",
      `Wizard — Service: ${serviceName} · Scope: ${scopeName} · Timeline: ${timelineName} · Address: ${data.address} · Details: ${data.details || "—"}`,
    );
    try {
      const res = await fetch(company.formAction, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  /* ─── SUCCESS ─── */
  if (status === "success") {
    return (
      <div className="relative bg-paint-ink text-paint-cream border border-paint-cream/15 shadow-2xl shadow-black/40">
        <div className="tick-tape opacity-60" />
        <div className="px-8 md:px-12 py-14 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-paint-clay text-paint-cream mb-6">
            <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <span className="stencil text-paint-clay">Request Received</span>
          <h3 className="mt-3 display-heavy uppercase text-3xl md:text-4xl text-paint-cream">
            We&rsquo;ll be in touch.
          </h3>
          <p className="mt-3 text-paint-cream/70 max-w-md mx-auto">
            {serviceName}{timelineName ? ` · ${timelineName}` : ""}
          </p>
          <p className="mt-2 text-paint-cream/50 text-sm max-w-md mx-auto">
            Quote back within 24 hours. Prefer a call? Reach us directly anytime.
          </p>
          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-8 btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust"
          >
            <Phone className="w-4 h-4" />
            {company.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-paint-ink text-paint-cream border border-paint-cream/15 shadow-2xl shadow-black/40">
      {/* Top tick-tape */}
      <div className="tick-tape opacity-60" />

      {/* Header */}
      <div className="px-6 md:px-10 pt-8 pb-5 border-b border-paint-cream/10 flex items-center justify-between">
        <div>
          <span className="stencil text-paint-clay">Work Order · Draft</span>
          <p className="mt-1 display-cond text-xl md:text-2xl text-paint-cream">
            Step {step} of 5 — {STEPS[step - 1]?.label}
          </p>
        </div>
        <span className="hidden sm:inline-flex display-heavy italic text-4xl md:text-5xl text-paint-clay leading-none">
          {String(step).padStart(2, "0")}
        </span>
      </div>

      {/* Step dots */}
      <div className="px-6 md:px-10 pt-6">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((s) => {
            const completed = s.num < step;
            const current = step === s.num;
            return (
              <button
                key={s.num}
                onClick={() => { if (s.num < step) setStep(s.num); }}
                disabled={s.num > step}
                className={`flex items-center gap-2 stencil transition-colors ${
                  current ? "text-paint-clay" : completed ? "text-paint-cream cursor-pointer" : "text-paint-cream/30"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-all ${
                    current
                      ? "bg-paint-clay text-paint-cream"
                      : completed
                      ? "bg-paint-cream text-paint-ink"
                      : "border border-paint-cream/25 text-paint-cream/40"
                  }`}
                >
                  {completed ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
        <div className="h-[3px] bg-paint-cream/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-paint-clay transition-all duration-500"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-10 py-8 md:py-10">

        {/* ─── Step 1 ─── */}
        {step === 1 && (
          <div>
            <h3 className="display-heavy uppercase text-2xl md:text-3xl text-paint-cream leading-tight">
              What are <span className="text-paint-clay">you painting?</span>
            </h3>
            <p className="mt-2 text-paint-cream/60 text-sm">Pick the project that fits best — we handle everything.</p>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2.5">
              {SERVICES.map((svc) => {
                const Icon = svc.icon;
                const selected = data.service === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => update({ service: svc.id })}
                    className={`relative p-4 md:p-5 text-left transition-all border ${
                      selected
                        ? "border-paint-clay bg-paint-clay text-paint-cream"
                        : "border-paint-cream/15 bg-paint-ink/40 hover:border-paint-cream/50 hover:bg-paint-ink/70"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-3" strokeWidth={1.5} />
                    <h4 className="display-cond text-base md:text-lg text-paint-cream">{svc.label}</h4>
                    <p className={`mt-1 text-xs leading-snug ${selected ? "text-paint-cream/85" : "text-paint-cream/50"}`}>
                      {svc.desc}
                    </p>
                    {selected && (
                      <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-paint-cream" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Step 2 ─── */}
        {step === 2 && (
          <div>
            <h3 className="display-heavy uppercase text-2xl md:text-3xl text-paint-cream leading-tight">
              How <span className="text-paint-clay">big a job?</span>
            </h3>
            <p className="mt-2 text-paint-cream/60 text-sm">Ballpark is fine — we&rsquo;ll nail it down together.</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SCOPES.map((scope) => (
                <button
                  key={scope.id}
                  onClick={() => update({ scope: scope.id })}
                  className={`px-4 py-2.5 stencil border transition-all ${
                    data.scope === scope.id
                      ? "border-paint-clay bg-paint-clay text-paint-cream"
                      : "border-paint-cream/20 text-paint-cream/75 hover:border-paint-cream/60 hover:text-paint-cream"
                  }`}
                >
                  {scope.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <label className="stencil text-paint-cream/50 mb-2 block">Anything specific? (optional)</label>
              <textarea
                value={data.scopeNotes}
                onChange={(e) => update({ scopeNotes: e.target.value })}
                placeholder="e.g. 3 bedrooms + hallway, ceiling included, specific colors in mind..."
                rows={3}
                className={`${INPUT} resize-none`}
              />
            </div>
          </div>
        )}

        {/* ─── Step 3 ─── */}
        {step === 3 && (
          <div>
            <h3 className="display-heavy uppercase text-2xl md:text-3xl text-paint-cream leading-tight">
              When do you <span className="text-paint-clay">want to start?</span>
            </h3>
            <p className="mt-2 text-paint-cream/60 text-sm">No rush — even &ldquo;just exploring&rdquo; is fine.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {TIMELINES.map((tl) => {
                const selected = data.timeline === tl.id;
                return (
                  <button
                    key={tl.id}
                    onClick={() => update({ timeline: tl.id })}
                    className={`relative p-4 md:p-5 text-left transition-all border ${
                      selected
                        ? "border-paint-clay bg-paint-clay text-paint-cream"
                        : "border-paint-cream/15 bg-paint-ink/40 hover:border-paint-cream/50 hover:bg-paint-ink/70"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <Clock className="w-5 h-5" strokeWidth={1.5} />
                      <h4 className="display-cond text-base md:text-lg text-paint-cream">{tl.label}</h4>
                    </div>
                    <p className={`text-xs md:text-sm pl-8 ${selected ? "text-paint-cream/85" : "text-paint-cream/55"}`}>
                      {tl.desc}
                    </p>
                    {selected && (
                      <CheckCircle2 className="absolute top-4 right-4 w-4 h-4 text-paint-cream" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Step 4 ─── */}
        {step === 4 && (
          <div>
            <h3 className="display-heavy uppercase text-2xl md:text-3xl text-paint-cream leading-tight">
              Your <span className="text-paint-clay">contact info.</span>
            </h3>
            <p className="mt-2 text-paint-cream/60 text-sm">So we can reach out about your project.</p>

            <div className="mt-6 space-y-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="stencil text-paint-cream/50 mb-1.5 block">First Name *</label>
                  <input value={data.firstName} onChange={(e) => update({ firstName: e.target.value })} placeholder="First name" className={INPUT} />
                </div>
                <div>
                  <label className="stencil text-paint-cream/50 mb-1.5 block">Last Name</label>
                  <input value={data.lastName} onChange={(e) => update({ lastName: e.target.value })} placeholder="Last name" className={INPUT} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="stencil text-paint-cream/50 mb-1.5 block">Phone *</label>
                  <input value={data.phone} onChange={(e) => update({ phone: e.target.value })} type="tel" placeholder="(613) 555-0100" className={INPUT} />
                </div>
                <div>
                  <label className="stencil text-paint-cream/50 mb-1.5 block">Email</label>
                  <input value={data.email} onChange={(e) => update({ email: e.target.value })} type="email" placeholder="you@email.com" className={INPUT} />
                </div>
              </div>
              <div>
                <label className="stencil text-paint-cream/50 mb-1.5 block">Project Address</label>
                <input value={data.address} onChange={(e) => update({ address: e.target.value })} placeholder="Address or neighbourhood in Ottawa / Gatineau" className={INPUT} />
              </div>
              <div>
                <label className="stencil text-paint-cream/50 mb-1.5 block">Anything else?</label>
                <textarea value={data.details} onChange={(e) => update({ details: e.target.value })} placeholder="Budget range, inspiration, specific requests..." rows={3} className={`${INPUT} resize-none`} />
              </div>
            </div>
          </div>
        )}

        {/* ─── Step 5 ─── */}
        {step === 5 && (
          <div>
            <h3 className="display-heavy uppercase text-2xl md:text-3xl text-paint-cream leading-tight">
              Review <span className="text-paint-clay">& submit.</span>
            </h3>
            <p className="mt-2 text-paint-cream/60 text-sm">Looks good? Hit submit — we&rsquo;ll be in touch within 24 hours.</p>

            <div className="mt-6 border border-paint-cream/15 divide-y divide-paint-cream/10 bg-paint-ink/40">
              {[
                { label: "Project",  value: serviceName,                                                 edit: 1, icon: Hammer },
                { label: "Scope",    value: data.scopeNotes ? `${scopeName} · ${data.scopeNotes}` : scopeName, edit: 2, icon: Ruler },
                { label: "Timeline", value: timelineName,                                                edit: 3, icon: Clock },
                { label: "Contact",  value: `${data.firstName} ${data.lastName} · ${data.phone}${data.email ? ` · ${data.email}` : ""}${data.address ? ` · ${data.address}` : ""}`, edit: 4, icon: User },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="p-4 md:p-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 bg-paint-clay text-paint-cream flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <p className="stencil text-paint-cream/45 mb-0.5">{row.label}</p>
                        <p className="display-cond text-paint-cream text-sm md:text-base break-words">{row.value}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(row.edit)}
                      className="stencil text-paint-cream/50 hover:text-paint-clay transition-colors shrink-0"
                    >
                      Edit
                    </button>
                  </div>
                );
              })}

              {data.details && (
                <div className="p-4 md:p-5">
                  <p className="stencil text-paint-cream/45 mb-1">Notes</p>
                  <p className="text-sm text-paint-cream/80">{data.details}</p>
                </div>
              )}
            </div>

            <div className="mt-5 p-4 md:p-5 bg-paint-clay/15 border border-paint-clay/40 flex items-start gap-3">
              <Shield className="w-5 h-5 text-paint-clay shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="display-cond text-paint-cream text-sm md:text-base">Free Estimate · No Obligation</p>
                <p className="text-xs text-paint-cream/65 mt-1">
                  We&rsquo;ll review your project, schedule a consultation, and give you an honest quote. Zero pressure.
                </p>
              </div>
            </div>

            {status === "error" && (
              <div className="mt-4 p-3 bg-paint-rust/20 border border-paint-rust text-paint-cream text-sm">
                Something went wrong. Try again, or call us at{" "}
                <a href={`tel:${company.phoneRaw}`} className="underline font-bold text-paint-clay">{company.phone}</a>.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="px-6 md:px-10 py-5 border-t border-paint-cream/10 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center gap-2 stencil text-paint-cream/55 hover:text-paint-cream transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step < 5 ? (
          <button
            onClick={() => canAdvance() && step < 5 && setStep(step + 1)}
            disabled={!canAdvance()}
            className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust disabled:opacity-50"
          >
            {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {status === "loading" ? "Submitting..." : "Submit Request"}
          </button>
        )}
      </div>
    </div>
  );
}
