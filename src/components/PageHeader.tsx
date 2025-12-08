import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './styles/PageHeader.css'

type Language = 'pl' | 'en'

type LanguageOption = {
  readonly code: Language
  readonly label: string
}

const PageHeader = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const resolvedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? 'en')
    .split('-')[0]
    .toLowerCase() as Language

  const changeLanguage = (language: Language) => {
    if (language !== resolvedLanguage) {
      void i18n.changeLanguage(language)
    }
  }

  const languageOptions: LanguageOption[] = [
    { code: 'pl', label: t('languageSwitcher.polish') },
    { code: 'en', label: t('languageSwitcher.english') },
  ]

  return (
    <header className="page__header">
      <div className="header-controls">
        {location.pathname !== '/' && (
          <Link to="/" className="home-button">
            {t('navigation.home')}
          </Link>
        )}
        <div className="language-switcher">
          <span className="language-switcher__label">
            {t('languageSwitcher.label')}:
          </span>
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`language-switcher__button ${
                resolvedLanguage === option.code
                  ? 'language-switcher__button--active'
                  : ''
              }`}
              onClick={() => changeLanguage(option.code)}
              aria-pressed={resolvedLanguage === option.code}
            >
              {option.label}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default PageHeader
