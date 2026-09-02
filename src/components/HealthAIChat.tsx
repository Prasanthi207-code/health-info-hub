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
    "Hey there! Great question about heart health! Your heart works hard for you every single day, so lets talk about how to take care of it!\n\nHere are some things that really make a difference:\n\n- Stay active: even a 30-minute walk daily does wonders\n- Eat well: plenty of fruits, veggies, whole grains, and healthy fats like nuts and olive oil\n- Check your blood pressure regularly: high BP is a silent risk\n- Avoid smoking: its one of the best things you can do for your heart\n- Manage stress: your heart feels what you feel\n\nImportant: If you ever experience chest pain, shortness of breath, or pain radiating to your arm or jaw, please seek emergency help immediately. Thats not something to wait on!\n\nIs there anything specific about heart health you would like to know more about?",
  ],
  diabetes: [
    "Great question! Lets talk about diabetes.\n\nDiabetes is more common than you might think, but the good news is that there is a LOT you can do to prevent or manage it.\n\nHere is what helps:\n\n- Maintain a healthy weight: even losing 5-7% of body weight makes a big difference\n- Move your body: aim for 30 minutes of activity most days\n- Watch your sugar intake: reduce sugary drinks and processed foods\n- Get screened regularly: early detection is key\n\nWatch out for these signs:\n- Feeling unusually thirsty all the time\n- Going to the bathroom more often\n- Unexplained weight loss\n- Blurred vision\n\nIf you are noticing any of these, it is worth having a chat with your doctor. Nothing to panic about, but definitely worth checking!\n\nWant to know more about managing blood sugar?",
  ],
  cancer: [
    "That is an important topic! Let me share what we know about cancer prevention.\n\nHere is something empowering: up to 50% of cancers are preventable through lifestyle choices. That is huge!\n\nHere is what you can do:\n\n- Do not use tobacco: this is the single biggest preventable cause of cancer\n- Protect your skin from too much sun: sunscreen is your friend!\n- Maintain a healthy weight\n- Eat plenty of fruits and vegetables\n- Limit alcohol: even small amounts increase risk\n- Stay physically active\n- Get your recommended screenings: early detection truly saves lives\n\nKnow the warning signs:\n- Unexplained lumps or swelling\n- Unusual bleeding\n- Persistent changes in body habits\n- Unexplained weight loss\n\nThe most important thing? Do not be afraid of screenings. Catching things early is your superpower!\n\nWould you like to know more about any specific aspect?",
  ],
  mental: [
    "I am really glad you asked about this. Mental health is just as important as physical health and honestly, they are deeply connected. Taking care of your mind IS taking care of your body.\n\nHere are some things that genuinely help:\n\n- Practice mindfulness: even 5 minutes of meditation can shift your day\n- Stay connected: loneliness is harder on us than we realize\n- Move your body: exercise is one of nature best antidepressants\n- Prioritize sleep: everything feels harder when we are tired\n- Talk about your feelings: bottling things up never helps\n- Spend time in nature: it is genuinely healing\n\nYou should know: It is completely okay to not be okay sometimes. If you are feeling overwhelmed, anxious, or depressed, reaching out to a mental health professional is a sign of strength, not weakness.\n\nYou are never alone in this. There are always people who care and want to help.\n\nWould you like to talk about anything specific? I am here to listen.",
  ],
  diet: [
    "Ooh, nutrition! One of my favorite topics.\n\nEating well does not have to be complicated or boring. Here is the real deal:\n\nThe basics that actually work:\n\n- Fill half your plate with fruits and vegetables\n- Choose whole grains over refined ones (brown rice, whole wheat)\n- Go for lean proteins: fish, chicken, beans, lentils\n- Include healthy fats: olive oil, nuts, avocado\n- Drink plenty of water (about 8 glasses a day)\n\nWatch out for:\n- Too much added sugar (less than 25g/day is ideal)\n- Excess salt and sodium\n- Ultra-processed foods\n\nMy favorite tips:\n- Eat slowly and mindfully: your body tells you when it is full\n- Eat the rainbow: colorful plates are usually the healthiest\n- Cook at home when you can: you control what goes in\n\nThe best diet is not a diet at all, it is a sustainable way of eating that you enjoy!\n\nDo you have any specific nutrition questions?",
  ],
  sleep: [
    "Ah, sleep! The unsung hero of good health.\n\nHere is the thing: sleep is not just rest. It is when your body repairs itself, your brain consolidates memories, and your immune system recharges. Pretty important, right?\n\nHow much do you need? Adults need 7-9 hours per night.\n\nTips that actually work:\n\n- Stick to a consistent schedule, even on weekends\n- Put screens away 30 minutes before bed (the blue light is real!)\n- No caffeine after 2 PM\n- Make your bedroom cool, dark, and quiet\n- Develop a relaxing wind-down routine\n- Exercise regularly, but not too close to bedtime\n\nQuick hack: Try the 4-7-8 breathing technique. Breathe in for 4 seconds, hold for 7, exhale for 8. It works like magic!\n\nIf you have been struggling with sleep for a while, it is worth mentioning to your doctor. There is a lot they can help with!\n\nAre you having trouble sleeping? Tell me more!",
  ],
  exercise: [
    "Love that you are asking about exercise!\n\nMovement is medicine. And the best part? It does not have to be intense to be effective!\n\nWhat the experts recommend:\n- 150 minutes of moderate activity per week (that is just 20 min/day!)\n- 2 strength training sessions per week\n\nGreat ways to get started:\n- Walking: seriously, it is underrated\n- Swimming: easy on the joints\n- Cycling: fun and effective\n- Yoga: strength + flexibility + calm\n- Dancing: because exercise should be fun!\n\nThe benefits are amazing:\n- Better heart health\n- Improved mood (hello, endorphins!)\n- Weight management\n- Stronger bones\n- Sharper thinking\n- Better sleep\n\nPro tip: Start small and build up. Even 10 minutes counts! Consistency beats intensity every time.\n\nThe best exercise is the one you actually enjoy doing. What sounds fun to you?",
  ],
  stress: [
    "Stress! We all deal with it, but it does not have to control us.\n\nFirst, let me say: some stress is normal and even helpful. It is chronic, unmanaged stress that wears us down.\n\nTechniques that really work:\n\n- Deep breathing: try the 4-7-8 technique (inhale 4s, hold 7s, exhale 8s)\n- Meditate: even 5 minutes makes a difference\n- Exercise: one of the best stress relievers\n- Journal: writing things down helps process them\n- Get outside: nature is genuinely calming\n- Practice gratitude: write down 3 good things daily\n\nSet boundaries:\n- It is okay to say no\n- Take breaks when you need them\n- Limit news and social media if they stress you out\n\nRemember: If stress feels overwhelming or persistent, talking to a professional is not weakness, it is wisdom. They have tools and techniques that can truly help.\n\nYou are doing great by even thinking about this! What is stressing you most right now?",
  ],
  headache: [
    "Oh, headaches are the worst! Let me help you out.\n\nCommon triggers:\n- Dehydration (the number 1 overlooked cause!)\n- Stress and tension\n- Not enough sleep\n- Eye strain from screens\n- Skipping meals\n- Too much or too little caffeine\n\nQuick relief tips:\n- Drink a big glass of water first (seriously, try this!)\n- Rest in a dark, quiet room\n- Apply a cold compress to your forehead or neck\n- Gently massage your temples\n\nWhen to see a doctor:\n- Sudden, severe worst headache of your life\n- Headache with fever, stiff neck, or vision changes\n- Headaches that happen frequently or will not go away\n- Changes in your usual headache pattern\n\nMost headaches are not dangerous, but it is always smart to check with a doctor if something feels different or worrying. Better safe than sorry!\n\nWould you like more tips on managing headaches?",
  ],
  fever: [
    "Let us talk about fever. It can be scary, but it is actually your body way of fighting off something.\n\nWhat is happening: A fever (100.4F / 38C or higher) means your immune system is working hard. It is often a sign of an infection.\n\nHome care tips:\n- Rest: your body needs energy to fight\n- Stay hydrated: water, clear broths, electrolyte drinks\n- Wear light, comfortable clothing\n- You can take acetaminophen or ibuprofen to help with comfort\n- Monitor your temperature regularly\n\nWhen to get medical help:\n- Fever above 103F (39.4C)\n- Fever lasting more than 3 days\n- Fever with severe headache, stiff neck, or rash\n- In infants or very young children\n- If you just feel something is off\n\nThe good news: Most fevers resolve on their own within a few days as your body fights the infection.\n\nRemember: I can provide general information, but if you are worried, always trust your instincts and see a healthcare professional. Your health is worth it!\n\nAre you dealing with a fever right now? I am happy to help more!",
  ],
  cold: [
    "Ah, the common cold! Nobody enjoys those.\n\nColds are usually caused by viruses and while annoying, they typically resolve in about 7-10 days.\n\nHow to feel better:\n- Rest up: your body needs the energy\n- Stay hydrated: warm teas and soups are perfect\n- Try saline nasal drops for congestion\n- Honey in warm water can soothe a cough (for adults!)\n- Use a humidifier if the air is dry\n\nTo prevent spreading it:\n- Cover your coughs and sneezes\n- Wash your hands frequently\n- Do not share drinks or utensils\n\nSee a doctor if:\n- Symptoms get worse after 10 days\n- You develop a high fever\n- You have trouble breathing\n- Severe sinus pain\n\nMy favorite cold remedy: Hot ginger tea with honey, a cozy blanket, and your favorite show. Sometimes the simple things work best!\n\nFeel better soon! Is there anything specific you need help with?",
  ],
  allergy: [
    "Allergies can be so frustrating! Lets figure this out together.\n\nCommon symptoms:\n- Sneezing and runny nose\n- Itchy, watery eyes\n- Skin rash or hives\n- Sinus pressure\n\nHow to manage them:\n- Identify your triggers: is it pollen? Dust? Pet dander?\n- Antihistamines can help a lot (ask your pharmacist!)\n- Keep your home clean and dust-free\n- Wash bedding in hot water weekly\n- Check pollen counts before going outside\n\nFor severe allergies (anaphylaxis): If you experience difficulty breathing, swelling of the face or throat, or severe dizziness, call emergency services IMMEDIATELY. This is a medical emergency.\n\nLong-term options: Immunotherapy (allergy shots or drops) can actually reduce your sensitivity over time. It is worth discussing with an allergist!\n\nDo you know what triggers your allergies? I can give more specific tips!",
  ],
  blood: [
    "Great question about blood pressure! Let me break it down.\n\nWhat the numbers mean:\n- Normal: Below 120/80 mmHg\n- Elevated: 120-129 / less than 80\n- High (Stage 1): 130-139 / 80-89\n- High (Stage 2): 140+ / 90+\n\nHere is the thing: high blood pressure is called the silent killer because it usually has no symptoms. That is why regular checks are so important!\n\nHow to keep it in check:\n- Eat less salt (aim for under 2,300mg/day)\n- Exercise regularly\n- Maintain a healthy weight\n- Limit alcohol\n- Manage stress\n- Do not smoke\n\nSimple lifestyle changes can make a real difference. And if your doctor prescribes medication, take it as directed. There is no shame in needing a little help!\n\nWould you like more details on any of these points?",
  ],
  default: [
    "Hey there! I am your Health Assistant, and I am happy to help!\n\nI can chat with you about lots of health topics, including:\n\n- Heart health\n- Blood pressure and diabetes\n- Mental health and stress\n- Nutrition and diet\n- Sleep tips\n- Exercise guidance\n- Cold, flu and allergies\n- Fever and symptoms\n- Cancer prevention\n- General wellness\n\nJust ask me anything health-related, and I will do my best to help! Remember, I provide educational information. For personal medical advice, always check with a healthcare professional.\n\nSo, what is on your mind?",
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
  // Escape HTML
  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Convert - item lines into styled list items
  safe = safe.replace(/^- (.+)$/gm, '<div class="flex gap-2 my-0.5"><span class="text-blue-500 shrink-0 mt-0.5">&#8226;</span><span>$1</span></div>');

  // Convert double newlines to paragraph breaks
  safe = safe.replace(/\n\n/g, '<div class="h-2" />');

  // Convert single newlines
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
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: msg,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(msg);
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        role: "ai",
        text: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
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
              {/* Background pattern */}
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
                <button
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
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
                      <div
                        className="[&_strong]:font-bold [&_strong]:text-blue-600"
                        dangerouslySetInnerHTML={{ __html: formatAIResponse(msg.text) }}
                      />
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
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
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                className="flex items-center gap-2"
              >
                <div className="flex-1 relative">
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
