<script setup>
import TasksList from '../components/TasksList.vue';
import TasksForm from '../components/TasksForm.vue';

import { useTasksStore } from '@/stores/tasks';
const tasksStore = useTasksStore();
</script>

<template>
  <div>
    <h1>Список задач ({{ tasksStore.totalTasks }})</h1>
    <p v-if="tasksStore.totalTasks === 0">Нет задач для отображения.</p>
    <TasksList v-else />
    <hr />
    <TasksForm />
  </div>
</template>
