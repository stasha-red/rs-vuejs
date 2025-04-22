<template>
  <tr>
    <td colspan="5">
      <div class="basket-table__summary">
        <p class="basket-table__total">Total <b>$ {{ total }}</b></p>
        <p v-if="tax">Tax $ {{ tax }}</p>
      </div>
    </td>
  </tr>
</template>

<script setup>
defineProps(
  {
    total: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number
    },
  }
)
</script>

<style>
.basket-table__summary {
  text-align: right;
}

.basket-table__total {
  font-size: 1.4rem;
}
</style>
