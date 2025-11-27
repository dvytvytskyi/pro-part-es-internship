export interface Property {
  id: string
  title: string
  description: string
  price: number
  type: PropertyType
  location: Location
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  features: string[]
  status: PropertyStatus
  createdAt: string
  updatedAt: string
}

export type PropertyType = 'apartment' | 'house' | 'villa' | 'commercial'

export type PropertyStatus = 'available' | 'sold' | 'rented' | 'pending'

export interface Location {
  address: string
  city: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface PropertyFilters {
  type?: PropertyType
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  bathrooms?: number
  location?: string
  status?: PropertyStatus
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

