import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./locales/en.json";
import de from "./locales/de.json";

const storedLang = localStorage.getItem("selectedLang") || "de";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
  lng: storedLang, // Use the stored language
  fallbackLng: "de", // Fallback language
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18next;
