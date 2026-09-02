import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, CheckCircle2, BookOpen, Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES, DISCLAIMER } from "@/data";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLES.find((a) => a.id === id);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-[oklch(0.2_0.03_255)]">Article not found</p>
            <Link to="/articles" className="mt-3 inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)]">
              <ArrowLeft className="h-4 w-4" /> Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-[oklch(0.95_0.01_250)]">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm mb-3">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{article.title}</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center justify-between mb-6">
            <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Articles
            </Link>
            <button
              onClick={() => toggleBookmark("article", article.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isBookmarked("article", article.id)
                  ? "bg-[oklch(0.32_0.08_255_/_0.1)] text-[oklch(0.32_0.08_255)]"
                  : "border border-[oklch(0.88_0.01_240)] text-[oklch(0.5_0.02_250)] hover:border-[oklch(0.32_0.08_255_/_0.3)] hover:text-[oklch(0.32_0.08_255)]"
              }`}
            >
              {isBookmarked("article", article.id) ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              {isBookmarked("article", article.id) ? "Bookmarked" : "Bookmark"}
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[oklch(0.5_0.02_250)] mb-8">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {article.publishedDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readingTime} read</span>
          </div>

          {/* Content */}
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-slate max-w-none">
            {article.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="text-lg font-bold text-[oklch(0.18_0.03_255)] mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("**")) {
                const parts = para.split("**").filter(Boolean);
                return (
                  <div key={i} className="mb-4">
                    {parts.map((part, j) =>
                      j % 2 === 0 ? <strong key={j} className="text-[oklch(0.2_0.03_255)]">{part}</strong> : <span key={j}>{part}</span>
                    )}
                  </div>
                );
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="space-y-1.5 mb-4 pl-4">
                    {para.split("\n").map((line, j) => {
                      const text = line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1");
                      return <li key={j} className="text-sm text-[oklch(0.3_0.02_250)] leading-relaxed list-disc">{text}</li>;
                    })}
                  </ul>
                );
              }
              return <p key={i} className="text-sm text-[oklch(0.3_0.02_250)] leading-relaxed mb-4">{para}</p>;
            })}
          </motion.article>

          {/* Key Takeaways */}
          {article.keyTakeaways.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 p-6 rounded-xl bg-[oklch(0.97_0.003_250)] border border-[oklch(0.9_0.01_240)]">
              <h2 className="flex items-center gap-2 text-lg font-bold text-[oklch(0.18_0.03_255)] mb-4">
                <BookOpen className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((tk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)]">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {tk}
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
              <h2 className="text-lg font-bold text-[oklch(0.18_0.03_255)] mb-4">Related Articles</h2>
              <div className="space-y-3">
                {relatedArticles.map((ra) => (
                  <Link key={ra.id} to={`/articles/${ra.id}`} className="block rounded-lg border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{ra.title}</h3>
                    <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1 line-clamp-2">{ra.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        <section className="py-6 border-t border-[oklch(0.92_0.01_240)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
