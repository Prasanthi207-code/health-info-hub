import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

const AI_RESPONSES: Record<string, string> = {
  heart: "Heart health is crucial. Key steps: exercise 150 min/week, eat a balanced diet low in sodium, monitor blood pressure regularly, avoid smoking, and manage stress. Seek immediate help for chest pain, shortness of breath, or pain radiating to the arm.",
  diabetes: "Diabetes prevention includes maintaining a healthy weight, exercising 30+ minutes daily, limiting sugary foods, and getting regular blood sugar screenings. Watch for symptoms: increased thirst, frequent urination, unexplained weight loss, and blurred vision.",
  blood: "Normal blood pressure is below 120/80 mmHg. High blood pressure (hypertension) increases risk of heart disease and stroke. Manage it through: low-sodium diet, regular exercise, maintaining healthy weight, limiting alcohol, and managing stress.",
  cancer: "Cancer prevention tips: avoid tobacco, protect skin from UV radiation, maintain healthy weight, get recommended screenings, limit alcohol, eat a balanced diet, and stay physically active. Early detection saves lives — know the warning signs.",
  mental: "Mental health is as important as physical health. Tips: maintain social connections, practice mindfulness, exercise regularly, get enough sleep, seek professional help when needed, and don't hesitate to talk about your feelings. You are not alone.",
  diet: "A healthy diet includes: 5+ servings of fruits/vegetables daily, whole grains, lean proteins, healthy fats (olive oil, nuts), limited added sugars (<25g/day), limited salt, and adequate water (8 glasses/day).",
  sleep: "Adults need 7-9 hours of sleep. Tips: maintain consistent schedule, create a dark/cool room, avoid screens 30 min before bed, limit caffeine after 2 PM, exercise regularly (not close to bedtime), and develop a relaxing bedtime routine.",
  exercise: "Recommended: 150 min moderate aerobic activity/week + 2 strength sessions. Start slowly: walking, swimming, cycling. Benefits include improved heart health, better mood, weight management, stronger bones, and reduced disease risk.",
  stress: "Stress management: practice deep breathing (4-7-8 technique), meditate daily, exercise, maintain social connections, set boundaries, get enough sleep, spend time in nature, practice gratitude, and seek professional help if overwhelmed.",
  headache: "Common headache triggers: dehydration, stress, lack of sleep, eye strain, and hunger. For relief: stay hydrated, rest in a dark room, apply cold compress, and take OTC pain relievers. See a doctor for severe, sudden, or persistent headaches.",
  fever: "Fever (100.4°F/38°C+) often indicates infection. Home care: rest, fluids, light clothing, acetaminophen/ibuprofen. Seek medical help if: fever >103°F, lasts >3 days, accompanied by severe headache/stiff neck/rash, or in infants.",
  cold: "Common cold care: rest, stay hydrated, use saline nasal drops, honey for cough (adults), humidifier. Prevent spread: wash hands frequently, cover coughs. See a doctor if symptoms worsen after 10 days or include high fever.",
  allergy: "Common allergy symptoms: sneezing, itchy eyes, runny nose, skin rash. Management: avoid triggers, use antihistamines, keep indoor air clean, wash bedding in hot water. For severe reactions (anaphylaxis), seek emergency help immediately.",
  default: "I'm here to help with health questions! I can provide general information about: heart health, diabetes, nutrition, mental health, exercise, sleep, stress management, symptoms, prevention, and healthy lifestyle tips. Please note: I provide educational information only — always consult a healthcare professional for personal medical advice.",
};

function findBestResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("heart") || lower.includes("cardio") || lower.includes("blood pressure")) return AI_RESPONSES.heart;
  if (lower.includes("diabet") || lower.includes("sugar") || lower.includes("insulin")) return AI_RESPONSES.diabetes;
  if (lower.includes("cancer") || lower.includes("tumor") || lower.includes("mole")) return AI_RESPONSES.cancer;
  if (lower.includes("mental") || lower.includes("depress") || lower.includes("anxiety") || lower.includes("stress")) return AI_RESPONSES.mental;
  if (lower.includes("diet") || lower.includes("eat") || lower.includes("food") || lower.includes("nutrition") || lower.includes("fruit") || lower.includes("vegetable")) return AI_RESPONSES.diet;
  if (lower.includes("sleep") || lower.includes("insomnia") || lower.includes("rest")) return AI_RESPONSES.sleep;
  if (lower.includes("exercise") || lower.includes("workout") || lower.includes("fitness") || lower.includes("gym")) return AI_RESPONSES.exercise;
  if (lower.includes("headache") || lower.includes("migraine") || lower.includes("head pain")) return AI_RESPONSES.headache;
  if (lower.includes("fever") || lower.includes("temperature") || lower.includes("hot")) return AI_RESPONSES.fever;
  if (lower.includes("cold") || lower.includes("flu") || lower.includes("cough") || lower.includes("sneeze")) return AI_RESPONSES.cold;
  if (lower.includes("allergy") || lower.includes("allergic") || lower.includes("rash") || lower.includes("hives")) return AI_RESPONSES.allergy;
  if (lower.includes("blood")) return AI_RESPONSES.blood;
  if (lower.includes("stress")) return AI_RESPONSES.stress;
  return AI_RESPONSES.default;
}

export default function HealthAIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = findBestResponse(userMsg.text);
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        role: "ai",
        text: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.08_255)] to-[oklch(0.42_0.1_210)] text-white shadow-[0_8px_30px_-4px_oklch(0.32_0.08_255_/_0.4)] hover:shadow-[0_12px_40px_-4px_oklch(0.32_0.08_255_/_0.5)] transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl border border-[oklch(0.9_0.01_240)] overflow-hidden bg-white"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[oklch(0.32_0.08_255)] to-[oklch(0.42_0.1_210)] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{t("aiChatTitle")}</h3>
                  <p className="text-xs text-white/70">{t("aiChatDesc")}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.32_0.08_255_/_0.08)]">
                    <Bot className="h-6 w-6 text-[oklch(0.35_0.1_220)]" />
                  </div>
                  <p className="text-sm font-medium text-[oklch(0.2_0.03_255)]">{t("aiWelcome")}</p>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1 max-w-xs mx-auto">{t("aiWelcomeDesc")}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {["Heart health", "Nutrition tips", "Sleep advice", "Exercise guide", "Stress relief"].map((q) => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); }}
                        className="px-3 py-1 rounded-full text-[10px] font-medium bg-[oklch(0.97_0.003_250)] border border-[oklch(0.9_0.01_240)] text-[oklch(0.4_0.02_250)] hover:border-[oklch(0.32_0.08_255_/_0.3)] hover:text-[oklch(0.32_0.08_255)] transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "ai" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[oklch(0.32_0.08_255_/_0.08)]">
                      <Bot className="h-3.5 w-3.5 text-[oklch(0.35_0.1_220)]" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[oklch(0.32_0.08_255)] text-white rounded-br-md"
                      : "bg-[oklch(0.97_0.003_250)] text-[oklch(0.2_0.03_255)] border border-[oklch(0.9_0.01_240)] rounded-bl-md"
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[oklch(0.32_0.08_255)] text-white">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[oklch(0.32_0.08_255_/_0.08)]">
                    <Bot className="h-3.5 w-3.5 text-[oklch(0.35_0.1_220)]" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-bl-md bg-[oklch(0.97_0.003_250)] border border-[oklch(0.9_0.01_240)]">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-[oklch(0.5_0.02_250)] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-[oklch(0.5_0.02_250)] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-[oklch(0.5_0.02_250)] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[oklch(0.92_0.01_240)] p-3">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("aiPlaceholder")}
                  className="flex-1 rounded-full border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-4 py-2 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[oklch(0.32_0.08_255)] text-white hover:bg-[oklch(0.28_0.08_255)] transition-colors disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-[oklch(0.55_0.02_250)] text-center mt-2">
                Educational information only. Not medical advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
