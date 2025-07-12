<template>
  <div>
    <h1>Список задач (2)</h1>
    <ul class="task-list">
      <li class="task-item">
        <RouterLink class="task-link" to="/tasks/1">Задача 1</RouterLink>
      </li>
      <li class="task-item">
        <RouterLink class="task-link" to="/tasks/2">Задача 2</RouterLink>
      </li>
    </ul>

    <hr />

    <form class="form">
      <h3 class="form__title">Добавить новую задачу</h3>
      <input class="form-control" type="text" placeholder="Новая задача" />
      <textarea class="form-control" name="description" placeholder="Описание задачи"></textarea>
      <button class="btn btn--add-task" type="submit">Добавить</button>
    </form>
  </div>
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

.form {
  display: block;
}

.form__title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.form-control {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

.btn--add-task {
  flex-direction: column;
  gap: 12px;
}

.form-control {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn--add-task {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn--add-task:hover {
  background-color: #218838;
}
</style>
