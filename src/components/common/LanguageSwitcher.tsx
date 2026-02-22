import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/LanguageContext'
import './LanguageSwitcher.scss'

export const LanguageSwitcher = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ua' : 'en'
    changeLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={t('common.language')}
      type="button"
    >
      {language.toUpperCase()}
    </button>
  )
}

