import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './HeroSearchForm.scss'

export const HeroSearchForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedArea, setSelectedArea] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [propertyType, setPropertyType] = useState<'off-plan' | 'secondary' | 'rent'>('off-plan')
  const [error, setError] = useState('')
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

  const handleSearch = () => {
    if (!selectedArea) {
      setError('Please select an area first')
      return
    }

    setError('')

    if (propertyType === 'off-plan') {
      navigate('/new-building')
    } else if (propertyType === 'secondary') {
      navigate('/secondary')
    } else {
      navigate('/rent')
    }
  }

  const handleMapClick = () => {
    navigate('/map')
  }

  return (
    <div className="hero-search-form">
      <div className="hero-search-form__select-wrapper" ref={dropdownRef}>
        <button
          className={`hero-search-form__select ${error ? 'hero-search-form__select--error' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
        >
          <span className="hero-search-form__select-text">
            {selectedArea || t('hero.selectArea', 'Select your area')}
          </span>
          <svg
            className={`hero-search-form__select-arrow ${isDropdownOpen ? 'hero-search-form__select-arrow--open' : ''}`}
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
          <div className="hero-search-form__dropdown">
            <div className="hero-search-form__dropdown-list">
              {areas.map((area) => (
                <button
                  key={area}
                  className={`hero-search-form__dropdown-item ${
                    selectedArea === area ? 'hero-search-form__dropdown-item--selected' : ''
                  }`}
                  onClick={() => {
                    setSelectedArea(area)
                    setIsDropdownOpen(false)
                    setError('')
                  }}
                  type="button"
                >
                  <span className="hero-search-form__dropdown-item-text">{area}</span>
                  <svg
                    className="hero-search-form__dropdown-item-arrow"
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
        {error && <p className="hero-search-form__error">{error}</p>}
      </div>

      <div className="hero-search-form__property-types">
        <button
          className={`hero-search-form__property-type ${
            propertyType === 'off-plan' ? 'hero-search-form__property-type--active' : ''
          }`}
          onClick={() => setPropertyType('off-plan')}
          type="button"
        >
          {t('hero.offPlan', 'Off plan')}
        </button>
        <button
          className={`hero-search-form__property-type ${
            propertyType === 'secondary' ? 'hero-search-form__property-type--active' : ''
          }`}
          onClick={() => setPropertyType('secondary')}
          type="button"
        >
          {t('hero.secondary', 'Secondary')}
        </button>
        <button
          className={`hero-search-form__property-type ${
            propertyType === 'rent' ? 'hero-search-form__property-type--active' : ''
          }`}
          onClick={() => setPropertyType('rent')}
          type="button"
        >
          {t('hero.rent', 'Rent')}
        </button>
      </div>

      <div className="hero-search-form__actions">
        <button
          className="hero-search-form__search-button"
          aria-label={t('hero.search', 'Search')}
          type="button"
          onClick={handleSearch}
        >
          <svg
            className="hero-search-form__search-icon"
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
          <span className="hero-search-form__search-text">{t('hero.search', 'Search')}</span>
        </button>
        <button
          className="hero-search-form__map-button"
          aria-label={t('hero.viewMap', 'View Map')}
          type="button"
          onClick={handleMapClick}
        >
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
  )
}
