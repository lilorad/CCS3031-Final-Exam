<script setup>
defineProps({
  logo: String,
  name: String,
  description: String,
  to: String,
})
</script>

<template>
  <article class="card">
    <img :src="logo" :alt="name + ' logo'" class="card-logo" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <RouterLink :to="to" class="read-more">Read More</RouterLink>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card-logo {
  width: 90px;
}

.read-more {
  margin-top: auto;
  padding: 8px 16px;
  background: #0b5ed7;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}
</style>