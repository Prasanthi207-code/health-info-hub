import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, ArrowRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HEALTH_TOPICS, TOPIC_CATEGORIES, DISCLAIMER, localizeContent } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Topics() {
  const { t, language } = useTranslation();
  const localizedTopics = localizeContent(HEALTH_TOPICS, language, "topics");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    let list = localizedTopics;
    if (category !== "All") list = list.filter((t) => t.categoryId === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) => t.title.toLowerCase().includes(q) || t.shortDescription.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, category, localizedTopics]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1 className="text-3xl sm:text-4xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  {t("healthTopicsTitle")}
                </motion.h1>
                <motion.p className="mt-3 text-white/70 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  {t("healthTopicsDesc")}
                </motion.p>
              </div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.pexels.com/photos/15238817/pexels-photo-15238817.jpeg?auto=compress&cs=tinysrgb&w=900" alt="A group of doctors standing together" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-contain bg-white h-[280px]" />
              </motion.div>
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
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              <button
                onClick={() => setCategory("All")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                  category === "All"
                    ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                    : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                }`}
              >
                All
              </button>
              {TOPIC_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    category === cat.id
                      ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                      : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6">
              {filtered.length} topic{filtered.length !== 1 && "s"} found
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Filter className="h-10 w-10 text-[oklch(0.75_0.01_250)] mx-auto mb-3" />
                <p className="text-[oklch(0.4_0.02_250)] font-medium">No topics found</p>
                <p className="text-sm text-[oklch(0.55_0.02_250)] mt-1">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((topic, i) => (
                  <motion.div key={topic.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link
                      to={`/topics/${topic.id}`}
                      className="group block rounded-xl overflow-hidden bg-white border border-[oklch(0.9_0.01_240)] hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.12)] transition-all duration-300 hover:-translate-y-0.5 h-full"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-[oklch(0.95_0.01_250)]">
                        <img src={topic.image} alt={topic.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]">
                          {TOPIC_CATEGORIES.find((c) => c.id === topic.categoryId)?.name || topic.categoryId}
                        </span>
                        <h3 className="mt-2 text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                          {topic.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-[oklch(0.5_0.02_250)] line-clamp-2 leading-relaxed">
                          {topic.shortDescription}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)] group-hover:gap-1.5 transition-all">
                          {t("learnMore")} <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
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
