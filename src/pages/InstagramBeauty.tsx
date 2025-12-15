import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from '../components/SectionWrapper'
import PageHeader from '../components/PageHeader'
import './styles/InstagramBeauty.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import pureCodeLogo from '../assets/pure-code-logo.png'
import icon21 from '../assets/icon-21.png'
import icon22 from '../assets/icon-22.png'
import icon20 from '../assets/icon-20.png'
import icon24 from '../assets/icon-24.png'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}

const InstagramBeauty = () => {
  const { t } = useTranslation()

  const sections: SectionConfig[] = [
    {
      id: 'instagram-beauty-hero',
      ariaLabel: 'Instagram Beauty Hero',
      className: 'section-wrapper--hero section-with-background',
      content: (
        <div className="hero">
          <div className="hero__title">
            <span className="hero__title-primary">{t('instagramBeauty.hero.title')}</span>
          </div>
          <p className="hero__description">
            {t('instagramBeauty.hero.description')}
          </p>
          <a 
            className="hero__cta" 
            href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('instagramBeauty.hero.emailSubject'))}&body=${encodeURIComponent(t('instagramBeauty.hero.emailBody'))}`}
          >
            {t('instagramBeauty.hero.cta')}
          </a>
        </div>
      ),
    },
    {
      id: 'instagram-beauty-services',
      ariaLabel: t('ariaLabels.services'),
      className: 'section-wrapper--beauty-services',
      content: (
        <div className="beauty-services">
          <div className="beauty-services__heading">
            <h2 className="beauty-services__title">
              {t('instagramBeauty.services.heading')}
            </h2>
          </div>
          <div className="beauty-services__grid">
            <div className="beauty-service-card">
              <img src={icon21} alt="" className="beauty-service-card__icon" aria-hidden="true" />
              <h3 className="beauty-service-card__title">{t('instagramBeauty.services.portfolio.title')}</h3>
              <p className="beauty-service-card__description">{t('instagramBeauty.services.portfolio.description')}</p>
            </div>
            <div className="beauty-service-card">
              <img src={icon22} alt="" className="beauty-service-card__icon" aria-hidden="true" />
              <h3 className="beauty-service-card__title">{t('instagramBeauty.services.landingPage.title')}</h3>
              <p className="beauty-service-card__description">{t('instagramBeauty.services.landingPage.description')}</p>
            </div>
            <div className="beauty-service-card">
              <img src={icon20} alt="" className="beauty-service-card__icon" aria-hidden="true" />
              <h3 className="beauty-service-card__title">{t('instagramBeauty.services.shop.title')}</h3>
              <p className="beauty-service-card__description">{t('instagramBeauty.services.shop.description')}</p>
            </div>
            <div className="beauty-service-card">
              <img src={icon24} alt="" className="beauty-service-card__icon" aria-hidden="true" />
              <h3 className="beauty-service-card__title">{t('instagramBeauty.services.ai.title')}</h3>
              <p className="beauty-service-card__description">{t('instagramBeauty.services.ai.description')}</p>
            </div>
          </div>
          <div className="beauty-services__cta-wrapper">
            <a 
              className="beauty-services__cta" 
              href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('instagramBeauty.services.emailSubject'))}&body=${encodeURIComponent(t('instagramBeauty.services.emailBody'))}`}
            >
              {t('instagramBeauty.services.cta')}
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'instagram-beauty-target',
      ariaLabel: 'Target Audience',
      className: 'section-wrapper--target section-with-background',
      content: (
        <div className="target-audience">
          <div className="target-audience__content">
            <h2 className="target-audience__title">{t('instagramBeauty.target.heading')}</h2>
            <div className="target-audience__section">
              <h3 className="target-audience__subtitle">{t('instagramBeauty.target.who.title')}</h3>
              <p className="target-audience__description">{t('instagramBeauty.target.who.description')}</p>
            </div>
            <div className="target-audience__section">
              <h3 className="target-audience__subtitle">{t('instagramBeauty.target.needs.title')}</h3>
              <ul className="target-audience__list">
                {(t('instagramBeauty.target.needs.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index} className="target-audience__list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'instagram-beauty-process',
      ariaLabel: 'Work Process',
      className: 'section-wrapper--process',
      content: (
        <div className="work-process">
          <h2 className="work-process__title">{t('instagramBeauty.process.heading')}</h2>
          <div className="work-process__steps">
            {(t('instagramBeauty.process.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step, index: number) => (
              <div key={index} className="work-process__step">
                <div className="work-process__step-number">{index + 1}</div>
                <h3 className="work-process__step-title">{step.title}</h3>
                <p className="work-process__step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="work-process__cta-wrapper">
            <a 
              className="work-process__cta" 
              href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('instagramBeauty.process.emailSubject'))}&body=${encodeURIComponent(t('instagramBeauty.process.emailBody'))}`}
            >
              {t('instagramBeauty.process.cta')}
            </a>
          </div>
          <div className="meeting-info">
            <p className="meeting-info__text">
              {t('instagramBeauty.process.meetingInfo.online')}{' '}
              <span className="meeting-info__highlight">
                {t('instagramBeauty.process.meetingInfo.wroclaw')}
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'instagram-beauty-quiz',
      ariaLabel: 'Is This For You',
      className: 'section-wrapper--quiz section-with-background',
      content: (
        <div className="quiz">
          <h2 className="quiz__title">{t('instagramBeauty.quiz.heading')}</h2>
          <ul className="quiz__list">
            {(t('instagramBeauty.quiz.questions', { returnObjects: true }) as string[]).map((question: string, index: number) => (
              <li key={index} className="quiz__item">{question}</li>
            ))}
          </ul>
          <div className="quiz__cta-wrapper">
            <a 
              className="quiz__cta" 
              href={`mailto:klaudia.bodyk@icloud.com?subject=${encodeURIComponent(t('instagramBeauty.quiz.emailSubject'))}&body=${encodeURIComponent(t('instagramBeauty.quiz.emailBody'))}`}
            >
              {t('instagramBeauty.quiz.cta')}
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'instagram-beauty-contact',
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

export default InstagramBeauty

