import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Property } from '@/types'

interface FavoritesContextValue {
  favorites: Property[]
  toggleFavorite: (property: Property) => void
  isFavorite: (id: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined)

const STORAGE_KEY = 'favorite_properties'

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Property[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Property[]
        setFavorites(parsed)
      } catch {
        setFavorites([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (property: Property) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === property.id)
      if (exists) {
        return prev.filter((item) => item.id !== property.id)
      }
      return [...prev, property]
    })
  }

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext)
  if (!ctx) {
    throw new Error('useFavorites must be used inside FavoritesProvider')
  }
  return ctx
}

