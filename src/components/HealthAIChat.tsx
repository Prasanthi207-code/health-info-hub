import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Heart, Moon, Apple, Brain, Dumbbell, Stethoscope } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

const AI_RESPONSES: Record<string, string[]> = {
  heart: [
    "Keep your heart happy with these simple steps:\n\n- Walk 30 min daily\n- Eat fruits, veggies & nuts\n- Check BP regularly\n- No smoking\n- Manage stress\n\nWarning: Chest pain or arm pain? Call emergency right away!",
  ],
  diabetes: [
    "Prevent diabetes easily:\n\n- Maintain healthy weight\n- Exercise 30 min/day\n- Cut sugary drinks & junk food\n- Get blood sugar checked yearly\n\nWatch for: Too much thirst, frequent urination, blurred vision.",
  ],
  cancer: [
    "50% of cancers are preventable!\n\n- No tobacco\n- Use sunscreen\n- Eat more fruits & veggies\n- Limit alcohol\n- Exercise regularly\n- Get screenings done on time\n\nEarly detection = best protection.",
  ],
  mental: [
    "Your mental health matters!\n\n- Meditate 5 min daily\n- Talk to someone you trust\n- Exercise (nature's antidepressant)\n- Sleep well\n- It is okay to ask for help\n\nYou are not alone. Strong people ask for support.",
  ],
  diet: [
    "Eat smart, stay healthy:\n\n- Half plate = fruits & veggies\n- Choose whole grains\n- Drink 8 glasses of water\n- Cut sugar below 25g/day\n- Cook at home more\n\nTip: Eat the rainbow - colorful plates are healthiest!",
  ],
  sleep: [
    "Sleep better tonight:\n\n- Fixed bedtime (even weekends)\n- No screens 30 min before bed\n- No caffeine after 2 PM\n- Cool, dark room\n- Try 4-7-8 breathing: inhale 4s, hold 7s, exhale 8s\n\nNeed 7-9 hours every night.",
  ],
  exercise: [
    "Move your body:\n\n- 150 min/week moderate activity\n- 2 strength sessions/week\n- Best options: walking, swimming, yoga\n- Even 10 min counts!\n\nBenefits: Better mood, stronger bones, good sleep, healthy weight.",
  ],
  stress: [
    "Beat stress easily:\n\n- Deep breathing (4-7-8)\n- 5 min meditation\n- Go for a walk\n- Write a journal\n- Say no when needed\n- Limit social media\n\nRemember: Asking for help is strength, not weakness.",
  ],
  headache: [
    "Quick headache relief:\n\n- Drink water first (most common cause!)\n- Rest in dark room\n- Cold compress on forehead\n- Massage your temples\n\nSee doctor if: Sudden severe pain, fever + stiff neck, or keeps coming back.",
  ],
  fever: [
    "Fever means your body is fighting!\n\nDo this:\n- Rest well\n- Drink lots of fluids\n- Wear light clothes\n- Take paracetamif needed\n- Check temperature often\n\nSee doctor if: Above 103F, lasts 3+ days, or with severe headache.",
  ],
  cold: [
    "Cold care basics:\n\n- Rest + warm fluids\n- Saline nasal drops\n- Honey + warm water for cough\n- Wash hands often\n\nSee doctor if: Worsens after 10 days, high fever, or breathing trouble.",
  ],
  allergy: [
    "Manage allergies:\n\n- Find your triggers (pollen? dust? pets?)\n- Antihistamines help a lot\n- Keep home clean\n- Wash bedding weekly in hot water\n\nEmergency: Difficulty breathing or throat swelling? Call 108 immediately!",
  ],
  blood: [
    "Blood pressure basics:\n\nNormal: Below 120/80\nHigh: 130/80 or above\n\nControl it:\n- Less salt (under 2300mg/day)\n- Exercise regularly\n- No smoking\n- Manage weight & stress\n\nIt is called silent killer - get checked regularly!",
  ],
  default: [
    "Hi! I can help with:\n\n- Heart health\n- Diabetes\n- Mental health\n- Nutrition\n- Sleep tips\n- Exercise\n- Fever, cold, allergies\n- Cancer prevention\n\nJust ask a topic and I will give you a quick, clear answer!",
  ],
};

