<script setup>
import ccsLogo from '../assets/ccs-logo.png'
</script>

<template>
  <section id="home" class="hero">
    <img :src="ccsLogo" alt="CCS logo" class="hero-logo" />
    <h1>Welcome to the College of Computer Studies</h1>
    <p>Write 2 to 3 sentences about CCS and its role in technology and computing education.</p>
    <RouterLink :to="{ path: '/', hash: '#programs' }" class="cta">
      Explore Our Programs
    </RouterLink>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 48px 24px;
  background: #f2f4f8;
}

.hero-logo {
  width: 140px;
}

.cta {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 20px;
  background: #0b5ed7;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}
</style>