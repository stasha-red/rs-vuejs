<script setup>
import { RouterLink } from 'vue-router';
import { useTasksStore } from '@/stores/tasks';

const tasksStore = useTasksStore();
</script>

<template>
  <ul class="task-list">
    <li class="task-item" v-for="task in tasksStore.tasks" :key="task.id">
      <RouterLink class="task-link" :to="`/tasks/${task.id}`">{{ task.title }}</RouterLink>
    </li>
  </ul>
</template>

<style>
.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0 0 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.task-item {
  flex-basis: 30%;
}

.task-link {
  display: block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 40px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
  text-align: center;
}

.task-link:hover {
  background-color: #e0e0e0;
}
</style>
