import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            <img 
              src="https://pro-part.es/wp-content/themes/propart-spain/icons/shared/logo.svg" 
              alt="PRO PART" 
              className="footer__logo-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = '<span style="font-size: 1.5rem; font-weight: 700; color: #fff;">PRO PART</span>'
                }
              }}
            />
          </Link>
          <nav className="footer__nav">
            <Link to="/" className="footer__nav-link">Home</Link>
            <Link to="/new-building" className="footer__nav-link">New building</Link>
            <Link to="/secondary" className="footer__nav-link">Secondary</Link>
            <Link to="/rent" className="footer__nav-link">Rent</Link>
            <Link to="/map" className="footer__nav-link">Map</Link>
            <Link to="/areas" className="footer__nav-link">Areas</Link>
            <Link to="/consulting" className="footer__nav-link">Consulting</Link>
            <Link to="/blog" className="footer__nav-link">Blog</Link>
          </nav>
        </div>
        <div className="footer__middle">
          <div className="footer__info">
            <p className="footer__text">
              ProPart is a leading real estate agency specializing in luxury properties in Costa del Sol, Spain. 
              We offer comprehensive services including property sales, rentals, property management, and legal consulting.
            </p>
          </div>
          <div className="footer__contact">
            <a href="tel:+34951234567" className="footer__contact-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.654 1.927a.65.65 0 0 0-.78-.245L1.927 2.755A2.5 2.5 0 0 0 0 5.18v.09a2.5 2.5 0 0 0 2.5 2.5h1.006a2.5 2.5 0 0 0 2.5-2.5v-.09a2.5 2.5 0 0 0-1.927-2.425l-1.047-.245a.65.65 0 0 0-.78.245z" fill="currentColor"/>
                <path d="M11.5 0A2.5 2.5 0 0 0 9 2.5v.09A2.5 2.5 0 0 0 11.5 5h1.006a2.5 2.5 0 0 0 2.5-2.5v-.09A2.5 2.5 0 0 0 11.5 0z" fill="currentColor"/>
              </svg>
              +34 951 234 567
            </a>
            <a href="mailto:info@propart.es" className="footer__contact-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4l8 5 8-5v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" fill="currentColor"/>
                <path d="M8 9L0 4h16L8 9z" fill="currentColor"/>
              </svg>
              info@propart.es
            </a>
          </div>
        </div>
        <div className="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2.163c2.762 0 3.088.012 4.18.06 1.05.047 1.617.218 1.995.365.52.202.892.444 1.282.834.39.39.632.762.834 1.282.147.378.318.945.365 1.995.048 1.092.06 1.418.06 4.18 0 2.762-.012 3.088-.06 4.18-.047 1.05-.218 1.617-.365 1.995a3.5 3.5 0 0 1-.834 1.282 3.5 3.5 0 0 1-1.282.834c-.378.147-.945.318-1.995.365-1.092.048-1.418.06-4.18.06-2.762 0-3.088-.012-4.18-.06-1.05-.047-1.617-.218-1.995-.365a3.5 3.5 0 0 1-1.282-.834 3.5 3.5 0 0 1-.834-1.282c-.147-.378-.318-.945-.365-1.995-.048-1.092-.06-1.418-.06-4.18 0-2.762.012-3.088.06-4.18.047-1.05.218-1.617.365-1.995.202-.52.444-.892.834-1.282.39-.39.762-.632 1.282-.834.378-.147.945-.318 1.995-.365 1.092-.048 1.418-.06 4.18-.06zm0-2.163C7.117 0 6.76.013 5.656.06 4.5.11 3.59.29 2.82.55 2.01.82 1.33 1.24.77 1.8.21 2.36.79 3.04 1.05 3.85 1.31 4.62 1.49 5.53 1.54 6.69 1.587 7.046 1.6 10 1.6c2.954 0 3.313-.013 4.344-.06 1.16-.05 2.07-.23 2.84-.49.81-.27 1.49-.69 2.05-1.25.56-.56.98-1.24 1.25-2.05.26-.77.44-1.68.49-2.84.047-1.031.06-1.39.06-4.344 0-2.954-.013-3.313-.06-4.344-.05-1.16-.23-2.07-.49-2.84-.27-.81-.69-1.49-1.25-2.05-.56-.56-1.24-.98-2.05-1.25-.77-.26-1.68-.44-2.84-.49C13.313.013 12.954 0 10 0z" fill="currentColor"/>
              <path d="M10 4.838a5.162 5.162 0 1 0 0 10.324 5.162 5.162 0 0 0 0-10.324zm0 8.51a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm5.338-9.87a1.207 1.207 0 1 0-2.414 0 1.207 1.207 0 0 0 2.414 0z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h8v-7H8v-3h2V7.5C10 5.57 11.57 4 13.5 4H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-4.3c0-1.1 0-2.5-1.5-2.5S12 10.1 12 11.4V17H9V8h3v1.2c.4-.8 1.5-1.5 3-1.5 3.2 0 3.8 2.1 3.8 4.8V17z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6 5.2c-.2-.8-.8-1.4-1.6-1.6C16.2 3.2 10 3.2 10 3.2s-6.2 0-8 .4c-.8.2-1.4.8-1.6 1.6C0 7 0 10 0 10s0 3 .4 4.8c.2.8.8 1.4 1.6 1.6 1.8.4 8 .4 8 .4s6.2 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM8 12.5V7.5l5.3 2.5L8 12.5z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} ProPart. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <span className="footer__legal-separator">|</span>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
