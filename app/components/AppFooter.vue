<template>
  <footer class="border-t border-white/10 bg-gray-950/50 backdrop-blur mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold gradient-text mb-4">Hayder Abbas</h3>
          <p class="text-gray-400">
            Full Stack Web Developer passionate about creating beautiful and
            functional web experiences.
          </p>
        </div>
        <div class="flex justify-end">
          <div class="flex gap-4">
            <a
              href="https://github.com/hayder-abbas"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hayderabbas"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <IconLinkedin />
            </a>
            <a
              href="https://x.com/h_a_dev"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <IconTwitter />
            </a>
          </div>
        </div>
      </div>
      <div
        class="border-t border-white/10 mt-8 pt-8 flex justify-center items-center text-gray-400 text-sm"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} Hayder Abbas. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
