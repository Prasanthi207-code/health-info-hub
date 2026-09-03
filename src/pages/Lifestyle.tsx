import { motion } from "framer-motion";
import { Apple, Dumbbell, Moon, GlassWater, Brain, Sparkles, Heart, Smile, Footprints, Salad, Droplet, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HEALTH_TIPS, DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const LIFESTYLE_PILLARS = [
  {
    titleKey: "lifestyleEatBetter" as const,
    icon: Apple,
    color: "oklch(0.55 0.12 150)",
    gradient: "from-green-500/10 to-emerald-500/10",
    descKey: "lifestyleEatBetterDesc" as const,
    habits: [
      "Eat at least 5 servings of fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Include lean proteins and healthy fats in every meal",
      "Limit added sugars to less than 25g per day",
      "Read and understand nutrition labels",
      "Practice mindful eating and portion awareness",
    ],
  },
  {
    titleKey: "lifestyleMoveMore" as const,
    icon: Dumbbell,
    color: "oklch(0.5 0.12 100)",
    gradient: "from-orange-500/10 to-amber-500/10",
    descKey: "lifestyleMoveMoreDesc" as const,
    habits: [
      "Aim for 150 minutes of moderate aerobic activity per week",
      "Include strength training exercises twice a week",
      "Take walking breaks every hour if you sit for long periods",
      "Choose activities you enjoy to stay motivated",
      "Start slowly and gradually increase intensity",
      "Use stairs instead of elevators when possible",
    ],
  },
  {
    titleKey: "lifestyleSleepWell" as const,
    icon: Moon,
    color: "oklch(0.45 0.08 280)",
    gradient: "from-indigo-500/10 to-purple-500/10",
    descKey: "lifestyleSleepWellDesc" as const,
    habits: [
      "Aim for 7-9 hours of sleep per night",
      "Maintain a consistent sleep schedule, even on weekends",
      "Create a cool, dark, and quiet sleep environment",
      "Limit screen time at least 30 minutes before bed",
      "Avoid caffeine and heavy meals close to bedtime",
      "Develop a relaxing pre-sleep routine",
    ],
  },
  {
    titleKey: "lifestyleManageStress" as const,
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    gradient: "from-blue-500/10 to-sky-500/10",
    descKey: "lifestyleManageStressDesc" as const,
    habits: [
      "Practice mindfulness and meditation regularly",
      "Take deep breathing breaks throughout the day",
      "Spend time in nature and green spaces",
      "Maintain strong social connections",
      "Set healthy boundaries at work and home",
      "Practice gratitude daily",
    ],
  },
  {
    titleKey: "lifestyleStayHydrated" as const,
    icon: GlassWater,
    color: "oklch(0.5 0.12 210)",
    gradient: "from-cyan-500/10 to-teal-500/10",
    descKey: "lifestyleStayHydratedDesc" as const,
    habits: [
      "Drink at least 8 glasses of water daily",
      "Start your day with a glass of water",
      "Carry a reusable water bottle throughout the day",
      "Replace sugary drinks with water or herbal tea",
      "Monitor urine color as a hydration indicator",
      "Eat water-rich foods like fruits and vegetables",
    ],
  },
  {
    titleKey: "lifestyleMaintainHygiene" as const,
    icon: Sparkles,
    color: "oklch(0.55 0.1 170)",
    gradient: "from-emerald-500/10 to-green-500/10",
    descKey: "lifestyleMaintainHygieneDesc" as const,
    habits: [
      "Wash hands with soap and water for at least 20 seconds",
      "Brush teeth twice daily and floss regularly",
      "Shower regularly and keep clean clothes",
      "Cover coughs and sneezes with your elbow",
      "Keep living spaces clean and ventilated",
      "Replace toothbrush every 3 months",
    ],
  },
];

const DAILY_ROUTINE = [
  { timeKey: "morning" as const, icon: Sun, items: ["Drink a glass of water", "Eat a nutritious breakfast", "Take morning vitamins", "Brief morning stretching"] },
  { timeKey: "afternoon" as const, icon: Footprints, items: ["Stay hydrated", "Healthy lunch", "Short walking break", "Mindful eating"] },
  { timeKey: "evening" as const, icon: Moon, items: ["Balanced dinner", "Light exercise or walk", "Limit screen time", "Relaxation routine"] },
  { timeKey: "night" as const, icon: Smile, items: ["Prepare for sleep", "Gratitude reflection", "Consistent bedtime", "Cool, dark bedroom"] },
];

const TELUGU_HABITS: Record<string, string[]> = {
  lifestyleEatBetter: ["రోజూ కనీసం 5 సార్లు పండ్లు, కూరగాయలు తినండి", "శుద్ధి చేసిన ధాన్యాల బదులు సంపూర్ణ ధాన్యాలను ఎంచుకోండి", "ప్రతి భోజనంలో తక్కువ కొవ్వు ప్రోటీన్ మరియు ఆరోగ్యకరమైన కొవ్వులు చేర్చండి", "రోజుకు చేర్చే చక్కెరను 25 గ్రాముల కంటే తక్కువగా ఉంచండి", "పోషకాహార లేబుళ్లను చదివి అర్థం చేసుకోండి", "శ్రద్ధగా తినడం మరియు సరైన పరిమాణాన్ని పాటించండి"],
  lifestyleMoveMore: ["వారానికి 150 నిమిషాల మితమైన ఏరోబిక్ వ్యాయామం చేయండి", "వారానికి రెండుసార్లు బలపరిచే వ్యాయామాలు చేయండి", "ఎక్కువసేపు కూర్చుంటే ప్రతి గంటకు నడక విరామం తీసుకోండి", "ప్రేరణగా ఉండేందుకు మీకు నచ్చిన కార్యకలాపాలను ఎంచుకోండి", "నెమ్మదిగా ప్రారంభించి తీవ్రతను క్రమంగా పెంచండి", "సాధ్యమైనప్పుడు లిఫ్ట్ బదులు మెట్లు ఉపయోగించండి"],
  lifestyleSleepWell: ["ప్రతి రాత్రి 7-9 గంటలు నిద్రపోవాలని లక్ష్యంగా పెట్టుకోండి", "వారాంతాల్లో కూడా ఒకే నిద్ర సమయాన్ని పాటించండి", "చల్లగా, చీకటిగా, నిశ్శబ్దంగా ఉన్న నిద్ర వాతావరణాన్ని సృష్టించండి", "పడుకునే 30 నిమిషాల ముందు స్క్రీన్ వాడకాన్ని తగ్గించండి", "పడుకునే ముందు కెఫీన్ మరియు బరువైన భోజనం నివారించండి", "నిద్రకు ముందు ప్రశాంతమైన అలవాటును ఏర్పరచుకోండి"],
  lifestyleManageStress: ["నియమితంగా మైండ్‌ఫుల్‌నెస్ మరియు ధ్యానం చేయండి", "రోజంతా లోతైన శ్వాస విరామాలు తీసుకోండి", "ప్రకృతి మరియు పచ్చని ప్రదేశాల్లో సమయం గడపండి", "బలమైన సామాజిక సంబంధాలను కొనసాగించండి", "పని మరియు ఇంటి వద్ద ఆరోగ్యకరమైన పరిమితులను పెట్టుకోండి", "ప్రతిరోజూ కృతజ్ఞతను సాధన చేయండి"],
  lifestyleStayHydrated: ["రోజూ కనీసం 8 గ్లాసుల నీరు తాగండి", "మీ రోజును ఒక గ్లాసు నీటితో ప్రారంభించండి", "రోజంతా పునర్వినియోగ నీటి సీసాను వెంట ఉంచుకోండి", "చక్కెర పానీయాల బదులు నీరు లేదా హెర్బల్ టీ తాగండి", "నీటి స్థాయిని తెలుసుకోవడానికి మూత్రం రంగును గమనించండి", "పండ్లు, కూరగాయలు వంటి నీరు ఎక్కువగా ఉన్న ఆహారం తినండి"],
  lifestyleMaintainHygiene: ["సబ్బు మరియు నీటితో కనీసం 20 సెకన్లు చేతులు కడుక్కోండి", "రోజుకు రెండుసార్లు పళ్లు తోముకుని, క్రమం తప్పకుండా ఫ్లాస్ చేయండి", "క్రమం తప్పకుండా స్నానం చేసి శుభ్రమైన బట్టలు ధరించండి", "దగ్గినప్పుడు, తుమ్మినప్పుడు మోచేతితో కప్పుకోండి", "ఇంటి ప్రదేశాలను శుభ్రంగా మరియు గాలి ప్రసరణతో ఉంచండి", "ప్రతి 3 నెలలకు టూత్‌బ్రష్ మార్చండి"],
};

const TELUGU_ROUTINE: Record<string, string[]> = {
  morning: ["ఒక గ్లాసు నీరు తాగండి", "పోషకమైన అల్పాహారం తినండి", "ఉదయపు విటమిన్లు తీసుకోండి", "కొద్దిసేపు ఉదయపు స్ట్రెచింగ్ చేయండి"],
  afternoon: ["నీరు తాగుతూ ఉండండి", "ఆరోగ్యకరమైన మధ్యాహ్న భోజనం", "కొద్దిసేపు నడక విరామం", "శ్రద్ధగా తినండి"],
  evening: ["సమతుల్య రాత్రి భోజనం", "తేలికపాటి వ్యాయామం లేదా నడక", "స్క్రీన్ సమయాన్ని తగ్గించండి", "విశ్రాంతి అలవాటు పాటించండి"],
  night: ["నిద్రకు సిద్ధం అవ్వండి", "కృతజ్ఞతను గుర్తుచేసుకోండి", "నిర్దిష్ట నిద్ర సమయాన్ని పాటించండి", "చల్లని, చీకటి గదిలో నిద్రించండి"],
};

const TELUGU_TIPS: Record<string, { title: string; description: string; category: string }> = {
  ht1: { title: "రోజును నీటితో ప్రారంభించండి", description: "నిద్ర తర్వాత శరీరాన్ని హైడ్రేట్ చేయడానికి ఉదయం మొదట ఒక గ్లాసు నీరు తాగండి.", category: "నీరు" },
  ht2: { title: "నడక విరామాలు తీసుకోండి", description: "ఎక్కువసేపు కూర్చుంటే ప్రతి గంటకు 5 నిమిషాలు లేచి నడవండి.", category: "శారీరక చురుకుదనం" },
  ht3: { title: "ఎక్కువ కూరగాయలు తినండి", description: "ఈరోజు కనీసం ఒక భోజనంలో అదనంగా కూరగాయలను చేర్చండి.", category: "పోషకాహారం" },
  ht4: { title: "లోతైన శ్వాస సాధన చేయండి", description: "ఒత్తిడిగా అనిపించినప్పుడు 5 సార్లు లోతుగా శ్వాస తీసుకోండి.", category: "మానసిక ఆరోగ్యం" },
  ht5: { title: "7-8 గంటలు నిద్రపోండి", description: "నిర్దిష్ట నిద్ర సమయాన్ని పాటించి, పడుకునే ముందు స్క్రీన్ సమయాన్ని తగ్గించండి.", category: "నిద్ర" },
  ht6: { title: "చేతులను సరిగ్గా కడుక్కోండి", description: "తినే ముందు మరియు మరుగుదొడ్డి ఉపయోగించిన తర్వాత కనీసం 20 సెకన్లు చేతులు కడుక్కోండి.", category: "పరిశుభ్రత" },
  ht7: { title: "మెట్లు ఉపయోగించండి", description: "సాధ్యమైనప్పుడు లిఫ్ట్ బదులు మెట్లు ఉపయోగించి రోజువారీ చురుకుదనాన్ని పెంచండి.", category: "శారీరక చురుకుదనం" },
  ht8: { title: "చక్కెర పానీయాలను తగ్గించండి", description: "ఈరోజు ఒక చక్కెర పానీయానికి బదులు నీరు లేదా హెర్బల్ టీ తాగండి.", category: "పోషకాహారం" },
  ht9: { title: "ఎవరితోనైనా మాట్లాడండి", description: "స్నేహితుడు లేదా కుటుంబ సభ్యుడిని సంప్రదించండి. సామాజిక సంబంధం మానసిక ఆరోగ్యానికి ముఖ్యమైనది.", category: "మానసిక ఆరోగ్యం" },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function Lifestyle() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                  <Heart className="h-3.5 w-3.5" />
                  {t("lifestyle")}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{t("lifestyleTitle")}</h1>
                <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                  {t("lifestyleDesc")}
                </p>
              </motion.div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=360&fit=crop" alt="Healthy lifestyle" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-cover h-[280px]" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("sixPillars")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("sixPillarsDesc")}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {LIFESTYLE_PILLARS.map((pillar) => (
                <motion.div key={pillar.titleKey} variants={fadeUp}>
                  <div className={`rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 h-full bg-gradient-to-br ${pillar.gradient}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white"
                        style={{ color: pillar.color }}
                      >
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)]">{t(pillar.titleKey)}</h3>
                    </div>
                    <p className="text-sm text-[oklch(0.4_0.02_250)] leading-relaxed mb-3">{t(pillar.descKey)}</p>
                    <ul className="space-y-1.5">
                      {pillar.habits.map((habit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[oklch(0.35_0.02_250)] leading-relaxed">
                          <span className="mt-1 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: pillar.color }} />
                          {language === "te" ? TELUGU_HABITS[pillar.titleKey][i] : habit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lifestyle Image Banner */}
        <section className="py-6 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop"
                alt="Active lifestyle"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.06_255_/_0.8)] to-transparent flex items-center p-8">
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{language === "te" ? "ప్రతిరోజూ కదలండి" : "Move Every Day"}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{language === "te" ? "ప్రతిరోజూ 30 నిమిషాల చురుకుదనం మీ శారీరక మరియు మానసిక ఆరోగ్యాన్ని మెరుగుపరచగలదు." : "Even 30 minutes of daily activity can transform your physical and mental health."}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("dailyRoutine")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("dailyRoutineDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DAILY_ROUTINE.map((slot, i) => (
                <motion.div
                  key={slot.timeKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <slot.icon className="h-5 w-5 text-[oklch(0.35_0.1_220)]" />
                    <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{t(slot.timeKey)}</h3>
                  </div>
                  <ul className="space-y-2">
                    {slot.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[oklch(0.35_0.02_250)]">
                        <span className="h-1 w-1 rounded-full bg-[oklch(0.32_0.08_255)]" />
                        {language === "te" ? TELUGU_ROUTINE[slot.timeKey][j] : item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("dailyTips")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("dailyTipsDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HEALTH_TIPS.slice(0, 9).map((tip, i) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4"
                >
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)] mb-2">
                    {language === "te" ? TELUGU_TIPS[tip.id]?.category || tip.category : tip.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] mb-1">{language === "te" ? TELUGU_TIPS[tip.id]?.title || tip.title : tip.title}</h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">{language === "te" ? TELUGU_TIPS[tip.id]?.description || tip.description : tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 border-t border-[oklch(0.92_0.01_240)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[oklch(0.5_0.02_250)] text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-[oklch(0.4_0.02_250)]">{language === "te" ? "నిరాకరణ:" : "Disclaimer:"}</strong> {language === "te" ? "ఈ సమాచారం సాధారణ విద్యా మరియు అవగాహన కోసం మాత్రమే. వ్యక్తిగత వైద్య సలహా కోసం ఆరోగ్య నిపుణుడిని సంప్రదించండి." : DISCLAIMER}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
