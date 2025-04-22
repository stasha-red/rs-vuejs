
<template>
  <div class="container basket">
    <BasketTable
      :basket="basket"
      :totalPrice="totalPrice"
      :totalTax="totalTax"
      @increase="increaseItemQuanity"
      @decrease="descreaseItemQuanity"
      @remove="removeItem"
    />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
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

const descreaseItemQuanity = (item) => {
  if (item.quantity > 1) item.quantity--
}

const increaseItemQuanity = (item) => {
  item.quantity++
}

const removeItem = (index) => {
  basket.splice(index, 1)
}

const totalPrice = computed(() =>
  basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
)

const totalTax = computed(() => (totalPrice.value * 0.1).toFixed(2))
</script>

<style src="./App.css"></style>
