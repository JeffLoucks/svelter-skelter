<script>
	import { onMount } from 'svelte';
	import { localEntries } from '$lib/client/local-state.js';
	import challengeService from '$lib/client/challenge-service.js';

	//CHALLENGE 1 HINT: Hmmm... How do I get my data from the data loader?


	/*---------------- DONT MODIFY CODE BELOW THIS LINE ----------------*/

	onMount(() => {
		challengeService.enableChallenge2(data)
	})

	//If no entry comes from the server, then look in local state
	let entry = data.entry.steps.length ? data.entry : $localEntries[data.entry.id - 1];

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


