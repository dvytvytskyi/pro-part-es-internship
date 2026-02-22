import { Header } from '@/components/layout/Header'

export const BlogPage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Blog</h1>
          <p className="page__text">
            In a real commercial project this page would contain articles about life on the Costa del
            Sol and buying real estate in Spain. For now it is just a simple placeholder that makes the
            navigation look complete.
          </p>
          <div className="page__card-list">
            <article className="page-card">
              <h2 className="page-card__title">How to choose an area on the Costa del Sol</h2>
              <p className="page-card__text">
                Short example text that shows how a blog card can look. You can later replace it with
                real content.
              </p>
            </article>
            <article className="page-card">
              <h2 className="page-card__title">New buildings vs secondary real estate</h2>
              <p className="page-card__text">
                Another simple card so the page does not look empty and still stays easy to understand.
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

