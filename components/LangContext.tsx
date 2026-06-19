"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { type Lang, type Translations, t } from "@/data/translations";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; T: Translations }>({
  lang: "English",
  setLang: () => {},
  T: t.English,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("English");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored && t[stored]) setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
  }

  return (
    <LangContext.Provider value={{ lang, setLang, T: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
