import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation'
import plTranslation from './locales/pl/translation'

// Function to get language from query parameter
const getLanguageFromQuery = (): string => {
  if (typeof window === 'undefined') return 'en' // SSR fallback

  const urlParams = new URLSearchParams(window.location.search)
  const lang = urlParams.get('lang')

  // Return the language if it's supported, otherwise default to 'en'
  if (lang === 'pl' || lang === 'en') {
    return lang
  }

  return 'en'
}

void i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: plTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: getLanguageFromQuery(),
  fallbackLng: 'en',
  supportedLngs: ['pl', 'en'],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})

export default i18n

