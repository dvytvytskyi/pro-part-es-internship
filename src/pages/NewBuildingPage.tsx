import { Header } from '@/components/layout/Header'
import { PropertyList } from '@/components/properties/PropertyList'
import { Property } from '@/types'

const mockNewBuildings: Property[] = [
  {
    id: 'nb-1',
    title: 'Modern apartments in Marbella',
    price: 420000,
    area: 95,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Marbella, Costa del Sol'
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
      address: 'Estepona, Costa del Sol'
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
      address: 'Benalmádena, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-0ef3c08c0632'
    ]
  },
  {
    id: 'nb-4',
    title: 'Boutique residence in Mijas Costa',
    price: 410000,
    area: 90,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Mijas Costa, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
    ]
  },
  {
    id: 'nb-5',
    title: 'Golf apartments in Benahavis',
    price: 395000,
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Benahavis, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6'
    ]
  },
  {
    id: 'nb-6',
    title: 'Luxury villas in Sotogrande',
    price: 1250000,
    area: 260,
    bedrooms: 4,
    bathrooms: 4,
    status: 'new',
    location: {
      address: 'Sotogrande, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c'
    ]
  },
  {
    id: 'nb-7',
    title: 'Beachfront development in Estepona',
    price: 690000,
    area: 110,
    bedrooms: 3,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Estepona, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1512914890250-353c97c9e7e2'
    ]
  },
  {
    id: 'nb-8',
    title: 'Modern lofts in Malaga',
    price: 350000,
    area: 78,
    bedrooms: 2,
    bathrooms: 1,
    status: 'new',
    location: {
      address: 'Malaga, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353'
    ]
  },
  {
    id: 'nb-9',
    title: 'Hillside residences in Ojen',
    price: 530000,
    area: 130,
    bedrooms: 3,
    bathrooms: 3,
    status: 'new',
    location: {
      address: 'Ojen, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1520256862855-398228c41684'
    ]
  },
  {
    id: 'nb-10',
    title: 'Family apartments in Fuengirola',
    price: 330000,
    area: 82,
    bedrooms: 3,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Fuengirola, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471'
    ]
  },
  {
    id: 'nb-11',
    title: 'Compact studios in Torremolinos',
    price: 220000,
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    status: 'new',
    location: {
      address: 'Torremolinos, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'
    ]
  },
  {
    id: 'nb-12',
    title: 'Modern complex in Casares Costa',
    price: 360000,
    area: 92,
    bedrooms: 2,
    bathrooms: 2,
    status: 'new',
    location: {
      address: 'Casares Costa, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a5345c9a4'
    ]
  }
]

export const NewBuildingPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">New buildings</h1>
          <p className="page__text">
            On this page we show examples of off-plan and brand new residential projects on the Costa del Sol.
            The objects are fake, but they help to understand how a real catalogue can look.
          </p>
          <p className="page__text">
            Usually such section contains modern complexes with underground parking, swimming pool and common areas.
            In a commercial project you would receive this data from a backend or external API.
          </p>
          <PropertyList properties={mockNewBuildings} />
        </div>
      </main>
    </>
  )
}

