<script setup>
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="blis">
    <header class="program-hero">
      <RouterLink to="/#programs" class="back-link">← Back to Programs</RouterLink>
      <h1>Bachelor of Library and Information Science</h1>
      <p>Connecting people to knowledge in a digital world.</p>
    </header>

    <InfoSection title="Program Overview">
      <p>The Bachelor of Library and Information Science (BLIS) prepares students to collect, organize, preserve, and share information in both traditional and digital formats. The program covers library management, cataloging and classification, information retrieval, and digital resources, so graduates can serve communities in libraries, archives, schools, and other information centers.</p>
    </InfoSection>

    <InfoSection title="What You Will Learn">
      <ul>
        <li>Library management and services</li>
        <li>Information retrieval and research assistance</li>
        <li>Digital libraries and information technology tools</li>
        <li>Cataloging and classification of information resources</li>
      </ul>
    </InfoSection>

    <InfoSection title="Career Opportunities">
      <ul>
        <li>Librarian</li>
        <li>Information Specialist</li>
        <li>Digital Archivist</li>
        <li>Library and learning resource center staff</li>
      </ul>
    </InfoSection>

    <InfoSection title="Why Choose This Program">
      <p>Information is growing fast, and organizations need people who can organize it and help others find what they need. BLIS combines traditional library skills with modern technology, so graduates are ready for both physical and digital information environments. The program also builds research, organization, and service skills that apply in many workplaces.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is for students who enjoy reading, research, and organizing information. It suits those who like helping others find answers, and who are interested in how knowledge is stored, shared, and preserved. A love of learning and a service-minded attitude matter most.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>Verified curriculum, facilities, certifications, etc.</p>
    </InfoSection>
  </div>
</template>

<style scoped>
.blis {
  --theme: #7a2e2e;
  --theme-light: #cfe0ff;
  font-family: Arial, sans-serif;
}

.program-hero {
  background: var(--theme);
  color: #fff;
  padding: 48px 24px;
  text-align: center;
}

.back-link {
  display: inline-block;
  margin-bottom: 16px;
  color: #fff;
}
</style>