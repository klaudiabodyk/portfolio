import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from '../components/SectionWrapper'
import PageHeader from '../components/PageHeader'
import './styles/WebDevOffer.css'
import magicStar from '../assets/magic-star.svg'
import ProjectCarousel from '../components/ProjectCarousel'
import { useTheme } from '../context/ThemeContext'
import darkmodeNidles from '../assets/darkmode-nidles.png'
import inMyMind00005 from '../assets/in-my-mind-00005.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import pureCodeLogo from '../assets/pure-code-logo.png'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}

const WebDevOffer = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const sections: SectionConfig[] = [
    {
      id: 'web-dev-offer-hero',
      ariaLabel: 'Web Development Offer Hero',
      className: 'section-wrapper--hero',
      content: (
        <div className="hero">
          <div className="hero__title">
            <span className="hero__title-primary">{t('webDevOffer.hero.title')}</span>
          </div>
          <p className="hero__description">
            {t('webDevOffer.hero.description')}
          </p>
          <span className="hero__subtitle">{t('webDevOffer.hero.subtitle')}</span>
        </div>
      ),
    },
    {
      id: 'web-dev-offer-solutions',
      ariaLabel: t('ariaLabels.solutions'),
      className: 'section-wrapper--solutions',
      content: (
        <div className="solutions">
          <div className="solutions__media">
            <div className="solutions__image-wrapper">
              <img
                src={theme === 'dark' ? darkmodeNidles : inMyMind00005}
                alt={t('solutions.primaryAlt')}
                className="solutions__image solutions__image--primary"
                loading="lazy"
              />
              <div
                className="solutions__image-overlay solutions__image-overlay--bottom"
                aria-hidden="true"
              />
            </div>
            <div className="solutions__image-wrapper">
              <img
                src={theme === 'dark' ? darkmodeNidles : inMyMind00005}
                alt={t('solutions.secondaryAlt')}
                className="solutions__image solutions__image--secondary"
                loading="lazy"
              />
              <div
                className="solutions__image-overlay solutions__image-overlay--top"
                aria-hidden="true"
              />
            </div>
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
      id: 'web-dev-offer-projects',
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
              <ProjectCarousel />
            </div>
            <div className="projects__note">
              <p className="projects__note-text">
                {t('projects.note')}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'web-dev-offer-contact',
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

export default WebDevOffer
