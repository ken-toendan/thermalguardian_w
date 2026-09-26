import * as React from "react";
import type { Lang } from "@/content/i18n";

// "cn" is the China version: same English text, but videos play from Bilibili
// instead of YouTube (blocked in mainland China).
export type Edition = "intl" | "cn";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  edition: Edition;
  setEdition: (edition: Edition) => void;
}

const LangContext = React.createContext<LangContextValue | undefined>(undefined);

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

function browserLanguage(): string {
  return (navigator.language || "").toLowerCase();
}

function detectInitialEdition(): Edition {
  const saved = readStored("tg-edition");
  if (saved === "intl" || saved === "cn") return saved;
  return browserLanguage().startsWith("zh") ? "cn" : "intl";
}

function detectInitialLang(): Lang {
  const saved = readStored("tg-lang");
  if (saved === "en" || saved === "ja") return saved;
  return browserLanguage().startsWith("ja") ? "ja" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => detectInitialLang());
  const [edition, setEditionState] = React.useState<Edition>(() => detectInitialEdition());

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    writeStored("tg-lang", next);
  }, []);

  const setEdition = React.useCallback((next: Edition) => {
    setEditionState(next);
    writeStored("tg-edition", next);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = React.useMemo(
    () => ({ lang, setLang, edition, setEdition }),
    [lang, setLang, edition, setEdition]
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
