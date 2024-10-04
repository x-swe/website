<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs/lib/anime.js';

	// Set page title on component mount
	let pageTitle = 'Software Engineering Network';
	onMount(() => {
		document.title = pageTitle;

		// Initialize the animation when the component mounts
		anime({
			targets: '.rgb-text',
			color: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
			duration: 15000,
			easing: 'linear',
			loop: true,
			// To ensure the animation is smooth
			autoplay: true,
			direction: 'alternate'
		});
	});

	// Define the communities array with image paths, names, and links
	const communities = [
		{
			name: 'Software Engineering',
			image: '/communities/swe.jpeg',
			link: 'https://x.com/i/communities/1699807431709041070'
		},
		{
			name: 'Web Developers',
			image: '/communities/webdevelopers.png',
			link: 'https://x.com/i/communities/1488952693443997701'
		},
		{
			name: 'Rust Programming Language',
			image: '/communities/rust.png',
			link: 'https://x.com/i/communities/1733520006279815231'
		},
		{
			name: 'Go Programming Language',
			image: '/communities/go.png',
			link: 'https://x.com/i/communities/1817186904846029101'
		},
		{
			name: 'DevOps | SRE',
			image: '/communities/devops.jpeg',
			link: 'https://x.com/i/communities/1523681883384549376'
		},
		{
			name: 'Quantum Computing',
			image: '/communities/quantum.jpeg',
			link: 'https://x.com/i/communities/1817237800544092581'
		},
		{
			name: 'Machine Learning',
			image: '/communities/ml.jpeg',
			link: 'https://x.com/i/communities/1760409305298174098'
		}
	];
</script>

<h1 class="regular-font text-black uppercase dark:text-white">
	We invest in the <span class="rgb-text italic">engineers</span> of tomorrow.
</h1>
<p class="mt-6 text-lg regular-font text-black dark:text-gray max-w-4xl">
	Welcome to the official website for the Software Engineering Network. Here, we come together to
	share, discuss, and learn from each other.
</p>

<!-- Community Section -->
<div class="mt-16 max-w-6xl mx-auto">
	<h2 class="text-2xl mb-4 regular-font text-black uppercase dark:text-white">Our Communities</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each communities as community}
			<a href={community.link} class="community-card-link">
				<div
					class="community-card border border-full-white dark:border-gray-light rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
				>
					<img
						src={community.image}
						width=""
						alt={community.name}
						class="community-image mx-auto mb-2 transform transition duration-500"
					/>
					<div class="text-lg regular-font mb-1 text-black dark:text-white">{community.name}</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.community-image {
		filter: grayscale(100%);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
		width: 100%; /* Ensure the image fits the card width */
		height: auto; /* Maintain the aspect ratio */
	}

	.community-card {
		overflow: hidden; /* Prevent the image from overflowing */
		transition: background-color 0.3s ease; /* Adjust the duration as needed */
	}

	.community-card:hover .community-image {
		filter: grayscale(0%);
		transform: scale(1.05); /* Zoom in the image by 5% */
	}

	.community-card:hover {
		background-color: rgba(0, 0, 0, 0); /* Transparent black background */
	}

	/* Remove the underline from links */
	.community-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}
</style>
