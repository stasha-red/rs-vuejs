<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <tr>
    <td>
      <div class="basket-item">
        <div class="basket-item__image">
          <img :src="imageUrl" alt="" />
        </div>
        <div class="basket-item__info">
          <h2 class="basket-item__info-h2">{{ name }}</h2>
          <p class="basket-item__info-p">Color: {{ color }}</p>
          <p class="basket-item__info-p">Size: {{ size }}</p>
        </div>
      </div>
    </td>
    <td>
      <p class="basket-item__price">$ {{ price }}</p>
    </td>
    <td>
      <div class="basket-item__quantity">
        <button class="quantity-button" @click="$emit('decrease-amount')">–</button>
        <input type="number" :value="quantity" min="1" />
        <button class="quantity-button" @click="$emit('increase-amount')">+</button>
      </div>
    </td>
    <td>
      <p class="basket-item__price">$ {{ price * quantity }}</p>
    </td>
    <td>
      <button class="btn btn-delete" aria-label="Удалить" @click="$emit('remove-item')">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<style>
.basket-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
}

.basket-item__image {
  width: 105px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
}

.basket-item__info {
  flex-grow: 1;
}

.basket-item__info-h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.basket-item__info-p {
  color: #807d7e;
  font-size: 1rem;
  margin: 0 0 0.5rem;
}

.basket-item__price {
  font-size: 1.2rem;
  font-weight: 500;
  min-width: 140px;
}

.btn-delete {
  background-color: transparent;
  color: #8a33fd;
  border: none;
  cursor: pointer;
}

.btn-delete:hover {
  color: #5b1f9d;
}

.basket-item__quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 12px;
  overflow: hidden;
}

.quantity-button {
  background-color: #f6f6f6;
  color: #3c4242;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  width: 30px;
  height: 35px;
  text-align: center;
}

.quantity-button:hover {
  font-weight: 700;
}

.basket-item__quantity input[type='number'] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  text-align: center;
  border: none;
  background-color: #f6f6f6;
  color: #3c4242;
  height: 35px;
  line-height: 35px;
  font-size: 1.2rem;
}

/* Chrome, Safari, Edge, Opera */
.basket-item__quantity input[type='number']::-webkit-outer-spin-button,
.basket-item__quantity input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.basket-table__empty {
  text-align: center;
  color: #a7a7a7;
}
</style>
