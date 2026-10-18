<script setup>
import ccsLogo from '../assets/ccs-logo.png'
</script>

<template>
  <section id="home" class="hero">
    <img :src="ccsLogo" alt="CCS logo" class="hero-logo" />
    <h1>Welcome to the College of Computer Studies</h1>
    <p>The College of Computer Studies (CCS) serves as a vital academic hub dedicated to training the next generation of software engineers, 
      IT specialists, data scientists, and cybersecurity experts through rigorous coursework and practical research.
      
      By bridging fundamental theory with hands-on technical application, the college equips students to design innovative software, 
      solve complex algorithmic problems, and adapt to rapidly evolving tech landscapes. Ultimately, it plays a central role in driving digital transformation by fostering industry partnerships and preparing skilled professionals to lead global advances in technology and computing.</p>
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