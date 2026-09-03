import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, ArrowRight, AlertTriangle, Heart, Droplet, Brain, Wind, Activity, Thermometer, Eye, Bone, Smile, Baby, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthCamera from "@/components/HealthCamera";
import { HEALTH_TOPICS, DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const BODY_SYSTEMS = [
  { id: "cardiovascular", label: "Cardiovascular", icon: Heart, color: "oklch(0.55 0.15 25)" },
  { id: "respiratory", label: "Respiratory", icon: Wind, color: "oklch(0.5 0.12 220)" },
  { id: "neurological", label: "Neurological", icon: Brain, color: "oklch(0.5 0.1 200)" },
  { id: "digestive", label: "Digestive", icon: Droplet, color: "oklch(0.55 0.12 180)" },
  { id: "musculoskeletal", label: "Musculoskeletal", icon: Bone, color: "oklch(0.5 0.08 250)" },
  { id: "general", label: "General", icon: Activity, color: "oklch(0.5 0.12 150)" },
];

const COMMON_SYMPTOMS = [
  { symptom: "Persistent fever", urgency: "moderate", topics: ["t7", "t8"], system: "general", description: "Fever lasting more than 3 days or over 104°F (40°C) may indicate infection." },
  { symptom: "Chest pain", urgency: "high", topics: ["t1"], system: "cardiovascular", description: "Sudden or severe chest pain requires immediate medical attention." },
  { symptom: "Shortness of breath", urgency: "high", topics: ["t1", "t8"], system: "respiratory", description: "Difficulty breathing at rest or with minimal activity is a warning sign." },
  { symptom: "Persistent fatigue", urgency: "low", topics: ["t2", "t4", "t5"], system: "general", description: "Chronic tiredness may indicate various conditions from anemia to diabetes." },
  { symptom: "Unexplained weight loss", urgency: "moderate", topics: ["t2", "t3"], system: "general", description: "Significant unexplained weight loss should be evaluated by a doctor." },
  { symptom: "Frequent headaches", urgency: "low", topics: ["t4"], system: "neurological", description: "Persistent or severe headaches may need medical evaluation." },
  { symptom: "Blurred vision", urgency: "moderate", topics: ["t2"], system: "neurological", description: "Changes in vision can be related to diabetes or other conditions." },
  { symptom: "Persistent cough", urgency: "moderate", topics: ["t8"], system: "respiratory", description: "A cough lasting more than 3 weeks should be evaluated." },
  { symptom: "Abdominal pain", urgency: "moderate", topics: ["t5"], system: "digestive", description: "Severe or persistent abdominal pain requires medical attention." },
  { symptom: "Joint pain", urgency: "low", topics: ["t13"], system: "musculoskeletal", description: "Persistent joint pain may indicate arthritis or injury." },
  { symptom: "Skin changes", urgency: "moderate", topics: ["t3", "t11"], system: "general", description: "New or changing moles, rashes, or unexplained skin changes need evaluation." },
  { symptom: "Mood changes", urgency: "low", topics: ["t4"], system: "neurological", description: "Persistent sadness, anxiety, or mood swings may indicate mental health concerns." },
  { symptom: "Increased thirst", urgency: "moderate", topics: ["t2"], system: "digestive", description: "Excessive thirst combined with frequent urination may indicate diabetes." },
  { symptom: "Swelling in legs/ankles", urgency: "moderate", topics: ["t1"], system: "cardiovascular", description: "Persistent swelling can indicate heart or kidney problems." },
  { symptom: "Night sweats", urgency: "low", topics: ["t4", "t12"], system: "general", description: "Recurrent night sweats may have various causes worth investigating." },
  { symptom: "Slow-healing wounds", urgency: "moderate", topics: ["t2"], system: "general", description: "Wounds that take weeks to heal may indicate diabetes or circulation issues." },
];

const URGENCY_COLORS: Record<string, { bg: string; text: string; dot: string; labelKey: string }> = {
  high: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500", labelKey: "seekImmediateHelp" },
  moderate: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", labelKey: "seeDoctorSoon" },
  low: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500", labelKey: "monitorAndDiscuss" },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Symptoms() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [system, setSystem] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = COMMON_SYMPTOMS;
    if (system) list = list.filter((s) => s.system === system);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) => s.symptom.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, system]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                {t("symptoms")}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{t("symptomsTitle")}</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                {t("symptomsDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Camera Health Check */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              <HealthCamera />
              <p className="text-xs text-[oklch(0.5_0.02_250)]">Take a photo of a skin condition or visible health issue and get AI-powered guidance</p>
            </div>
          </div>
        </section>

        {/* Urgency Legend */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="font-medium text-[oklch(0.4_0.02_250)]">{t("urgencyLevels")}</span>
              {Object.entries(URGENCY_COLORS).map(([key, val]) => (
                <span key={key} className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${val.bg} ${val.text} font-medium`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${val.dot}`} />
                  {t(val.labelKey as any)}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative w-full sm:w-72 mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("heroSearch")}
                className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              <button
                onClick={() => setSystem(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                  system === null
                    ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                    : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                }`}
              >
                {t("allSystems")}
              </button>
              {BODY_SYSTEMS.map((sys) => (
                <button
                  key={sys.id}
                  onClick={() => setSystem(sys.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    system === sys.id
                      ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                      : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                  }`}
                >
                  {sys.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms List */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6">
              {filtered.length} symptom{filtered.length !== 1 && "s"} found
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Search className="h-10 w-10 text-[oklch(0.75_0.01_250)] mx-auto mb-3" />
                <p className="text-[oklch(0.4_0.02_250)] font-medium">No symptoms found</p>
                <p className="text-sm text-[oklch(0.55_0.02_250)] mt-1">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((item, i) => {
                  const urgency = URGENCY_COLORS[item.urgency];
                  const relatedTopics = item.topics
                    .map((tid) => HEALTH_TOPICS.find((t) => t.id === tid))
                    .filter(Boolean);
                  return (
                    <motion.div
                      key={item.symptom}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 sm:p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${urgency.dot}`} />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{item.symptom}</h3>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${urgency.bg} ${urgency.text}`}>
                              {(t as (k: string) => string)(urgency.labelKey)}
                            </span>
                          </div>
                          <p className="text-xs text-[oklch(0.5_0.02_250)] leading-relaxed mb-2">{item.description}</p>
                          {relatedTopics.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {relatedTopics.map((topic) => topic && (
                                <Link
                                  key={topic.id}
                                  to={`/topics/${topic.id}`}
                                  className="inline-flex items-center gap-1 text-[10px] font-medium text-[oklch(0.32_0.08_255)] bg-[oklch(0.32_0.08_255_/_0.06)] px-2 py-0.5 rounded hover:bg-[oklch(0.32_0.08_255_/_0.1)] transition-colors"
                                >
                                  {topic.title} <ArrowRight className="h-2.5 w-2.5" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Emergency Warning */}
        <section className="py-10 lg:py-14 bg-red-50 border-y border-red-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-red-800 mb-2">When in Doubt, Seek Help</h2>
              <p className="text-sm text-red-700 max-w-xl mx-auto leading-relaxed mb-4">
                {t("whenInDoubtDesc")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/emergency"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Emergency Information
                </Link>
                <Link
                  to="/prevention"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-red-300 text-red-700 text-sm font-medium hover:bg-red-100 transition-colors"
                >
                  Prevention Guide
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-6 border-t border-[oklch(0.92_0.01_240)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[oklch(0.5_0.02_250)] text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-[oklch(0.4_0.02_250)]">Disclaimer:</strong> {DISCLAIMER}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
