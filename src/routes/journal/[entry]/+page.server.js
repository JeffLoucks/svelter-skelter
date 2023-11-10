//https://kit.svelte.dev/docs/load
import { getEntryById } from '$lib/server/journal.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, url }) {

	const user = locals.user;
	const entryId = url.pathname.split('/').at(-1);
	let entry = await getEntryById(entryId, url).catch((reason) => {
		throw error(reason.status, {
			type: reason.type,
			message: reason.message
		})
	})


	return {
		entry,
		user
	}

}
