import { ref, computed, readonly } from 'vue'
import apiService from '@/services/api'

export function useCategories() {
  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)
  const currentCategory = ref(null)

  // Computed properties
  const categoriesCount = computed(() => categories.value.length)

  // Methods
  const fetchCategories = async () => {
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getCategories()
      categories.value = data
    } catch (err) {
      error.value = err.message
      console.error('Error fetching categories:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchCategory = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.getCategory(id)
      currentCategory.value = data
      return data
    } catch (err) {
      error.value = err.message
      console.error('Error fetching category:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const createCategory = async (categoryData) => {
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.createCategory(categoryData)
      categories.value.push(data)
      return data
    } catch (err) {
      error.value = err.message
      console.error('Error creating category:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const updateCategory = async (id, categoryData) => {
    loading.value = true
    error.value = null
    
    try {
      const data = await apiService.updateCategory(id, categoryData)
      const index = categories.value.findIndex(category => category._id === id)
      if (index !== -1) {
        categories.value[index] = data
      }
      if (currentCategory.value && currentCategory.value._id === id) {
        currentCategory.value = data
      }
      return data
    } catch (err) {
      error.value = err.message
      console.error('Error updating category:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const deleteCategory = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      await apiService.deleteCategory(id)
      categories.value = categories.value.filter(category => category._id !== id)
      if (currentCategory.value && currentCategory.value._id === id) {
        currentCategory.value = null
      }
    } catch (err) {
      error.value = err.message
      console.error('Error deleting category:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const getCategoryById = (id) => {
    return categories.value.find(category => category._id === id)
  }

  const getCategoryByName = (name) => {
    return categories.value.find(category => 
      category.name?.toLowerCase() === name.toLowerCase()
    )
  }

  return {
    // State
    categories: readonly(categories),
    loading: readonly(loading),
    error: readonly(error),
    currentCategory: readonly(currentCategory),
    
    // Computed
    categoriesCount,
    
    // Methods
    fetchCategories,
    fetchCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,
    getCategoryByName
  }
} 