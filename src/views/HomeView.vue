<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProgramCard from '../components/ProgramCard.vue'
import PartnerCard from '../components/PartnerCard.vue'

import bsitLogo from '../assets/bsit-logo.png'
import bscsLogo from '../assets/bscs-logo.png'
import bsdmiaLogo from '../assets/bsdmia-logo.png'
import blisLogo from '../assets/blis-logo.png'
import partner1 from '../assets/partner1.png'

const programs = [
  {
    id: 'bsit',
    name: 'Bachelor of Science in Information Technology (BSIT)',
    description: 'Brief intro here.',
    logo: bsitLogo,
    to: '/bsit',
  },
  {
    id: 'bscs',
    name: 'Bachelor of Science in Computer Science (BSCS)',
    description: 'Brief intro here.',
    logo: bscsLogo,
    to: '/bscs',
  },
  {
    id: 'bsdmia',
    name: 'Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)',
    description: 'Brief intro here.',
    logo: bsdmiaLogo,
    to: '/bsdmia',
  },
  {
    id: 'blis',
    name: 'Bachelor of Library and Information Science (BLIS)',
    description: 'Brief intro here.',
    logo: blisLogo,
    to: '/blis',
  },
]

const partners = [
  { id: 1, name: 'Partner name', description: 'Short description.', logo: partner1 },
]
</script>

<template>
  <main>
    <HeroSection />

    <section id="programs" class="section">
      <h2>Programs Offered</h2>
      <div class="grid">
        <ProgramCard
          v-for="program in programs"
          :key="program.id"
          :logo="program.logo"
          :name="program.name"
          :description="program.description"
          :to="program.to"
        />
      </div>
    </section>

    <section id="partnerships" class="section">
      <h2>Partnerships and Memberships</h2>
      <div class="grid">
        <PartnerCard
          v-for="partner in partners"
          :key="partner.id"
          :logo="partner.logo"
          :name="partner.name"
          :description="partner.description"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
</style>