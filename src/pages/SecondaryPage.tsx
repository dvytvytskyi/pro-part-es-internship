import { Header } from '@/components/layout/Header'
import { PropertyList } from '@/components/properties/PropertyList'
import { Property } from '@/types'

const mockSecondaryProperties: Property[] = [
  {
    id: 'sec-1',
    title: 'Cozy apartment near the sea',
    price: 260000,
    area: 72,
    bedrooms: 2,
    bathrooms: 1,
    status: 'resale',
    location: {
      address: 'Benalmádena, Costa del Sol'
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
      address: 'Mijas, Costa del Sol'
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
      address: 'Estepona, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80'
    ]
  },
  {
    id: 'sec-4',
    title: 'Apartment in old town Malaga',
    price: 295000,
    area: 68,
    bedrooms: 2,
    bathrooms: 1,
    status: 'resale',
    location: {
      address: 'Malaga, historic center'
    },
    images: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118'
    ]
  },
  {
    id: 'sec-5',
    title: 'Spacious flat in Fuengirola center',
    price: 285000,
    area: 80,
    bedrooms: 3,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Fuengirola, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353'
    ]
  },
  {
    id: 'sec-6',
    title: 'Duplex near golf in Benahavis',
    price: 370000,
    area: 115,
    bedrooms: 3,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Benahavis, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
    ]
  },
  {
    id: 'sec-7',
    title: 'Traditional townhouse in Mijas Pueblo',
    price: 305000,
    area: 105,
    bedrooms: 3,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Mijas Pueblo, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
    ]
  },
  {
    id: 'sec-8',
    title: 'Second line beach flat in Estepona',
    price: 335000,
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Estepona center, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d'
    ]
  },
  {
    id: 'sec-9',
    title: 'Apartment with mountain view in Ojen',
    price: 295000,
    area: 90,
    bedrooms: 2,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Ojen, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1590490359854-dfba19688d70'
    ]
  },
  {
    id: 'sec-10',
    title: 'Renovated studio in Torremolinos',
    price: 165000,
    area: 38,
    bedrooms: 1,
    bathrooms: 1,
    status: 'resale',
    location: {
      address: 'Torremolinos, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'
    ]
  },
  {
    id: 'sec-11',
    title: 'House with private pool in Marbella',
    price: 650000,
    area: 200,
    bedrooms: 4,
    bathrooms: 3,
    status: 'resale',
    location: {
      address: 'Marbella, residential area'
    },
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
    ]
  },
  {
    id: 'sec-12',
    title: 'Sea view apartment in Casares',
    price: 310000,
    area: 88,
    bedrooms: 2,
    bathrooms: 2,
    status: 'resale',
    location: {
      address: 'Casares Costa, Costa del Sol'
    },
    images: [
      'https://images.unsplash.com/photo-1469796466635-455ede028aca'
    ]
  }
]

export const SecondaryPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Secondary real estate</h1>
          <p className="page__text">
            Secondary market on the Costa del Sol includes already finished apartments, townhouses and houses
            where people have lived before. Often such objects are located in established areas with shops,
            schools and public transport.
          </p>
          <p className="page__text">
            Below you can see a few simple examples of how a list of resale properties might look in a real
            project. You can later replace them with data from your own backend.
          </p>
          <PropertyList properties={mockSecondaryProperties} />
        </div>
      </main>
    </>
  )
}

