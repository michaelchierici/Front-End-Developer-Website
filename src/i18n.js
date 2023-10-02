import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./translationEN.json";
import translaationPT_BR from "./translationPT_BR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt_BR: translaationPT_BR,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
