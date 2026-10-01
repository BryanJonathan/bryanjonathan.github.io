import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ptBR from "./locales/pt-BR.json";

export const languages = ["pt-BR", "en"] as const;
export type Language = (typeof languages)[number];

const fallbackLng: Language = "pt-BR";

function toSupported(lng: string): Language {
  return lng.toLowerCase().startsWith("en") ? "en" : fallbackLng;
}

function syncDocument(lng: string) {
  document.documentElement.lang = lng;
  document.title = i18n.t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", i18n.t("meta.description"));
}

i18n.on("languageChanged", syncDocument);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
    },
    fallbackLng,
    supportedLngs: [...languages],
    load: "currentOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      convertDetectedLanguage: toSupported,
    },
  });

export function currentLanguage(): Language {
  return toSupported(i18n.resolvedLanguage ?? fallbackLng);
}

export default i18n;
