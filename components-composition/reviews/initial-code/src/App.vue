<script setup>
import { reactive, ref, computed } from 'vue'

// Отзывы с рейтингом
const reviews = reactive([
  { id: 1, author: 'Иван Иванов', text: 'Отличный сервис!', liked: true, rating: 5 },
  { id: 2, author: 'Мария Смирнова', text: 'Довольна качеством товара.', liked: false, rating: 4 },
  { id: 3, author: 'Дмитрий Кузнецов', text: 'Быстрая доставка.', liked: true, rating: 3 },
  { id: 4, author: 'Аноним', text: 'Такое себе', liked: false, rating: 2 },
])

const filter = ref('all') // all | liked | notLiked | highRating

const filteredReviews = computed(() => {
  if (filter.value === 'liked') return reviews.filter(r => r.liked)
  if (filter.value === 'notLiked') return reviews.filter(r => !r.liked)
  if (filter.value === 'highRating') return reviews.filter(r => r.rating >= 4)
  return reviews
})

const toggleLike = (review) => {
  review.liked = !review.liked
}

const removeReview = (index) => {
  reviews.splice(index, 1)
}

const setFilter = (value) => {
  filter.value = value
}
</script>

<template>
  <div class="container reviews">
    <h1 class="reviews__title">Отзывы</h1>

    <!-- Панель фильтров -->
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="setFilter('all')">Все</button>
      <button :class="{ active: filter === 'liked' }" @click="setFilter('liked')">❤️ Понравившиеся</button>
      <button :class="{ active: filter === 'notLiked' }" @click="setFilter('notLiked')">👎 Без лайка</button>
      <button :class="{ active: filter === 'highRating' }" @click="setFilter('highRating')">⭐ 4 и выше</button>
    </div>

    <!-- Список отзывов -->
    <ul class="reviews__list">
      <li v-for="(review, index) in filteredReviews" :key="review.id" class="reviews__item">
        <div class="review">
          <p class="review__text">"{{ review.text }}"</p>
          <p class="review__author">— {{ review.author }}</p>

          <!-- Рейтинг -->
          <div class="review__rating">
            <span v-for="n in 5" :key="n" class="star">
              {{ n <= review.rating ? '★' : '☆' }}
            </span>
          </div>

          <div class="review__actions">
            <button @click="toggleLike(review)" class="btn-like">
              {{ review.liked ? '❤️' : '🤍' }}
            </button>
            <button @click="removeReview(index)" class="btn-delete">Удалить</button>
          </div>
        </div>
      </li>

      <li v-if="filteredReviews.length === 0" class="reviews__item--empty">
        <p>Нет отзывов по выбранному фильтру.</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
}

.reviews__title {
  text-align: center;
  margin-bottom: 1rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.filters button {
  padding: 6px 12px;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 4px;
}

.filters .active {
  background-color: #333;
  color: #fff;
}

.reviews__list {
  list-style: none;
  padding: 0;
}

.reviews__item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

.review__text {
  font-style: italic;
  margin-bottom: 0.5rem;
}

.review__author {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.review__rating {
  color: gold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.review__actions {
  display: flex;
  gap: 10px;
}

.btn-like,
.btn-delete {
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-like {
  background: #f9f9f9;
}

.btn-delete {
  background: #ffdddd;
}

.reviews__item--empty {
  text-align: center;
  padding: 1rem;
  font-style: italic;
  color: #777;
}
</style>
