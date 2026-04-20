<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Hayder Abbas | Full-Stack Web Developer",
  meta: [
    {
      name: "description",
      content:
        "Full-Stack Web Developer. Building beautiful, responsive web applications with Vue.js, Nuxt, Laravel, and modern technologies.",
    },
    {
      name: "keywords",
      content:
        "Web Developer, Full Stack, Vue.js, Nuxt.js, Laravel, Web Development, Portfolio",
    },
    {
      property: "og:title",
      content: "Hayder Abbas | Full-Stack Web Developer",
    },
    {
      property: "og:description",
      content:
        "Full Stack Web Developer. Building beautiful, responsive web applications.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" font-weight="bold" fill="%238B5CF6">H</text></svg>',
    },
  ],
});

onMounted(() => {
  // Add scroll reveal animation on mount
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
});
</script>
