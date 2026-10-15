<script setup>
defineProps({
  logo: String,
  name: String,
  description: String,
})
</script>

<template>
  <article class="partner">
    <img :src="logo" :alt="name + ' logo'" class="partner-logo" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.partner {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.partner-logo {
  width: 90px;
}
</style>