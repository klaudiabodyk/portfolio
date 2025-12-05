import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation'
import plTranslation from './locales/pl/translation'

void i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: plTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: 'pl',
  fallbackLng: 'pl',
  supportedLngs: ['pl', 'en'],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})

export default i18n

