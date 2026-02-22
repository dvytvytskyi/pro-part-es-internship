import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Property } from '@/types'
import { useFavorites } from '@/contexts/FavoritesContext'
import './PropertyCard.scss'

interface PropertyCardProps {
  property: Property
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { t } = useTranslation()
  const { toggleFavorite, isFavorite } = useFavorites()
  const [imageError, setImageError] = useState(false)

  const firstImage =
    property.images && property.images.length > 0
      ? `${property.images[0]}${property.images[0].includes('?') ? '&' : '?'}auto=format&fit=crop&w=600&q=70`
      : ''

  const favoriteActive = isFavorite(property.id)

  return (
    <Link to={`/properties/${property.id}`} className="property-card">
      <div className="property-card__image-container">
        {!imageError && firstImage ? (
          <img
            src={firstImage}
            alt={property.title}
            className="property-card__image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="property-card__image-placeholder">No Image</div>
        )}
        <button
          type="button"
          className={`property-card__favorite ${favoriteActive ? 'property-card__favorite--active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(property)
          }}
          aria-label="Add to favorites"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill={favoriteActive ? 'currentColor' : 'none'}
            />
          </svg>
        </button>
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
        <p className="property-card__price">€ {property.price.toLocaleString()}</p>
      </div>
    </Link>
  )
}

