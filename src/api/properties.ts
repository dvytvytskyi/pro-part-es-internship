import { apiClient } from './config'
import { Property, PropertyFilters, PaginatedResponse } from '@/types'

export const propertiesApi = {
  // Get all properties with filters and pagination
  getAll: async (filters?: PropertyFilters, page = 1, limit = 12): Promise<PaginatedResponse<Property>> => {
    const response = await apiClient.get('/properties', {
      params: { ...filters, page, limit },
    })
    return response.data
  },

  // Get single property by ID
  getById: async (id: string): Promise<Property> => {
    const response = await apiClient.get(`/properties/${id}`)
    return response.data
  },

  // Create new property (admin only)
  create: async (property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<Property> => {
    const response = await apiClient.post('/properties', property)
    return response.data
  },

  // Update property (admin only)
  update: async (id: string, property: Partial<Property>): Promise<Property> => {
    const response = await apiClient.put(`/properties/${id}`, property)
    return response.data
  },

  // Delete property (admin only)
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/properties/${id}`)
  },

  // Search properties
  search: async (query: string, filters?: PropertyFilters): Promise<Property[]> => {
    const response = await apiClient.get('/properties/search', {
      params: { q: query, ...filters },
    })
    return response.data
  },
}

