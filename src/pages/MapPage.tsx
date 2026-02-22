import { Header } from '@/components/layout/Header'
import { MainPageMapContainer } from '@/components/common/MainPageMapContainer'

export const MapPage = () => {
  return (
    <>
      <Header />
      <main className="page page--full-width">
        <div className="page__container">
          <h1 className="page__title">Map</h1>
          <p className="page__text">
            Here is a simple map section that reuses the component from the main page.
          </p>
        </div>
        <MainPageMapContainer />
      </main>
    </>
  )
}