function findBestResponse(input: string): string {
  const lower = input.toLowerCase();
  let result: string[];
  if (lower.includes("heart") || lower.includes("cardio") || lower.includes("blood pressure")) result = AI_RESPONSES.heart;
  else if (lower.includes("diabet") || lower.includes("sugar") || lower.includes("insulin")) result = AI_RESPONSES.diabetes;
  else if (lower.includes("cancer") || lower.includes("tumor") || lower.includes("mole")) result = AI_RESPONSES.cancer;
  else if (lower.includes("mental") || lower.includes("depress") || lower.includes("anxiety")) result = AI_RESPONSES.mental;
  else if (lower.includes("stress") || lower.includes("stressed") || lower.includes("overwhelm")) result = AI_RESPONSES.stress;
  else if (lower.includes("diet") || lower.includes("eat") || lower.includes("food") || lower.includes("nutrition") || lower.includes("fruit") || lower.includes("vegetable")) result = AI_RESPONSES.diet;
  else if (lower.includes("sleep") || lower.includes("insomnia") || lower.includes("rest") || lower.includes("tired")) result = AI_RESPONSES.sleep;
  else if (lower.includes("exercise") || lower.includes("workout") || lower.includes("fitness") || lower.includes("gym") || lower.includes("walk") || lower.includes("running")) result = AI_RESPONSES.exercise;
  else if (lower.includes("headache") || lower.includes("migraine") || lower.includes("head pain")) result = AI_RESPONSES.headache;
  else if (lower.includes("fever") || lower.includes("temperature") || lower.includes("hot") || lower.includes("chills")) result = AI_RESPONSES.fever;
  else if (lower.includes("cold") || lower.includes("flu") || lower.includes("cough") || lower.includes("sneeze") || lower.includes("stuffy")) result = AI_RESPONSES.cold;
  else if (lower.includes("allergy") || lower.includes("allergic") || lower.includes("rash") || lower.includes("hives")) result = AI_RESPONSES.allergy;
  else if (lower.includes("blood")) result = AI_RESPONSES.blood;
  else result = AI_RESPONSES.default;
  return result[Math.floor(Math.random() * result.length)];
}

function formatAIResponse(text: string): string {
  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  safe = safe.replace(/^- (.+)$/gm, '<div class="flex gap-1.5 my-0.5"><span class="text-blue-500 shrink-0">&#10003;</span><span>$1</span></div>');
  safe = safe.replace(/\n\n/g, '<div class="h-2" />');
  safe = safe.replace(/\n/g, "<br />");
  return safe;
}

const QUICK_TOPICS = [
  { label: "Heart Health", icon: Heart, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200" },
  { label: "Sleep Tips", icon: Moon, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-200" },
  { label: "Nutrition", icon: Apple, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200" },
  { label: "Mental Health", icon: Brain, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200" },
  { label: "Exercise", icon: Dumbbell, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
  { label: "Symptoms", icon: Stethoscope, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
];

export default function HealthAIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(msg);
      const aiMsg: Message = { id: `a-${Date.now()}`, role: "ai", text: response, timestamp: new Date() };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white shadow-[0_8px_32px_-4px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_44px_-4px_rgba(37,99,235,0.6)] transition-shadow cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={open ? {} : { y: [0, -4, 0] }}
        transition={open ? {} : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white" />
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-28 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] rounded-3xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-white/20 bg-white"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 p-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-8 w-24 h-24 rounded-full border-2 border-white/40" />
                <div className="absolute -bottom-6 -left-4 w-20 h-20 rounded-full border-2 border-white/30" />
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base tracking-tight">{t("aiChatTitle")}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs text-white/80">{t("aiChatDesc")}</p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="h-8 w-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[420px] overflow-y-auto px-4 pt-4 pb-2 space-y-4 bg-gradient-to-b from-slate-50 to-white">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-base font-bold text-slate-800">{t("aiWelcome")}</p>
                  <p className="text-sm text-slate-500 mt-1.5 max-w-xs mx-auto leading-relaxed">{t("aiWelcomeDesc")}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {QUICK_TOPICS.map((topic) => {
                      const Icon = topic.icon;
                      return (
                        <button
                          key={topic.label}
                          onClick={() => sendMessage(topic.label)}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border ${topic.border} ${topic.bg} hover:shadow-md transition-all text-left cursor-pointer group`}
                        >
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${topic.bg} ${topic.color} group-hover:scale-110 transition-transform`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-semibold text-slate-700">{topic.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "ai" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm mt-1">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl rounded-br-lg shadow-md shadow-blue-500/15"
                      : "bg-white text-slate-700 border border-slate-200/80 rounded-2xl rounded-bl-lg shadow-sm"
                  }`}>
                    {msg.role === "ai" ? (
                      <div className="[&_strong]:font-bold [&_strong]:text-blue-600 [&_.text-blue-500]:text-blue-500" dangerouslySetInnerHTML={{ __html: formatAIResponse(msg.text) }} />
                    ) : (
                      <span>{msg.text}</span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-200 mt-1">
                      <User className="h-4 w-4 text-slate-500" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm mt-1">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-lg bg-white border border-slate-200/80 shadow-sm">
                    <div className="flex gap-1.5 items-center h-5">
                      <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-white p-3">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2">
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t("aiPlaceholder")}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-blue-500/20 cursor-pointer"
                  whileHover={input.trim() ? { scale: 1.05 } : {}}
                  whileTap={input.trim() ? { scale: 0.95 } : {}}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Educational information only. Not medical advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
