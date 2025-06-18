<script setup>
import { useBasketStore } from '../stores/basket'

const store = useBasketStore()
</script>

<template>
  <tr>
    <td colspan="5">
      <div class="basket-table__summary">
        <p class="basket-table__total">
          Total <b>$ {{ store.totalPrice.toFixed(2) }}</b>
        </p>
        <p>Tax $ {{ store.tax.toFixed(2) }}</p>
      </div>
    </td>
  </tr>
</template>

<style>
.basket-table__summary {
  text-align: right;
}

.basket-table__total {
  font-size: 1.4rem;
}
</style>
