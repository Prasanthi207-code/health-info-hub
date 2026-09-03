import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Heart, Moon, Apple, Brain, Dumbbell, Stethoscope } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";
import { useTranslation } from "@/i18n/LanguageContext";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

const AI_RESPONSES: Record<string, string[]> = {
  heart: [
    "Great question! Here is what you need to know about heart health:\n\nThe most important things you can do are stay active, eat well, and manage stress. A simple 30-minute walk every day can make a huge difference for your heart.\n\nTry to include more fruits, vegetables, whole grains, and nuts in your diet. These foods help keep your arteries clean and blood flowing well.\n\nAlso, check your blood pressure regularly. High blood pressure has no symptoms but can cause serious damage over time. And if you smoke, quitting is the single best thing you can do for your heart.\n\nIf you ever feel chest pain, shortness of breath, or pain going to your arm or jaw, please seek emergency help right away.",
  ],
  diabetes: [
    "Good question! Diabetes is very common, but the good news is it can often be prevented or managed well.\n\nThe key is maintaining a healthy weight and staying active. Even losing a small amount of weight can make a big difference. Try to move your body for at least 30 minutes most days.\n\nWatch your sugar intake, especially sugary drinks and processed foods. These cause blood sugar spikes that can lead to problems over time.\n\nSome signs to watch for are feeling unusually thirsty, going to the bathroom often, unexplained weight loss, or blurred vision. If you notice these, it is a good idea to get your blood sugar checked.\n\nRegular screenings are important because catching it early gives you the best chance of managing it well.",
  ],
  cancer: [
    "This is an important topic. The empowering thing is that up to 50% of cancers are preventable through lifestyle choices.\n\nThe biggest thing you can do is avoid tobacco in all its forms. It is the single largest preventable cause of cancer. Also, protect your skin from too much sun by using sunscreen and wearing protective clothing.\n\nEating plenty of fruits and vegetables, maintaining a healthy weight, limiting alcohol, and staying physically active all help reduce your risk.\n\nGetting your recommended screenings done on time is crucial. Cancers caught early are much easier to treat successfully.\n\nKnow the warning signs like unexplained lumps, unusual bleeding, or persistent changes, and do not hesitate to see a doctor about them.",
  ],
  mental: [
    "I am glad you asked about this. Mental health is just as important as physical health.\n\nTaking care of your mind is not selfish, it is necessary. Simple things like meditating for even 5 minutes a day, talking to someone you trust, or spending time in nature can make a real difference.\n\nExercise is one of the best natural remedies for mental health. Even a short walk can boost your mood significantly.\n\nSleep is also crucial. When we do not sleep well, everything feels harder and our emotions become harder to manage.\n\nIf you are feeling overwhelmed, anxious, or depressed, please know that reaching out for help is a sign of strength. There are people who care and professionals who can help you feel better.",
  ],
  diet: [
    "Nutrition does not have to be complicated. Here is the simple truth about eating well.\n\nFill half your plate with fruits and vegetables. Choose whole grains like brown rice and whole wheat over refined ones. Go for lean proteins like fish, chicken, beans, and lentils.\n\nInclude healthy fats from olive oil, nuts, and avocado. These are actually good for you and help your body absorb vitamins.\n\nTry to drink about 8 glasses of water a day and cut back on added sugar. The recommended limit is less than 25 grams per day, which is about 6 teaspoons.\n\nCook at home when you can because you control what goes into your food. And remember, the best diet is one you can stick with long term.",
  ],
  sleep: [
    "Sleep is one of the most important things for your health. Adults need 7 to 9 hours every night.\n\nThe best tips are to stick to a consistent bedtime, even on weekends. Your body loves routine. Put your screens away about 30 minutes before bed because the blue light from phones and computers tricks your brain into thinking it is still daytime.\n\nAvoid caffeine after 2 PM and keep your bedroom cool, dark, and quiet.\n\nA great trick is the 4-7-8 breathing technique. Breathe in for 4 seconds, hold for 7, then exhale for 8. It genuinely helps you fall asleep faster.\n\nIf you have been struggling with sleep for a while, it is worth talking to your doctor about it.",
  ],
  exercise: [
    "Love this question! Movement really is medicine.\n\nThe recommended amount is 150 minutes of moderate activity per week, which is just about 20 minutes a day. Add 2 strength training sessions per week and you are set.\n\nBut do not feel like you need to go to a gym. Walking is fantastic and seriously underrated. Swimming, cycling, yoga, and even dancing all count.\n\nThe key is finding something you actually enjoy because then you will stick with it. Start small if you need to. Even 10 minutes of walking is better than nothing.\n\nThe benefits go beyond just fitness. Regular exercise improves your mood, helps you sleep better, strengthens your bones, and reduces your risk of many diseases.",
  ],
  stress: [
    "Stress is something everyone deals with. Some stress is actually helpful, but when it becomes constant, it starts affecting your health.\n\nThe most effective techniques are deep breathing, meditation, and physical activity. For breathing, try the 4-7-8 method: inhale for 4 seconds, hold for 7, exhale for 8.\n\nSpending time in nature is genuinely calming. Even a short walk in a park can lower your stress levels. Journaling also helps because writing things down puts them in perspective.\n\nSetting boundaries is important too. It is okay to say no, take breaks, and limit things that drain your energy.\n\nIf stress feels overwhelming, talking to a professional is not weakness, it is wisdom.",
  ],
  headache: [
    "Headaches are really common and usually not dangerous, but they are definitely annoying.\n\nThe most overlooked cause is dehydration. Before anything else, try drinking a large glass of water. You might be surprised how much that helps.\n\nOther quick fixes include resting in a dark, quiet room, putting a cold compress on your forehead or neck, and gently massaging your temples.\n\nCommon triggers are dehydration, stress, lack of sleep, eye strain from screens, and skipping meals. If you can identify your triggers, you can prevent them.\n\nSee a doctor if you have a sudden severe headache, a headache with fever and stiff neck, or if headaches are happening frequently and not going away.",
  ],
  fever: [
    "Fever is actually your body's way of fighting an infection. It means your immune system is working hard.\n\nThe best things to do at home are rest, drink plenty of fluids like water and clear broths, wear light comfortable clothing, and take paracetamol or ibuprofen if you need relief. Check your temperature regularly to keep track.\n\nMost fevers resolve on their own within a few days as your body fights the infection.\n\nYou should seek medical help if the fever goes above 103 degrees Fahrenheit, lasts more than 3 days, comes with a severe headache or stiff neck, or if it is in a small child.\n\nTrust your instincts. If something feels wrong, it is always better to get checked.",
  ],
  prolongedFeverBackPain: [
    "Fever lasting 6 days together with a cold and back pain needs medical assessment today. Please contact a doctor or visit urgent care rather than continuing home treatment alone. You may need an examination and tests to find the cause.\n\nGo to emergency care now if you have trouble breathing, chest pain, confusion, severe weakness, a stiff neck, severe headache, repeated vomiting, a rash or bleeding, very little urine, severe abdominal pain, or new leg weakness or loss of bladder or bowel control.\n\nUntil you are seen, rest, drink water or oral rehydration fluid, and record your temperature. Follow the label for paracetamol/acetaminophen only if it is normally safe for you. Do not exceed the package dose or combine products containing it. Avoid ibuprofen or aspirin until a clinician has assessed you if dengue or another bleeding illness is possible.\n\nThis is educational guidance, not a diagnosis. Tell the clinician that the fever has lasted 6 days and includes back pain.",
  ],
  cold: [
    "The common cold is annoying but usually goes away on its own in about 7 to 10 days.\n\nThe best care is rest, staying hydrated with warm teas and soups, and using saline nasal drops for congestion. Honey in warm water can help soothe a cough if you are an adult.\n\nTo prevent spreading it, cover your coughs and sneezes, wash your hands frequently, and do not share drinks or utensils with others.\n\nSee a doctor if your symptoms get worse after 10 days, you develop a high fever, have trouble breathing, or experience severe sinus pain.\n\nA simple favorite remedy is hot ginger tea with honey and a cozy blanket.",
  ],
  allergy: [
    "Allergies happen when your immune system reacts to something harmless like pollen, dust, or pet dander.\n\nThe first step is figuring out what triggers your allergies. Once you know, you can avoid or reduce exposure to it.\n\nOver the counter antihistamines can help a lot with symptoms. Keeping your home clean and dust free also makes a big difference.\n\nWashing your bedding in hot water once a week helps remove dust mites and allergens.\n\nIf you ever have a severe reaction like difficulty breathing, swelling of your face or throat, or severe dizziness, that is a medical emergency and you should call for help immediately.",
  ],
  blood: [
    "Blood pressure is important to understand because high blood pressure is often called the silent killer, meaning it has no obvious symptoms.\n\nNormal blood pressure is below 120 over 80. If it is 130 over 80 or higher, that is considered high and needs attention.\n\nYou can manage it by eating less salt, aiming for under 2300 milligrams per day, exercising regularly, maintaining a healthy weight, limiting alcohol, and not smoking.\n\nThe most important thing is to get it checked regularly because you will not feel it happening. If your doctor prescribes medication, take it as directed.\n\nSimple lifestyle changes can make a real difference over time.",
  ],
  bmi: [
    "BMI stands for Body Mass Index. It is a simple number that helps you understand if your weight is in a healthy range.\n\nHere is how it works:\n- Below 18.5 is underweight\n- 18.5 to 24.9 is normal weight\n- 25 to 29.9 is overweight\n- 30 and above is considered obese\n\nYou can calculate it by dividing your weight in kilograms by your height in meters squared.\n\nKeep in mind that BMI is a general guide. It does not tell the whole story because it does not consider muscle mass, bone density, or body composition. Athletes, for example, might have a high BMI but be perfectly healthy.\n\nIt is a useful starting point but always combine it with other health measures.",
  ],
  weight: [
    "Healthy weight management is about sustainable habits, not quick fixes.\n\nThe basics are eat more protein and fiber because they keep you full longer, cut back on sugar and processed foods, drink water before meals, and move your body regularly.\n\nWalking 30 minutes a day is one of the most effective things you can do. It burns calories, boosts your metabolism, and improves your mood.\n\nGetting enough sleep is important too because poor sleep increases hunger hormones and cravings.\n\nBe patient with yourself. Slow and steady weight loss of 1 to 2 pounds per week is the healthiest and most sustainable approach.",
  ],
  covid: [
    "If you have COVID, the main things to do are rest, stay hydrated, and monitor your symptoms.\n\nTake paracetamol for fever and body aches. Isolate for at least 5 days to prevent spreading it to others.\n\nKeep track of your oxygen levels if you have a pulse oximeter. Normal is 95% or above.\n\nSeek immediate medical help if your oxygen drops below 94%, if you have trouble breathing, chest pain, or confusion.\n\nMost people recover at home within a week or two. Make sure to rest even after you start feeling better.",
  ],
  pregnancy: [
    "During pregnancy, taking care of yourself is taking care of your baby.\n\nThe most important things are taking folic acid daily, going to all your prenatal checkups, eating a balanced diet with plenty of fruits, vegetables, and protein, and staying active with gentle exercise like walking.\n\nGet enough rest and sleep. Your body is doing incredible work.\n\nAvoid alcohol, smoking, and excessive caffeine. These can harm the developing baby.\n\nAlways follow your doctor's advice and never hesitate to ask questions. Every pregnancy is different and your healthcare provider is your best guide.",
  ],
  skin: [
    "Good skin health starts from within. Drink plenty of water, eat foods rich in vitamins, and get enough sleep.\n\nFor daily care, wash your face twice a day, use sunscreen every day even when it is cloudy, and moisturize regularly.\n\nIf you have acne, avoid touching your face and use gentle, non-comedogenic products.\n\nFor any unusual rashes, persistent acne, or changes in your skin, it is best to see a dermatologist. They can provide proper treatment rather than you trying things on your own.",
  ],
  eye: [
    "Taking care of your eyes is important, especially in our screen-heavy world.\n\nThe 20-20-20 rule is very helpful: every 20 minutes, look at something 20 feet away for at least 20 seconds. This reduces eye strain significantly.\n\nWear sunglasses outdoors to protect from UV rays, get regular eye checkups, and eat foods rich in omega-3 fatty acids like fish and leafy greens.\n\nIf you notice sudden vision changes, floaters, or eye pain, see a doctor immediately. Do not wait on eye problems.",
  ],
  tooth: [
    "Dental health is connected to your overall health more than you might think.\n\nBrush your teeth at least twice a day for 2 minutes, floss daily, and use a fluoride toothpaste.\n\nLimit sugary snacks and drinks because sugar feeds the bacteria that cause cavities.\n\nVisit your dentist for checkups and cleanings every 6 months.\n\nIf you have tooth pain, swelling, or bleeding gums, do not ignore it. Early treatment prevents bigger problems later.",
  ],
  default: [
    "Thanks for your question. Here is some helpful general advice:\n\nWhenever you have a health concern, start by noting your symptoms and when they started. Stay hydrated, get plenty of rest, and avoid self-medicating.\n\nIf symptoms persist for more than a few days, get worse, or feel serious, please see a healthcare professional. They can give you proper diagnosis and treatment.\n\nI can help with specific topics like heart health, diabetes, nutrition, sleep, exercise, mental health, fever, cold, allergies, blood pressure, and more. Just type your question and I will do my best to help.",
  ],
};

