import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './HeroSection.scss'

export const HeroSection = () => {
  const { t } = useTranslation()
  const [selectedArea, setSelectedArea] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [propertyType, setPropertyType] = useState('off-plan')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const areas = [
    'Estepona',
    'Malaga',
    'Marbella',
    'Fuengirola',
    'Manilva',
    'Casares',
    'Mijas',
    'Benahavis',
    'Alhaurín el Grande',
    'Benalmádena',
    'Torremolinos'
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            {t('hero.title', 'Top Properties In Costa Del Sol')}
          </h1>
          <p className="hero-section__description">
            {t('hero.description', 'Find your dream home With ProPart')}
          </p>

          <div className="hero-section__search">
            <div className="hero-section__select-wrapper" ref={dropdownRef}>
              <button
                className="hero-section__select"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
              >
                <span className="hero-section__select-text">
                  {selectedArea || t('hero.selectArea', 'Select your area')}
                </span>
                <svg
                  className={`hero-section__select-arrow ${isDropdownOpen ? 'hero-section__select-arrow--open' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="hero-section__dropdown">
                  <div className="hero-section__dropdown-list">
                    {areas.map((area) => (
                      <button
                        key={area}
                        className={`hero-section__dropdown-item ${
                          selectedArea === area ? 'hero-section__dropdown-item--selected' : ''
                        }`}
                        onClick={() => {
                          setSelectedArea(area)
                          setIsDropdownOpen(false)
                        }}
                        type="button"
                      >
                        <span className="hero-section__dropdown-item-text">{area}</span>
                        <svg
                          className="hero-section__dropdown-item-arrow"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 4.5L6 7.5L9 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hero-section__property-types">
              <button
                className={`hero-section__property-type ${
                  propertyType === 'off-plan' ? 'hero-section__property-type--active' : ''
                }`}
                onClick={() => setPropertyType('off-plan')}
              >
                {t('hero.offPlan', 'Off plan')}
              </button>
              <button
                className={`hero-section__property-type ${
                  propertyType === 'secondary' ? 'hero-section__property-type--active' : ''
                }`}
                onClick={() => setPropertyType('secondary')}
              >
                {t('hero.secondary', 'Secondary')}
              </button>
              <button
                className={`hero-section__property-type ${
                  propertyType === 'rent' ? 'hero-section__property-type--active' : ''
                }`}
                onClick={() => setPropertyType('rent')}
              >
                {t('hero.rent', 'Rent')}
              </button>
            </div>

            <div className="hero-section__actions">
              <button className="hero-section__search-button" aria-label={t('hero.search', 'Search')}>
                <svg
                  className="hero-section__search-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m21 21-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hero-section__search-text">{t('hero.search', 'Search')}</span>
              </button>
              <button className="hero-section__map-button" aria-label={t('hero.viewMap', 'View Map')}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


