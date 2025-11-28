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
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Benahavis',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Mijas',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Ojen',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
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

