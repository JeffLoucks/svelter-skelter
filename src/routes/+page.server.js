//https://kit.svelte.dev/docs/load
import { getEntriesByUserId } from '$lib/server/journal.js';
import { fail, error, redirect } from '@sveltejs/kit';

export async function load({ locals }) {

	const user = locals.user;

	const journalEntries = await getEntriesByUserId(user.userId).catch((reason) => {
		throw error(reason.status, {
			type: reason.type,
			message: reason.message
		})
	})

	return {
		user,
		journalEntries
	}

}

export const actions = {
	logentry: async ({ locals, request }) => {

		if (!locals.user) {
			redirect(307, '/');
		}

		const data = await request.formData();

		const entry = {}

		for (const key of data.keys()) {
			entry[key] = data.get(key);
		}

		if (entry.title.length && entry.description.length && entry.body.length) {
			throw redirect(307, `/journal/2?title=${entry.title}&description=${entry.description}&body=${entry.body}`)
		}


		return fail(401, {
			error: 'Fill out all the fields!'
		})
	},
}
