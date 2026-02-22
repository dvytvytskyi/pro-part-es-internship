import { Header } from '@/components/layout/Header'
import { ConsultationForm } from '@/components/common/ConsultationForm'
import { LegalBlock } from '@/components/common/LegalBlock'

export const ConsultingPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Consulting</h1>
          <p className="page__text">
            If a client needs help with buying, renting or investing in real estate, this page can be a
            simple entry point. Below there is a small consultation form and legal information block.
          </p>
        </div>
        <ConsultationForm />
        <LegalBlock />
      </main>
    </>
  )
}

