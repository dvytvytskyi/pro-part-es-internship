import './Areas.scss'

interface Area {
  id: number
  title: string
  image: string
}

export const Areas = () => {
  const areas: Area[] = [
    {
      id: 1,
      title: 'Marbella',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=70'
    },
    {
      id: 2,
      title: 'Benahavis',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=70'
    },
    {
      id: 3,
      title: 'Mijas',
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=700&q=70'
    },
    {
      id: 4,
      title: 'Ojen',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=70'
    }
  ]

  return (
    <section className="areas-wrapper">
      <div className="areas-wrapper__container">
        <div className="areas-wrapper__header">
          <div className="areas-wrapper__left">
            <h2 className="areas-wrapper__title">Explore the areas of the Costa del Sol</h2>
            <p className="areas-wrapper__description">
              Uncover the charm of Costa del Sol, a region known for its golden beaches, picturesque towns, and vibrant lifestyle. From luxury resorts to traditional Andalusian villages, Costa del Sol offers diverse real estate opportunities. Whether you're looking for a coastal getaway or an investment property, explore this sun-soaked region and discover the perfect place to call home.
            </p>
          </div>
          <div className="areas-wrapper__right">
            <h2 className="areas-wrapper__right-title">Areas</h2>
          </div>
        </div>

        <div className="areas-wrapper__cards">
          {areas.map((area, index) => (
            <div 
              key={area.id} 
              className={`areas-card ${index === 3 ? 'areas-card--center' : ''}`}
            >
              <img 
                src={area.image} 
                alt={area.title} 
                className="areas-image"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div className="areas-card__overlay"></div>
              <h3 className="areas-title">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

