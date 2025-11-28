import { useTranslation } from 'react-i18next'
import './GetInTouch.scss'

export const GetInTouch = () => {
  const { t } = useTranslation()

  return (
    <section className="get-in-touch">
      <div className="get-in-touch__container">
        <h2 className="get-in-touch__title">
          {t('getInTouch.title', 'Get in touch')}
        </h2>
        <p className="get-in-touch__description">
          {t('getInTouch.description', 'Organise Google Meet with our agent now')}
        </p>
        <button className="get-in-touch__button">
          {t('getInTouch.button', 'Go to calendar')}
        </button>
      </div>
    </section>
  )
}


