<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProgramCard from '../components/ProgramCard.vue'
import PartnerCard from '../components/PartnerCard.vue'

import bsitLogo from '../assets/bsit-logo.png'
import bscsLogo from '../assets/bscs-logo.png'
import bsdmiaLogo from '../assets/bsdmia-logo.png'
import blisLogo from '../assets/blis-logo.png'
import ciscoLogo from '../assets/cisco.png'
import oracleLogo from '../assets/oracle.png'

const programs = [
  {
    id: 'bsit',
    name: 'Bachelor of Science in Information Technology (BSIT)',
    description: 'Prepares students how to construct, operate, and safeguard technological systems used by business organizations, which include computer networks, databases, and websites and mobile applications.',
    logo: bsitLogo,
    to: '/bsit',
  },
  {
    id: 'bscs',
    name: 'Bachelor of Science in Computer Science (BSCS)',
    description: 'Focuses more with the theory and logic of computing, such as programming, algorithms, and software engineering.',
    logo: bscsLogo,
    to: '/bscs',
  },
  {
    id: 'bsdmia',
    name: 'Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)',
    description: 'Utilizes creativity and technology to teach students in graphic design, animation, game design, and other digital media forms.',
    logo: bsdmiaLogo,
    to: '/bsdmia',
  },
  {
    id: 'blis',
    name: 'Bachelor of Library and Information Science (BLIS)',
    description: 'Trains the students to organize, manage, and disseminate information within libraries, archival institutions, and resource centers.',
    logo: blisLogo,
    to: '/blis',
  },

  
]
const partners = [
  {
    id: 1,
    name: 'Cisco Networking Academy',
    description: 'Elective and certification courses in networking and IT skills, including CCNA preparation.',
    logo: ciscoLogo,
  },
  {
    id: 2,
    name: 'Oracle Academic Initiative',
    description: 'Database and software training through the Oracle academic program.',
    logo: oracleLogo,
  },
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