<script setup>
defineProps({
  filterOptions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="filters">
    <button
      v-for="filter in filterOptions"
      :key="filter.value"
      class="btn btn--filter"
      :class="{ 'btn--active': filter.active }"
      @click="$emit('set-filter', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<style>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
}

.btn--filter {
  padding: 6px 12px;
  background: #eee;
  border-radius: 4px;
}

.btn--active {
  background-color: #333;
  color: #fff;
}
</style>
