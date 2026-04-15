"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Send, MessageCircle, RotateCcw } from "lucide-react";
import { company } from "@/data/company";

/* -- Types ------------------------------------------------- */

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

/* -- Helpers ----------------------------------------------- */

let _msgId = 0;
const uid = () => `m-${Date.now()}-${++_msgId}`;

function loadSession(): SessionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
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

/* -- Component --------------------------------------------- */

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
    const updated = [...sessionRef.current.messages, msg];
    sync({ messages: updated });
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

  /* -- Step handlers --------------------------------------- */

  const handleStep1 = useCallback((value: string) => {
    addUserMsg(value);
    sync({ step: 2, service: value });
    addBotMsg({ text: "What\u2019s your timeline looking like?", options: [
      { label: "Within 1 month", value: "Within 1 month" },
      { label: "1-3 months", value: "1-3 months" },
      { label: "3-6 months", value: "3-6 months" },
      { label: "Just exploring", value: "Just exploring" },
    ]});
  }, [addBotMsg, addUserMsg, sync]);

  const handleStep2 = useCallback((value: string) => {
    addUserMsg(value);
    sync({ step: 3, urgency: value });
    addBotMsg({ text: "What type of property is this for?", options: [
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
    formData.append("message", `Lead Collector \u2014 Service: ${s.service}, Timeline: ${s.urgency}, Property: ${s.property}, Details: ${s.description}`);

    fetch(company.formAction, { method: "POST", body: formData, headers: { Accept: "application/json" } }).catch(() => {});

    addBotMsg({ text: `Got it! We'll review your project details and reach out within 24 hours. For faster response, call us directly at ${company.phone}.` });
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

  return (
    <>
      {/* Floating pill button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            onClick={() => setOpen(true)}
            className="fixed bottom-22 right-6 lg:bottom-6 lg:right-6 z-50 flex items-center gap-2.5 bg-white text-sky-600 pl-4 pr-5 py-3 shadow-lg border border-slate-200 hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer group"
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ scale: { duration: dur, type: "spring", stiffness: 300, damping: 20 }, opacity: { duration: dur } }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open chat"
          >
            <MessageCircle className="h-5 w-5 text-sky-500 group-hover:text-sky-600 transition-colors duration-300" />
            <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap">
              Planning a repaint?
            </span>
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-700" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            ref={panelRef}
            className="fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl bottom-4 right-4 w-[calc(100vw-2rem)] max-w-[380px] h-[min(440px,75dvh)]"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.14), 0 2px 12px rgba(0,0,0,0.08)" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: dur }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between px-5 py-3.5 bg-sky-500">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center bg-white/20 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                  <span className="font-display text-white text-xs font-black">UP</span>
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-sky-500" />
                </div>
                <div>
                  <p className="font-display text-[15px] font-bold text-white">{company.shortName}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/70">Online now</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="flex h-8 w-8 items-center justify-center text-white/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer" aria-label="Minimize chat">
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
                        <div className="max-w-[80%] border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm">
                          {msg.text}
                        </div>
                      ) : (
                        <div className="flex max-w-[90%] flex-col gap-2.5">
                          <div className="bg-sky-500 px-4 py-2.5 text-sm leading-relaxed text-white shadow-sm">
                            {msg.text}
                          </div>
                          {msg.options && msg.options.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {msg.options.map((opt) => (
                                <button
                                  key={opt.value}
                                  onClick={() => handleOption(opt.value)}
                                  className="border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition-all duration-200 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 active:scale-[0.97] cursor-pointer shadow-sm"
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                <AnimatePresence>
                  {typing && (
                    <motion.div key="typing" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="flex justify-start">
                      <div className="flex items-center gap-1.5 bg-sky-500 px-4 py-3 shadow-sm">
                        <span className="lead-typing-dot" style={{ animationDelay: "0ms" }} />
                        <span className="lead-typing-dot" style={{ animationDelay: "150ms" }} />
                        <span className="lead-typing-dot" style={{ animationDelay: "300ms" }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Description input (Step 4) */}
            {formStep === "description" && (
              <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} onSubmit={handleDescriptionSubmit} className="flex shrink-0 items-center gap-2 border-t border-slate-200 bg-white px-4 py-3">
                <div className="flex flex-1 items-center gap-2 border border-slate-200 bg-slate-50 px-4 py-2 transition-colors focus-within:border-sky-400">
                  <input type="text" value={descVal} onChange={(e) => setDescVal(e.target.value)} placeholder="Describe your project..." className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400" autoFocus />
                  <button type="submit" className="flex h-8 w-8 shrink-0 items-center justify-center bg-sky-500 text-white transition-all hover:bg-sky-600 active:scale-95 cursor-pointer" aria-label="Send">
                    <Send size={14} />
                  </button>
                </div>
              </motion.form>
            )}

            {/* Contact form (Step 5) */}
            {formStep === "contact" && (
              <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} onSubmit={handleContactSubmit} className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 space-y-2.5">
                <input type="text" value={nameVal} onChange={(e) => setNameVal(e.target.value)} placeholder="Your name *" required className="w-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-sky-400" autoFocus />
                <input type="tel" value={phoneVal} onChange={(e) => setPhoneVal(e.target.value)} placeholder="Phone number *" required className="w-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-sky-400" />
                <input type="email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} placeholder="Email (optional)" className="w-full border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-colors focus:border-sky-400" />
                <button type="submit" className="w-full bg-sky-500 py-2.5 text-sm font-display font-bold text-white transition-all hover:bg-sky-600 active:scale-[0.98] cursor-pointer shadow-sm uppercase tracking-wide">
                  SEND REQUEST
                </button>
              </motion.form>
            )}

            {/* Post-submit */}
            {sessionRef.current.step === 6 && !formStep && (
              <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 flex gap-2">
                <button onClick={() => setOpen(false)} className="flex-1 border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 cursor-pointer">Close</button>
                <button onClick={handleReset} className="flex-1 border border-sky-200 py-2.5 text-sm font-medium text-sky-600 transition-all hover:bg-sky-50 cursor-pointer flex items-center justify-center gap-1.5">
                  <RotateCcw size={13} />
                  Start Over
                </button>
              </div>
            )}
          </motion.div>
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
          background-color: white;
          animation: lead-typing-bounce 1.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
