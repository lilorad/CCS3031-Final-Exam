<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <section class="info-section">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped>
.info-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.info-section h2 {
  color: var(--theme);
  border-bottom: 3px solid var(--theme-light);
  padding-bottom: 6px;
}
</style>