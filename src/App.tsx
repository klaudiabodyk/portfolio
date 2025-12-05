import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import automationVisual from './assets/inMyMind00005.png'
import circleCake from './assets/circlecake.svg'
import fireWave from './assets/firewave.png'
import magicStar from './assets/magicstar.svg'
import operationsVisual from './assets/inMyMind00005.png'
import pinkPeak from './assets/pinkpeak.png'
import niceCodeSnippets from './assets/niceCode.png'
import SectionWrapper from './components/SectionWrapper'
import orangeBow from './assets/orangebow.svg'
import happyLeaf from './assets/happyleaf.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}

type Language = 'pl' | 'en'

type LanguageOption = {
  readonly code: Language
  readonly label: string
}

function App() {
  const { t, i18n } = useTranslation()
  const placeholderSections: SectionConfig[] = []

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

  const skillsItems = [
    {
      label: t('skills.items.cloud.label'),
      description: t('skills.items.cloud.description'),
    },
    {
      label: t('skills.items.infrastructure.label'),
      description: t('skills.items.infrastructure.description'),
    },
    {
      label: t('skills.items.frontend.label'),
      description: t('skills.items.frontend.description'),
    },
    {
      label: t('skills.items.containers.label'),
      description: t('skills.items.containers.description'),
    },
    {
      label: t('skills.items.backend.label'),
      description: t('skills.items.backend.description'),
    },
    {
      label: t('skills.items.scripting.label'),
      description: t('skills.items.scripting.description'),
    },
    {
      label: t('skills.items.security.label'),
      description: t('skills.items.security.description'),
    },
  ]

  const sections: SectionConfig[] = [
    {
      id: 'section-1',
      ariaLabel: t('ariaLabels.hero'),
      className: 'section-wrapper--hero',
      content: (
        <div className="hero">
          <button className="hero__cta" type="button">
            {t('hero.cta')}
          </button>
          <div className="hero__title">
            <span className="hero__title-primary">
              {t('hero.titlePrimary')}{' '}
              <span className="hero__title-by">{t('hero.titleBy')}</span>
            </span>
            <span className="hero__title-name">{t('hero.titleName')}</span>
          </div>
          <p className="hero__description">{t('hero.description')}</p>
          <span className="hero__subtitle">{t('hero.subtitle')}</span>
        </div>
      ),
    },
    {
      id: 'section-2',
      ariaLabel: t('ariaLabels.about'),
      className: 'section-wrapper--about',
      content: (
        <div className="about">
          <div className="about__content">
            <img
              src={magicStar}
              alt=""
              className="about__icon"
              aria-hidden="true"
            />
            <div className="about__heading-group">
              <h2 className="about__heading">
                <span className="about__heading-line">
                  {t('about.headingLinePrimary')}
                </span>
                <span className="about__heading-line about__heading-line--accent">
                  {t('about.headingLineAccent')}
                </span>
              </h2>
              <p className="about__meta">{t('about.meta')}</p>
            </div>
            <p className="about__description">{t('about.description')}</p>
          </div>
          <div className="about__visual">
            <img
              src={fireWave}
              alt={t('about.visualAlt')}
              className="about__image"
              loading="lazy"
            />
            <div className="about__image-overlay" aria-hidden="true" />
          </div>
        </div>
      ),
    },
    {
      id: 'section-3',
      ariaLabel: t('ariaLabels.projects'),
      className: 'section-wrapper--projects',
      content: (
        <div className="projects">
          <div className="projects__heading-block">
            <h2 className="projects__heading">
              <span>{t('projects.headingTop')}</span>
              <span>{t('projects.headingBottom')}</span>
            </h2>
          </div>
          <div className="projects__content">
            <div className="projects__gallery" role="list">
             
            </div>
            <div className="projects__note">
              <img
                src={circleCake}
                alt=""
                className="projects__note-icon"
                aria-hidden="true"
              />
              <p className="projects__note-text">
                {t('projects.note')}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'section-4',
      ariaLabel: t('ariaLabels.lecturer'),
      className: 'section-wrapper--lecturer',
      content: (
        <div className="lecturer">
          <h2 className="lecturer__heading">
            {t('lecturer.headingPrimary')}
            <span>{t('lecturer.headingAccent')}</span>
          </h2>
          <div className="lecturer__body">
            <div className="lecturer__details">
              <img
                src={happyLeaf}
                alt=""
                className="lecturer__icon"
                aria-hidden="true"
              />
              <p className="lecturer__description">
                {t('lecturer.description')}
              </p>
            </div>
            <div className="lecturer__visual">
              <img
                src={pinkPeak}
                alt={t('lecturer.visualAlt')}
                className="lecturer__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'section-5',
      ariaLabel: t('ariaLabels.solutions'),
      className: 'section-wrapper--solutions',
      content: (
        <div className="solutions">
          <div className="solutions__media">
            <img
              src={automationVisual}
              alt={t('solutions.primaryAlt')}
              className="solutions__image solutions__image--primary"
              loading="lazy"
            />
            <img
              src={operationsVisual}
              alt={t('solutions.secondaryAlt')}
              className="solutions__image solutions__image--secondary"
              loading="lazy"
            />
          </div>
          <div className="solutions__content">
            <div className="solutions__heading">
              <img
                src={magicStar}
                alt=""
                className="solutions__icon"
                aria-hidden="true"
              />
              <h2 className="solutions__title">
                {t('solutions.title')}
                <span>{t('solutions.subtitle')}</span>
              </h2>
            </div>
            <p className="solutions__description">{t('solutions.description')}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'section-6',
      ariaLabel: t('ariaLabels.skills'),
      className: 'section-wrapper--skills',
      content: (
        <div className="skills">
          <div className="skills__visual">
            <img
              src={niceCodeSnippets}
              alt={t('skills.visualAlt')}
              className="skills__image"
              loading="lazy"
            />
          </div>
          <div className="skills__content">
            <div className="skills__heading">
              <img
                src={orangeBow}
                alt=""
                className="skills__icon"
                aria-hidden="true"
              />
              <h2 className="skills__title">{t('skills.title')}</h2>
            </div>
            <ul className="skills__list">
              {skillsItems.map((item, index) => (
                <li key={`skill-${index}`}>
                  <strong>{item.label}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'section-7',
      ariaLabel: t('ariaLabels.contact'),
      className: 'section-wrapper--contact',
      content: (
        <div className="contact">
          <h2 className="contact__heading">{t('contact.heading')}</h2>
          <div className="contact__content">
            <div className="contact__links">
              <a
                href="https://github.com/klaudiabodyk"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="contact__icon"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/klaudia-bodyk/"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="contact__icon"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="contact__details">
              <a className="contact__detail" href="tel:+48530131800">
                530&nbsp;131&nbsp;800
              </a>
              <a className="contact__detail" href="mailto:klaudia.bodyk@icloud.com">
                klaudia.bodyk@icloud.com
              </a>
            </div>
          </div>
        </div>
      ),
    },
    ...placeholderSections,
  ]

  return (
    <div className="page">
      <header className="page__header">
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
      </header>
      {sections.map(({ id, ariaLabel, className, content }) => (
        <SectionWrapper
          key={id}
          ariaLabel={ariaLabel}
          className={className}
        >
          {content}
        </SectionWrapper>
      ))}
    </div>
  )
}

export default App
