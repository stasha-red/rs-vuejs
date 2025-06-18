<script setup>
import { reactive } from 'vue'
import BasketTable from './components/BasketTable.vue'

const basket = reactive([
  {
    id: 1,
    name: 'Blue Flower Print Crop Top',
    color: 'Yellow',
    size: 'M',
    price: 29.0,
    quantity: 1,
    imageUrl: './assets/crop-top.png',
  },
  {
    id: 2,
    name: 'Levender Hoodie',
    color: 'Levender',
    size: 'XXL',
    price: 119.0,
    quantity: 1,
    imageUrl: './assets/hoodie.png',
  },
  {
    id: 3,
    name: 'Black Sweatshirt',
    color: 'Black',
    size: 'XXL',
    price: 123.0,
    quantity: 1,
    imageUrl: './assets/sweatshirt.png',
  },
])

const decreaseItemQuantity = (id) => {
  const item = basket.find(item => item.id === id)
  if (item && item.quantity > 1) {
    item.quantity--
  }
}

const increaseItemQuantity = (id) => {
  const item = basket.find(item => item.id === id)
  if (item) {
    item.quantity++
  }
}

const removeItem = (index) => {
  basket.splice(index, 1)
}
</script>

<template>
  <div class="container basket">
    <BasketTable :basket="basket" @increase-amount="increaseItemQuantity" @decrease-amount="decreaseItemQuantity"
      @remove-item="removeItem" />
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
