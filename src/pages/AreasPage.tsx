import { Header } from '@/components/layout/Header'
import { Areas } from '@/components/common/Areas'

export const AreasPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Areas of Costa del Sol</h1>
          <p className="page__text">
            On this page you can see popular areas where ProPart works. For a simple portfolio project
            it is enough to just reuse the block from the main page.
          </p>
        </div>
        <Areas />
      </main>
    </>
  )
}

