<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>

    <div class="todo-app__main">
      <ul class="todo-list">
        <li class="todo-list__item"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :class="{ 'todo-list__item--completed': todo.completed }">
            <TodoListItem
              v-bind="todo"
              @complete-todo.once="todo.completed = !todo.completed"
              @remove-todo="removeTodo(index)"
            />
        </li>
      </ul>
      <div class="todo-list__empty" v-if="!todos.length">
        <p>Список задач пуст</p>
      </div>
    </div>
    <div class="todo-app__footer">
      <p class="todo-app__footer-text">Осталось {{ remainingTodos }} задания(й)</p>
      <button class="btn btn--clear" @click="clearCompleted">Удалить завершенные</button>
      <button class="btn btn--clear" @click="clearAll">Очистить список</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import TodoListItem from './components/TodoListItem.vue'

const todos = reactive([
  { id: 1, text: 'Изучить компоненты Vue.js', completed: true },
  { id: 2, text: 'Создать TodoList приложение', completed: false },
  { id: 3, text: 'Похвалить себя за отличную работу', completed: false },
])

const removeTodo = (index) => {
  todos.splice(index, 1)
}

const remainingTodos = computed(() =>
  todos.filter((todo) => !todo.completed).length
)

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
