<script lang="ts">
	let showMenu: boolean = false;

	function toggleNavbar(): void {
		showMenu = !showMenu;
	}
</script>

<div>
	<nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center no-hover-effect">
				<img
					src="/logo/black.svg"
					class="h-10 mr-3 block dark:hidden"
					alt="Software Engineering Network Logo"
				/>
				<img
					src="/logo/white.svg"
					class="h-10 mr-3 hidden dark:block"
					alt="Software Engineering Network Logo"
				/>
			</a>

			<!-- Mobile menu button -->
			<button
				on:click={toggleNavbar}
				class="flex md:hidden text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${
				showMenu ? 'flex' : 'hidden'
			}`}
		>
			<a
				class="regular-font text-gray-800 hover:text-blue-400 dark:hover:text-purple dark:text-white"
				href="/">Home</a
			>
			<a
				class="regular-font text-gray-800 hover:text-blue-400 dark:hover:text-purple dark:text-white"
				href="/partnership">Partnership</a
			>
			<a
				class="regular-font text-gray-800 hover:text-blue-400 dark:hover:text-purple dark:text-white"
				href="/team">Team</a
			>
			<a
				class="regular-font text-gray-800 hover:text-blue-400 dark:hover:text-purple dark:text-white"
				href="/about">About</a
			>
			<a
				class="regular-font text-gray-800 hover:text-blue-400 dark:hover:text-purple dark:text-white"
				href="/contact">Contact</a
			>
		</div>
	</nav>
</div>
