<template>
	<div>
		<!-- Navigation Header -->
		<header
			class="fixed top-0 w-full z-50 glass-effect border-b border-white/10"
		>
			<nav class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between">
					<!-- Logo -->
					<NuxtLink to="/" class="flex items-center gap-2 group">
						<div
							class="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
						>
							H
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
							>About</a
						>
						<a
							href="#skills"
							class="text-gray-300 hover:text-white transition-colors"
							>Skills</a
						>
						<a
							href="#projects"
							class="text-gray-300 hover:text-white transition-colors"
							>Projects</a
						>
					</div>

					<!-- Mobile Menu Button -->
					<button
						class="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
						@click="mobileMenuOpen = !mobileMenuOpen"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				<!-- Mobile Navigation -->
				<div
					v-if="mobileMenuOpen"
					class="md:hidden mt-4 space-y-2 border-t border-white/10 pt-4"
				>
					<a
						href="#about"
						class="block py-2 text-gray-300 hover:text-white transition-colors"
						>About</a
					>
					<a
						href="#skills"
						class="block py-2 text-gray-300 hover:text-white transition-colors"
						>Skills</a
					>
					<a
						href="#projects"
						class="block py-2 text-gray-300 hover:text-white transition-colors"
						>Projects</a
					>
				</div>
			</nav>
		</header>

		<!-- Page Content -->
		<main class="pt-20">
			<slot />
		</main>

		<!-- Footer -->
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
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/hayderabbas"
								target="_blank"
								rel="noopener"
								class="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.836 0-9.753h3.554v1.384c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.39 3.733 4.379v5.6zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.79-1.708 1.957-1.708 1.168 0 1.915.74 1.948 1.708 0 .948-.78 1.706-1.99 1.706zm1.586 11.597H3.635V9.236h3.288v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
									/>
								</svg>
							</a>
							<a
								href="https://x.com/h_a_dev"
								target="_blank"
								rel="noopener"
								class="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div
					class="border-t border-white/10 mt-8 pt-8 flex justify-center items-center text-gray-400 text-sm"
				>
					<p>&copy; 2026 Hayder Abbas. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
	const mobileMenuOpen = ref(false);

	// Close mobile menu when clicking on navigation link
	const closeMenu = () => {
		mobileMenuOpen.value = false;
	};

	// Add event listener for scroll reveal animations
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