function findBestResponse(input: string): string {
  const lower = input.toLowerCase();
  let result: string[];

  if ((lower.includes("fever") || lower.includes("temperature") || lower.includes("feverish")) &&
      (lower.includes("back") || lower.includes("spine") || lower.includes("backbone")) &&
      /(?:6|seven|7|five|5|four|4|three|3)\s*(?:day|days|d)/i.test(lower)) result = AI_RESPONSES.prolongedFeverBackPain;
  else if (lower.includes("heart") || lower.includes("cardio") || lower.includes("chest")) result = AI_RESPONSES.heart;
  else if (lower.includes("diabet") || lower.includes("sugar") || lower.includes("insulin")) result = AI_RESPONSES.diabetes;
  else if (lower.includes("cancer") || lower.includes("tumor") || lower.includes("mole")) result = AI_RESPONSES.cancer;
  else if (lower.includes("mental") || lower.includes("depress") || lower.includes("anxiety") || lower.includes("sad") || lower.includes("lonely")) result = AI_RESPONSES.mental;
  else if (lower.includes("stress") || lower.includes("stressed") || lower.includes("overwhelm") || lower.includes("pressure")) result = AI_RESPONSES.stress;
  else if (lower.includes("diet") || lower.includes("eat") || lower.includes("food") || lower.includes("nutrition") || lower.includes("fruit") || lower.includes("vegetable") || lower.includes("protein") || lower.includes("vitamin")) result = AI_RESPONSES.diet;
  else if (lower.includes("sleep") || lower.includes("insomnia") || lower.includes("rest") || lower.includes("tired") || lower.includes("fatigue")) result = AI_RESPONSES.sleep;
  else if (lower.includes("exercise") || lower.includes("workout") || lower.includes("fitness") || lower.includes("gym") || lower.includes("walk") || lower.includes("running") || lower.includes("active")) result = AI_RESPONSES.exercise;
  else if (lower.includes("headache") || lower.includes("migraine") || lower.includes("head pain")) result = AI_RESPONSES.headache;
  else if (lower.includes("fever") || lower.includes("temperature") || lower.includes("chills") || lower.includes("feverish")) result = AI_RESPONSES.fever;
  else if (lower.includes("cold") || lower.includes("flu") || lower.includes("cough") || lower.includes("sneeze") || lower.includes("stuffy") || lower.includes("runny nose")) result = AI_RESPONSES.cold;
  else if (lower.includes("allergy") || lower.includes("allergic") || lower.includes("rash") || lower.includes("hives") || lower.includes("itching")) result = AI_RESPONSES.allergy;
  else if (lower.includes("blood") || lower.includes("bp") || lower.includes("hypertension")) result = AI_RESPONSES.blood;
  else if (lower.includes("bmi") || lower.includes("body mass")) result = AI_RESPONSES.bmi;
  else if (lower.includes("weight") || lower.includes("obesity") || lower.includes("fat") || lower.includes("slim") || lower.includes("thin")) result = AI_RESPONSES.weight;
  else if (lower.includes("covid") || lower.includes("corona") || lower.includes("omnicron")) result = AI_RESPONSES.covid;
  else if (lower.includes("pregnant") || lower.includes("pregnancy") || lower.includes("baby") || lower.includes("folic")) result = AI_RESPONSES.pregnancy;
  else if (lower.includes("skin") || lower.includes("acne") || lower.includes("pimple") || lower.includes("derma")) result = AI_RESPONSES.skin;
  else if (lower.includes("eye") || lower.includes("vision") || lower.includes("glasses") || lower.includes("sight")) result = AI_RESPONSES.eye;
  else if (lower.includes("tooth") || lower.includes("teeth") || lower.includes("dental") || lower.includes("cavity")) result = AI_RESPONSES.tooth;
  else if (lower.includes("sore throat") || lower.includes("throat pain") || lower.includes("swallow")) result = ["For a sore throat, drink warm fluids, rest, and avoid smoke or other irritants. Monitor your temperature and symptoms.\n\nArrange medical care if it lasts more than a few days, keeps worsening, or makes swallowing difficult. Seek urgent help for breathing difficulty, drooling, severe swelling, confusion, or a stiff neck."];
  else if (lower.includes("vomit") || lower.includes("nausea") || lower.includes("diarrhea") || lower.includes("loose motion")) result = ["For vomiting or diarrhea, take small frequent sips of water or oral rehydration solution and eat light foods when you can. Rest and wash your hands carefully to reduce spread.\n\nContact a clinician if symptoms continue, you cannot keep fluids down, or you have blood, high fever, severe pain, dizziness, or very little urine. Seek emergency care for fainting, confusion, or severe dehydration."];
  else if (lower.includes("dizz") || lower.includes("faint") || lower.includes("vertigo")) result = ["For dizziness, sit or lie down safely, avoid driving, drink fluids, and stand up slowly. Note when it happens and any medicines or triggers.\n\nArrange medical care if it is new, repeated, or persistent. Seek emergency help for fainting, chest pain, severe headache, trouble speaking, facial drooping, new weakness, or difficulty walking."];
  else if (lower.includes("urine") || lower.includes("urinary") || lower.includes("pee") || lower.includes("burning while urinating")) result = ["For urinary symptoms, drink fluids unless a clinician has told you to restrict them, and arrange a medical check because testing may be needed. Do not use leftover antibiotics.\n\nSeek urgent care for fever with back or side pain, vomiting, blood in urine, pregnancy, confusion, or inability to urinate."];
  else if (lower.includes("joint") || lower.includes("muscle pain") || lower.includes("body pain")) result = ["For muscle or joint pain, rest the affected area, avoid activities that worsen it, and use a gentle cold or warm compress. Keep notes about swelling, injury, fever, and how long it lasts.\n\nArrange medical care for severe or persistent pain, significant swelling, redness, fever, numbness, or inability to move the area. Seek emergency help after a major injury or with sudden weakness."];
  else result = [buildGeneralFallback(input)];
  return result[0];
}

