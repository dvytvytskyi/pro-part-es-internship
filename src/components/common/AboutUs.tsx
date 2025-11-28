import { useTranslation } from 'react-i18next'
import { GetInTouch } from './GetInTouch'
import './AboutUs.scss'

export const AboutUs = () => {
  const { t } = useTranslation()

  const stats = [
    {
      value: '5',
      label: t('about.stats.yearsOnMarket', 'years on the market'),
      highlight: false
    },
    {
      value: '50+',
      label: t('about.stats.qualifiedSpecialists', 'qualified specialists'),
      highlight: true
    },
    {
      value: '100K',
      label: t('about.stats.differentProjects', 'different projects'),
      highlight: false
    },
    {
      value: '50+',
      label: t('about.stats.reliableDevelopers', 'reliable developers'),
      highlight: false
    }
  ]

  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__left">
            <h2 className="about-us__title">
              {t('about.title', 'About Us')}
            </h2>
            <p className="about-us__description">
              {t('about.description', 'Welcome to ProPart, your trusted real estate partner on Spain\'s Costa del Sol. With many years of experience in the local property market, we specialize in helping clients find their dream homes and investment opportunities in one of Spain\'s most desirable regions.')}
            </p>
            <p className="about-us__description">
              {t('about.description2', 'From beachfront villas to modern apartments and exclusive investment properties, ProPart offers a wide selection tailored to your needs. Our dedicated team of experts provides personalized service throughout the entire buying or selling process.')}
            </p>

            <div className="about-us__stats">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`about-us__stat ${stat.highlight ? 'about-us__stat--highlight' : ''}`}
                >
                  <span className="about-us__stat-value">{stat.value}</span>
                  <span className="about-us__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-us__get-in-touch">
              <GetInTouch />
            </div>
          </div>

          <div className="about-us__right">
            <div className="about-us__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="About Us"
                className="about-us__image"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.backgroundColor = '#f5f5f5'
                  target.style.display = 'flex'
                  target.style.alignItems = 'center'
                  target.style.justifyContent = 'center'
                  target.style.minHeight = '400px'
                  target.alt = 'Image placeholder'
                }}
              />
            </div>
            <div className="about-us__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="About Us"
                className="about-us__image"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.backgroundColor = '#f5f5f5'
                  target.style.display = 'flex'
                  target.style.alignItems = 'center'
                  target.style.justifyContent = 'center'
                  target.style.minHeight = '400px'
                  target.alt = 'Image placeholder'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

