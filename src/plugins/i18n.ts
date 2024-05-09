import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt_BR } from "@/locales/pt_BR/pt-BR";
import { en_US } from "@/locales/en_US/en-US";

i18n.use(initReactI18next).init({
  fallbackLng: "en_US",
  debug: false,
  resources: {
    pt_BR: {
      ...pt_BR,
    },
    en_US: {
      ...en_US,
    },
  },
});

export default i18n;
