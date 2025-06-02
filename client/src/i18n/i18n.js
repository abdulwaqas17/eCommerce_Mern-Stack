import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ur from "./ur.json";
import zh from "./zh.json";
import ar from "./ar.json";

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next) // bind react
  .init({
   resources: {
  en: { translation: en },
  ur: { translation: ur },
  ar: { translation: ar },
  zh: { translation: zh },
},
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
