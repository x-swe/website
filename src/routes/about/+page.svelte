<script lang="ts">
	import { onMount } from 'svelte';
	let pageTitle = 'About - Software Engineering Network';
	onMount(() => {
		document.title = pageTitle;
	});
</script>

<h1 class="regular-font text-black uppercase dark:text-white">About</h1>

<p class="mt-6 text-lg regular-font text-black dark:text-gray max-w-4xl">
	The community was founded on September 7, 2023, by <a
		href="https://x.com/mjovanc"
		class="hover:text-blue-400 dark:hover:text-purple dark:text-white"
		target="_blank">Marcus Cvjeticanin</a
	>. Initially, the goal was to create a dedicated space for backend engineers, as there was a lack
	of actively moderated communities for them at the time.
	<br />
	<br />
	As the community grew to 1,000 members, the idea emerged to broaden its scope to include a wider range
	of engineering disciplines. This led to renaming the community to "Software Engineering" to cover more
	topics and welcome more people.
	<br />
	<br />
	The communities feature on 𝕏 is still new and evolving rapidly with exciting updates. Our community
	is actively collaborating with the developers of 𝕏 to provide feedback and request new features that
	our members are eager to see. We are just at the beginning.
</p>
