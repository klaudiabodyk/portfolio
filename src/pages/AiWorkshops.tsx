import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import SectionWrapper from '../components/SectionWrapper'
import PageHeader from '../components/PageHeader'
import './styles/AiWorkshops.css'
import happyLeaf from '../assets/happyleaf.svg'
import pinkPeak from '../assets/pinkpeak.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import pureCodeLogo from '../assets/pureCodeLogo.png'

type SectionConfig = {
  readonly id: string
  readonly ariaLabel: string
  readonly className?: string
  readonly content: ReactNode
}

const AiWorkshops = () => {
  const { t } = useTranslation()

  const sections: SectionConfig[] = [
    {
      id: 'ai-workshops-hero',
      ariaLabel: 'AI Workshops Hero',
      className: 'section-wrapper--hero',
      content: (
        <div className="hero">
          <div className="hero__title">
            <span className="hero__title-primary">{t('aiWorkshops.hero.title')}</span>
          </div>
          <p className="hero__description">
            {t('aiWorkshops.hero.description')}
          </p>
          <span className="hero__subtitle">{t('aiWorkshops.hero.subtitle')}</span>
        </div>
      ),
    },
    {
      id: 'ai-workshops-lecturer',
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
      id: 'ai-workshops-upcoming-trainings',
      ariaLabel: 'Upcoming Trainings',
      className: 'section-wrapper--upcoming-trainings',
      content: (
        <div className="upcoming-trainings">
          <h2 className="upcoming-trainings__heading">
            {t('aiWorkshops.upcomingTrainings.heading')}
          </h2>
          <div className="upcoming-trainings__course">
            <div className="course__header">
              <h3 className="course__title">{t('aiWorkshops.upcomingTrainings.course.title')}</h3>
              <p className="course__subtitle">{t('aiWorkshops.upcomingTrainings.course.subtitle')}</p>
            </div>
            <p className="course__description">{t('aiWorkshops.upcomingTrainings.course.description')}</p>
            <div className="course__subject-highlight">
              <strong>{t('aiWorkshops.upcomingTrainings.course.subject')}</strong>
            </div>
            <div className="course__details">
              <div className="course__detail-item">
                <span className="detail__label">{t('aiWorkshops.upcomingTrainings.course.details.duration')}</span>
              </div>
              <div className="course__detail-item">
                <span className="detail__label">{t('aiWorkshops.upcomingTrainings.course.details.recruitmentDeadline')}</span>
              </div>
              <div className="course__detail-item">
                <span className="detail__label">{t('aiWorkshops.upcomingTrainings.course.details.startDate')}</span>
              </div>
              <div className="course__detail-item">
                <span className="detail__label">{t('aiWorkshops.upcomingTrainings.course.details.price')}</span>
              </div>
              <div className="course__detail-item">
                <span className="detail__label">{t('aiWorkshops.upcomingTrainings.course.details.format')}</span>
              </div>
            </div>
            <div className="course__features">
              <h4 className="features__title">{t('aiWorkshops.upcomingTrainings.course.featuresTitle')}</h4>
              <ul className="features__list">
                {(t('aiWorkshops.upcomingTrainings.course.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                  <li key={index} className="features__item">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="course__cta">
              <a
                href={t('aiWorkshops.upcomingTrainings.course.link')}
                target="_blank"
                rel="noreferrer"
                className="course__cta-link"
              >
                {t('aiWorkshops.upcomingTrainings.course.cta')}
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-workshops-contact',
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

export default AiWorkshops

