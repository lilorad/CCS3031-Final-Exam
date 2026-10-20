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
    description: 'Prepares students to build, manage, and secure the technology systems that businesses rely on, including networks, databases, and web and mobile applications.',
    logo: bsitLogo,
    to: '/bsit',
  },
  {
    id: 'bscs',
    name: 'Bachelor of Science in Computer Science (BSCS)',
    description: 'Focuses on the theory and logic behind computing, including programming, algorithms, and software development, to prepare students for problem-solving and innovation.',
    logo: bscsLogo,
    to: '/bscs',
  },
  {
    id: 'bsdmia',
    name: 'Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)',
    description: 'Combines creativity and technology to train students in graphic design, animation, game design, and other interactive digital content.',
    logo: bsdmiaLogo,
    to: '/bsdmia',
  },
  {
    id: 'blis',
    name: 'Bachelor of Library and Information Science (BLIS)',
    description: 'Trains students to organize, manage, and share information in libraries, archives, and digital resource centers.',
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