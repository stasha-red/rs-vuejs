<template>
  <main class="app">
    <h1>Симулятор Онлайн-Чата</h1>
    <UserStatus />
    <UserControls />
  </main>
</template>

<script setup>
import UserStatus from './components/UserStatus.vue'
import UserControls from './components/UserControls.vue'
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #fdfdfd;
  font-family: sans-serif;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}
</style>
