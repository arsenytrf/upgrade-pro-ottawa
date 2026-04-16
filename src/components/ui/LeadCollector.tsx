"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Send, MessageCircle, RotateCcw } from "lucide-react";
import { company, logoSrc } from "@/data/company";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface BotMsg { id: string; role: "bot"; text: string; options?: Option[]; }
interface UserMsg { id: string; role: "user"; text: string; }
type Msg = BotMsg | UserMsg;
interface Option { label: string; value: string; }

interface SessionState {
  step: Step;
  service?: string;
  urgency?: string;
  property?: string;
  description?: string;
  name?: string;
  phone?: string;
  email?: string;
  messages: Msg[];
}

const STORAGE_KEY = "up-lead-collector";

let _msgId = 0;
const uid = () => `m-${Date.now()}-${++_msgId}`;

function loadSession(): SessionState | null {
  if (typeof window === "undefined") return null;
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
function saveSession(state: SessionState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

const serviceOptions: Option[] = [
  { label: "Interior Painting", value: "Interior Painting" },
  { label: "Exterior Painting", value: "Exterior Painting" },
  { label: "Kitchen Cabinets", value: "Kitchen Cabinets" },
  { label: "Trim & Doors", value: "Trim & Doors" },
  { label: "Deck / Fence", value: "Deck / Fence" },
  { label: "Wallpaper Removal", value: "Wallpaper Removal" },
  { label: "Commercial", value: "Commercial" },
  { label: "Something Else", value: "Something Else" },
];

export default function LeadCollector() {
  const prefersReduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [formStep, setFormStep] = useState<"description" | "contact" | null>(null);

  const [descVal, setDescVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const sessionRef = useRef<SessionState>({ step: 1, messages: [] });
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: prefersReduced ? "auto" : "smooth" });
    });
  }, [prefersReduced]);

  const sync = useCallback((partial: Partial<SessionState>) => {
    Object.assign(sessionRef.current, partial);
    if (partial.messages) setMessages([...partial.messages]);
    saveSession(sessionRef.current);
  }, []);

  const addBotMsg = useCallback((msg: Omit<BotMsg, "id" | "role">, delay = 400) => {
    setTyping(true);
    typingTimer.current = setTimeout(() => {
      setTyping(false);
      const full: BotMsg = { ...msg, id: uid(), role: "bot" };
      const updated = [...sessionRef.current.messages, full];
      sync({ messages: updated });
    }, prefersReduced ? 50 : delay);
  }, [sync, prefersReduced]);

  const addUserMsg = useCallback((text: string) => {
    const msg: UserMsg = { id: uid(), role: "user", text };
    sync({ messages: [...sessionRef.current.messages, msg] });
  }, [sync]);

  useEffect(() => { return () => { if (typingTimer.current) clearTimeout(typingTimer.current); }; }, []);
  useEffect(() => { scrollBottom(); }, [messages, typing, scrollBottom]);

  const initRef = useRef(false);
  useEffect(() => {
    if (!open || initRef.current) return;
    initRef.current = true;
    const saved = loadSession();
    if (saved && saved.messages.length > 0) {
      sessionRef.current = saved;
      requestAnimationFrame(() => setMessages([...saved.messages]));
      if (saved.step === 4) setFormStep("description");
      if (saved.step === 5) setFormStep("contact");
      return;
    }
    requestAnimationFrame(() => {
      addBotMsg({ text: "Hey! What are you looking to repaint?", options: serviceOptions }, 500);
    });
  }, [open, addBotMsg]);

  const handleStep1 = useCallback((value: string) => {
    addUserMsg(value);
    sync({ step: 2, service: value });
    addBotMsg({ text: "What\u2019s your timeline?", options: [
      { label: "Within 1 month", value: "Within 1 month" },
      { label: "1-3 months", value: "1-3 months" },
      { label: "3-6 months", value: "3-6 months" },
      { label: "Just exploring", value: "Just exploring" },
    ]});
  }, [addBotMsg, addUserMsg, sync]);

  const handleStep2 = useCallback((value: string) => {
    addUserMsg(value);
    sync({ step: 3, urgency: value });
    addBotMsg({ text: "What type of property?", options: [
      { label: "Single Family Home", value: "Single Family Home" },
      { label: "Townhouse", value: "Townhouse" },
      { label: "Multi-Family", value: "Multi-Family" },
      { label: "Commercial", value: "Commercial" },
      { label: "Other", value: "Other" },
    ]});
  }, [addBotMsg, addUserMsg, sync]);

  const handleStep3 = useCallback((value: string) => {
    addUserMsg(value);
    sync({ step: 4, property: value });
    addBotMsg({ text: "Tell us more about the project." });
    setFormStep("description");
  }, [addBotMsg, addUserMsg, sync]);

  const handleDescriptionSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const val = descVal.trim();
    if (!val) return;
    setDescVal("");
    setFormStep(null);
    addUserMsg(val);
    sync({ step: 5, description: val });
    addBotMsg({ text: "Last step \u2014 how can we reach you?" });
    setTimeout(() => setFormStep("contact"), prefersReduced ? 100 : 500);
  }, [descVal, addBotMsg, addUserMsg, sync, prefersReduced]);

  const handleContactSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const name = nameVal.trim();
    const phone = phoneVal.trim();
    if (!name || !phone) return;
    const email = emailVal.trim();
    setFormStep(null);
    addUserMsg(`${name} \u2022 ${phone}${email ? ` \u2022 ${email}` : ""}`);
    sync({ step: 6, name, phone, email: email || undefined });

    const s = sessionRef.current;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    if (email) formData.append("email", email);
    formData.append("service", s.service ?? "");
    formData.append("urgency", s.urgency ?? "");
    formData.append("property", s.property ?? "");
    formData.append("description", s.description ?? "");
    formData.append("message", `Lead Collector — Service: ${s.service}, Timeline: ${s.urgency}, Property: ${s.property}, Details: ${s.description}`);
    fetch(company.formAction, { method: "POST", body: formData, headers: { Accept: "application/json" } }).catch(() => {});

    addBotMsg({ text: `Got it! We'll review your project and reach out within 24 hours. Call us anytime at ${company.phone}.` });
    setNameVal(""); setPhoneVal(""); setEmailVal("");
  }, [nameVal, phoneVal, emailVal, addBotMsg, addUserMsg, sync]);

  const handleOption = useCallback((value: string) => {
    const s = sessionRef.current;
    if (s.step === 1) return handleStep1(value);
    if (s.step === 2) return handleStep2(value);
    if (s.step === 3) return handleStep3(value);
  }, [handleStep1, handleStep2, handleStep3]);

  const handleReset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    sessionRef.current = { step: 1, messages: [] };
    setMessages([]); setFormStep(null); setDescVal(""); setNameVal(""); setPhoneVal(""); setEmailVal("");
    initRef.current = false;
    setTimeout(() => {
      initRef.current = false;
      setOpen(true);
      addBotMsg({ text: "Hey! What are you looking to repaint?", options: serviceOptions });
    }, 100);
  }, [addBotMsg]);

  const dur = prefersReduced ? 0 : 0.3;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {/* Floating trigger — Greeno-style pill with avatar */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-paint-ink text-paint-cream pl-3 pr-5 py-3 rounded-full shadow-[0_12px_30px_-10px_rgba(20,17,13,0.55)] hover:bg-paint-charcoal transition-colors duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: dur, ease }}
          >
            {/* Avatar with status dot */}
            <span className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center overflow-hidden shrink-0">
              <img src={logoSrc} alt="" className="w-7 h-7 object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-paint-clay border-2 border-paint-ink" />
            </span>
            <span className="flex flex-col items-start min-w-0">
              <span className="text-sm font-medium text-paint-cream leading-tight">Chat with Vasyl</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-paint-cream/60 leading-tight mt-0.5">Usually replies in 24h</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-paint-ink/25 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="chat"
              ref={panelRef}
              className="fixed z-[70] flex flex-col overflow-hidden bg-white rounded-2xl border border-paint-ink/10 shadow-[0_40px_80px_-30px_rgba(20,17,13,0.4)] bottom-4 right-4 left-4 top-16 max-h-[calc(100dvh-5rem)] lg:inset-auto lg:bottom-6 lg:right-6 lg:top-auto lg:left-auto lg:w-[400px] lg:h-[620px]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: dur, ease }}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between px-5 py-4 bg-paint-ink rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <span className="relative w-10 h-10 rounded-full bg-white/15 flex items-center justify-center overflow-hidden">
                    <img src={logoSrc} alt="" className="w-8 h-8 object-contain" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-paint-clay border-2 border-paint-ink" />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-paint-cream">{company.shortName}</p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-paint-cream/60">Online now</p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full text-paint-cream/60 transition-colors hover:bg-white/10 hover:text-paint-cream cursor-pointer" aria-label="Minimize chat">
                  <X size={16} />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 bg-slate-50">
                <div className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: dur * 0.8 }}
                        className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}
                      >
                        {msg.role === "user" ? (
                          <div className="max-w-[85%] bg-paint-clay text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-[14px] leading-relaxed">
                            {msg.text}
                          </div>
                        ) : (
                          <div className="flex gap-2 max-w-[90%]">
                            <span className="shrink-0 w-7 h-7 rounded-full bg-paint-clay flex items-center justify-center text-white text-[11px] font-semibold mt-0.5">V</span>
                            <div className="flex flex-col gap-2.5">
                              <div className="bg-paint-ink/[0.06] border border-paint-ink/10 rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] leading-relaxed text-paint-ink">
                                {msg.text}
                              </div>
                              {msg.options && msg.options.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {msg.options.map((opt) => (
                                    <button
                                      key={opt.value}
                                      onClick={() => handleOption(opt.value)}
                                      className="px-3.5 py-1.5 bg-white border border-paint-ink/15 rounded-full text-[12px] font-medium text-paint-ink/80 transition-all duration-200 hover:border-paint-clay hover:text-paint-clay hover:bg-paint-clay/5 active:scale-[0.97] cursor-pointer"
                                    >
                                      {opt.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <AnimatePresence>
                    {typing && (
                      <motion.div key="typing" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-2">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-paint-clay flex items-center justify-center text-white text-[11px] font-semibold">V</span>
                        <div className="flex items-center gap-1.5 bg-paint-ink/[0.06] border border-paint-ink/10 rounded-2xl px-4 py-3">
                          <span className="lead-typing-dot" style={{ animationDelay: "0ms" }} />
                          <span className="lead-typing-dot" style={{ animationDelay: "150ms" }} />
                          <span className="lead-typing-dot" style={{ animationDelay: "300ms" }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Description input */}
              {formStep === "description" && (
                <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleDescriptionSubmit} className="flex shrink-0 items-center gap-2 border-t border-paint-ink/10 bg-white px-4 py-3">
                  <div className="flex flex-1 items-center gap-2 border border-paint-ink/15 bg-slate-50 rounded-lg px-4 py-2 focus-within:border-paint-clay">
                    <input type="text" value={descVal} onChange={(e) => setDescVal(e.target.value)} placeholder="Describe your project..." className="flex-1 bg-transparent text-sm text-paint-ink outline-none placeholder:text-paint-ink/40" autoFocus />
                    <button type="submit" className="flex h-8 w-8 shrink-0 items-center justify-center bg-paint-clay text-white rounded-lg transition-all hover:bg-paint-rust active:scale-95 cursor-pointer" aria-label="Send">
                      <Send size={14} />
                    </button>
                  </div>
                </motion.form>
              )}

              {/* Contact form */}
              {formStep === "contact" && (
                <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleContactSubmit} className="shrink-0 border-t border-paint-ink/10 bg-white px-4 py-3 space-y-2.5">
                  <input type="text" value={nameVal} onChange={(e) => setNameVal(e.target.value)} placeholder="Your name *" required className="w-full bg-slate-50 border border-paint-ink/15 rounded-lg px-4 py-3 text-[14px] text-paint-ink outline-none placeholder:text-paint-ink/40 focus:border-paint-clay focus:ring-2 focus:ring-paint-clay/15" autoFocus />
                  <input type="tel" value={phoneVal} onChange={(e) => setPhoneVal(e.target.value)} placeholder="Phone number *" required className="w-full bg-slate-50 border border-paint-ink/15 rounded-lg px-4 py-3 text-[14px] text-paint-ink outline-none placeholder:text-paint-ink/40 focus:border-paint-clay focus:ring-2 focus:ring-paint-clay/15" />
                  <input type="email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} placeholder="Email (optional)" className="w-full bg-slate-50 border border-paint-ink/15 rounded-lg px-4 py-3 text-[14px] text-paint-ink outline-none placeholder:text-paint-ink/40 focus:border-paint-clay focus:ring-2 focus:ring-paint-clay/15" />
                  <button type="submit" className="w-full bg-paint-clay hover:bg-paint-rust text-white rounded-lg py-3 text-[14px] font-medium transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                    Send Request
                  </button>
                </motion.form>
              )}

              {/* Post-submit */}
              {sessionRef.current.step === 6 && !formStep && (
                <div className="shrink-0 border-t border-paint-ink/10 bg-white px-5 py-3 flex items-center justify-between">
                  <button onClick={() => setOpen(false)} className="text-[12px] text-paint-ink/60 hover:text-paint-ink transition-colors cursor-pointer">Close</button>
                  <button onClick={handleReset} className="flex items-center gap-1.5 text-[12px] text-paint-clay hover:text-paint-rust transition-colors cursor-pointer">
                    <RotateCcw size={13} /> Start Over
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes lead-typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .lead-typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-paint-ink);
          opacity: 0.4;
          animation: lead-typing-bounce 1.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
