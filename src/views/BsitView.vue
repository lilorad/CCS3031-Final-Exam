<script setup>
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="bsit">
    <header class="program-hero">
      <RouterLink to="/#programs" class="back-link">← Back to Programs</RouterLink>
      <h1>Bachelor of Science in Information Technology</h1>
      <p>Build the technology that powers the modern world.</p>
    </header>

    <InfoSection title="Program Overview">
      <p>The Bachelor of Science in Information Technology (BSIT) prepares students to design, develop, manage, and secure computer systems and applications. The program combines practical technical skills with problem-solving, so graduates can meet the technology needs of businesses, schools, government, and other organizations.</p>
    </InfoSection>

    <InfoSection title="What You Will Learn">
      <ul>
        <li>Programming and software development</li>
        <li>Web and mobile application development</li>
        <li>Network administration and cybersecurity</li>
        <li>Database design and management</li>
        <li>Information security and data protection</li>
      </ul>
    </InfoSection>

    <InfoSection title="Career Opportunities">
      <ul>
        <li>Database administrator</li>
        <li>Systems analyst</li>
        <li>Software Developer</li>
        <li>Web Developer</li>
        <li>Network Administrator</li>
      </ul>
    </InfoSection>

    <InfoSection title="Why Choose This Program">
      <p>The BSIT program focuses on hands-on, job-ready skills. Technology skills are needed in almost every industry, so graduates have many career paths to choose from. The program also builds skills in teamwork, communication, and critical thinking, which employers value in any field.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is for students who enjoy working with computers, solving problems, and learning how technology works. It suits anyone curious about building websites and apps, managing networks, or keeping systems secure. No prior programming experience is required, just interest and willingness to learn.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>Verified curriculum, facilities, certifications, etc.</p>
    </InfoSection>
  </div>
</template>

<style scoped>
.bsit {
  --theme: #0b5ed7;
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