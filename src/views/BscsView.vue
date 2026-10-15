<script setup>
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="bscs">
    <header class="program-hero">
      <RouterLink to="/#programs" class="back-link">← Back to Programs</RouterLink>
      <h1>Bachelor of Science in Computer Science</h1>
      <p>Write a one-line tagline here.</p>
    </header>

    <InfoSection title="Program Overview">
      <p>Write the overview here.</p>
    </InfoSection>

    <InfoSection title="What You Will Learn">
      <ul>
        <li>Skill or topic 1</li>
        <li>Skill or topic 2</li>
        <li>Skill or topic 3</li>
      </ul>
    </InfoSection>

    <InfoSection title="Career Opportunities">
      <ul>
        <li>Career 1</li>
        <li>Career 2</li>
        <li>Career 3</li>
      </ul>
    </InfoSection>

    <InfoSection title="Why Choose This Program">
      <p>Write the benefits here.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>Write who this suits here.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>Verified curriculum, facilities, certifications, etc.</p>
    </InfoSection>
  </div>
</template>

<style scoped>
.bscs {
  --theme: #5b2a9e;
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