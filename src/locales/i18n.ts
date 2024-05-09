import i18n from 'i18next'

import { initReactI18next } from 'react-i18next';

import TranslationEn from './en_US/translation_en.json'; 
import TranslationPt from './pt_BR/translation_pt.json';
i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: TranslationEn
    },
    pt:{
      translation : TranslationPt
    }
  },
  lng: 'en',
}); 
export default i18n;
