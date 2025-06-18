<template>
  <div class="controls">
    <button @click="store.userJoined" :disabled="store.onlineCount >= 10">Пользователь зашёл</button>
    <button @click="store.userLeft" :disabled="store.onlineCount === 0">Пользователь вышел</button>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/users'
const store = useUserStore()
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}
</style>
