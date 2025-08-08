import { ref, computed } from 'vue'
import apiService from '@/services/api'

export function useServices() {
  const services = ref([])
  const currentService = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Fetch all services
  const fetchServices = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await apiService.getServices()
      services.value = data
      console.log('✅ Services fetched successfully:', data)
    } catch (err) {
      error.value = err.message
      console.error('❌ Error fetching services:', err)
    } finally {
      loading.value = false
    }
  }

  // Fetch service by slug
  const fetchServiceBySlug = async (slug) => {
    loading.value = true
    error.value = null
    try {
      const data = await apiService.getServiceBySlug(slug)
      currentService.value = data
      console.log('✅ Service fetched successfully:', data)
      return data
    } catch (err) {
      error.value = err.message
      console.error('❌ Error fetching service:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Fetch service by ID
  const fetchServiceById = async (id) => {
    loading.value = true
    error.value = null
    try {
      const data = await apiService.getService(id)
      currentService.value = data
      console.log('✅ Service fetched successfully:', data)
      return data
    } catch (err) {
      error.value = err.message
      console.error('❌ Error fetching service:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Create new service
  const createService = async (serviceData) => {
    loading.value = true
    error.value = null
    try {
      const data = await apiService.createService(serviceData)
      console.log('✅ Service created successfully:', data)
      return data
    } catch (err) {
      error.value = err.message
      console.error('❌ Error creating service:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Update service
  const updateService = async (id, serviceData) => {
    loading.value = true
    error.value = null
    try {
      const data = await apiService.updateService(id, serviceData)
      console.log('✅ Service updated successfully:', data)
      return data
    } catch (err) {
      error.value = err.message
      console.error('❌ Error updating service:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Delete service
  const deleteService = async (id) => {
    loading.value = true
    error.value = null
    try {
      await apiService.deleteService(id)
      console.log('✅ Service deleted successfully')
      // Remove from local state
      services.value = services.value.filter(service => service._id !== id)
      if (currentService.value && currentService.value._id === id) {
        currentService.value = null
      }
    } catch (err) {
      error.value = err.message
      console.error('❌ Error deleting service:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  // Get service by slug from local state
  const getServiceBySlug = computed(() => {
    return (slug) => services.value.find(service => service.slug === slug)
  })

  // Get service by ID from local state
  const getServiceById = computed(() => {
    return (id) => services.value.find(service => service._id === id)
  })

  return {
    // State
    services: computed(() => services.value),
    currentService: computed(() => currentService.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),

    // Actions
    fetchServices,
    fetchServiceBySlug,
    fetchServiceById,
    createService,
    updateService,
    deleteService,

    // Computed
    getServiceBySlug,
    getServiceById
  }
}
