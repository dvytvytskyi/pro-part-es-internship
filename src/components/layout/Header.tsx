import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import './Header.scss'

export const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img 
            src="https://pro-part.es/wp-content/themes/propart-spain/icons/shared/logo.svg" 
            alt="PRO PART" 
            className="header__logo-image header__logo-image--desktop"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = '<span style="font-size: 1.5rem; font-weight: 700; color: #333;">PRO PART</span>'
              }
            }}
          />
          <img 
            src="https://pro-part.es/wp-content/themes/propart-spain/icons/shared/logomob.svg" 
            alt="PRO PART" 
            className="header__logo-image header__logo-image--mobile"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </Link>
        
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/new-building" 
            className={`header__nav-link ${location.pathname === '/new-building' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.newBuilding')}
          </Link>
          <Link 
            to="/secondary" 
            className={`header__nav-link ${location.pathname === '/secondary' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.secondary')}
          </Link>
          <Link 
            to="/rent" 
            className={`header__nav-link ${location.pathname === '/rent' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.rent')}
          </Link>
          <Link 
            to="/map" 
            className={`header__nav-link ${location.pathname === '/map' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.map')}
          </Link>
          <Link 
            to="/areas" 
            className={`header__nav-link ${location.pathname === '/areas' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.areas')}
          </Link>
          <Link 
            to="/consulting" 
            className={`header__nav-link ${location.pathname === '/consulting' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.consulting')}
          </Link>
          <Link 
            to="/blog" 
            className={`header__nav-link ${location.pathname === '/blog' ? 'header__nav-link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navigation.blog')}
          </Link>
        </nav>

        <div className="header__actions">
          <button className="header__call-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>{t('header.callUs')}</span>
          </button>
          
          <button className="header__favorite-button" aria-label={t('header.favorites')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>

          <LanguageSwitcher />
        </div>

        <button 
          className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21" stroke="#333" strokeWidth="2" fill="none"/>
            {!isMenuOpen ? (
              <>
                <line x1="14" y1="16" x2="30" y2="16" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="22" x2="30" y2="22" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="28" x2="30" y2="28" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="16" y1="16" x2="28" y2="28" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                <line x1="28" y1="16" x2="16" y2="28" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  )
}

