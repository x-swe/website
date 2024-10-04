<script lang="ts">
	import { onMount } from 'svelte';

	// Set page title on component mount
	let pageTitle = 'Team - Software Engineering Network';
	onMount(() => {
		document.title = pageTitle;
	});

	const admins = [
		{ name: 'Marcus Cvjeticanin', x: 'mjovanc', avatar: '/team/mjovanc.jpg' },
		{ name: 'Marko Denic', x: 'denicmarko', avatar: '/team/denicmarko.jpg' }
	];
	const coAdmins = [
		{
			name: 'Anthony Waldsmith',
			x: 'anthonywaldz',
			avatar: '/team/anthonywaldz.jpg'
		},
		{
			name: 'Khushi',
			x: 'ftw_khushi',
			avatar: '/team/ftw_khushi.jpg'
		},
		{
			name: 'Carlos Aponte',
			x: '0xCaponte',
			avatar: '/team/0xCaponte.jpg'
		},
		{
			name: 'Robin Hallabro-Kokko',
			x: 'hallabrokokko',
			avatar: '/team/hallabrokokko.jpeg'
		},
		{
			name: 'Nathaniel Knudsen',
			x: 'stoicswe',
			avatar: '/team/stoicswe.jpeg'
		}
	];
	const moderators = [
		{
			name: 'Filip Płotnicki',
			x: 'filipplotnicki',
			avatar: '/team/filipplotnicki.jpeg'
		},
		{
			name: 'Dongwook',
			x: 'DongWookChung2',
			avatar: '/team/DongWookChung2.jpeg'
		},
		{
			name: 'Haitong Yu',
			x: 'haitong_yu',
			avatar: '/team/haitong_yu.jpeg'
		},
		{
			name: 'Heath Henley',
			x: 'Heath_Henley',
			avatar: '/team/Heath_Henley.jpeg'
		},
		{
			name: 'Tim Ottinger',
			x: 'tottinge',
			avatar: '/team/tottinge.jpeg'
		},
		{
			name: 'Zach Warunek',
			x: 'ZachWarunek',
			avatar: '/team/ZachWarunek.jpeg'
		},
		{
			name: 'Adrian Dittman',
			x: 'AdrianDittman',
			avatar: '/team/AdrianDittmann.png'
		},
		{
			name: "Jono O'Shea",
			x: 'jono_oshea',
			avatar: '/team/jono_oshea.jpeg'
		},
		{
			name: 'Stephen Blum',
			x: 'stephenlb',
			avatar: '/team/stephenlb.jpeg'
		},
		{
			name: 'Vivek Naskar',
			x: 'vivek_naskar',
			avatar: '/team/vivek_naskar.jpeg'
		},
		{
			name: 'john',
			x: 'deobfuscations',
			avatar: '/team/deobfuscations.jpeg'
		},
		{
			name: 'Rohit Ghumare',
			x: 'ghumare64',
			avatar: '/team/ghumare64.jpeg'
		},
		{
			name: 'Tim Majerus',
			x: 'TheTimMajerus',
			avatar: '/team/TheTimMajerus.jpg'
		},
	];
</script>

<!-- Add this part of the content in the Svelte file to include the title and coming soon message -->
<h1 class="text-xl2 mt-14 regular-font text-black uppercase dark:text-white">Team</h1>

<div class="mt-16 max-w-6xl mx-auto">
	<h3 class="text-2xl mb-4 regular-font text-black uppercase dark:text-white">Admin/Founder</h3>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each admins as member}
			<div
				class="profile-card border border-full-white dark:border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
			>
				<img
					src={member.avatar}
					width="150"
					alt="Profile Picture"
					class="profile-image rounded-full mx-auto mb-2 transform transition duration-500"
				/>
				<div class="text-lg regular-font mb-1 text-black dark:text-white">{member.name}</div>
				<a
					href="https://x.com/{member.x}"
					target="_blank"
					rel="noopener noreferrer"
					class="regular-font">@{member.x}</a
				>
			</div>
		{/each}
	</div>

	<h3 class="text-2xl mt-16 mb-4 regular-font text-black uppercase dark:text-white">Co-Admins</h3>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each coAdmins as member}
			<div
				class="profile-card border border-full-white dark:border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
			>
				<img
					src={member.avatar}
					width="150"
					alt="Profile Picture"
					class="profile-image rounded-full mx-auto mb-2 transform transition duration-500"
				/>
				<div class="text-lg regular-font mb-1 text-black dark:text-white">{member.name}</div>
				<a
					href="https://x.com/{member.x}"
					target="_blank"
					rel="noopener noreferrer"
					class="regular-font">@{member.x}</a
				>
			</div>
		{/each}
	</div>

	<h3 class="text-2xl mt-16 mb-4 regular-font text-black uppercase dark:text-white">Moderators</h3>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each moderators as member}
			<div
				class="profile-card border border-full-white dark:border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
			>
				<img
					src={member.avatar}
					width="150"
					alt="Profile Picture"
					class="profile-image rounded-full mx-auto mb-2 transform transition duration-300"
				/>
				<div class="text-lg regular-font mb-1 text-black dark:text-white">{member.name}</div>
				<a
					href="https://x.com/{member.x}"
					target="_blank"
					rel="noopener noreferrer"
					class="regular-font">@{member.x}</a
				>
			</div>
		{/each}
	</div>
</div>

<style>
	.profile-image {
		filter: grayscale(100%);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
	}

	.profile-card:hover .profile-image {
		filter: grayscale(0%);
		transform: scale(1.05); /* Zoom in the image by 5% */
	}

	.profile-card {
		transition: background-color 0.3s ease; /* Adjust the duration as needed */
	}

	.profile-card:hover {
		background-color: rgba(0, 0, 0, 0); /* Transparent black background */
	}
</style>
