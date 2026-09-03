import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, ShieldCheck, Activity, Clock, BookOpen, ExternalLink, Calendar, Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HEALTH_TOPICS, TOPIC_CATEGORIES, DISCLAIMER, localizeContent } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

export default function TopicDetail() {
  const { id } = useParams();
  const { language } = useTranslation();
  const topic = localizeContent(HEALTH_TOPICS, language, "topics").find((t) => t.id === id);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!topic) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-[oklch(0.2_0.03_255)]">Topic not found</p>
            <Link to="/topics" className="mt-3 inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)]">
              <ArrowLeft className="h-4 w-4" /> Back to Topics
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryName = TOPIC_CATEGORIES.find((c) => c.id === topic.categoryId)?.name || topic.categoryId;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-[oklch(0.95_0.01_250)]">
          <img src={topic.image} alt={topic.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="mx-auto max-w-4xl">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm mb-3">
                {categoryName}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{topic.title}</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center justify-between mb-6">
            <Link to="/topics" className="inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Topics
            </Link>
            <button
              onClick={() => toggleBookmark("topic", topic.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isBookmarked("topic", topic.id)
                  ? "bg-[oklch(0.32_0.08_255_/_0.1)] text-[oklch(0.32_0.08_255)]"
                  : "border border-[oklch(0.88_0.01_240)] text-[oklch(0.5_0.02_250)] hover:border-[oklch(0.32_0.08_255_/_0.3)] hover:text-[oklch(0.32_0.08_255)]"
              }`}
            >
              {isBookmarked("topic", topic.id) ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              {isBookmarked("topic", topic.id) ? "Bookmarked" : "Bookmark"}
            </button>
          </div>

          {/* Overview */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-3">Overview</h2>
            <p className="text-[oklch(0.3_0.02_250)] leading-relaxed">{topic.overview}</p>
          </motion.section>

          {/* Key Facts */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <Activity className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Key Facts
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {topic.keyFacts.map((fact) => (
                <div key={fact.label} className="rounded-lg border border-[oklch(0.9_0.01_240)] bg-white p-4">
                  <div className="text-xl font-bold text-[oklch(0.32_0.08_255)]">{fact.value}</div>
                  <div className="text-xs text-[oklch(0.5_0.02_250)] mt-0.5">{fact.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Symptoms */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">Common Signs & Symptoms</h2>
            <ul className="space-y-2">
              {topic.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.12_25)] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Risk Factors */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">Risk Factors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topic.riskFactors.map((rf, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-[oklch(0.3_0.02_250)]">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-500 shrink-0" />
                  {rf}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Prevention */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <ShieldCheck className="h-5 w-5 text-green-600" /> Prevention
            </h2>
            <ul className="space-y-2">
              {topic.prevention.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Warning Signs */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-red-700 mb-4">
              <AlertTriangle className="h-5 w-5" /> When to Seek Professional Help
            </h2>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <ul className="space-y-2">
                {topic.warningSigns.map((ws, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    {ws}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-red-600 font-medium">
                If you experience any of these warning signs, please consult a qualified healthcare professional.
              </p>
            </div>
          </motion.section>

          {/* References */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <BookOpen className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> References
            </h2>
            <ul className="space-y-2">
              {topic.references.map((ref, i) => (
                <li key={i} className="text-sm text-[oklch(0.35_0.02_250)] flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3 shrink-0 text-[oklch(0.5_0.03_210)]" />
                  {ref}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[oklch(0.5_0.02_250)]">
              <Calendar className="h-3.5 w-3.5" />
              Last Updated: {topic.updatedAt}
            </div>
          </motion.section>
        </div>

        <section className="py-6 border-t border-[oklch(0.92_0.01_240)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[oklch(0.5_0.02_250)] text-center leading-relaxed">
              <strong className="text-[oklch(0.4_0.02_250)]">Disclaimer:</strong> {DISCLAIMER}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
