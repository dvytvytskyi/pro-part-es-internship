import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, useRef } from 'react'
import './BottomNav.scss'

export const BottomNav = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkVisibility = () => {
      // На мобільних (iPhone 15 Pro та інші до 431px) навігація завжди видима
      const isMobile = window.innerWidth <= 431
      if (isMobile) {
        setIsVisible(true)
        // Додатково встановлюємо клас для перевірки
        if (navRef.current) {
          navRef.current.classList.add('bottom-nav--visible')
        }
        return
      }

      const aboutUsSection = document.querySelector('.about-us')
      if (!aboutUsSection) {
        setIsVisible(true)
        return
      }

      const rect = aboutUsSection.getBoundingClientRect()
      // Show nav when AboutUs section is visible or has been scrolled past
      if (rect.top <= window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Перевірка при завантаженні
    checkVisibility()

    // Для мобільних не додаємо scroll listener, але додаємо resize
    const isMobile = window.innerWidth <= 431
    if (isMobile) {
      window.addEventListener('resize', checkVisibility, { passive: true })
      return () => {
        window.removeEventListener('resize', checkVisibility)
      }
    }

    const handleScroll = () => {
      checkVisibility()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
    // Trigger Header burger menu via event
    const headerBurger = document.querySelector('.header__burger') as HTMLElement
    if (headerBurger) {
      headerBurger.click()
    }
  }

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PRO PART',
        text: 'Check out PRO PART',
        url: window.location.href,
      }).catch(() => {
        // User cancelled or error
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      <nav ref={navRef} className={`bottom-nav ${isVisible ? 'bottom-nav--visible' : ''}`}>
        <div className="bottom-nav__container">
          {/* Desktop/Tablet version - text links */}
          <div className="bottom-nav__desktop">
            <Link 
              to="/" 
              className={`bottom-nav__link ${location.pathname === '/' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.home', 'Home')}
            </Link>
            <Link 
              to="/new-building" 
              className={`bottom-nav__link ${location.pathname === '/new-building' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.newBuilding', 'New building')}
            </Link>
            <Link 
              to="/secondary" 
              className={`bottom-nav__link ${location.pathname === '/secondary' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.secondary', 'Secondary')}
            </Link>
            <Link 
              to="/rent" 
              className={`bottom-nav__link ${location.pathname === '/rent' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.rent', 'Rent')}
            </Link>
            <Link 
              to="/map" 
              className={`bottom-nav__link ${location.pathname === '/map' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.map', 'Map')}
            </Link>
            <Link 
              to="/areas" 
              className={`bottom-nav__link ${location.pathname === '/areas' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.areas', 'Areas')}
            </Link>
            <Link 
              to="/consulting" 
              className={`bottom-nav__link ${location.pathname === '/consulting' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.consulting', 'Consulting')}
            </Link>
            <Link 
              to="/blog" 
              className={`bottom-nav__link ${location.pathname === '/blog' ? 'bottom-nav__link--active' : ''}`}
            >
              {t('navigation.blog', 'Blog')}
            </Link>
            <button className="bottom-nav__call-button" aria-label={t('header.callUs', 'Call us')}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile version - icon buttons (iPhone 15 Pro) */}
          <div className="bottom-nav__mobile">
            <button 
              className="bottom-nav__icon-button"
              onClick={handleBurgerClick}
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="6" x2="21" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <Link 
              to="/map" 
              className={`bottom-nav__icon-button ${location.pathname === '/map' ? 'bottom-nav__icon-button--active' : ''}`}
              aria-label={t('navigation.map', 'Map')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M8 2v16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6v16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            <button 
              className="bottom-nav__icon-button bottom-nav__icon-button--active bottom-nav__call-icon-button"
              aria-label={t('header.callUs', 'Call us')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
            
            <button 
              className="bottom-nav__icon-button"
              onClick={handleShareClick}
              aria-label="Share"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="5" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="6" cy="12" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="18" cy="19" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

