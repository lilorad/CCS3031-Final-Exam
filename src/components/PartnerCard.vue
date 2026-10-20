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
  font-weight: bold;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.partner-logo {
  width: 180px;
  height: 100px;
  object-fit: contain;
}

.partner p {
  font-family: 'Times New Roman', serif;
}
</style>