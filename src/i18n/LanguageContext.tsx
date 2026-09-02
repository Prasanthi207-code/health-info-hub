import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import translations, { type Language, type LanguageOption, LANGUAGES } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "dhap-language";

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (translations as Record<string, unknown>)[stored]) {
      return stored as Language;
    }
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLangState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLangState(lang);
  }, []);

  const t = useCallback(
    (key: keyof typeof translations.en): string => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
