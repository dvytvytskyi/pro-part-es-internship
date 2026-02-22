import { Header } from '@/components/layout/Header'

export const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Privacy policy</h1>
          <p className="page__text">
            This is a short example of a privacy policy page. In a real project this text would be
            replaced with legal information prepared by a lawyer.
          </p>
          <p className="page__text">
            For a portfolio project it is enough to show that such a page exists and is available from
            the footer and from the consultation form.
          </p>
        </div>
      </main>
    </>
  )
}

