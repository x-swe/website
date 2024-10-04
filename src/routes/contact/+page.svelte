<script lang="ts">
	import { onMount } from 'svelte';
	let pageTitle = 'Contact - Software Engineering Network';
	onMount(() => {
		document.title = pageTitle;
	});
</script>

<h1 class="regular-font text-black uppercase dark:text-white">Contact</h1>

<dl
	class="mt-14 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
>
	<div class="flex flex-col pb-3">
		<dt class="regular-font mb-1 text-gray md:text-lg dark:text-grey">Email address</dt>
		<dd class="regular-font text-lg dark:text-white">mjovanc@icloud.com</dd>
	</div>
	<div class="flex flex-col py-3">
		<dt class="regular-font mb-1 text-gray md:text-lg dark:text-grey">𝕏</dt>
		<dd class="regular-font text-lg dark:text-white">
			<a
				href="https://x.com/mjovanc"
				class="hover:text-blue-400 dark:hover:text-purple dark:text-white"
				target="_blank">@mjovanc</a
			>
		</dd>
	</div>
</dl>
