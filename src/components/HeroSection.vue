<script setup>
import ccsLogo from '../assets/ccs-logo.png'
</script>

<template>
  <section id="home" class="hero">
    <img :src="ccsLogo" alt="CCS logo" class="hero-logo" />
    <h1>Welcome to the College of Computer Studies</h1>
    <p>The College of Computer Studies is an important institution that focuses on providing education in software engineering, 
      IT professionals, data science, and cybersecurity through intensive study and research programs.


      
         Connecting theory and practice, the college enables students to develop unique software, 
      find solutions to algorithmic challenges, and keep pace with changing technological environments. In essence, it becomes an important element of digital transformation by working together with industries and developing professionals in the field of technology and computing.</p>
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
  width: 180px;
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

.hero h1 {
  margin-top: 16px;
  font-size: 2.5rem;
  
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 1.8rem;
  }
}
</style>