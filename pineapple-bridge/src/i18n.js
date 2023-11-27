import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import supportedLngs from './utils/supportedLanguages.json'

import enTrans from './locales/en/en-US.json'
import svTrans from './locales/se/se-SV.json'
import frTrans from './locales/fr/fr-FR.json'
import cnTrans from './locales/cn/zh-Hans.json'

const resources = {
  en: { translation: enTrans },
  sv: { translation: svTrans },
  fr: { translation: frTrans },
  "zh-CN": { translation: cnTrans },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector, {
	order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'i18nextLng',
	lookupSessionStorage: 'i18nextLng',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,
    supportedLngs: supportedLngs,
	caches: ['localStorage', 'cookie'],
    detectFromPath: true,
  })
  .on('initialized', (lng) => { document.documentElement.setAttribute('lang', localStorage.getItem('i18nextLng'))})
  .on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng)})
  .init({
    debug: true,
    resources,
	  fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;