<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>
    <TodoForm @add-todo="addTodo" />

    <TodoList :todos="todos" @remove-todo="removeTodo" @complete-todo="completeTodo"/>

    <TodoFooter
      v-if="todos.length"
      :remaining="remainingTodos"
      @clear-completed="clearCompleted"
      @clear-all="clearAll"
    />

    <div v-if="isLoading">Загрузка...</div>
    <div v-if="error">Произошла ошибка: {{ error }}</div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import { useFetch } from './composables/useFetch'

const todos = reactive([])
const { isLoading, error, fetchData } = useFetch();


const fetchTodos = async () => {
  const response = await fetchData('http://localhost:3000/todos');
  todos.splice(0, todos.length, ...response);
};

const addTodo = (newTodo) => {
  fetchData('http://localhost:3000/todos', {
    method: 'POST',
    body: { id: Date.now().toString(), text: newTodo, completed: false },
  }).then(() => {
    fetchTodos();
  });
}

const removeTodo = (id) => {
  fetchData(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE'
  }).then(() => {
    fetchTodos();
  });
}

const completeTodo = (todo) => {
  fetchData(`http://localhost:3000/todos/${todo.id}`, {
    method: 'PATCH',
    body: { completed: !todo.completed },
  }).then(() => {
    fetchTodos();
  });
}

const remainingTodos = computed(() =>
  todos.filter((todo) => !todo.completed).length
)

const clearCompleted = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].completed) {
      removeTodo(todos[i].id)
    }
  }
}

const clearAll = () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    removeTodo(todos[i].id)
  }
}

onMounted(() => {
  fetchTodos()
})
</script>

<style src="./App.css"></style>
