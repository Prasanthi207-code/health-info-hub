import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Search, ArrowRight, Heart, Shield, Apple, Activity, Brain, Droplet,
  Wind, Eye, Calendar, BookOpen, AlertTriangle, Stethoscope, Dumbbell,
  Moon, GlassWater, Sparkles, Smile, ChevronRight, Clock, Bookmark,
  ShieldCheck, TrendingUp, Users, Megaphone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthCamera from "@/components/HealthCamera";
import { CAMPAIGNS, HEALTH_TOPICS, ARTICLES, HEALTH_TIPS, AWARENESS_EVENTS, DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const QUICK_ACCESS = [
  { title: "Health Topics", desc: "Learn about common health conditions and health concerns.", icon: Stethoscope, href: "/topics", color: "oklch(0.55 0.15 255)" },
  { title: "Prevention", desc: "Discover practical ways to reduce health risks.", icon: ShieldCheck, href: "/prevention", color: "oklch(0.5 0.12 180)" },
  { title: "Healthy Lifestyle", desc: "Learn about nutrition, exercise, sleep and wellbeing.", icon: Apple, href: "/lifestyle", color: "oklch(0.5 0.12 150)" },
  { title: "Symptoms Guide", desc: "Understand common symptoms and warning signs.", icon: AlertTriangle, href: "/symptoms", color: "oklch(0.55 0.12 45)" },
  { title: "Health Campaigns", desc: "Explore awareness campaigns and public-health initiatives.", icon: Megaphone, href: "/campaigns", color: "oklch(0.5 0.1 210)" },
  { title: "Emergency Awareness", desc: "Learn when urgent professional medical attention may be needed.", icon: Shield, href: "/emergency", color: "oklch(0.55 0.15 25)" },
];

const LIFESTYLE_ITEMS = [
  { title: "Eat Better", icon: Apple, desc: "Balanced nutrition and healthy food habits." },
  { title: "Move More", icon: Dumbbell, desc: "Physical activity and exercise awareness." },
  { title: "Sleep Well", icon: Moon, desc: "Healthy sleep habits." },
  { title: "Stay Hydrated", icon: GlassWater, desc: "Importance of adequate hydration." },
  { title: "Manage Stress", icon: Brain, desc: "Healthy stress-management approaches." },
  { title: "Maintain Hygiene", icon: Sparkles, desc: "Personal and environmental hygiene." },
];

const CAMPAIGN_COLORS: Record<string, string> = {
  "Disease Prevention": "bg-[oklch(0.55_0.15_25_/_0.1)] text-[oklch(0.5_0.12_25)]",
  "Mental Health": "bg-[oklch(0.5_0.1_200_/_0.1)] text-[oklch(0.45_0.1_200)]",
  "Nutrition": "bg-[oklch(0.5_0.12_150_/_0.1)] text-[oklch(0.45_0.1_150)]",
  "Infectious Diseases": "bg-[oklch(0.5_0.15_280_/_0.1)] text-[oklch(0.45_0.12_280)]",
  "Environmental Health": "bg-[oklch(0.5_0.12_220_/_0.1)] text-[oklch(0.45_0.12_220)]",
  "Safety": "bg-[oklch(0.55_0.1_45_/_0.1)] text-[oklch(0.5_0.1_45)]",
  default: "bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]",
};

function getCampaignBadgeClass(category: string) {
  return CAMPAIGN_COLORS[category] || CAMPAIGN_COLORS.default;
}

export default function Landing() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const dailyTip = HEALTH_TIPS[new Date().getDate() % HEALTH_TIPS.length];
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Text Content */}
              <div className="max-w-xl">
                <motion.div {...fadeUp}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-6">
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=40&h=40&fit=crop&crop=face" alt="Doctor" className="h-5 w-5 rounded-full object-cover" />
                    {t("trustedHealthPlatform")}
                  </div>
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold tracking-tight leading-[1.12] mb-5"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("heroTitle")}
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg text-white/70 leading-relaxed mb-8"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("heroSubtitle")}
                </motion.p>

                {/* Search bar */}
                <motion.form
                  onSubmit={handleSearch}
                  className="max-w-xl mb-8"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[oklch(0.45_0.03_250)]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("heroSearch")}
                      className="w-full rounded-xl border-0 bg-white py-3.5 pl-12 pr-4 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] shadow-lg focus:ring-2 focus:ring-white/30 outline-none transition-all"
                    />
                  </div>
                </motion.form>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    to="/topics"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[oklch(0.32_0.08_255)] text-sm font-semibold hover:bg-white/90 transition-colors shadow-lg"
                  >
                    {t("exploreTopics")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/campaigns"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {t("exploreCampaigns")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Doctor Image */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-3xl -m-3" />
                  <img
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=500&fit=crop"
                    alt="Healthcare professional"
                    className="relative rounded-2xl w-full h-[380px] object-cover shadow-2xl border-2 border-white/10"
                  />
                  {/* Floating stat cards */}
                  <motion.div
                    className="absolute -left-4 bottom-12 bg-white rounded-xl px-4 py-3 shadow-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50"><Heart className="h-4 w-4 text-green-600" /></div>
                      <div><p className="text-xs font-bold text-[oklch(0.2_0.03_255)]">{t("topicsCount")}</p><p className="text-[10px] text-[oklch(0.5_0.02_250)]">{t("topicsCountDesc")}</p></div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -right-2 top-8 bg-white rounded-xl px-4 py-3 shadow-xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50"><Shield className="h-4 w-4 text-blue-600" /></div>
                      <div><p className="text-xs font-bold text-[oklch(0.2_0.03_255)]">{t("aiAssistantLabel")}</p><p className="text-[10px] text-[oklch(0.5_0.02_250)]">{t("aiAssistantDesc")}</p></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative bottom curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V20C240 45 480 5 720 20C960 35 1200 0 1440 20V60H0Z" fill="var(--color-background)" />
            </svg>
          </div>
        </section>

        {/* ─── QUICK ACCESS ─── */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Quick Access
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                Find the health information you need, organized by topic.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {QUICK_ACCESS.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Link
                    to={item.href}
                    className="group block rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `color-mix(in srgb, ${item.color} 12%, transparent)` }}
                      >
                        <item.icon className="h-5 w-5" style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[oklch(0.7_0.01_250)] group-hover:text-[oklch(0.32_0.08_255)] shrink-0 mt-1 transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── FEATURED CAMPAIGNS ─── */}
        <section className="py-12 lg:py-20 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Featured Health Campaigns
                </motion.h2>
                <motion.p
                  className="mt-2 text-[oklch(0.5_0.02_250)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Discover campaigns making a difference in public health.
                </motion.p>
              </div>
              <Link
                to="/campaigns"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.32_0.08_255)] hover:text-[oklch(0.25_0.08_255)] transition-colors"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAMPAIGNS.slice(0, 4).map((campaign, i) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="group block rounded-xl overflow-hidden bg-white border border-[oklch(0.9_0.01_240)] hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.12)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[oklch(0.95_0.01_250)]">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${getCampaignBadgeClass(campaign.category)}`}>
                        {campaign.category}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors line-clamp-1">
                        {campaign.title}
                      </h3>
                      <p className="mt-1 text-xs text-[oklch(0.5_0.02_250)] line-clamp-2 leading-relaxed">
                        {campaign.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-[oklch(0.55_0.02_250)] font-medium uppercase">
                          {campaign.status}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)] group-hover:gap-1.5 transition-all">
                          Learn More <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Link
                to="/campaigns"
                className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.32_0.08_255)]"
              >
                View All Campaigns <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HEALTH TOPICS ─── */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Explore Health Topics
              </motion.h2>
              <motion.p
                className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Evidence-based information on common health conditions and wellness.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {HEALTH_TOPICS.slice(0, 8).map((topic, i) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/topics/${topic.id}`}
                    className="group block rounded-xl overflow-hidden border border-[oklch(0.9_0.01_240)] bg-white hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[oklch(0.95_0.01_250)]">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-xs text-[oklch(0.5_0.02_250)] line-clamp-2 leading-relaxed">
                        {topic.shortDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/topics"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-medium hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors"
              >
                View All Health Topics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PREVENTION & LIFESTYLE ─── */}
        <section className="py-12 lg:py-20 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Prevention & Healthy Living
              </motion.h2>
              <motion.p
                className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Small daily habits lead to lasting health improvements.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {LIFESTYLE_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.08_255_/_0.08)] to-[oklch(0.42_0.1_210_/_0.08)] text-[oklch(0.35_0.1_220)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/prevention"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors"
              >
                Learn About Prevention <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── LATEST ARTICLES ─── */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Latest Health Articles
                </motion.h2>
                <motion.p
                  className="mt-2 text-[oklch(0.5_0.02_250)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Stay informed with evidence-based health insights.
                </motion.p>
              </div>
              <Link
                to="/articles"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.32_0.08_255)] hover:text-[oklch(0.25_0.08_255)] transition-colors"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ARTICLES.slice(0, 4).map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/articles/${article.id}`}
                    className="group block rounded-xl overflow-hidden bg-white border border-[oklch(0.9_0.01_240)] hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.12)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[oklch(0.95_0.01_250)]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]">
                        {article.category}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[oklch(0.5_0.02_250)] line-clamp-2 leading-relaxed">
                        {article.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[10px] text-[oklch(0.55_0.02_250)]">
                        <span>{article.author}</span>
                        <span>{article.publishedDate}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AWARENESS CALENDAR ─── */}
        <section className="py-12 lg:py-20 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Health Awareness Calendar
                </motion.h2>
                <motion.p
                  className="mt-2 text-[oklch(0.5_0.02_250)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Important health days and awareness events throughout the year.
                </motion.p>
              </div>
              <Link
                to="/calendar"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.32_0.08_255)] hover:text-[oklch(0.25_0.08_255)] transition-colors"
              >
                View Calendar <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AWARENESS_EVENTS.slice(0, 6).map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to="/calendar"
                    className="group flex items-start gap-4 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg text-white text-center"
                      style={{ backgroundColor: event.color }}
                    >
                      <span className="text-[10px] font-medium leading-none uppercase">
                        {new Date(2026, event.month - 1).toLocaleString("en", { month: "short" })}
                      </span>
                      <span className="text-lg font-bold leading-tight">{event.day}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                        {event.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[oklch(0.5_0.02_250)] line-clamp-2">
                        {event.description}
                      </p>
                      <span className="mt-1 inline-block text-[10px] font-medium text-[oklch(0.45_0.04_210)]">
                        {event.category}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DAILY TIP ─── */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.08_255)] via-[oklch(0.38_0.1_210)] to-[oklch(0.42_0.08_185)] p-8 sm:p-10 lg:p-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Today&apos;s Health Tip
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {dailyTip.title}
                </h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  {dailyTip.description}
                </p>
                <Link
                  to="/lifestyle"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-white text-[oklch(0.32_0.08_255)] text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  View More Tips <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS BANNER ─── */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, label: "Health Topics", value: "12+" },
                { icon: Megaphone, label: "Active Campaigns", value: "8" },
                { icon: Users, label: "Articles Published", value: "10+" },
                { icon: Calendar, label: "Health Events", value: "12" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center p-5 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-[oklch(0.2_0.03_255)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[oklch(0.5_0.02_250)] mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 lg:py-20 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Take the First Step Towards Better Health.
              </h2>
              <p className="mt-3 text-[oklch(0.5_0.02_250)] max-w-xl mx-auto">
                Explore our comprehensive health resources and start making informed decisions about your well-being today.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/topics"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(0.32_0.08_255)] text-white text-sm font-semibold hover:bg-[oklch(0.28_0.08_255)] transition-colors shadow-[0_4px_14px_-3px_oklch(0.32_0.08_255_/_0.3)]"
                >
                  Explore Health Information
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/campaigns"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-semibold hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors"
                >
                  View Campaigns
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
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
