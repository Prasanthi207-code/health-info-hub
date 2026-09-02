import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl sm:text-4xl font-bold">{t("contactTitle")}</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">{t("contactSubtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-[oklch(0.18_0.03_255)]">{t("contactInfo")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]"><Mail className="h-4 w-4" /></div>
                    <div><p className="text-xs font-medium text-[oklch(0.5_0.02_250)]">{t("contactEmailLabel")}</p><p className="text-sm text-[oklch(0.2_0.03_255)]">info@digitalhealth.org</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]"><Phone className="h-4 w-4" /></div>
                    <div><p className="text-xs font-medium text-[oklch(0.5_0.02_250)]">{t("contactPhoneLabel")}</p><p className="text-sm text-[oklch(0.2_0.03_255)]">+1 (555) 123-4567</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]"><Clock className="h-4 w-4" /></div>
                    <div><p className="text-xs font-medium text-[oklch(0.5_0.02_250)]">{t("contactHoursLabel")}</p><p className="text-sm text-[oklch(0.2_0.03_255)]">Mon-Fri 9AM-6PM</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]"><MapPin className="h-4 w-4" /></div>
                    <div><p className="text-xs font-medium text-[oklch(0.5_0.02_250)]">{t("contactResponseTime")}</p><p className="text-sm text-[oklch(0.2_0.03_255)]">{t("contactResponseDesc")}</p></div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100"><CheckCircle className="h-7 w-7 text-green-600" /></div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">{t("contactSent")}</h3>
                    <p className="text-sm text-green-700">{t("contactSentDesc")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("contactName")}</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)]" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("contactEmail")}</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("contactSubject")}</label>
                      <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("contactMessage")}</label>
                      <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-3.5 py-2.5 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] resize-none" />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                      <Send className="h-4 w-4" />{t("contactSend")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
