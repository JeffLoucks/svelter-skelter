//https://kit.svelte.dev/docs/load
import { getEntriesByUserId } from '$lib/server/journal.js';
import { fail, error, redirect } from '@sveltejs/kit';


// https://kit.svelte.dev/docs/load
export async function load() {

	//CHALLENGE 1 HINT: How do I get locals?
	const user = locals.user;

	const journalEntries = await getEntriesByUserId(user.userId).catch((reason) => {
		throw error(reason.status, {
			type: reason.type,
			message: reason.message
		})
	})
}


// https://kit.svelte.dev/docs/form-actions
export const actions = {
	logentry: async ({ }) => {

		if (!locals.user) {
			redirect(307, '/');
		}

		//CHALLENGE 2 HINT: How do I get this to populate from my form data on the root view?
		const entry = {}

		/*---------------- DONT MODIFY BELOW THIS LINE ----------------*/

		if (entry.title.length && entry.description.length && entry.body.length) {
			//Ordinarily, we'd do some sort of database call here to save the form data, but we ain't got one.
			//So, we're just passing the data through URL to get intercepted by the loader
			throw redirect(307, `/journal/2?title=${entry.title}&description=${entry.description}&body=${entry.body}`)
		}

		//Wowza, what a cool way to send form errors back to the client
		return fail(401, {
			error: 'Fill out all the fields!'
		})
	},
}
