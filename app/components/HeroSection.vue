<template>
	<section
		class="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden"
	>
		<div class="relative z-10 text-center max-w-4xl mx-auto">
			<!-- Animated avatar -->
			<div class="mb-8 inline-block">
				<div
					class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-1 animate-float"
				>
					<img
						src="/images/Profile-picture.jpg"
						alt="Heydar"
						class="w-full h-full rounded-full object-cover"
					/>
				</div>
			</div>

			<!-- Main headline -->
			<h1
				class="flex flex-col text-5xl md:text-7xl font-bold mb-4 animate-slide-up"
			>
				<span class="gradient-text py-4">I'm Hayder</span>
				<span class="text-white">Full-Stack Developer</span>
			</h1>

			<!-- Subtitle -->
			<p
				class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up"
				style="animation-delay: 0.1s"
			>
				I build beautiful, responsive web applications with modern technologies.
			</p>

			<!-- CTA Buttons -->
			<div
				class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
				style="animation-delay: 0.2s"
			>
				<a href="/Hayder_Abbas_resume.pdf" class="button-primary" download>
					Download Resume
				</a>
			</div>

			<!-- Scroll indicator -->
			<div class="flex justify-center mt-16 animate-bounce">
				<svg
					class="w-6 h-6 text-purple-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
