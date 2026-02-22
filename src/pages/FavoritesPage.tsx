import { Header } from '@/components/layout/Header'
import { PropertyList } from '@/components/properties/PropertyList'
import { useFavorites } from '@/contexts/FavoritesContext'

export const FavoritesPage = () => {
  const { favorites } = useFavorites()

  return (
    <>
      <Header />
      <main className="page">
        <div className="page__container">
          <h1 className="page__title">Favorites</h1>
          {favorites.length === 0 ? (
            <p className="page__text">
              You have not added any properties to favorites yet. Click the heart icon on a property card to
              save it here.
            </p>
          ) : (
            <PropertyList properties={favorites} />
          )}
        </div>
      </main>
    </>
  )
}

