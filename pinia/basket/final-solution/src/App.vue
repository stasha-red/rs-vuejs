<script setup>
import BasketTable from './components/BasketTable.vue'
</script>

<template>
  <div class="container basket">
    <BasketTable />
  </div>
</template>

<style>
body {
  background-color: #f0f0f0;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif,
    sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
</style>
