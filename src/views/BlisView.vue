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
      <p>The Bachelor of Library and Information Science (BLIS) equips learners with knowledge on how to gather, classify, preserve, and disseminate information in various forms. Topics studied under the BLIS include library administration, cataloguing and classification, information search and retrieval, and digital resources. This will enable the BLIS graduates to offer their services in communities within libraries, archives, schools, and other information institutions.</p>
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
      <p>With the increase in information, organizations require individuals to be capable of organizing information and assisting other people in accessing the information. In this course, the library skills will be combined with technologies. Thus, graduates from the course will be prepared for information environments whether physical or digital.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is for students who enjoy reading, research, and organizing information. It suits those who like helping others find answers, and who are interested in how knowledge is stored, shared, and preserved. A love of learning and a service-minded attitude matter most.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>The BLIS undertake a supervised library practicum assignment in school libraries, public libraries, academic libraries, or special libraries. The course will prepare the students for the Librarian Licensure Examination administered by the Professional Regulation Commission (PRC). Some of the topics taught in the BLIS include cataloging and classification like Dewey Decimal Classification and MARC,  library automation software (Koha), and digital repositories (DSpace). There is an option to join professional associations such as the Philippine Librarians Association, Inc. (PLAI). The CPU Library is the Henry Luce III Library.</p>
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