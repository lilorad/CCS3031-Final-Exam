<script setup>
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="bsdmia">
    <header class="program-hero">
      <RouterLink to="/#programs" class="back-link">← Back to Programs</RouterLink>
      <h1>Bachelor of Science in Digital Media and Interactive Arts</h1>
      <p>Where creativity meets technology to bring ideas to life.</p>
    </header>

    <InfoSection title="Program Overview">
      <p>The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) blends artistic creativity with technical skills to prepare students for the digital content industry. The program covers graphic design, animation, video production, game design, and interactive media, so graduates can create engaging digital experiences across different platforms.</p>
    </InfoSection>

    <InfoSection title="What You Will Learn">
      <ul>
        <li>Graphic design and visual communication</li>
        <li>Animation and motion graphics</li>
        <li>Video production and editing</li>
        <li>Web and user interface (UI/UX) design</li>
      </ul>
    </InfoSection>

    <InfoSection title="Career Opportunities">
      <ul>
        <li>Graphic designer</li>
        <li>Animator or motion graphics artist</li>
        <li>Game designer or developer</li>
        <li>Video producer or editor</li>
        <li>UI/UX designer</li>
      </ul>
    </InfoSection>

    <InfoSection title="Why Choose This Program">
      <p>BSDMIA lets students turn creativity into a career. Digital content is needed by advertising, entertainment, gaming, education, and social media, so graduates have many industries to work in. Students also build a portfolio of real projects while studying, which helps when applying for jobs or taking on freelance work.</p>
    </InfoSection>

    <InfoSection title="Who Should Enroll">
      <p>This program is for students who love art, design, storytelling, and technology. It suits those who enjoy creating visuals, animations, games, or videos, and who want to turn their creative ideas into digital work. Drawing skills are helpful, but a strong interest in creating and learning is what matters most.</p>
    </InfoSection>

    <InfoSection title="Other Relevant Information">
      <p>BSDMIA is studio-based, and students build a professional portfolio of their own projects. Coursework spans 2D/3D animation, game design and development, UI/UX design, motion graphics, and digital video production. Students work with industry tools such as Adobe Creative Cloud, Blender, Unity, and Figma. Students can prepare for credentials such as Adobe Certified Professional or Unity Certified User. The program ends with a thesis or showcase of original work. The computer laboratory of Central Philippine University (CPU) is the Mary Thomas Building that is equipped with the latest hardware and software tools.</p>
    </InfoSection>
  </div>
</template>

<style scoped>
.bsdmia {
  --theme: #0f8b8d;
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
