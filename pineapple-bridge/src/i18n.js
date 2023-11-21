import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import supportedLngs from './utils/supportedLanguages.json'

import enTrans from './locales/en/en-US.json'
import svTrans from './locales/se/se-SV.json'

const resources = {
  en: { translation: enTrans },
  sv: { translation: svTrans }
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
  .init({
    resources,
	fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;