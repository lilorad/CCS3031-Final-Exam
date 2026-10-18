<script setup>
import { RouterLink } from 'vue-router'
import ccsLogo from '../assets/ccs-logo.png'
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="brand">
      <img :src="ccsLogo" alt="CCS logo" class="nav-logo" />
      <span>CCS</span>
    </RouterLink>

    <nav>
      <RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#programs' }">Programs Offered</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#partnerships' }">Partnerships and Memberships</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 8px 20px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
}

.nav-logo {
  width: 36px;
}

.ccs-logo {
  width: 50px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 12px 20px;
  border-radius: 15px; 
}

nav a {
  text-decoration: none;
  color: #000;

}
.navbar a:hover {
  color: #0b5ed7;             /* The new color when hovered (Gold/Yellow) */
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }

  nav {
    justify-content: center;
  }

  
}
</style>