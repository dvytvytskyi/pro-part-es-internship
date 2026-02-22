import { Header } from '@/components/layout/Header'
import { PropertyList } from '@/components/properties/PropertyList'
import { Property } from '@/types'

const mockRentProperties: Property[] = [
  {
    id: 'rent-1',
    title: 'Apartment for long term rent',
    price: 1200,
    area: 65,
    bedrooms: 2,
    bathrooms: 1,
    status: 'rent',
    location: {
      address: 'Fuengirola, Costa del Sol',
      lat: 0,
      lng: 0
    },
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471'
    ]
  },
  {
    id: 'rent-2',
    title: 'Modern studio near the beach',
    price: 800,
    area: 40,
    bedrooms: 1,
    bathrooms: 1,
    status: 'rent',
    location: {
      address: 'Torremolinos, Costa del Sol',
      lat: 0,
      lng: 0
    },
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353'
    ]
  }
]

export const RentPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Rent</h1>
          <p className="page__text">
            On this page we simply show a couple of mock objects for rent. It is enough to demonstrate
            navigation and layout in a portfolio project.
          </p>
          <PropertyList properties={mockRentProperties} />
        </div>
      </main>
    </>
  )
}

