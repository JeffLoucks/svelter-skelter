//https://kit.svelte.dev/docs/load
import { getEntryById } from '$lib/server/journal.js';
import { error } from '@sveltejs/kit';

export async function load({ locals, url }) {

	const user = locals.user;
	const entryId = url.pathname.split('/').at(-1);
	let entry = await getEntryById(entryId).catch((reason) => {
		if (entryId === '2' || entryId === '3') {
			return;
		}
		throw error(reason.status, {
			type: reason.type,
			message: reason.message
		})
	})

	if (entryId === '2') {
		entry = {
			title: 'Challenge 2',
			id: '2',
			ownerId: '123456',
			description: url.searchParams.get('description') || 'Nothin\' here yet',
			body: url.searchParams.get('body'),
			steps: url.searchParams.get('title') && url.searchParams.get('body') ? [{title: url.searchParams.get('title') , body: url.searchParams.get('body')}] : []
		}
	}

	if (entryId === '3') {
		entry = {
			title: "Challenge 3",
			description: "Connect another service",
			id: '3',
			ownerId: '123456',
			steps: [
				{
					title: "Now you know the svelte basics.",
					body: "Great work! This must have been fun for you. Now let's make this real!"
				},
				{
					title: "Make it real? I don't know if I'm ready for this.",
					body: "Well, you'll never be ready if you don't just commit and make the jump already! Make this project your own in whatever way you see fit. Some ideas are: connecting a database, changing this app entirely by using the existing forms to submit data to a backend service like an AI tool, use some other API to pull in data, or just add 'Svelte Master' to your resume and move on."
				},
				{
					title: "I really am happy for you.",
					body: "I love svelte, and it was a joy to help you experience it. Even if it got a little weird at times."
				}
			]
		}
	}

	return {
		entry,
		user
	}

}
