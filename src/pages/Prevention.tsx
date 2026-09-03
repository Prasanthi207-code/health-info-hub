import { motion } from "framer-motion";
import { Link } from "react-router";
import { ShieldCheck, Heart, Apple, Dumbbell, Brain, Droplet, Wind, Eye, Moon, Sparkles, ArrowRight, Stethoscope, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const PREVENTION_CATEGORIES = [
  {
    titleKey: "preventionEatWell" as const,
    icon: Apple,
    color: "oklch(0.55 0.12 150)",
    tips: [
      "Maintain a balanced diet low in saturated fats and sodium",
      "Exercise regularly — at least 150 minutes of moderate activity per week",
      "Monitor blood pressure and cholesterol levels",
      "Avoid tobacco use and limit alcohol consumption",
      "Manage stress through healthy coping strategies",
    ],
    link: "/topics/t5",
  },
  {
    titleKey: "preventionExercise" as const,
    icon: Dumbbell,
    color: "oklch(0.5 0.12 100)",
    tips: [
      "Aim for at least 150 minutes of moderate aerobic activity per week",
      "Include strength training exercises twice a week",
      "Take walking breaks every hour if you sit for long periods",
      "Choose activities you enjoy to stay motivated",
      "Start slowly and gradually increase intensity",
    ],
    link: "/topics/t13",
  },
  {
    titleKey: "preventionSleep" as const,
    icon: Moon,
    color: "oklch(0.45 0.08 280)",
    tips: [
      "Maintain a consistent sleep schedule, even on weekends",
      "Aim for 7-9 hours of sleep per night",
      "Create a cool, dark, and quiet sleep environment",
      "Limit screen time at least 30 minutes before bed",
      "Avoid caffeine and heavy meals close to bedtime",
    ],
    link: "/topics/t14",
  },
  {
    titleKey: "preventionHygiene" as const,
    icon: Sparkles,
    color: "oklch(0.5 0.12 170)",
    tips: [
      "Wash hands frequently with soap and water for 20+ seconds",
      "Cover coughs and sneezes with your elbow",
      "Keep living and working spaces clean and ventilated",
      "Shower regularly and keep clean clothes",
      "Replace your toothbrush every 3 months",
    ],
    link: "/topics/t12",
  },
  {
    titleKey: "preventionVaccines" as const,
    icon: ShieldCheck,
    color: "oklch(0.5 0.15 300)",
    tips: [
      "Stay up to date on recommended vaccinations",
      "Follow your local health authority's schedule",
      "Vaccines protect you and those around you",
      "Consult your doctor about travel vaccines",
      "Keep your vaccination records updated",
    ],
    link: "/topics/t8",
  },
  {
    titleKey: "preventionMentalHealth" as const,
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    tips: [
      "Build and maintain supportive relationships",
      "Practice regular physical activity for mood benefits",
      "Develop healthy coping strategies for stress",
      "Seek professional help early when struggling",
      "Practice mindfulness and relaxation techniques",
    ],
    link: "/topics/t4",
  },
  {
    titleKey: "preventionScreenings" as const,
    icon: Eye,
    color: "oklch(0.65 0.08 190)",
    tips: [
      "Regular health screenings can detect conditions early",
      "Talk to your doctor about age-appropriate screenings",
      "Know your family health history and risk factors",
      "Don't skip recommended cancer screenings",
      "Monitor blood pressure, cholesterol, and blood sugar regularly",
    ],
    link: "/topics/t1",
  },
  {
    titleKey: "preventionHydration" as const,
    icon: Droplet,
    color: "oklch(0.55 0.12 180)",
    tips: [
      "Drink at least 8 glasses of water daily",
      "Start your day with a glass of water",
      "Carry a reusable water bottle",
      "Replace sugary drinks with water or herbal tea",
      "Eat water-rich foods like fruits and vegetables",
    ],
    link: "/topics/t5",
  },
  {
    titleKey: "preventionSunProtection" as const,
    icon: Heart,
    color: "oklch(0.55 0.15 25)",
    tips: [
      "Use sunscreen with SPF 30 or higher",
      "Wear protective clothing and hats",
      "Avoid peak sun hours (10 AM to 4 PM)",
      "Seek shade whenever possible",
      "Reapply sunscreen every 2 hours when outdoors",
    ],
    link: "/topics/t3",
  },
  {
    titleKey: "preventionAvoidTobacco" as const,
    icon: Wind,
    color: "oklch(0.5 0.12 220)",
    tips: [
      "Smoking is the leading cause of preventable death",
      "Seek help to quit if you smoke",
      "Limit alcohol consumption",
      "Avoid secondhand smoke exposure",
      "Encourage family and friends to quit tobacco",
    ],
    link: "/topics/t8",
  },
];

const TELUGU_PREVENTION_TIPS: Record<string, string[]> = {
  preventionEatWell: ["సంతృప్త కొవ్వులు మరియు ఉప్పు తక్కువగా ఉన్న సమతుల్య ఆహారం తీసుకోండి", "వారానికి కనీసం 150 నిమిషాల మితమైన వ్యాయామం చేయండి", "రక్తపోటు మరియు కొలెస్ట్రాల్ స్థాయిలను గమనించండి", "పొగాకు వాడకాన్ని నివారించి మద్యం పరిమితం చేయండి", "ఆరోగ్యకరమైన పద్ధతులతో ఒత్తిడిని నిర్వహించండి"],
  preventionExercise: ["వారానికి కనీసం 150 నిమిషాల మితమైన ఏరోబిక్ వ్యాయామం చేయండి", "వారానికి రెండుసార్లు కండరాల బలపరిచే వ్యాయామాలు చేయండి", "ఎక్కువసేపు కూర్చుంటే ప్రతి గంటకు నడక విరామం తీసుకోండి", "ప్రేరణగా ఉండేందుకు మీకు నచ్చిన కార్యకలాపాలను ఎంచుకోండి", "నెమ్మదిగా ప్రారంభించి తీవ్రతను క్రమంగా పెంచండి"],
  preventionSleep: ["వారాంతాల్లో కూడా ఒకే నిద్ర సమయాన్ని పాటించండి", "ప్రతి రాత్రి 7-9 గంటలు నిద్రపోవాలని లక్ష్యంగా పెట్టుకోండి", "చల్లగా, చీకటిగా, నిశ్శబ్దంగా ఉన్న నిద్ర వాతావరణాన్ని సృష్టించండి", "పడుకునే 30 నిమిషాల ముందు స్క్రీన్ వాడకాన్ని తగ్గించండి", "పడుకునే ముందు కెఫీన్ మరియు బరువైన భోజనం నివారించండి"],
  preventionHygiene: ["సబ్బు మరియు నీటితో 20 సెకన్లకు పైగా చేతులు తరచుగా కడుక్కోండి", "దగ్గినప్పుడు, తుమ్మినప్పుడు మోచేతితో కప్పుకోండి", "ఇల్లు మరియు పని ప్రదేశాలను శుభ్రంగా, గాలి ప్రసరణతో ఉంచండి", "క్రమం తప్పకుండా స్నానం చేసి శుభ్రమైన బట్టలు ధరించండి", "ప్రతి 3 నెలలకు టూత్‌బ్రష్ మార్చండి"],
  preventionVaccines: ["సిఫార్సు చేసిన టీకాలను సమయానికి వేయించుకోండి", "స్థానిక ఆరోగ్యశాఖ టీకా షెడ్యూల్‌ను పాటించండి", "టీకాలు మిమ్మల్ని మరియు మీ చుట్టూ ఉన్నవారిని రక్షిస్తాయి", "ప్రయాణ టీకాల గురించి మీ వైద్యుడిని సంప్రదించండి", "టీకా రికార్డులను తాజాగా ఉంచండి"],
  preventionMentalHealth: ["మద్దతు ఇచ్చే సంబంధాలను నిర్మించి కొనసాగించండి", "మానసిక స్థితి మెరుగుపడేందుకు క్రమం తప్పకుండా వ్యాయామం చేయండి", "ఒత్తిడికి ఆరోగ్యకరమైన ఎదుర్కొనే పద్ధతులను అభివృద్ధి చేసుకోండి", "ఇబ్బంది ఎదురైనప్పుడు ముందుగానే వృత్తిపరమైన సహాయం పొందండి", "మైండ్‌ఫుల్‌నెస్ మరియు విశ్రాంతి పద్ధతులను సాధన చేయండి"],
  preventionScreenings: ["క్రమం తప్పని ఆరోగ్య పరీక్షలు సమస్యలను ముందుగానే గుర్తించగలవు", "వయస్సుకు తగిన పరీక్షల గురించి మీ వైద్యుడితో మాట్లాడండి", "కుటుంబ ఆరోగ్య చరిత్ర మరియు ప్రమాద కారకాలను తెలుసుకోండి", "సిఫార్సు చేసిన క్యాన్సర్ పరీక్షలను వాయిదా వేయకండి", "రక్తపోటు, కొలెస్ట్రాల్, రక్తంలో చక్కెరను క్రమం తప్పకుండా గమనించండి"],
  preventionHydration: ["రోజూ కనీసం 8 గ్లాసుల నీరు తాగండి", "మీ రోజును ఒక గ్లాసు నీటితో ప్రారంభించండి", "పునర్వినియోగ నీటి సీసాను వెంట ఉంచుకోండి", "చక్కెర పానీయాల బదులు నీరు లేదా హెర్బల్ టీ తాగండి", "పండ్లు, కూరగాయలు వంటి నీరు ఎక్కువగా ఉన్న ఆహారం తినండి"],
  preventionSunProtection: ["SPF 30 లేదా అంతకంటే ఎక్కువ ఉన్న సన్‌స్క్రీన్ వాడండి", "రక్షణ దుస్తులు మరియు టోపీలు ధరించండి", "ఉదయం 10 నుంచి సాయంత్రం 4 వరకు ఎక్కువ ఎండను నివారించండి", "సాధ్యమైనప్పుడు నీడలో ఉండండి", "బయట ఉన్నప్పుడు ప్రతి 2 గంటలకు సన్‌స్క్రీన్ మళ్లీ రాయండి"],
  preventionAvoidTobacco: ["ధూమపానం నివారించగల మరణాలకు ప్రధాన కారణం", "ధూమపానం చేస్తే మానేందుకు సహాయం పొందండి", "మద్యం వినియోగాన్ని పరిమితం చేయండి", "ఇతరుల పొగకు గురికాకుండా ఉండండి", "కుటుంబ సభ్యులు, స్నేహితులను పొగాకు మానేందుకు ప్రోత్సహించండి"],
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function Prevention() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1505576399279-0d0ef0e69e2e?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t("prevention")}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{t("preventionTitle")}</h1>
                <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                  {t("preventionDesc")}
                </p>
              </motion.div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=360&fit=crop" alt="Prevention and healthy living" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-cover h-[280px]" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-xl bg-gradient-to-r from-[oklch(0.32_0.08_255)] to-[oklch(0.42_0.1_210)] p-6 sm:p-8 text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">{t("preventionMessage")}</h2>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {t("preventionMessageDesc")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {PREVENTION_CATEGORIES.map((cat) => (
                <motion.div key={cat.titleKey} variants={fadeUp}>
                  <div className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)` }}
                      >
                        <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                      </div>
                      <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)]">{t(cat.titleKey)}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {cat.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                          {language === "te" ? TELUGU_PREVENTION_TIPS[cat.titleKey][i] : tip}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={cat.link}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)] hover:gap-1.5 transition-all"
                    >
                      {t("learnMore")} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Health Image Banner */}
            <motion.div
              className="mt-10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=400&fit=crop"
                alt="Healthy food and prevention"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="bg-gradient-to-r from-[oklch(0.22_0.06_255)] to-[oklch(0.35_0.07_200)] p-6">
                <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
                  {t("preventionMessage")} — {t("preventionMessageDesc")}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-red-800 mb-1">{t("whenToSeekHelp")}</h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    {t("seekHelpDesc")}
                  </p>
                  <Link
                    to="/emergency"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800"
                  >
                    {t("emergency")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
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
