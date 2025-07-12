import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Задача 1',
      description: 'Описание задачи 1',
    },
    {
      id: 2,
      title: 'Задача 2',
      description: 'Описание задачи 2',
    },
  ])

  const totalTasks = computed(() => {
    return tasks.value.length
  })

  const addTask = (title, description) => {
    tasks.value.push({
      id: tasks.value.length + 1,
      title,
      description,
    })
  }

  const deleteTask = (id) => {
    const index = tasks.value.findIndex((task) => task.id === id)
    if (index !== -1) {
      tasks.value.splice(index, 1)
    }
  }

  const updateTask = (id, title, description) => {
    const task = tasks.value.find((task) => task.id === id)
    if (task) {
      task.title = title
      task.description = description
    }
  }

  return { tasks, addTask, totalTasks, deleteTask, updateTask }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
