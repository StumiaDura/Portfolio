import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // Use i18next-http-backend to load translations from your public folder
  .use(HttpApi)
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs: ["en", "lt"],
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    // Detection options
    detection: {
      // Order and from where user language should be detected
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
