import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2, Calendar, ShieldCheck, Target, AlertTriangle, TrendingUp, BookOpen, Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CAMPAIGNS, ARTICLES, DISCLAIMER } from "@/data";

const BADGE: Record<string, string> = {
  "Disease Prevention": "bg-red-50 text-red-700",
  "Mental Health": "bg-blue-50 text-blue-700",
  "Nutrition": "bg-green-50 text-green-700",
  "Infectious Diseases": "bg-purple-50 text-purple-700",
  "Environmental Health": "bg-sky-50 text-sky-700",
  "Safety": "bg-amber-50 text-amber-700",
  default: "bg-slate-50 text-slate-700",
};

export default function CampaignDetail() {
  const { id } = useParams();
  const campaign = CAMPAIGNS.find((c) => c.id === id);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-[oklch(0.2_0.03_255)]">Campaign not found</p>
            <Link to="/campaigns" className="mt-3 inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)]">
              <ArrowLeft className="h-4 w-4" /> Back to Campaigns
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => campaign.relatedArticleIds.includes(a.id));
  const relatedCampaigns = CAMPAIGNS.filter((c) => c.id !== campaign.id && c.category === campaign.category).slice(0, 2);

  const shareText = `Check out the ${campaign.title} campaign on the Digital Health Awareness Portal!`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-[oklch(0.95_0.01_250)]">
          <img src={campaign.image} alt={campaign.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm`}>
                  {campaign.category}
                </span>
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm`}>
                  {campaign.status}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{campaign.title}</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Back link */}
          <Link to="/campaigns" className="inline-flex items-center gap-1 text-sm text-[oklch(0.32_0.08_255)] mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Campaigns
          </Link>

          {/* Introduction */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <p className="text-[oklch(0.3_0.02_250)] leading-relaxed text-base">{campaign.description}</p>
          </motion.section>

          {/* Dates */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm text-[oklch(0.5_0.02_250)]">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {campaign.startDate} — {campaign.endDate}</span>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-to-r from-[oklch(0.32_0.08_255)] to-[oklch(0.38_0.1_210)] p-6 sm:p-8 text-white mb-10"
          >
            <p className="text-lg font-semibold">Learn. Share. Take Action.</p>
            <p className="text-white/70 text-sm mt-1 mb-4">Spread awareness and make a difference in your community.</p>              <div className="flex gap-3">
              <button
                onClick={() => { if (navigator.share) navigator.share({ title: campaign.title, text: shareText }); else navigator.clipboard.writeText(shareText); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[oklch(0.32_0.08_255)] text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <Share2 className="h-4 w-4" /> Share Campaign
              </button>
              <button
                onClick={() => toggleBookmark("campaign", campaign.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/15 backdrop-blur-sm text-white text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors"
              >
                {isBookmarked("campaign", campaign.id) ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                {isBookmarked("campaign", campaign.id) ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </motion.div>

          {/* Objective */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <Target className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Campaign Objective
            </h2>
            <p className="text-[oklch(0.3_0.02_250)] leading-relaxed">{campaign.objective}</p>
          </motion.section>

          {/* Key Facts */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <TrendingUp className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Key Facts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {campaign.statistics.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[oklch(0.9_0.01_240)] bg-white p-4">
                  <div className="text-2xl font-bold text-[oklch(0.32_0.08_255)]">{stat.value}</div>
                  <div className="text-xs text-[oklch(0.5_0.02_250)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why it matters */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">Why It Matters</h2>
            <ul className="space-y-2">
              {campaign.whyItMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[oklch(0.32_0.08_255)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Prevention & Actions */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
              <ShieldCheck className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Prevention & Actions
            </h2>
            <ul className="space-y-2">
              {campaign.preventionActions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">
                <BookOpen className="h-5 w-5 text-[oklch(0.35_0.1_220)]" /> Related Articles
              </h2>
              <div className="space-y-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.id}`}
                    className="block rounded-lg border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{article.title}</h3>
                    <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1 line-clamp-2">{article.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Related Campaigns */}
          {relatedCampaigns.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-4">Related Campaigns</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedCampaigns.map((rc) => (
                  <Link key={rc.id} to={`/campaigns/${rc.id}`} className="group rounded-lg border border-[oklch(0.9_0.01_240)] bg-white overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={rc.image} alt={rc.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{rc.title}</h3>
                      <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1 line-clamp-2">{rc.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Disclaimer */}
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
