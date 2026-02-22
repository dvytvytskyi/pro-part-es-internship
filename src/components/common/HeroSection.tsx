import { useTranslation } from 'react-i18next'
import { HeroSearchForm } from '@/components/common/HeroSearchForm'
import './HeroSection.scss'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            {t('hero.title', 'Top properties on the Costa del Sol')}
          </h1>
          <p className="hero-section__description">
            {t('hero.description', 'Find your seaside home in Spain with ProPart')}
          </p>

          <HeroSearchForm />
        </div>
      </div>
    </section>
  )
}


