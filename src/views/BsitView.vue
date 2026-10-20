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
      <p>BSIT program is geared towards skills that students can apply in their jobs. Since technology skills are required by all industries, students have plenty of options in terms of career choices. Additionally, the program offers skills in teamwork, communications, and critical thinking.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is designed for students who like to work on computers, solve problems, and understand how technologies function. This program can be suitable for those who have an interest in website and application development, network management, and computer security. There are no prerequisites needed except for your interest.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>BSIT learners get firsthand practice through lab work, on-the-job training, and a project to solve an existing problem in the real world. This curriculum will help in preparing for various certifications offered in the industry, such as CompTIA A+/Network+, Cisco CCNA, Microsoft Azure Fundamentals, and AWS Cloud Practitioner. The BSIT students learn through working in networks, web and mobile application development, databases, and system administration. The Computer Lab in Central Philippine University (CPU) is located in the Mary Thomas Building.</p>
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