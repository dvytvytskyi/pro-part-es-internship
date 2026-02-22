import { Header } from '@/components/layout/Header'
import { useParams, Link } from 'react-router-dom'

const serviceTitles: Record<string, string> = {
  visa: 'Visa support',
  'legal-services': 'Legal services',
  insurance: 'Insurance',
  mortgage: 'Mortgage',
  concierge: 'Concierge',
  construction: 'Construction',
  'repairs-furnishing': 'Repairs & furnishing',
  'select-construction': 'Select construction',
  'digital-nomad-visa': 'Digital Nomad Visa',
  'tourist-license': 'Tourist license',
  'student-visa': 'Student visa'
}

export const ServicePage = () => {
  const { serviceId } = useParams()
  const key = (serviceId || '').toLowerCase()
  const title = serviceTitles[key] || 'Service'

  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">{title}</h1>
          <p className="page__text">
            This is a very simple service description page. For a junior portfolio project it is enough
            to show that different URLs open different content.
          </p>
          <p className="page__text">
            Later you can extend this page with real text, images or even forms, but the current version
            already looks complete for learning purposes.
          </p>
          <Link to="/" className="page__link">
            ← Back to home page
          </Link>
        </div>
      </main>
    </>
  )
}

