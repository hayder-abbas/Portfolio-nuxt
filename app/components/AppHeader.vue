<script setup lang="ts">
const mobileMenuOpen = ref(false);

function closeMenu() {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
    <nav class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div
            class="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              class="w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
          <span class="text-xl font-bold gradient-text sm:inline">
            HayderAbbas
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            href="#about"
            class="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            class="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            class="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <IconMenuBtn />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 space-y-2 border-t border-white/10 pt-4"
      >
        <a
          @click="closeMenu()"
          href="#about"
          class="block py-2 text-gray-300 hover:text-white transition-colors"
        >
          About
        </a>
        <a
          @click="closeMenu()"
          href="#skills"
          class="block py-2 text-gray-300 hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          @click="closeMenu()"
          href="#projects"
          class="block py-2 text-gray-300 hover:text-white transition-colors"
        >
          Projects
        </a>
      </div>
    </nav>
  </header>
</template>
