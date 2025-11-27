import { Property } from '@/types'
import { PropertyCard } from './PropertyCard'
import './PropertyList.scss'

interface PropertyListProps {
  properties: Property[]
  loading?: boolean
}

export const PropertyList = ({ properties, loading }: PropertyListProps) => {
  if (loading) {
    return <div className="property-list__loading">Loading...</div>
  }

  if (properties.length === 0) {
    return <div className="property-list__empty">No properties found</div>
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

