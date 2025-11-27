import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Property } from '@/types'
import './PropertyCard.scss'

interface PropertyCardProps {
  property: Property
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { t } = useTranslation()

  return (
    <Link to={`/properties/${property.id}`} className="property-card">
      <div className="property-card__image-container">
        {property.images && property.images.length > 0 ? (
          <img
            src={property.images[0]}
            alt={property.title}
            className="property-card__image"
          />
        ) : (
          <div className="property-card__image-placeholder">No Image</div>
        )}
        <span className={`property-card__status property-card__status--${property.status}`}>
          {property.status}
        </span>
      </div>
      <div className="property-card__content">
        <h3 className="property-card__title">{property.title}</h3>
        <p className="property-card__location">{property.location.address}</p>
        <div className="property-card__details">
          <span>{property.bedrooms} {t('property.bedrooms')}</span>
          <span>{property.bathrooms} {t('property.bathrooms')}</span>
          <span>{property.area} m²</span>
        </div>
        <p className="property-card__price">${property.price.toLocaleString()}</p>
      </div>
    </Link>
  )
}

