import { Link } from 'react-router-dom'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Перший div - зліва contactsContainer, справа linksContainer */}
        <div className="footer__main">
          <div className="footer__contacts-container">
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
                    parent.innerHTML = '<span style="font-size: 1.5rem; font-weight: 700; color: #333;">PRO PART</span>'
                  }
                }}
              />
            </Link>
            <p className="footer__address">
              PL de la iglesia, 3, office 1-D, 29670, San Pedro de Alcántara, Malaga
            </p>
            <a href="tel:+34695113333" className="footer__phone">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 10.5V13.5C14.5 13.7652 14.3946 14.0196 14.2071 14.2071C14.0196 14.3946 13.7652 14.5 13.5 14.5C12.4775 14.5 11.4845 14.295 10.5625 13.9025C9.6405 13.51 8.8025 12.935 8.0625 12.2025L3.7975 7.9375C3.065 7.1975 2.49 6.3595 2.0975 5.4375C1.705 4.5155 1.5 3.5225 1.5 2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H5.5C5.76522 1.5 6.01957 1.60536 6.20711 1.79289C6.39464 1.98043 6.5 2.23478 6.5 2.5C6.5 2.76522 6.39464 3.01957 6.20711 3.20711L5.20711 4.20711C5.01957 4.39464 4.91429 4.649 4.91429 4.91429C4.91429 5.17951 5.01957 5.43386 5.20711 5.62139L7.37861 7.79289C7.56614 7.98043 7.82049 8.08571 8.08571 8.08571C8.35093 8.08571 8.60528 7.98043 8.79282 7.79289L9.79282 6.79289C9.98036 6.60536 10.2348 6.5 10.5 6.5C10.7652 6.5 11.0196 6.60536 11.2071 6.79289L12.2071 7.79289C12.3946 7.98043 12.5 8.23478 12.5 8.5C12.5 8.76522 12.3946 9.01957 12.2071 9.20711L11.2071 10.2071C11.0196 10.3946 10.7652 10.5 10.5 10.5H14.5Z" fill="currentColor"/>
              </svg>
              +34 695 113 333
            </a>
            <div className="footer__social">
              <a href="https://wa.me/34695113333" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://t.me/propart" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.16l-1.87 8.81c-.14.625-.5.78-1.01.485l-2.79-2.06-1.35 1.29c-.15.15-.27.27-.55.27l.2-2.82 5.16-4.66c.23-.2-.05-.31-.35-.12l-6.38 4.02-2.75-.86c-.6-.19-.61-.6.12-.89l10.75-4.15c.5-.18.93.13.76.65z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-container">
            <div className="footer__area-section">
              <h3 className="footer__section-title">Area</h3>
              <ul className="footer__area-list">
                <li><Link to="/areas/marbella" className="footer__link">Marbella</Link></li>
                <li><Link to="/areas/estepona" className="footer__link">Estepona</Link></li>
                <li><Link to="/areas/benahavis" className="footer__link">Benahavis</Link></li>
                <li><Link to="/areas/sotogrande" className="footer__link">Sotogrande</Link></li>
                <li><Link to="/areas/mijas" className="footer__link">Mijas</Link></li>
                <li><Link to="/areas/ojen" className="footer__link">Ojen</Link></li>
              </ul>
            </div>
            <div className="footer__services-section">
              <h3 className="footer__section-title">Services</h3>
              <div className="footer__services-columns">
                <ul className="footer__services-list">
                  <li><Link to="/services/visa" className="footer__link">Visa</Link></li>
                  <li><Link to="/services/legal-services" className="footer__link">Legal services</Link></li>
                  <li><Link to="/services/insurance" className="footer__link">Insurance</Link></li>
                  <li><Link to="/services/mortgage" className="footer__link">Mortgage</Link></li>
                  <li><Link to="/services/concierge" className="footer__link">Concierge</Link></li>
                  <li><Link to="/services/construction" className="footer__link">Construction</Link></li>
                </ul>
                <ul className="footer__services-list">
                  <li><Link to="/services/repairs-furnishing" className="footer__link">Repairs & Furnishing</Link></li>
                  <li><Link to="/services/select-construction" className="footer__link">Select construction</Link></li>
                  <li><Link to="/services/digital-nomad-visa" className="footer__link">Digital Nomad Visa</Link></li>
                  <li><Link to="/services/tourist-license" className="footer__link">Tourist license</Link></li>
                  <li><Link to="/services/student-visa" className="footer__link">Student visa</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Другий div - footerBottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 All rights reserved</p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">Privacy policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
