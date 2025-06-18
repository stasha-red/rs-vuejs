import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('users', () => {
  const onlineCount = ref(0)

  function userJoined() {
    onlineCount.value++
  }

  function userLeft() {
    if (onlineCount.value > 0) {
      onlineCount.value--
    }
  }

  const isOverloaded = computed(() => onlineCount.value >= 10)

  return {
    onlineCount,
    userJoined,
    userLeft,
    isOverloaded
  }
})
