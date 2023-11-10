<script>
	import { enhance } from '$app/forms';
	import { localEntries, challenge2Enabled } from '$lib/client/local-state.js';
	import challengeService from '$lib/client/challenge-service.js';
	import { onMount } from 'svelte';

	export let data;
	export let form;

	onMount(() => {
		//onMount assures code is running the browser
		challengeService.loadDashboard(data);
	})

	$: user = data.user;
	$: challenge3Enabled = $localEntries.length > 1 && $localEntries[1] && $localEntries[1]?.steps.length > 0;
</script>

<main class="mt-16 flex flex-col items-center">

	<h1 class="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Svelte, {user.name}.</h1>
	<section class="mb-4 md:h-[300px] flex flex-wrap items-center justify-center">
		{#each $localEntries as entry}
		<a class="mb-4" href="/journal/{entry.id}">
			<div class="p-8 xl:p-10 mx-4 w-[250px] h-[150px] flex flex-col items-center justify-center rounded-3xl ring-2 ring-indigo-600">
				<h3 class="text-2xl font-bold tracking-tight text-gray-900">{entry.title}</h3>
				<p class="text-center">{entry.description}</p>
			</div>
		</a>
		{/each}
	</section>

	{#if challenge3Enabled && $localEntries.length < 3}
		<div class="mb-8 mx-auto flex justify-end max-w-3xl text-base leading-7 text-gray-700">
			<button type="button" on:click={challengeService.unlockFinalBoss} class="inline-flex items-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400" disabled={!challenge3Enabled}>Unlock Final Challenge</button>
		</div>
	{/if}

{#if $challenge2Enabled}
	<section class="h-[300px] w-screen flex items-center justify-center">
		<form method="POST" action="?/logentry" class="w-1/2" use:enhance={challengeService.submitChallenge2}>
			<div class="isolate -space-y-px rounded-md shadow-sm">
				<div class="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label for="title" class="block text-xs font-medium text-gray-900">Title</label>
					<input type="text" name="title" id="title" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Journal Title">
				</div>
				<div class="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
					<label for="description" class="block text-xs font-medium text-gray-900">Description</label>
					<input type="text" name="description" id="description" class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="What's the general idea here?">
				</div>
				<div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
					<label for="body" class="sr-only">How are you feeling?</label>
					<textarea rows="3" name="body" id="body" class="block w-full resize-none border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="How are you feeling?"></textarea>
					<div class="py-2" aria-hidden="true">
					<div class="py-px">
						<div class="h-9"></div>
					</div>
					</div>
				</div>
			</div>
			<div class="mt-4 flex justify-end">
				<button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log to server</button>
			</div>
			{#if form?.error}
				<div class="absolute text-red-700">{form.error}</div>
			{/if}
		</form>
	</section>
{/if}

</main>
