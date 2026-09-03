import { motion } from "framer-motion";
import { Link } from "react-router";
import { AlertTriangle, Phone, Heart, Droplet, Wind, Thermometer, Brain, Bone, Eye, ArrowRight, MapPin, Navigation, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const EMERGENCY_SECTIONS = [
  {
    title: "When to Call Emergency Services",
    icon: Phone,
    color: "oklch(0.55 0.15 25)",
    description: "Call your local emergency number (911 in the US, 999 in the UK, 112 in the EU) immediately if you or someone else experiences:",
    signs: [
      "Difficulty breathing or stopped breathing",
      "Unresponsiveness or unconsciousness",
      "Chest pain or pressure lasting more than a few minutes",
      "Severe allergic reaction (anaphylaxis)",
      "Sudden severe headache or confusion",
      "Seizures",
      "Heavy uncontrolled bleeding",
      "Signs of stroke (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call)",
      "Severe burns over a large area",
      "Head or neck injury",
      "Choking",
      "Severe abdominal pain",
    ],
  },
  {
    title: "Heart Attack Warning Signs",
    icon: Heart,
    color: "oklch(0.55 0.15 25)",
    signs: [
      "Chest discomfort — pressure, squeezing, or pain",
      "Pain radiating to the arm, jaw, neck, or back",
      "Shortness of breath",
      "Cold sweat, nausea, or lightheadedness",
      "Unusual fatigue",
      "Women may experience atypical symptoms including nausea and back pain",
    ],
  },
  {
    title: "Stroke Warning Signs (FAST)",
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    signs: [
      "Face drooping — one side of the face may droop or feel numb",
      "Arm weakness — one arm may drift downward when raised",
      "Speech difficulty — speech may be slurred or strange",
      "Time to call emergency services — note the time symptoms started",
    ],
  },
  {
    title: "Severe Breathing Problems",
    icon: Wind,
    color: "oklch(0.5 0.12 220)",
    signs: [
      "Severe difficulty breathing or shortness of breath",
      "Blue-tinged lips or fingernails (cyanosis)",
      "Rapid breathing that doesn't slow down",
      "Chest pain with breathing",
      "Coughing up blood",
      "Severe wheezing that doesn't improve with medication",
    ],
  },
  {
    title: "Severe Allergic Reactions",
    icon: AlertTriangle,
    color: "oklch(0.55 0.12 45)",
    signs: [
      "Swelling of the face, lips, tongue, or throat",
      "Difficulty breathing or swallowing",
      "Rapid heartbeat",
      "Dizziness or fainting",
      "Widespread hives or rash",
      "Nausea, vomiting, or abdominal pain",
      "Loss of consciousness",
    ],
  },
  {
    title: "Severe Dehydration",
    icon: Droplet,
    color: "oklch(0.5 0.12 180)",
    signs: [
      "Extreme thirst and dry mouth",
      "Very dark urine or no urination for 8+ hours",
      "Dizziness or lightheadedness when standing",
      "Rapid heartbeat and breathing",
      "Confusion or irritability",
      "Sunken eyes",
      "Skin that doesn't bounce back when pinched",
    ],
  },
  {
    title: "High Fever in Children",
    icon: Thermometer,
    color: "oklch(0.55 0.12 45)",
    signs: [
      "Fever over 104°F (40°C) in children",
      "Fever in infants under 3 months old (any temperature)",
      "Fever lasting more than 3 days",
      "Rash that doesn't fade with pressure",
      "Difficulty breathing",
      "Seizure associated with fever",
      "Severe headache or stiff neck",
    ],
  },
  {
    title: "Bone Fractures & Trauma",
    icon: Bone,
    color: "oklch(0.5 0.08 250)",
    signs: [
      "Visible deformity or unnatural position of a limb",
      "Severe pain at the injury site",
      "Inability to move or bear weight",
      "Swelling and bruising",
      "Bone protruding through the skin (open fracture)",
      "Numbness or tingling below the injury",
    ],
  },
];

const FIRST_AID = [
  {
    title: "CPR Basics",
    steps: [
      "Check if the person is responsive and breathing normally",
      "Call emergency services immediately",
      "Place the heel of your hand on the center of the chest",
      "Push hard and fast — at least 2 inches deep, at 100-120 compressions per minute",
      "If trained, give 30 compressions then 2 rescue breaths",
      "Continue until help arrives or the person recovers",
    ],
  },
  {
    title: "Choking Response",
    steps: [
      "Ask the person if they can speak or cough",
      "If they can't, stand behind them and wrap your arms around their waist",
      "Make a fist and place it just above the navel",
      "Grasp your fist with the other hand and thrust inward and upward",
      "Repeat until the object is expelled or the person becomes unconscious",
    ],
  },
  {
    title: "Controlling Bleeding",
    steps: [
      "Apply firm, direct pressure with a clean cloth or gauze",
      "Maintain pressure for at least 15 minutes",
      "If blood soaks through, add more material on top — don't remove the first layer",
      "Elevate the injured area above the heart if possible",
      "Apply a pressure bandage once bleeding slows",
      "Seek immediate medical attention for severe bleeding",
    ],
  },
];

const TELUGU_EMERGENCY: Record<string, { title: string; description?: string; signs: string[] }> = {
  "When to Call Emergency Services": { title: "అత్యవసర సేవలకు ఎప్పుడు కాల్ చేయాలి", description: "మీకు లేదా మరెవరికైనా ఈ లక్షణాలు ఉంటే వెంటనే స్థానిక అత్యవసర నంబర్‌కు కాల్ చేయండి:", signs: ["శ్వాస తీసుకోవడంలో ఇబ్బంది లేదా శ్వాస ఆగిపోవడం", "స్పృహ లేకపోవడం", "కొన్ని నిమిషాలుగా కొనసాగుతున్న ఛాతీ నొప్పి లేదా ఒత్తిడి", "తీవ్రమైన అలర్జీ ప్రతిచర్య", "అకస్మాత్తుగా తీవ్రమైన తలనొప్పి లేదా గందరగోళం", "మూర్ఛలు", "తీవ్రమైన అదుపులేని రక్తస్రావం", "స్ట్రోక్ సంకేతాలు: ముఖం వంగడం, చేతి బలహీనత, మాటలో ఇబ్బంది", "పెద్ద ప్రాంతంలో తీవ్రమైన కాలిన గాయాలు", "తల లేదా మెడ గాయం", "గొంతులో వస్తువు ఇరుక్కోవడం", "తీవ్రమైన కడుపు నొప్పి"] },
  "Heart Attack Warning Signs": { title: "గుండెపోటు హెచ్చరిక సంకేతాలు", signs: ["ఛాతీలో అసౌకర్యం, ఒత్తిడి లేదా నొప్పి", "చేయి, దవడ, మెడ లేదా వీపుకు వ్యాపించే నొప్పి", "శ్వాస తీసుకోవడంలో ఇబ్బంది", "చల్లని చెమట, వికారం లేదా తల తిరగడం", "అసాధారణ అలసట", "మహిళల్లో వికారం మరియు వెన్నునొప్పి వంటి భిన్న లక్షణాలు ఉండవచ్చు"] },
  "Stroke Warning Signs (FAST)": { title: "స్ట్రోక్ హెచ్చరిక సంకేతాలు (FAST)", signs: ["ముఖం వంగడం లేదా ఒక వైపు మొద్దుబారడం", "చేతి బలహీనత లేదా పైకి ఎత్తినప్పుడు కిందకు జారడం", "మాట స్పష్టంగా రాకపోవడం", "లక్షణాలు ప్రారంభమైన సమయాన్ని గుర్తించి వెంటనే కాల్ చేయడం"] },
  "Severe Breathing Problems": { title: "తీవ్రమైన శ్వాస సమస్యలు", signs: ["తీవ్రమైన శ్వాస ఇబ్బంది", "పెదవులు లేదా గోర్లు నీలం రంగులోకి మారడం", "తగ్గని వేగవంతమైన శ్వాస", "శ్వాస తీసుకునేటప్పుడు ఛాతీ నొప్పి", "రక్తంతో దగ్గు", "మందులతో తగ్గని తీవ్రమైన శ్వాసలో శబ్దం"] },
  "Severe Allergic Reactions": { title: "తీవ్రమైన అలర్జీ ప్రతిచర్యలు", signs: ["ముఖం, పెదవులు, నాలుక లేదా గొంతు వాపు", "శ్వాస లేదా మింగడంలో ఇబ్బంది", "వేగంగా కొట్టుకునే గుండె", "తల తిరగడం లేదా స్పృహ కోల్పోవడం", "శరీరం అంతా దద్దుర్లు", "వికారం, వాంతులు లేదా కడుపు నొప్పి", "స్పృహ కోల్పోవడం"] },
  "Severe Dehydration": { title: "తీవ్రమైన డీహైడ్రేషన్", signs: ["తీవ్రమైన దాహం మరియు నోరు ఎండిపోవడం", "ముదురు మూత్రం లేదా 8 గంటలకు పైగా మూత్రం రాకపోవడం", "నిలబడినప్పుడు తల తిరగడం", "వేగవంతమైన గుండె చప్పుడు మరియు శ్వాస", "గందరగోళం లేదా చిరాకు", "కళ్లు లోపలికి పడినట్లు కనిపించడం", "చర్మం నొక్కిన తర్వాత వెంటనే మామూలుగా మారకపోవడం"] },
  "High Fever in Children": { title: "పిల్లల్లో అధిక జ్వరం", signs: ["పిల్లల్లో 104°F (40°C) కంటే ఎక్కువ జ్వరం", "3 నెలల లోపు శిశువులకు ఏ జ్వరం అయినా", "3 రోజులకు మించిన జ్వరం", "నొక్కినా రంగు మారని దద్దుర్లు", "శ్వాస తీసుకోవడంలో ఇబ్బంది", "జ్వరంతో కూడిన మూర్ఛ", "తీవ్రమైన తలనొప్పి లేదా మెడ బిగుసుకుపోవడం"] },
  "Bone Fractures & Trauma": { title: "ఎముక విరుగుడు మరియు గాయాలు", signs: ["అవయవం అసహజంగా వంగడం", "గాయం జరిగిన చోట తీవ్రమైన నొప్పి", "కదలలేకపోవడం లేదా బరువు మోయలేకపోవడం", "వాపు మరియు నీలికల", "చర్మం బయటకు వచ్చిన ఎముక", "గాయం కింద మొద్దుబారడం లేదా చిమ్మటలు"] },
};

const TELUGU_FIRST_AID: Record<string, { title: string; steps: string[] }> = {
  "CPR Basics": { title: "CPR ప్రాథమికాలు", steps: ["వ్యక్తి స్పందిస్తున్నారా, సాధారణంగా శ్వాస తీసుకుంటున్నారా చూడండి", "వెంటనే అత్యవసర సేవలకు కాల్ చేయండి", "మీ చేతి అరను ఛాతీ మధ్యలో ఉంచండి", "గట్టిగా మరియు వేగంగా నొక్కండి — 100-120 సార్లు నిమిషానికి", "శిక్షణ ఉంటే 30 సార్లు నొక్కి 2 శ్వాసలు ఇవ్వండి", "సహాయం వచ్చే వరకు లేదా వ్యక్తి కోలుకునే వరకు కొనసాగించండి"] },
  "Choking Response": { title: "గొంతులో వస్తువు ఇరుక్కుంటే", steps: ["వ్యక్తి మాట్లాడగలరా లేదా దగ్గగలరా అడగండి", "మాట్లాడలేకపోతే వెనుక నిలబడి నడుము చుట్టూ చేతులు వేయండి", "నాభికి కొద్దిగా పైన పిడికిలి ఉంచండి", "మరో చేతితో పట్టుకుని లోపలికి, పైకి బలంగా నెట్టండి", "వస్తువు బయటకు వచ్చే వరకు లేదా వ్యక్తి స్పృహ కోల్పోయే వరకు పునరావృతం చేయండి"] },
  "Controlling Bleeding": { title: "రక్తస్రావాన్ని నియంత్రించడం", steps: ["శుభ్రమైన గుడ్డ లేదా గాజుతో గట్టిగా నేరుగా ఒత్తిడి చేయండి", "కనీసం 15 నిమిషాలు ఒత్తిడి కొనసాగించండి", "గుడ్డ తడిస్తే మొదటి గుడ్డను తీసివేయకుండా పైన మరొకటి ఉంచండి", "సాధ్యమైతే గాయపడిన భాగాన్ని గుండె కంటే ఎత్తుగా ఉంచండి", "రక్తస్రావం తగ్గిన తర్వాత ఒత్తిడి కట్టు వేయండి", "తీవ్రమైన రక్తస్రావానికి వెంటనే వైద్య సహాయం పొందండి"] },
};

const TELUGU_FACILITIES: Record<string, string> = {
  "City General Hospital": "సిటీ జనరల్ హాస్పిటల్", "HealthFirst Medical Center": "హెల్త్‌ఫస్ట్ మెడికల్ సెంటర్", "QuickCare Urgent Clinic": "క్విక్‌కేర్ అత్యవసర క్లినిక్", "HeartCare Specialists": "హార్ట్‌కేర్ నిపుణుల క్లినిక్", "MindWell Mental Health": "మైండ్‌వెల్ మానసిక ఆరోగ్య కేంద్రం", "Community Health Center": "కమ్యూనిటీ ఆరోగ్య కేంద్రం",
  Hospital: "ఆసుపత్రి", "Medical Center": "వైద్య కేంద్రం", "Urgent Care": "అత్యవసర క్లినిక్", "Specialist Clinic": "నిపుణుల క్లినిక్", "Mental Health Clinic": "మానసిక ఆరోగ్య క్లినిక్", "Community Clinic": "సమాజ క్లినిక్",
  "24/7 Emergency": "24/7 అత్యవసర సేవలు", "Mon-Sun 6AM-10PM": "సోమ-ఆది ఉదయం 6 - రాత్రి 10", "Mon-Sat 8AM-8PM": "సోమ-శని ఉదయం 8 - రాత్రి 8", "Mon-Fri 9AM-5PM": "సోమ-శుక్ర ఉదయం 9 - సాయంత్రం 5", "Mon-Sun 8AM-9PM": "సోమ-ఆది ఉదయం 8 - రాత్రి 9", "Mon-Sat 7AM-7PM": "సోమ-శని ఉదయం 7 - రాత్రి 7",
  "Emergency Care": "అత్యవసర సంరక్షణ", Cardiology: "హృదయ వైద్యం", Neurology: "నాడీ వైద్యం", "General Medicine": "సాధారణ వైద్యం", Pediatrics: "శిశు వైద్యం", Dermatology: "చర్మ వైద్యం", "X-Ray": "ఎక్స్-రే", "Lab Tests": "ప్రయోగశాల పరీక్షలు", ECG: "ECG", "Stress Test": "ఒత్తిడి పరీక్ష", Psychiatry: "మనోవైద్యం", Counseling: "కౌన్సెలింగ్", Therapy: "చికిత్స", "Primary Care": "ప్రాథమిక వైద్యం", Vaccinations: "టీకాలు", "Health Screenings": "ఆరోగ్య పరీక్షలు",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function Emergency() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white mb-4">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {language === "te" ? "అత్యవసర ఆరోగ్య అవగాహన" : "Emergency Awareness"}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{t("emergencyTitle")}</h1>
                <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                  {t("emergencyDesc")}
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/15 backdrop-blur-sm inline-block">
                  <p className="text-sm font-semibold">
                    {t("emergencyCallNow")}
                  </p>
                </div>
              </motion.div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=360&fit=crop" alt="Emergency preparedness" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-cover h-[280px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Warning Signs */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("recognizeEmergencies")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("recognizeDesc")}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {EMERGENCY_SECTIONS.map((section) => (
                <motion.div key={section.title} variants={fadeUp}>
                  <div className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `color-mix(in srgb, ${section.color} 12%, transparent)` }}
                      >
                        <section.icon className="h-4.5 w-4.5" style={{ color: section.color }} />
                      </div>
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{language === "te" ? TELUGU_EMERGENCY[section.title]?.title || section.title : section.title}</h3>
                    </div>
                    {section.description && (
                      <p className="text-xs text-[oklch(0.4_0.02_250)] mb-3 leading-relaxed">{language === "te" ? TELUGU_EMERGENCY[section.title]?.description || section.description : section.description}</p>
                    )}
                    <ul className="space-y-1.5">
                      {section.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[oklch(0.3_0.02_250)] leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                          {language === "te" ? TELUGU_EMERGENCY[section.title]?.signs[i] || sign : sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Emergency Image Banner */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&h=400&fit=crop"
                alt="First aid kit and emergency supplies"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-transparent flex items-center p-8">
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{language === "te" ? "సిద్ధంగా ఉండండి" : "Be Prepared"}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{language === "te" ? "ప్రాథమిక సహాయాన్ని నేర్చుకుని, ఇల్లు, పని ప్రదేశం మరియు కారులో అత్యవసర వస్తు సామగ్రిని అందుబాటులో ఉంచండి." : "Learn first aid basics and keep an emergency kit accessible at home, work, and in your car."}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* First Aid Basics */}
        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("firstAidBasics")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("firstAidDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FIRST_AID.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)] mb-3">{language === "te" ? TELUGU_FIRST_AID[item.title]?.title || item.title : item.title}</h3>
                  <ol className="space-y-2">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[oklch(0.3_0.02_250)] leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-600">
                          {j + 1}
                        </span>
                        {language === "te" ? TELUGU_FIRST_AID[item.title]?.steps[j] || step : step}
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Find Nearest Doctors */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("findDoctors")}
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                {t("findDoctorsDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "City General Hospital", type: "Hospital", distance: "1.2", phone: "+1 (555) 100-2000", hours: "24/7 Emergency", services: ["Emergency Care", "Cardiology", "Neurology"] },
                { name: "HealthFirst Medical Center", type: "Medical Center", distance: "2.5", phone: "+1 (555) 200-3000", hours: "Mon-Sun 6AM-10PM", services: ["General Medicine", "Pediatrics", "Dermatology"] },
                { name: "QuickCare Urgent Clinic", type: "Urgent Care", distance: "0.8", phone: "+1 (555) 300-4000", hours: "Mon-Sat 8AM-8PM", services: ["Urgent Care", "X-Ray", "Lab Tests"] },
                { name: "HeartCare Specialists", type: "Specialist Clinic", distance: "3.1", phone: "+1 (555) 400-5000", hours: "Mon-Fri 9AM-5PM", services: ["Cardiology", "ECG", "Stress Test"] },
                { name: "MindWell Mental Health", type: "Mental Health Clinic", distance: "1.8", phone: "+1 (555) 500-6000", hours: "Mon-Sun 8AM-9PM", services: ["Psychiatry", "Counseling", "Therapy"] },
                { name: "Community Health Center", type: "Community Clinic", distance: "0.5", phone: "+1 (555) 600-7000", hours: "Mon-Sat 7AM-7PM", services: ["Primary Care", "Vaccinations", "Health Screenings"] },
              ].map((facility, i) => (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{language === "te" ? TELUGU_FACILITIES[facility.name] : facility.name}</h3>
                      <span className="text-[10px] font-medium text-[oklch(0.32_0.08_255)] uppercase tracking-wider">{language === "te" ? TELUGU_FACILITIES[facility.type] : facility.type}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50">
                      <Navigation className="h-3 w-3 text-blue-600" />
                      <span className="text-[10px] font-bold text-blue-700">{facility.distance} {language === "te" ? "కి.మీ" : "km"}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-xs text-[oklch(0.5_0.02_250)]">
                      <Phone className="h-3 w-3 shrink-0" /> {facility.phone}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[oklch(0.5_0.02_250)]">
                      <Clock className="h-3 w-3 shrink-0" /> {language === "te" ? TELUGU_FACILITIES[facility.hours] : facility.hours}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {facility.services.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[10px] font-medium bg-[oklch(0.97_0.003_250)] text-[oklch(0.4_0.02_250)] border border-[oklch(0.92_0.01_240)]">
                        {language === "te" ? TELUGU_FACILITIES[s] : s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.03_255)]">
                {t("learnMoreConditions")}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Heart Health", desc: "Cardiovascular warning signs and prevention.", href: "/topics/t1" },
                { title: "Diabetes", desc: "Recognizing diabetic emergencies.", href: "/topics/t2" },
                { title: "Respiratory Health", desc: "Breathing emergency awareness.", href: "/topics/t8" },
                { title: "Child Health", desc: "Emergency signs in children.", href: "/topics/t7" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                    {language === "te" ? ({ "Heart Health": "హృదయ ఆరోగ్యం", Diabetes: "మధుమేహం", "Respiratory Health": "శ్వాసకోశ ఆరోగ్యం", "Child Health": "పిల్లల ఆరోగ్యం" } as Record<string, string>)[item.title] : item.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1">{language === "te" ? ({ "Heart Health": "హృదయ హెచ్చరిక సంకేతాలు మరియు నివారణ.", Diabetes: "మధుమేహ అత్యవసర పరిస్థితులను గుర్తించడం.", "Respiratory Health": "శ్వాస సంబంధిత అత్యవసర అవగాహన.", "Child Health": "పిల్లల్లో అత్యవసర సంకేతాలు." } as Record<string, string>)[item.title] : item.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)]">
                    {language === "te" ? "మరింత తెలుసుకోండి" : "Learn More"} <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
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
