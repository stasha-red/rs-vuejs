import { ref } from 'vue'

export function useFetch() {
  const isLoading = ref(false)
  const error = ref(null)

  const fetchData = async (url, options = {}) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(url, {
        ...options,
        body: options.body ? JSON.stringify(options.body) : null,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, fetchData }
}
