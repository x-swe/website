<script lang="ts">
  import { page } from '$app/stores';
</script>


<h1 class="mt-14 regular-font text-black uppercase dark:text-white">{$page.status}: {$page.error.message}</h1>