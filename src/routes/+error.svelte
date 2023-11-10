<script>
	import { page } from '$app/stores';
</script>

<main class="flex items-center h-screen">
	<section class="flex flex-col items-center justify-center w-screen">
		<h1 class="text-xl">{$page.status} Error</h1>
		<h3>{$page?.error?.message}</h3>
		<a class="text-blue-500" href="/">Go home</a>
	</section>
</main>
