import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Bookmark, Trash2, ArrowRight, Stethoscope, Megaphone, BookOpen, Inbox } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CAMPAIGNS, HEALTH_TOPICS, ARTICLES, DISCLAIMER } from "@/data";

interface BookmarkItem {
  contentType: "campaign" | "topic" | "article";
  contentId: string;
  createdAt: string;
}

function getBookmarks(): BookmarkItem[] {
  try {
    const raw = localStorage.getItem("dhap-bookmarks");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveBookmarks(bookmarks: BookmarkItem[]) {
  localStorage.setItem("dhap-bookmarks", JSON.stringify(bookmarks));
}

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

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [filter, setFilter] = useState<"all" | "topic" | "campaign" | "article">("all");

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const removeBookmark = useCallback((contentType: string, contentId: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => !(b.contentType === contentType && b.contentId === contentId));
      saveBookmarks(updated);
      return updated;
    });
  }, []);

  const getContent = (bm: BookmarkItem) => {
    switch (bm.contentType) {
      case "topic": return HEALTH_TOPICS.find((t) => t.id === bm.contentId);
      case "campaign": return CAMPAIGNS.find((c) => c.id === bm.contentId);
      case "article": return ARTICLES.find((a) => a.id === bm.contentId);
    }
  };

  const getHref = (bm: BookmarkItem) => {
    switch (bm.contentType) {
      case "topic": return `/topics/${bm.contentId}`;
      case "campaign": return `/campaigns/${bm.contentId}`;
      case "article": return `/articles/${bm.contentId}`;
    }
  };

  const filtered = filter === "all" ? bookmarks : bookmarks.filter((b) => b.contentType === filter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                <Bookmark className="h-3.5 w-3.5" />
                Saved Items
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Your Bookmarks</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Access your saved health topics, campaigns, and articles for quick reference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white sticky top-16 z-30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {(["all", "topic", "campaign", "article"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                      filter === f
                        ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                        : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                    }`}
                  >
                    {f === "all" ? "All" : TYPE_LABEL[f]}
                  </button>
                ))}
              </div>
              <span className="text-xs text-[oklch(0.5_0.02_250)]">
                {bookmarks.length} saved
              </span>
            </div>
          </div>
        </section>

        {/* Bookmarks */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Inbox className="h-12 w-12 text-[oklch(0.75_0.01_250)] mx-auto mb-4" />
                <p className="text-lg font-medium text-[oklch(0.3_0.02_250)]">
                  {bookmarks.length === 0 ? "No bookmarks yet" : "No items in this category"}
                </p>
                <p className="text-sm text-[oklch(0.5_0.02_250)] mt-1 mb-4">
                  {bookmarks.length === 0
                    ? "Save health topics, campaigns, and articles for quick access."
                    : "Try selecting a different filter."}
                </p>
                {bookmarks.length === 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/topics" className="px-4 py-2 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                      Browse Topics
                    </Link>
                    <Link to="/campaigns" className="px-4 py-2 rounded-lg border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-medium hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors">
                      Browse Campaigns
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((bm, i) => {
                  const content = getContent(bm);
                  const Icon = TYPE_ICON[bm.contentType];
                  if (!content) return null;
                  const href = getHref(bm);
                  return (
                    <motion.div
                      key={`${bm.contentType}-${bm.contentId}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <div className="group flex items-center gap-4 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow">
                        {"image" in content && content.image && (
                          <div className="h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-[oklch(0.95_0.01_250)]">
                            <img src={content.image} alt={"title" in content ? content.title : ""} className="h-full w-full object-cover" loading="lazy" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${TYPE_COLOR[bm.contentType]}`}>
                            <Icon className="h-3 w-3" />
                            {TYPE_LABEL[bm.contentType]}
                          </span>
                          <h3 className="mt-1 text-sm font-semibold text-[oklch(0.2_0.03_255)] truncate">
                            {"title" in content ? content.title : ""}
                          </h3>
                          <p className="text-xs text-[oklch(0.5_0.02_250)] truncate">
                            {"shortDescription" in content ? content.shortDescription : ""}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => removeBookmark(bm.contentType, bm.contentId)}
                            className="p-2 rounded-lg text-[oklch(0.5_0.02_250)] hover:text-red-500 hover:bg-red-50 transition-colors"
                            title="Remove bookmark"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <Link
                            to={href}
                            className="p-2 rounded-lg text-[oklch(0.5_0.02_250)] hover:text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
