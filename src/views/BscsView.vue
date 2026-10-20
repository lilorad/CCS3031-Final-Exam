<script setup>
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="bscs">
    <header class="program-hero">
      <RouterLink to="/#programs" class="back-link">← Back to Programs</RouterLink>
      <h1>Bachelor of Science in Computer Science</h1>
      <p>Master the logic and theory behind the software that shapes the world.</p>
    </header>

    <InfoSection title="Program Overview">
      <p>The Bachelor of Science in Computer Science (BSCS) develops students’ understanding of how computers work and how to make them solve real problems. The program focuses on programming, algorithms, data structures, and software development, giving graduates a strong theoretical and practical foundation for the fast-changing field of computing.</p>
    </InfoSection>

    <InfoSection title="What You Will Learn">
      <ul>
        <li>Algorithms and data structures</li>
        <li>Operating systems and computer architecture</li>
        <li>Programming languages and software development</li>
        <li>Artificial intelligence and machine learning fundamentals</li>
      </ul>
    </InfoSection>

    <InfoSection title="Career Opportunities">
      <ul>
        <li>Software engineer or developer</li>
        <li>Data scientist or data analyst</li>
        <li>AI researcher or machine learning engineer</li>
        <li>Researcher or computer science educator</li>
      </ul>
    </InfoSection>

    <InfoSection title="Why Choose This Program">
      <p>BSCS builds a strong foundation in computing theory, which makes it easier to adapt as technologies change. Its emphasis on logic, mathematics, and problem-solving prepares graduates for advanced roles in software development, data, and emerging fields like AI. The skills are also useful for further studies and research.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is for students who enjoy logic, mathematics, and solving challenging problems. It suits those who want to understand how software works from the inside, and who are curious about topics like algorithms, artificial intelligence, and data. Prior programming experience is helpful but not required.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>BSCS emphasizes theory alongside practice, with core courses in algorithms, data structures, automata, operating systems, and software engineering. Many programs offer advanced tracks or electives in artificial intelligence, machine learning, and data science. Students complete a research-based thesis, and many join programming contests and hackathons such as the ICPC. Graduates can pursue certifications such as AWS, Google Cloud, or TensorFlow Developer, or go on to graduate study. The computer laboratory of Central Philippine University (CPU) is the Mary Thomas Building that is equipped with the latest hardware and software tools. </p>
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