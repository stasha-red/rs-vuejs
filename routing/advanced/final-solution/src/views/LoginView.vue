<script setup>
import { login } from '../auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const onUserLogin = () => {
  login();
  router.push('/dashboard')
}

</script>

<template>
  <div class="login">
    <h1>Вход</h1>
    <button class="btn-login" @click="onUserLogin">Войти как пользователь</button>
  </div>
</template>


<style>
.login {
  text-align: center;
  padding: 20px 0;
}

.btn-login {
  display: inline-block;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}

.btn-login:hover {
  background-color: #0056b3;
}
</style>
