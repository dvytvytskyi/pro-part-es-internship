import { Header } from '@/components/layout/Header'
import { useParams, Link } from 'react-router-dom'

const areaDescriptions: Record<string, string> = {
  marbella:
    'Marbella is one of the most famous resorts on the Costa del Sol with beautiful beaches and modern infrastructure.',
  estepona:
    'Estepona is a cozy town with a nice promenade and many new residential complexes.',
  benahavis:
    'Benahavis is a green and quiet area in the mountains, popular for villas and golf.',
  sotogrande:
    'Sotogrande is known for its marina, polo fields and premium villas.',
  mijas:
    'Mijas combines a traditional white village in the mountains and a comfortable coastline.',
  ojen:
    'Ojen is a small Andalusian town close to Marbella and surrounded by nature.'
}

export const AreaPage = () => {
  const { areaId } = useParams()
  const key = (areaId || '').toLowerCase()
  const text = areaDescriptions[key] || 'This is a simple example page for a selected area.'

  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Area: {areaId}</h1>
          <p className="page__text">{text}</p>
          <Link to="/areas" className="page__link">
            ← Back to all areas
          </Link>
        </div>
      </main>
    </>
  )
}

