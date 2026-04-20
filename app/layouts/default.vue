<script setup lang="ts">
onMounted(() => {
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

<template>
  <div>
    <!-- Navigation Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
