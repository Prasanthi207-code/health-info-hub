import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Search as SearchIcon, ArrowRight, Stethoscope, Megaphone, BookOpen, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/LanguageContext";
import { CAMPAIGNS, HEALTH_TOPICS, ARTICLES, DISCLAIMER } from "@/data";

interface SearchResult {
  type: "topic" | "campaign" | "article";
  id: string;
  title: string;
  description: string;
  image?: string;
  href: string;
}

export default function SearchPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const topicResults: SearchResult[] = HEALTH_TOPICS
      .filter((t) => t.title.toLowerCase().includes(q) || t.shortDescription.toLowerCase().includes(q) || t.overview.toLowerCase().includes(q))
      .map((t) => ({
        type: "topic" as const,
        id: t.id,
        title: t.title,
        description: t.shortDescription,
        image: t.image,
        href: `/topics/${t.id}`,
      }));

    const campaignResults: SearchResult[] = CAMPAIGNS
      .filter((c) => c.title.toLowerCase().includes(q) || c.shortDescription.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .map((c) => ({
        type: "campaign" as const,
        id: c.id,
        title: c.title,
        description: c.shortDescription,
        image: c.image,
        href: `/campaigns/${c.id}`,
      }));

    const articleResults: SearchResult[] = ARTICLES
      .filter((a) => a.title.toLowerCase().includes(q) || a.shortDescription.toLowerCase().includes(q) || a.category.toLowerCase().includes(q))
      .map((a) => ({
        type: "article" as const,
        id: a.id,
        title: a.title,
        description: a.shortDescription,
        image: a.image,
        href: `/articles/${a.id}`,
      }));

    return [...topicResults, ...campaignResults, ...articleResults];
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  };

  const TYPE_ICON = {
    topic: Stethoscope,
    campaign: Megaphone,
    article: BookOpen,
  };

  const TYPE_LABEL = {
    topic: "Health Topic",
    campaign: "Campaign",
    article: "Article",
  };

  const TYPE_COLOR = {
    topic: "bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]",
    campaign: "bg-green-50 text-green-700",
    article: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl sm:text-4xl font-bold">Search Health Information</h1>
              <p className="mt-3 text-white/70 max-w-2xl">
                Find health topics, campaigns, and articles across our entire platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white sticky top-16 z-30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[oklch(0.5_0.02_250)]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearchParams(e.target.value.trim() ? { q: e.target.value.trim() } : {});
                  }}
                  placeholder="Search health topics, campaigns, articles..."
                  className="w-full rounded-xl border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] py-3 pl-12 pr-12 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); setSearchParams({}); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[oklch(0.5_0.02_250)] hover:text-[oklch(0.3_0.02_250)]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {!query.trim() ? (
              <div className="text-center py-20">
                <SearchIcon className="h-12 w-12 text-[oklch(0.75_0.01_250)] mx-auto mb-4" />
                <p className="text-lg font-medium text-[oklch(0.3_0.02_250)]">Enter a search term</p>
                <p className="text-sm text-[oklch(0.5_0.02_250)] mt-1">Search across health topics, campaigns, and articles</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Heart Health", "Diabetes", "Nutrition", "Mental Health", "Prevention"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => { setQuery(suggestion); setSearchParams({ q: suggestion }); }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-[oklch(0.88_0.01_240)] text-[oklch(0.5_0.02_250)] hover:border-[oklch(0.32_0.08_255_/_0.3)] hover:text-[oklch(0.32_0.08_255)] transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-20">
                <SearchIcon className="h-10 w-10 text-[oklch(0.75_0.01_250)] mx-auto mb-3" />
                <p className="text-[oklch(0.4_0.02_250)] font-medium">No results found for "{query}"</p>
                <p className="text-sm text-[oklch(0.55_0.02_250)] mt-1">Try different keywords or browse our categories.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Link to="/topics" className="px-3 py-1.5 rounded-full text-xs font-medium border border-[oklch(0.88_0.01_240)] text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors">
                    Browse Topics
                  </Link>
                  <Link to="/campaigns" className="px-3 py-1.5 rounded-full text-xs font-medium border border-[oklch(0.88_0.01_240)] text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors">
                    Browse Campaigns
                  </Link>
                  <Link to="/articles" className="px-3 py-1.5 rounded-full text-xs font-medium border border-[oklch(0.88_0.01_240)] text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors">
                    Browse Articles
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6">
                  {results.length} result{results.length !== 1 && "s"} for "{query}"
                </p>
                <div className="space-y-3">
                  {results.map((result, i) => {
                    const Icon = TYPE_ICON[result.type];
                    return (
                      <motion.div
                        key={`${result.type}-${result.id}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={result.href}
                          className="group flex items-start gap-4 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow"
                        >
                          {result.image && (
                            <div className="h-16 w-16 shrink-0 rounded-lg overflow-hidden bg-[oklch(0.95_0.01_250)]">
                              <img src={result.image} alt={result.title} className="h-full w-full object-cover" loading="lazy" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${TYPE_COLOR[result.type]}`}>
                                <Icon className="h-3 w-3" />
                                {TYPE_LABEL[result.type]}
                              </span>
                            </div>
                            <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-xs text-[oklch(0.5_0.02_250)] mt-0.5 line-clamp-2 leading-relaxed">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-[oklch(0.7_0.01_250)] group-hover:text-[oklch(0.32_0.08_255)] shrink-0 mt-2 transition-colors" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </>
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
