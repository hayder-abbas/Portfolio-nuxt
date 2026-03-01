<template>
	<section id="projects" class="section-container">
		<div class="scroll-reveal">
			<h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
				Featured Projects
			</h2>
			<p class="text-xl text-gray-400 mb-12 max-w-2xl">
				A selection of notable projects demonstrating my skills and expertise
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Project 1 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.1s"
				>
					<div
						class="h-48 bg-linear-to-br from-blue-600 to-blue-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						🍴
						<div
							class="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">YourMenuPage</h3>
						<p class="text-gray-400">
							A full-stack single-page application (SPA) built with Laravel,
							Inertia.js, and Vue.js. Implements secure authentication using
							Laravel Sanctum and utilizes SQLite as the database. Designed as a
							scalable online menu platform for restaurants and coffee shops.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Laravel</span>
							<span class="skill-badge">Inertia.js</span>
							<span class="skill-badge">Vue.js</span>
							<span class="skill-badge">SQLite</span>
							<span class="skill-badge">Sanctum Authentication</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="https://github.com/hayder-abbas/yourmenupage-inertia.js"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="#"
								class="flex-1 py-2 px-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 2 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.2s"
				>
					<div
						class="h-48 bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						🧮
						<div
							class="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">Hisouby | حيسوبي</h3>
						<p class="text-gray-400">
							A full-stack single-page application (SPA) developed with Nuxt.js,
							utilizing Firebase Firestore as the database and deployed on
							Firebase Hosting. Designed as an interactive learning platform to
							train students in mathematics from elementary to high school
							levels.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">Nuxt.js</span>
							<span class="skill-badge">Tailwind CSS</span>
							<span class="skill-badge">Firebase Authentication</span>
							<span class="skill-badge">Firestore Database</span>
							<span class="skill-badge">Firebase Hosting</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="https://github.com/hayder-abbas/hisouby"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="https://hisouby.web.app"
								class="flex-1 py-2 px-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>

				<!-- Project 3 -->
				<div
					class="scroll-reveal glass-effect overflow-hidden rounded-xl card-hover group"
					style="animation-delay: 0.2s"
				>
					<div
						class="h-48 bg-linear-to-br from-yellow-600 to-yellow-900 flex items-center justify-center text-6xl overflow-hidden relative"
					>
						<img
							src="/images/card-form.jpg"
							alt="Interactive card details form"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
					</div>
					<div class="p-6 space-y-4">
						<h3 class="text-2xl font-bold text-white">
							Interactive card details form
						</h3>
						<p class="text-gray-400">
							Interactive card details form. Fill in the form and see the card
							details update in real-time. Build with HTML, CSS and Javascript.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="skill-badge">HTML</span>
							<span class="skill-badge">CSS</span>
							<span class="skill-badge">JS</span>
						</div>
						<div class="flex gap-3 pt-4 border-t border-white/10">
							<a
								href="https://github.com/hayder-abbas/Front-End-Mentor---ch02"
								class="flex-1 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center text-sm font-semibold"
							>
								GitHub
							</a>
							<a
								href="https://hayder-abbas.github.io/Front-End-Mentor---ch02"
								class="flex-1 py-2 px-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center text-sm font-semibold"
							>
								Live Demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
