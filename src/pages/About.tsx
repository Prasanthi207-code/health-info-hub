import { motion } from "framer-motion";
import { Shield, Heart, Users, Target, Globe, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  const { t } = useTranslation();

  const VALUES = [
    { icon: Target, title: t("valueEvidence"), desc: t("valueEvidenceDesc") },
    { icon: Heart, title: t("valueAccessible"), desc: t("valueAccessibleDesc") },
    { icon: Globe, title: t("homeExploreAwareness"), desc: t("homeCardCampaignsDesc") },
    { icon: Users, title: t("valueCommunity"), desc: t("valueCommunityDesc") },
    { icon: BookOpen, title: t("homeLearnAbout"), desc: t("homeCardTopicsDesc") },
    { icon: Shield, title: t("aiAssistantLabel"), desc: t("aiAssistantDesc") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-3xl sm:text-4xl font-bold">{t("aboutTitle")}</h1>
                <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                  {t("aboutSubtitle")}
                </p>
              </motion.div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=360&fit=crop" alt="Healthcare team" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-cover h-[280px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.03_255)] mb-4">{t("missionTitle")}</h2>
              <p className="text-[oklch(0.3_0.02_250)] leading-relaxed mb-4">
                {t("missionDesc")}
              </p>
              <p className="text-[oklch(0.3_0.02_250)] leading-relaxed">
                {t("importantNoticeDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">{t("valuesTitle")}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)] mb-3">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] mb-1">{value.title}</h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Image Banner */}
        <section className="py-6">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=400&fit=crop"
                alt="Healthcare professionals working together"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-xl border border-amber-200 bg-amber-50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-amber-800 mb-2">{t("importantNotice")}</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                {t("educationalDisclaimer")}
              </p>
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
