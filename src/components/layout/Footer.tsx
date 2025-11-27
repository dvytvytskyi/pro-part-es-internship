import { useTranslation } from 'react-i18next'
import './Footer.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Real Estate Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

