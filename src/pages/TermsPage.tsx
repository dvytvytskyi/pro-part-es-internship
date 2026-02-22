import { Header } from '@/components/layout/Header'

export const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Terms of use</h1>
          <p className="page__text">
            Another simple legal page. It does not try to be perfect but helps to make the website feel
            more complete and realistic.
          </p>
          <p className="page__text">
            When you prepare the project for your CV you can always update this text to something more
            serious if you want.
          </p>
        </div>
      </main>
    </>
  )
}

