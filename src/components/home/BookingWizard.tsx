"use client";

import { useState } from "react";
import {
  Home,
  Hammer,
  ChefHat,
  DoorOpen,
  Scissors,
  TreePine,
  Building2,
  Palette,
  PaintBucket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Send,
  Loader2,
  Shield,
  Check,
  Clock,
  Ruler,
  User,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/data/company";

interface ServiceOption {
  id: string;
  label: string;
  icon: LucideIcon;
  desc: string;
}

interface ScopeOption {
  id: string;
  label: string;
}

interface TimelineOption {
  id: string;
  label: string;
  desc: string;
}

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
  { num: 1, label: "Project", icon: Hammer },
  { num: 2, label: "Scope", icon: Ruler },
  { num: 3, label: "Timeline", icon: Clock },
  { num: 4, label: "Contact", icon: User },
  { num: 5, label: "Confirm", icon: CheckCircle2 },
];

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState<WizardData>({
    service: "",
    scope: "",
    scopeNotes: "",
    timeline: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    details: "",
  });

  function update(fields: Partial<WizardData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function canAdvance() {
    switch (step) {
      case 1: return !!data.service;
      case 2: return !!data.scope;
      case 3: return !!data.timeline;
      case 4: return !!data.firstName && !!data.phone;
      default: return true;
    }
  }

  const serviceName = SERVICES.find((s) => s.id === data.service)?.label || "";
  const scopeName = SCOPES.find((s) => s.id === data.scope)?.label || "";
  const timelineName = TIMELINES.find((t) => t.id === data.timeline)?.label || "";

  async function handleSubmit() {
    setStatus("loading");
    const formData = new FormData();
    formData.append("service", serviceName);
    formData.append("scope", scopeName);
    formData.append("scopeNotes", data.scopeNotes);
    formData.append("timeline", timelineName);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("details", data.details);
    formData.append(
      "message",
      `Wizard Submission — Service: ${serviceName}, Scope: ${scopeName}, Timeline: ${timelineName}, Address: ${data.address}, Details: ${data.details || "—"}`,
    );

    try {
      const res = await fetch(company.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-white border border-slate-300 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none transition-colors";

  /* ─── SUCCESS ─── */
  if (status === "success") {
    return (
      <div className="relative bg-white border border-slate-200 p-8 md:p-12 text-center">
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900"
          aria-hidden="true"
        />
        <div
          className="w-20 h-20 bg-slate-900 flex items-center justify-center mx-auto mb-6"

        >
          <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-slate-900 mb-3">
          Request Received
        </h3>
        <p className="text-slate-500 max-w-md mx-auto mb-2 text-sm md:text-base">
          {serviceName} · {timelineName}
        </p>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
          We&rsquo;ll reach out within 24 hours to schedule a consultation and walk you through next steps.
        </p>
        <a
          href={`tel:${company.phoneRaw}`}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-wider transition-colors"

        >
          <Phone className="w-4 h-4" />
          Or call us — {company.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="relative bg-white border border-slate-200 p-6 md:p-10">
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900"
        aria-hidden="true"
      />

      {/* ─── Progress bar ─── */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((s) => {
            const completed = s.num < step;
            const current = step === s.num;
            return (
              <button
                key={s.num}
                onClick={() => { if (s.num < step) setStep(s.num); }}
                className={`flex items-center gap-2 text-[10px] md:text-xs font-display font-bold uppercase tracking-wider transition-colors ${
                  current ? "text-slate-900" : completed ? "text-slate-900 cursor-pointer" : "text-slate-400"
                }`}
                disabled={s.num > step}
              >
                <div
                  className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-xs font-bold transition-all ${
                    current
                      ? "bg-slate-900 text-white"
                      : completed
                      ? "bg-slate-100 text-slate-900 border border-slate-900"
                      : "bg-slate-50 text-slate-400 border border-slate-200"
                  }`}

                >
                  {completed ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
        <div className="h-[2px] bg-slate-100 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-slate-900 transition-all duration-500"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* ─── Step 1: Project Type ─── */}
      {step === 1 && (
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">
            What are you repainting?
          </h2>
          <p className="text-slate-500 text-sm mb-6 md:mb-8">
            Pick the type of paint job that fits best.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              const selected = data.service === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => update({ service: svc.id })}
                  className={`relative p-4 md:p-5 text-left transition-all border ${
                    selected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white hover:border-slate-900"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mb-3 ${selected ? "text-white" : "text-slate-900"}`}
                    strokeWidth={1.5}
                  />
                  <h3 className={`font-display font-bold text-xs md:text-sm uppercase tracking-wide mb-1 ${selected ? "text-white" : "text-slate-900"}`}>
                    {svc.label}
                  </h3>
                  <p className={`text-[11px] md:text-xs leading-snug ${selected ? "text-slate-300" : "text-slate-500"}`}>
                    {svc.desc}
                  </p>
                  {selected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── Step 2: Scope ─── */}
      {step === 2 && (
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">
            How big is the project?
          </h2>
          <p className="text-slate-500 text-sm mb-6 md:mb-8">
            Ballpark is fine — we&rsquo;ll nail it down together.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {SCOPES.map((scope) => (
              <button
                key={scope.id}
                onClick={() => update({ scope: scope.id })}
                className={`px-4 py-2.5 text-xs md:text-sm font-display font-bold uppercase tracking-wider border transition-all ${
                  data.scope === scope.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 text-slate-700 hover:border-slate-900"
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>

          <div>
            <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-2 block">
              Anything specific about scope? (Optional)
            </label>
            <textarea
              value={data.scopeNotes}
              onChange={(e) => update({ scopeNotes: e.target.value })}
              placeholder="e.g. 3 bedrooms + hallway, ceiling included, specific colors in mind..."
              rows={3}
              className={`${inputCls} resize-none`}
            />
          </div>
        </div>
      )}

      {/* ─── Step 3: Timeline ─── */}
      {step === 3 && (
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">
            When do you want to start?
          </h2>
          <p className="text-slate-500 text-sm mb-6 md:mb-8">
            No rush — even &ldquo;just exploring&rdquo; is fine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TIMELINES.map((tl) => {
              const selected = data.timeline === tl.id;
              return (
                <button
                  key={tl.id}
                  onClick={() => update({ timeline: tl.id })}
                  className={`relative p-4 md:p-5 text-left transition-all border ${
                    selected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white hover:border-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <Clock
                      className={`w-5 h-5 ${selected ? "text-white" : "text-slate-900"}`}
                      strokeWidth={1.5}
                    />
                    <h3 className={`font-display font-bold text-sm md:text-base uppercase tracking-wide ${selected ? "text-white" : "text-slate-900"}`}>
                      {tl.label}
                    </h3>
                  </div>
                  <p className={`text-xs md:text-sm leading-snug pl-8 ${selected ? "text-slate-300" : "text-slate-500"}`}>
                    {tl.desc}
                  </p>
                  {selected && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── Step 4: Contact ─── */}
      {step === 4 && (
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">
            Your information
          </h2>
          <p className="text-slate-500 text-sm mb-6 md:mb-8">
            So we can reach out about your project.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  First Name *
                </label>
                <input
                  value={data.firstName}
                  onChange={(e) => update({ firstName: e.target.value })}
                  placeholder="First name"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Last Name
                </label>
                <input
                  value={data.lastName}
                  onChange={(e) => update({ lastName: e.target.value })}
                  placeholder="Last name"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Phone *
                </label>
                <input
                  value={data.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  type="tel"
                  placeholder="(343) 555-0100"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  value={data.email}
                  onChange={(e) => update({ email: e.target.value })}
                  type="email"
                  placeholder="you@email.com"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                Project Address
              </label>
              <input
                value={data.address}
                onChange={(e) => update({ address: e.target.value })}
                placeholder="Address or city in Ottawa / Gatineau"
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-[11px] font-display font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">
                Anything else?
              </label>
              <textarea
                value={data.details}
                onChange={(e) => update({ details: e.target.value })}
                placeholder="Budget range, inspiration, specific requests..."
                rows={3}
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ─── Step 5: Confirm ─── */}
      {step === 5 && (
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">
            Review & Submit
          </h2>
          <p className="text-slate-500 text-sm mb-6 md:mb-8">
            Looks good? Hit submit and we&rsquo;ll be in touch within 24 hours.
          </p>

          <div className="border border-slate-200 divide-y divide-slate-100">
            {[
              {
                label: "Project",
                value: serviceName,
                edit: 1,
                icon: Hammer,
              },
              {
                label: "Scope",
                value: data.scopeNotes ? `${scopeName} · ${data.scopeNotes}` : scopeName,
                edit: 2,
                icon: Ruler,
              },
              {
                label: "Timeline",
                value: timelineName,
                edit: 3,
                icon: Clock,
              },
              {
                label: "Contact",
                value: `${data.firstName} ${data.lastName} · ${data.phone}${data.email ? ` · ${data.email}` : ""}${data.address ? ` · ${data.address}` : ""}`,
                edit: 4,
                icon: User,
              },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="p-4 md:p-5 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div
                      className="w-10 h-10 bg-slate-900 flex items-center justify-center shrink-0"

                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {row.label}
                      </p>
                      <p className="font-display font-bold text-sm text-slate-900 break-words">
                        {row.value}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(row.edit)}
                    className="text-[10px] font-display font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider transition-colors shrink-0"
                  >
                    Edit
                  </button>
                </div>
              );
            })}

            {data.details && (
              <div className="p-4 md:p-5">
                <p className="text-[10px] font-display font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Notes
                </p>
                <p className="text-sm text-slate-600">{data.details}</p>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 md:p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Shield className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide">
                Free Estimate · No Obligation
              </p>
              <p className="text-xs text-slate-500 mt-1">
                We&rsquo;ll review your project, schedule a consultation, and give you an honest estimate. Zero pressure.
              </p>
            </div>
          </div>

          {status === "error" && (
            <div className="mt-4 p-3 bg-slate-100 border border-slate-900 text-slate-900 text-sm">
              Something went wrong. Try again, or call us at{" "}
              <a href={`tel:${company.phoneRaw}`} className="underline font-bold">
                {company.phone}
              </a>
              .
            </div>
          )}
        </div>
      )}

      {/* ─── Navigation ─── */}
      <div className="flex items-center justify-between mt-8 md:mt-10 pt-6 border-t border-slate-200">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-display font-bold text-xs md:text-sm uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 5 ? (
          <button
            onClick={() => canAdvance() && step < 5 && setStep(step + 1)}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 md:px-8 py-3.5 md:py-4 font-display font-bold text-xs md:text-sm uppercase tracking-wider transition-all"

          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black disabled:opacity-50 text-white px-8 md:px-10 py-3.5 md:py-4 font-display font-bold text-xs md:text-sm uppercase tracking-wider transition-all"

          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {status === "loading" ? "Submitting..." : "Submit Request"}
          </button>
        )}
      </div>
    </div>
  );
}
