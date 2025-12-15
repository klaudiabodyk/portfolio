import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import SectionWrapper from '../components/SectionWrapper'
import PageHeader from '../components/PageHeader'
import magicStar from '../assets/magicstar.svg'
import orangeBow from '../assets/orangebow.svg'
import inMyMind00005hori from '../assets/inMyMind00005hori.png'
import darkmodeNidleshori from '../assets/darkmodeNidleshori.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import pureCodeLogo from '../assets/pureCodeLogo.png'
import myViewDarkMode from '../assets/myviewdarkmode.png'
import myViewLightMode from '../assets/myVIewlightmode.png'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}

const SoftwareEngineer = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

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
      id: 'software-engineer-hero',
      ariaLabel: 'Software Engineer Hero',
      className: 'section-wrapper--hero',
      content: (
        <div className="hero">
          <div className="hero__title">
            <span className="hero__title-primary">{t('softwareEngineer.hero.title')}</span>
          </div>
          <p className="hero__description">
            {t('hero.description')}
          </p>
          <span className="hero__subtitle">{t('softwareEngineer.hero.subtitle')}</span>
        </div>
      ),
    },
    {
      id: 'software-engineer-about',
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
              src={theme === 'dark' ? darkmodeNidleshori : inMyMind00005hori}
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
      id: 'software-engineer-skills',
      ariaLabel: t('ariaLabels.skills'),
      className: 'section-wrapper--skills',
      content: (
        <div className="skills">
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
      id: 'software-engineer-experience',
      ariaLabel: t('ariaLabels.experience', 'Professional Experience'),
      className: 'section-wrapper--experience',
      content: (
        <div className="experience">
          <div className="experience__content">
            <div className="experience__heading">
              <img
                src={magicStar}
                alt=""
                className="experience__icon"
                aria-hidden="true"
              />
              <h2 className="experience__title">{t('experience.title')}</h2>
            </div>
            <div className="experience__items">
              <div className="experience__item">
                <div className="experience__item-header">
                  <h3 className="experience__company">{t('experience.items.airslate.company')}</h3>
                  <span className="experience__period">{t('experience.items.airslate.period')}</span>
                </div>
                <h4 className="experience__position">{t('experience.items.airslate.position')}</h4>
                <p className="experience__description">{t('experience.items.airslate.description')}</p>
              </div>
              <div className="experience__item">
                <div className="experience__item-header">
                  <h3 className="experience__company">{t('experience.items.eygds.company')}</h3>
                  <span className="experience__period">{t('experience.items.eygds.period')}</span>
                </div>
                <h4 className="experience__position">{t('experience.items.eygds.position')}</h4>
                <p className="experience__description">{t('experience.items.eygds.description')}</p>
              </div>
            </div>
          </div>
          <div className="experience__visual">
            <img
            src={theme === 'dark' ? myViewDarkMode : myViewLightMode}
              alt={t('experience.visualAlt')}
              className="experience__image"
              loading="lazy"
            />
            <div className="experience__image-overlay" aria-hidden="true" />
          </div>
        </div>
      ),
    },
    {
      id: 'software-engineer-certifications',
      ariaLabel: t('ariaLabels.certifications', 'Certifications'),
      className: 'section-wrapper--certifications',
      content: (
        <div className="certifications">
          <div className="certifications__content">
            <div className="certifications__heading">
              <img
                src={orangeBow}
                alt=""
                className="certifications__icon"
                aria-hidden="true"
              />
              <h2 className="certifications__title">{t('certifications.title')}</h2>
            </div>
            <ul className="certifications__list">
              <li className="certifications__item">
                {t('certifications.items.ai900.link') ? (
                  <a
                    href={t('certifications.items.ai900.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__link"
                  >
                    <strong>{t('certifications.items.ai900.name')}</strong>
                  </a>
                ) : (
                  <strong>{t('certifications.items.ai900.name')}</strong>
                )}
                <p>{t('certifications.items.ai900.description')}</p>
              </li>
              <li className="certifications__item">
                {t('certifications.items.architecture.link') ? (
                  <a
                    href={t('certifications.items.architecture.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__link"
                  >
                    <strong>{t('certifications.items.architecture.name')}</strong>
                  </a>
                ) : (
                  <strong>{t('certifications.items.architecture.name')}</strong>
                )}
                <p>{t('certifications.items.architecture.description')}</p>
              </li>
              <li className="certifications__item">
                {t('certifications.items.modernArchitect.link') ? (
                  <a
                    href={t('certifications.items.modernArchitect.link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__link"
                  >
                    <strong>{t('certifications.items.modernArchitect.name')}</strong>
                  </a>
                ) : (
                  <strong>{t('certifications.items.modernArchitect.name')}</strong>
                )}
                <p>{t('certifications.items.modernArchitect.description')}</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'software-engineer-education',
      ariaLabel: t('ariaLabels.education', 'Education'),
      className: 'section-wrapper--education',
      content: (
        <div className="education">
          <div className="education__content">
            <div className="education__heading">
              <img
                src={magicStar}
                alt=""
                className="education__icon"
                aria-hidden="true"
              />
              <h2 className="education__title">{t('education.title')}</h2>
            </div>
            <div className="education__info">
              <h3 className="education__degree">{t('education.degree')}</h3>
              <p className="education__university">{t('education.university')}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'software-engineer-languages',
      ariaLabel: t('ariaLabels.languages', 'Languages'),
      className: 'section-wrapper--languages',
      content: (
        <div className="languages">
          <div className="languages__content">
            <div className="languages__heading">
              <img
                src={orangeBow}
                alt=""
                className="languages__icon"
                aria-hidden="true"
              />
              <h2 className="languages__title">{t('languages.title')}</h2>
            </div>
            <ul className="languages__list">
              <li className="languages__item">
                <span className="languages__name">{t('languages.items.english.name')}</span>
                <span className="languages__level">{t('languages.items.english.level')}</span>
              </li>
              <li className="languages__item">
                <span className="languages__name">{t('languages.items.german.name')}</span>
                <span className="languages__level">{t('languages.items.german.level')}</span>
              </li>
              <li className="languages__item">
                <span className="languages__name">{t('languages.items.polish.name')}</span>
                <span className="languages__level">{t('languages.items.polish.level')}</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'software-engineer-contact',
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
              <a 
                className="contact__detail" 
                href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('contact.emailSubject'))}&body=${encodeURIComponent(t('contact.emailBody'))}`}
              >
                klaudia.bodyk@icloud.com
              </a>
            </div>
            <div className="contact__logo-bottom">
              <img
                src={pureCodeLogo}
                alt="Pure Code Logo"
                className="contact__logo-bottom"
              />
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="page">
      <PageHeader />
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

export default SoftwareEngineer

