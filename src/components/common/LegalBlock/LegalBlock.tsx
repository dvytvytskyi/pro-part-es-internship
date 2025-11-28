import './LegalBlock.scss'

export const LegalBlock = () => {
  const services = [
    {
      id: 1,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/consulting/scale-icon.svg',
      title: 'Legal advice on real estate transactions',
      description: 'We provide expert legal advice in real estate transactions, including legal analysis and transaction structuring.'
    },
    {
      id: 2,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/main/icon-document.svg',
      title: 'Tax Counseling',
      description: 'We provide tax advice in the context of acquiring and owning real estate, helping to optimize clients\' tax liability.'
    },
    {
      id: 3,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/main/icon-hundred.svg',
      title: 'Financing and Guarantees',
      description: 'We provide support in financing for real estate acquisitions and establishing appropriate guarantees.'
    },
    {
      id: 4,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/main/icon-exclamation-mark-sign.svg',
      title: 'Risk Assessment',
      description: 'We analyze the risks of real estate transactions and provide recommendations to mitigate them.'
    },
    {
      id: 5,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/main/icon-hand-shake.svg',
      title: 'Commercial Negotiations',
      description: 'We participate in commercial negotiations with counterparties and other parties to transactions.'
    },
    {
      id: 6,
      iconUrl: 'https://pro-part.es/wp-content/themes/propart-spain/icons/main/icon-gear.svg',
      title: 'Transaction support',
      description: 'We provide full legal support of the transaction process, including preparation of documents, conclusion of contracts and registration of transactions.'
    }
  ]

  return (
    <section className="legal-block">
      <div className="legal-block__top">
        <div className="legal-block__top-content">
          <h2 className="legal-block__title">Legal</h2>
          <p className="legal-block__description">
            Our legal services provide expert guidance in real estate transactions, tax optimization, company administration, and labor law. We ensure comprehensive support for all legal aspects, helping you navigate complex regulations with ease.
          </p>
        </div>
        <div className="legal-block__background-text">Legal services</div>
      </div>
      <div className="legal-block__services-container">
        {services.map((service) => (
          <div key={service.id} className="legal-block__card">
            <div className="legal-block__card-icon">
              <img src={service.iconUrl} alt={service.title} />
            </div>
            <h3 className="legal-block__card-title">{service.title}</h3>
            <p className="legal-block__card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
