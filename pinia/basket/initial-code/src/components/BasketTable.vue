<script setup>
import { computed } from 'vue'
import BasketTableSummary from './BasketTableSummary.vue'
import BasketTableItem from './BasketTableItem.vue'

const props = defineProps({
  basket: {
    type: Array,
    required: true,
  },
})

const totalPrice = computed(() => {
  return props.basket.reduce((acc, item) => acc + item.price * item.quantity, 0)
})
</script>

<template>
  <table class="basket-table">
    <thead class="basket-table__header">
      <tr>
        <th>Product Details</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody class="basket-table__body">
      <BasketTableItem v-for="(item, index) in basket" :key="item.id" v-bind="item"
        @increase-amount="$emit('increase-amount', item.id)" @decrease-amount="$emit('decrease-amount', item.id)"
        @remove-item="$emit('remove-item', index)" />

      <tr v-if="basket.length === 0">
        <td colspan="5">
          <p class="basket-table__empty">No items</p>
        </td>
      </tr>

      <BasketTableSummary v-if="basket.length > 0" :total="totalPrice" />
    </tbody>
  </table>
</template>

<style>
.basket-table {
  width: 100%;
  border-collapse: collapse;
}

.basket-table__header {
  background-color: #3c4242;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
}

.basket-table__header th {
  padding: 2rem 1rem;
  font-weight: 400;
  text-align: center;
  border: 0;
}

.basket-table__header th:first-child {
  text-align: left;
  padding-left: 5rem;
}

.basket-table__header th:last-child {
  padding-right: 5rem;
}

.basket-table__body td {
  padding: 3rem 2rem;
  text-align: center;
}

.basket-table__body td:first-child {
  text-align: left;
  padding-left: 5rem;
}

.basket-table__body td:last-child {
  padding-right: 5rem;
}
</style>
