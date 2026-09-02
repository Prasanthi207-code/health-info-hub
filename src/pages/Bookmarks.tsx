import { useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Bookmark, X, FileText, Megaphone, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { CAMPAIGNS, HEALTH_TOPICS, ARTICLES } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const TYPE_ICONS: Record<string, typeof FileText> = { campaign: Megaphone, topic: Stethoscope, article: FileText };

export default function BookmarksPage() {
  const { t } = useTranslation();
  const { bookmarks, removeBookmark } = useBookmarks();

  const enrichedBookmarks = useMemo(() => {
    return bookmarks.map((bm) => {
      let title = bm.contentId;
      if (bm.contentType === "campaign") {
        const c = CAMPAIGNS.find((x) => x.id === bm.contentId);
        if (c) title = c.title;
      } else if (bm.contentType === "topic") {
        const tp = HEALTH_TOPICS.find((x) => x.id === bm.contentId);
        if (tp) title = tp.title;
      } else if (bm.contentType === "article") {
        const a = ARTICLES.find((x) => x.id === bm.contentId);
        if (a) title = a.title;
      }
      return { ...bm, title };
    });
  }, [bookmarks]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl sm:text-4xl font-bold">{t("bookmarksTitle")}</h1>
              <p className="mt-3 text-white/70">{t("bookmarksDesc")}</p>
            </motion.div>
          </div>
        </section>
        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {enrichedBookmarks.length === 0 ? (
              <div className="text-center py-16">
                <Bookmark className="h-12 w-12 text-[oklch(0.75_0.01_250)] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[oklch(0.2_0.03_255)] mb-2">{t("noBookmarks")}</h3>
                <p className="text-sm text-[oklch(0.5_0.02_250)] max-w-md mx-auto">{t("noBookmarksDesc")}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {enrichedBookmarks.map((bm, i) => {
                  const Icon = TYPE_ICONS[bm.contentType] || FileText;
                  return (
                    <motion.div key={`${bm.contentType}-${bm.contentId}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-4 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]"><Icon className="h-5 w-5" /></div>
                      <div className="flex-1 min-w-0">
                        <Link to={`/${bm.contentType}s/${bm.contentId}`} className="text-sm font-semibold text-[oklch(0.2_0.03_255)] hover:text-[oklch(0.32_0.08_255)] truncate block">{bm.title}</Link>
                        <p className="text-xs text-[oklch(0.5_0.02_250)] capitalize">{bm.contentType}</p>
                      </div>
                      <button onClick={() => removeBookmark(bm.contentType, bm.contentId)} className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors shrink-0" title={t("remove")}><X className="h-4 w-4" /></button>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
