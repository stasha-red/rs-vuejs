<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>

    <div class="todo-app__main">
      <ul class="todo-list">
        <li
          class="todo-list__item"
          :class="{ 'todo-list__item--completed': todo.completed }"
          v-for="(todo, index) in todos"
          :key="todo.id"
        >
          <span class="todo-list__item-text">{{ todo.text }}</span>
          <button
            class="btn btn--check"
            @click="todo.completed = !todo.completed"
            :disabled="todo.completed"
            aria-label="Завершить задачу"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="22">
              <path
                d="M438.6 109.4c-12.5-12.5-32.8-12.5-45.3 0L160 320.7l-92.3-92.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0l288-288c12.6-12.5 12.6-32.8 .1-45.3z"
              />
            </svg>
          </button>
          <button class="btn btn--delete" @click="removeTodo(index)" aria-label="Удалить задачу">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="22">
              <path
                d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div class="todo-list__empty" v-if="!todos.length">
        <p>Список задач пуст</p>
      </div>
    </div>

    <div class="todo-app__footer" v-if="todos.length">
      <p class="todo-app__footer-text">Осталось {{ remainingTodos }} задания(й)</p>
      <button class="btn btn--clear" @click="clearCompleted">Удалить завершенные</button>
      <button class="btn btn--clear" @click="clearAll">Очистить список</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const todos = reactive([
  { id: 1, text: 'Изучить компоненты Vue.js', completed: true },
  { id: 2, text: 'Создать TodoList приложение', completed: false },
  { id: 3, text: 'Похвалить себя за отличную работу', completed: false },
])

// Удалить задачу
const removeTodo = (index) => {
  todos.splice(index, 1)
}

// Количество оставшихся незавершенных задач
const remainingTodos = computed(() => {
  return todos.filter((todo) => !todo.completed).length
})

// Очистить завершенные задачи
const clearCompleted = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      todos.splice(i, 1)
    }
  }
}

const clearAll = () => {
  todos.splice(0, todos.length)
}
</script>

<style src="./App.css"></style>
