import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import { type Language } from "@/i18n/translations";

const LS_KEY = "dhap-language-selected";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t, languages } = useTranslation();

  useEffect(() => {
    const selected = localStorage.getItem(LS_KEY);
    if (!selected) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
  };

  const handleContinue = () => {
    localStorage.setItem(LS_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] p-8 text-center text-white">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{t("chooseLanguage")}</h2>
              <p className="text-white/70 text-sm">{t("chooseLanguageDesc")}</p>
            </div>

            {/* Language Grid */}
            <div className="p-6">
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      language === lang.code
                        ? "border-[oklch(0.32_0.08_255)] bg-[oklch(0.32_0.08_255_/_0.04)]"
                        : "border-[oklch(0.92_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)] hover:bg-[oklch(0.97_0.003_250)]"
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="text-left flex-1">
                      <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{lang.nativeName}</p>
                      <p className="text-xs text-[oklch(0.5_0.02_250)]">{lang.name}</p>
                    </div>
                    {language === lang.code && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[oklch(0.32_0.08_255)] text-white">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleContinue}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[oklch(0.32_0.08_255)] text-white text-sm font-semibold hover:bg-[oklch(0.28_0.08_255)] transition-colors shadow-lg"
              >
                {t("getStarted")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
