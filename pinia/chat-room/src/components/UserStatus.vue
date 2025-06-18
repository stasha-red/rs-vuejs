<template>
  <div class="status">
    <p class="count">Сейчас онлайн: <strong>{{ store.onlineCount }}</strong></p>
    <p v-if="store.isOverloaded" class="warning">Чат переполнен!</p>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/users'
const store = useUserStore()
</script>

<style scoped>
.status {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

.count {
  font-size: 1.4rem;
}

.warning {
  color: red;
  font-weight: bold;
  margin-top: 10px;
  animation: blink 1s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1
  }

  50% {
    opacity: 0.5
  }
}
</style>
