import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import './Header.scss'

export const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img 
            src="https://pro-part.es/wp-content/themes/propart-spain/icons/shared/logo.svg" 
            alt="PRO PART" 
            className="header__logo-image"
          />
        </Link>
        
        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.home')}
          </Link>
          <Link 
            to="/new-building" 
            className={`header__nav-link ${location.pathname === '/new-building' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.newBuilding')}
          </Link>
          <Link 
            to="/secondary" 
            className={`header__nav-link ${location.pathname === '/secondary' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.secondary')}
          </Link>
          <Link 
            to="/rent" 
            className={`header__nav-link ${location.pathname === '/rent' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.rent')}
          </Link>
          <Link 
            to="/map" 
            className={`header__nav-link ${location.pathname === '/map' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.map')}
          </Link>
          <Link 
            to="/areas" 
            className={`header__nav-link ${location.pathname === '/areas' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.areas')}
          </Link>
          <Link 
            to="/consulting" 
            className={`header__nav-link ${location.pathname === '/consulting' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.consulting')}
          </Link>
          <Link 
            to="/blog" 
            className={`header__nav-link ${location.pathname === '/blog' ? 'header__nav-link--active' : ''}`}
          >
            {t('navigation.blog')}
          </Link>
        </nav>

        <div className="header__actions">
          <button className="header__call-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.654 1.927a.667.667 0 0 0-.927.18L1.18 4.447a.667.667 0 0 0 .18.927c.86.646 1.82 1.393 2.86 2.206.34.26.72.54 1.14.84.42.3.86.6 1.32.9.46.3.92.58 1.38.84.46.26.9.5 1.32.7.42.2.82.36 1.18.48.36.12.66.2.9.24.24.04.42.06.54.06.12 0 .2-.02.24-.06.04-.04.06-.12.06-.24v-2.34a.667.667 0 0 1 .2-.48l2-2a.667.667 0 0 1 .94 0l4.66 4.66a.667.667 0 0 1 0 .94l-2 2a.667.667 0 0 1-.48.2h-2.34a.667.667 0 0 0-.24.06c-.04.04-.06.12-.06.24 0 .12.02.2.06.24.04.04.12.06.24.06.12 0 .3-.02.54-.06.24-.04.54-.12.9-.24.36-.12.76-.28 1.18-.48.42-.2.86-.44 1.32-.7.46-.26.92-.54 1.38-.84.46-.3.9-.6 1.32-.9.42-.3.8-.58 1.14-.84 1.04-.813 2-1.56 2.86-2.206a.667.667 0 0 0 .18-.927L13.273 1.107a.667.667 0 0 0-.927-.18c-.86.646-1.82 1.393-2.86 2.206-.34.26-.72.54-1.14.84-.42.3-.86.6-1.32.9-.46.3-.92.58-1.38.84-.46.26-.9.5-1.32.7-.42.2-.82.36-1.18.48-.36.12-.66.2-.9.24-.24.04-.42.06-.54.06-.12 0-.2-.02-.24-.06-.04-.04-.06-.12-.06-.24 0-.12.02-.2.06-.24.04-.04.12-.06.24-.06.12 0 .3.02.54.06.24.04.54.12.9.24.36.12.76.28 1.18.48.42.2.86.44 1.32.7.46.26.92.54 1.38.84.46.3.9.6 1.32.9.42.3.8.58 1.14.84 1.04.813 2 1.56 2.86 2.206z" fill="white"/>
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
      </div>
    </header>
  )
}

