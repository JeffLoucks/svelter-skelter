//https://kit.svelte.dev/docs/load
import { getEntryById } from '$lib/server/journal.js';
import { error } from '@sveltejs/kit';

// https://kit.svelte.dev/docs/load

export async function load() {
	await getEntryById(entryId, url).catch((reason) => {
		throw error(reason.status, {
			type: reason.type,
			message: reason.message
		})
	})
	//CHALLENGE 1 HINT: How do I get this data to the view?
}
