<script>
	import { page } from '$app/stores';

	// Error pages at the root of your Svelte apps are your "default" error pages.
	// This will catch any errors that any child +error.svelte pages don't catch
	// Look for where we are importing { error } from svelte, and you'll see how this get populated

</script>

<main class="flex items-center h-screen">
	<section class="flex flex-col items-center justify-center w-screen">
		<h1 class="text-xl">{$page.status} Error</h1>
		<h3>{$page?.error?.message}</h3>
		<a class="text-blue-500" href="/">Go home</a>
	</section>
</main>
