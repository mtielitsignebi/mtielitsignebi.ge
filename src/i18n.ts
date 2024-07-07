import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./assets/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    ka: {
      translation: translations.ka,
    },
  },
  lng: "ka", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
