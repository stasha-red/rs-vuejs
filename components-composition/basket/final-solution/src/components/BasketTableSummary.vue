<template>
  <tr>
    <td colspan="5">
      <div class="basket-table__summary">
        <p class="basket-table__total">Total <b>$ {{ total.toFixed(2) }}</b></p>
        <p v-if="tax">Tax $ {{ tax }}</p>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(
  {
    total: {
      type: Number,
      required: true,
    },
  }
)

const tax = computed(() => (props.total * 0.1).toFixed(2))
</script>

<style>
.basket-table__summary {
  text-align: right;
}

.basket-table__total {
  font-size: 1.4rem;
}
</style>