function buildGeneralFallback(input: string): string {
  const question = input.trim().replace(/\s+/g, " ");
  return `I understand you are asking about: "${question}". The safest next step depends on the exact symptoms, how long they have been present, your age, and any medical conditions or medicines.\n\nFor now, rest, drink fluids if you can, avoid starting someone else's medicine, and write down your symptoms, temperature, timing, and triggers. A clinician should assess symptoms that persist, worsen, or interfere with normal activities.\n\nSeek emergency help for trouble breathing, chest pain, fainting, confusion, sudden weakness, severe pain, uncontrolled bleeding, or swelling of the face or throat. What is the main symptom, when did it start, and is it getting worse?`;
}

function findPriorityResponse(input: string): string | null {
  const lower = input.toLowerCase();
  const hasFever = lower.includes("fever") || lower.includes("temperature") || lower.includes("feverish");
  const hasBackPain = lower.includes("back") || lower.includes("spine") || lower.includes("backbone");
  const hasSeveralDays = /(?:6|seven|7|five|5|four|4|three|3)\s*(?:day|days|d)/i.test(lower);

  return hasFever && hasBackPain && hasSeveralDays
    ? AI_RESPONSES.prolongedFeverBackPain[0]
    : null;
}

function formatAIResponse(text: string): string {
  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  safe = safe.replace(/\n\n/g, '<div class="h-2"></div>');
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
  const generateAIResponse = useAction(api.ai.generateAIResponse);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const closeChat = () => {
    setOpen(false);
    setMessages([]);
    setInput("");
    setIsTyping(false);
  };

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = findPriorityResponse(msg) || await generateAIResponse({ question: msg });
      const aiMsg: Message = { id: `a-${Date.now()}`, role: "ai", text: response, timestamp: new Date() };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: Message = { id: `a-${Date.now()}`, role: "ai", text: findBestResponse(msg), timestamp: new Date() };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => open ? closeChat() : setOpen(true)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={open ? {} : { y: [0, -4, 0] }}
        transition={open ? {} : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-[55] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{
              bottom: "80px",
              right: "20px",
              width: "380px",
              maxWidth: "calc(100vw - 40px)",
              height: "520px",
              maxHeight: "calc(100vh - 120px)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header - always visible */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-white">{t("aiChatTitle")}</h3>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  <p className="text-[11px] text-white/80 truncate">{t("aiChatDesc")}</p>
                </div>
              </div>
              <button onClick={closeChat} className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer">
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Messages area - scrollable */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50 min-h-0">
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <div className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-sm font-bold text-gray-800">{t("aiWelcome")}</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[260px] mx-auto">{t("aiWelcomeDesc")}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {QUICK_TOPICS.map((topic) => {
                      const Icon = topic.icon;
                      return (
                        <button
                          key={topic.label}
                          onClick={() => sendMessage(topic.label)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${topic.border} ${topic.bg} hover:shadow-sm transition-all text-left cursor-pointer`}
                        >
                          <Icon className={`h-4 w-4 ${topic.color} shrink-0`} />
                          <span className="text-xs font-medium text-gray-700">{topic.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "ai" && (
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] min-w-0 break-words [overflow-wrap:anywhere] px-3.5 py-2.5 text-[13px] leading-[1.6] rounded-2xl ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-white text-gray-700 border border-gray-200 rounded-bl-md shadow-sm"
                  }`}>
                    {msg.role === "ai" ? (
                      <div className="min-w-0 break-words [overflow-wrap:anywhere]" dangerouslySetInnerHTML={{ __html: formatAIResponse(msg.text) }} />
                    ) : (
                      msg.text
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="h-7 w-7 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="h-3.5 w-3.5 text-gray-500" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-white border border-gray-200 shadow-sm">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area - always visible at bottom */}
            <div className="border-t border-gray-100 bg-white px-3 py-3 shrink-0">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("aiPlaceholder")}
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-gray-400 text-center mt-1.5">
                Educational info only. Not medical advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
