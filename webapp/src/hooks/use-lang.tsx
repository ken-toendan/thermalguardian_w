import * as React from "react";
import type { Lang } from "@/content/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = React.createContext<LangContextValue | undefined>(undefined);

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("tg-lang");
    if (saved === "en" || saved === "ja") return saved;
  } catch {
    // ignore
  }
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("ja") ? "ja" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => detectInitialLang());

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("tg-lang", next);
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
