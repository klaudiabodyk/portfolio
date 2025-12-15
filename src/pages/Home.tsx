import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from '../components/SectionWrapper'
import PageHeader from '../components/PageHeader'
import './styles/Home.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import pureCodeLogo from '../assets/pure-code-logo.png'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}


function Home() {
  const { t } = useTranslation()

  const sections: SectionConfig[] = [
    {
      id: 'section-1',
      ariaLabel: t('ariaLabels.hero'),
      className: 'section-wrapper--hero',
      content: (
        <div className="hero">
          <a 
            className="hero__cta" 
            href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('hero.emailSubject'))}&body=${encodeURIComponent(t('hero.emailBody'))}`}
          >
            {t('hero.cta')}
          </a>
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
      ariaLabel: t('ariaLabels.services'),
      className: 'section-wrapper--services',
      content: (
        <div className="services">
          <h2 className="services__heading">{t('services.heading')}</h2>
          <div className="services__grid">
            <a href="/ai-workshops" className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">{t('services.aiWorkshops.title')}</h3>
                <p className="service-card__description">{t('services.aiWorkshops.description')}</p>
                <span className="service-card__cta">{t('services.aiWorkshops.cta')}</span>
              </div>
            </a>
            <a href="/software-engineer" className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">{t('services.softwareEngineer.title')}</h3>
                <p className="service-card__description">{t('services.softwareEngineer.description')}</p>
                <span className="service-card__cta">{t('services.softwareEngineer.cta')}</span>
              </div>
            </a>
            <a href="/web-development" className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">{t('services.webDevOffer.title')}</h3>
                <p className="service-card__description">{t('services.webDevOffer.description')}</p>
                <span className="service-card__cta">{t('services.webDevOffer.cta')}</span>
              </div>
            </a>
            <a href="/instagram-beauty" className="service-card">
              <div className="service-card__content">
                <h3 className="service-card__title">{t('services.instagramBeauty.title')}</h3>
                <p className="service-card__description">{t('services.instagramBeauty.description')}</p>
                <span className="service-card__cta">{t('services.instagramBeauty.cta')}</span>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'section-3',
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

export default Home
