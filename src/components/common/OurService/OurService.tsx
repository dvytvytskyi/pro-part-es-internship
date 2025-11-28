import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './OurService.scss'

interface Service {
  id: number
  number: string
  title: string
  description: string
  image: string
}

export const OurService = () => {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleTouchStart = (index: number) => {
    // Очищаємо попередній таймер, якщо він є
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current)
      touchTimeoutRef.current = null
    }
    setHoveredIndex(index)
  }

  const handleTouchEnd = () => {
    // Затримка перед приховуванням для кращої UX на мобільних
    touchTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null)
      touchTimeoutRef.current = null
    }, 500)
  }

  const services: Service[] = [
    {
      id: 1,
      number: '01',
      title: t('ourService.services.realEstate.title', 'Real estate'),
      description: t('ourService.services.realEstate.description', 'Buy, sell and manage'),
      image: 'https://media.istockphoto.com/id/178714734/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%96-%D0%B2%D0%B0%D0%B3%D0%B8-%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%81%D1%83%D0%B4%D0%B4%D1%8F.jpg?s=612x612&w=0&k=20&c=plPS4FjfVGgup8tUgkbMAK2WZhilfqFdVlaJpd--Xtg='
    },
    {
      id: 2,
      number: '02',
      title: t('ourService.services.localExpertise.title', 'Local expertise'),
      description: t('ourService.services.localExpertise.description', 'Consulting'),
      image: 'https://debet.com.ua/sites/default/files/styles/compressor/1024x682/inline-images/pochatok.jpg?itok=mNoWeBhx'
    },
    {
      id: 3,
      number: '03',
      title: t('ourService.services.insurance.title', 'Insurance'),
      description: t('ourService.services.insurance.description', 'Peace of mind protection'),
      image: 'https://www.voraevich.com/wp-content/uploads/Voraevich-019.jpg'
    }
  ]

  return (
    <section className="our-service">
      <div className="our-service__container">
        <div className="our-service__content">
          <div className="our-service__cards">
            {services.map((service, index) => (
              <div key={service.id}>
                <div
                  className={`our-service__card ${hoveredIndex === index ? 'our-service__card--hovered' : ''}`}
                  onMouseEnter={() => {
                    if (touchTimeoutRef.current) {
                      clearTimeout(touchTimeoutRef.current)
                      touchTimeoutRef.current = null
                    }
                    setHoveredIndex(index)
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                    handleTouchStart(index)
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation()
                    handleTouchEnd()
                  }}
                  onTouchCancel={() => {
                    if (touchTimeoutRef.current) {
                      clearTimeout(touchTimeoutRef.current)
                      touchTimeoutRef.current = null
                    }
                    setHoveredIndex(null)
                  }}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  tabIndex={0}
                  aria-label={`${service.title}: ${service.description}`}
                  style={{
                    backgroundImage: hoveredIndex === index ? `url(${service.image})` : 'none'
                  }}
                >
                  <div className="our-service__card-overlay"></div>
                  <span className="our-service__card-number">{service.number}</span>
                  <h3 className="our-service__card-title">{service.title}</h3>
                  <p className="our-service__card-description">{service.description}</p>
                </div>
                {hoveredIndex === index && (
                  <div className="our-service__card-image-mobile">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

