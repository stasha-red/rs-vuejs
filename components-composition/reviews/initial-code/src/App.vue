<script setup>
import { reactive, computed } from 'vue'

// Отзывы с рейтингом
const reviews = reactive([
  { id: 1, author: 'Иван Иванов', text: 'Отличный сервис!', liked: true, rating: 5 },
  { id: 2, author: 'Мария Смирнова', text: 'Довольна качеством товара.', liked: false, rating: 4 },
  { id: 3, author: 'Дмитрий Кузнецов', text: 'Быстрая доставка.', liked: true, rating: 3 },
  { id: 4, author: 'Аноним', text: 'Такое себе', liked: false, rating: 2 },
])

const filterOptions = reactive([
  { value: 'all', label: 'Все', active: true },
  { value: 'liked', label: '❤️ Понравившиеся', active: false },
  { value: 'notLiked', label: '👎 Без лайка', active: false },
  { value: 'highRating', label: '⭐ 4 и выше', active: false },
])

const filter = computed(() => {
  return filterOptions.find(f => f.active).value
})

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
  filterOptions.forEach(f => {
    f.active = f.value === value
  })
}
</script>

<template>
  <div class="container reviews">
    <h1 class="reviews__title">Отзывы</h1>

    <!-- Панель фильтров -->
    <div class="filters">
      <button v-for="filter in filterOptions" class="btn btn--filter" :class="{ 'btn--active': filter.active }" @click="setFilter(filter.value)" :key="filter.value">
        {{ filter.label }}
      </button>
    </div>

    <!-- Список отзывов -->
    <ul class="review-tiles">
      <li v-for="(review, index) in filteredReviews" :key="review.id" class="review-tiles__item">
        <div class="review">
          <div class="review__header">
            <p class="review__author">{{ review.author }}</p>
            <div class="review__rating">
              <span v-for="n in 5" :key="`star-${n}`" class="star">
                {{ n <= review.rating ? '★' : '☆' }}
              </span>
            </div>
          </div>
          <p class="review__text">"{{ review.text }}"</p>
          <div class="review__actions">
            <button @click="toggleLike(review)" class="btn btn--like">
              {{ review.liked ? '❤️' : '🤍' }}
            </button>
            <button @click="removeReview(index)" class="btn btn-delete">Удалить</button>
          </div>
        </div>
      </li>

      <li v-if="filteredReviews.length === 0" class="reviews-tiles__item reviews-tiles__item--empty">
        <p>Нет отзывов по выбранному фильтру.</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
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
  margin-bottom: 2rem;
}

.btn {
  border: none;
  cursor: pointer;
  border-radius: 4px;
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

.review-tiles {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 1rem;
  padding: 0;
}

.review-tiles__item {
  flex-basis: calc(100% / 3 - 5rem);
  border: 1px solid #BEBCBD;
  border-radius: 10px;
  padding: 1rem 2rem;
}

.reviews-tiles__item--empty {
  text-align: center;
  padding: 1rem;
  font-style: italic;
  color: #777;
}

@media screen and (max-width: 850px) {
  .review-tiles__item {
    flex-basis: calc(100% - 2rem);
  }
}

.review__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
}

.review__text {
  color: #807D7E;
  margin-bottom: 1.5rem;
}

.review__author {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.review__rating {
  color: gold;
  font-size: 1.2rem;
}

.review__actions {
  display: flex;
  gap: 10px;
}

.btn--like,
.btn--delete {
  padding: 4px 10px;
}

.btn--like {
  background: #f9f9f9;
}

.btn--delete {
  background: #ffdddd;
}
</style>
