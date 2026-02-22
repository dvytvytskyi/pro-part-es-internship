import { useParams } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Property } from '@/types'

// Простий мокований список, щоб сторінка працювала без бекенду
// У реальному проєкті ці дані прийшли б з API
const allMockProperties: Property[] = [
  {
    id: 'nb-1',
    title: 'Modern apartments in Marbella',
    price: 420000,
    area: 95,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Marbella, Costa del Sol',
      coordinates: { lat: 36.5101, lng: -4.8824 }
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'
    ]
  },
  {
    id: 'nb-2',
    title: 'New residential complex in Estepona',
    price: 380000,
    area: 88,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Estepona, Costa del Sol',
      coordinates: { lat: 36.4276, lng: -5.1459 }
    },
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
    ]
  },
  {
    id: 'nb-3',
    title: 'Sea view penthouse in Benalmádena',
    price: 590000,
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Benalmádena, Costa del Sol',
      coordinates: { lat: 36.595, lng: -4.572 }
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-0ef3c08c0632'
    ]
  },
  {
    id: 'sec-1',
    title: 'Cozy apartment near the sea',
    price: 260000,
    area: 72,
    bedrooms: 2,
    bathrooms: 1,
    status: 'resale',
    location: {
      address: 'Benalmádena, Costa del Sol',
      coordinates: { lat: 36.595, lng: -4.572 }
    },
    images: [
      'https://images.unsplash.com/photo-1512914890250-353c97c9e7e2'
    ]
  },
  {
    id: 'sec-2',
    title: 'Family house with garden',
    price: 450000,
    area: 140,
    bedrooms: 3,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Mijas, Costa del Sol',
      coordinates: { lat: 36.5958, lng: -4.6373 }
    },
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607'
    ]
  },
  {
    id: 'sec-3',
    title: 'Townhouse in a quiet area',
    price: 320000,
    area: 110,
    bedrooms: 3,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Estepona, Costa del Sol',
      coordinates: { lat: 36.4276, lng: -5.1459 }
    },
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80'
    ]
  }
]

export const PropertyDetailsPage = () => {
  const { propertyId } = useParams()

  const property = allMockProperties.find((item) => item.id === propertyId)

  if (!property) {
    return (
      <>
        <Header />
        <main className="page">
          <div className="page__container">
            <h1 className="page__title">Property not found</h1>
            <p className="page__text">
              We could not find this property in the demo data. In a real project this page would show
              an error from the server.
            </p>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">{property.title}</h1>

          <div className="page__card-list">
            <div className="page-card">
              {property.images && property.images.length > 0 && (
                <img
                  src={`${property.images[0]}?auto=format&fit=crop&w=700&q=70`}
                  alt={property.title}
                  style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
                />
              )}
              <p className="page-card__text">
                <strong>Address:</strong> {property.location.address}
              </p>
              <p className="page-card__text">
                <strong>Price:</strong> € {property.price.toLocaleString()}
              </p>
              <p className="page-card__text">
                <strong>Details:</strong> {property.bedrooms} bedrooms, {property.bathrooms} bathrooms,{' '}
                {property.area} m²
              </p>
              <p className="page-card__text">
                <strong>Status:</strong> {property.status}
              </p>
              <p className="page-card__text">
                This is a demo property. Here you can briefly describe the complex, distance to the sea and
                other important things that clients usually ask about.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

