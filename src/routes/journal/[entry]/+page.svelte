<script>
	import { onMount } from 'svelte';
	import { localEntries } from '$lib/client/local-state.js';
	import { enableChallenge2 } from '$lib/client/challenge-service.js';

	export let data;


	onMount(() => {
		enableChallenge2(data)
	})

	$: entry = data.entry;

</script>

<article class="bg-white px-6 py-32 lg:px-8">
	<section class="mx-auto mb-8 max-w-3xl text-base leading-7 text-gray-700">
		<a class="text-blue-500" href="/">Back</a>

		<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{entry.title}</h1>

		{#each entry.steps as step}
			<h3 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">{step.title}</h3>
			<p class="mb-4">{step.body}</p>
		{/each}
	</section>


</article>


