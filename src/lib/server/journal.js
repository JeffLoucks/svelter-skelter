import { entries } from './database';

//GET OUTTA HERE!!!

function getEntryById(id, url) {
	return new Promise((resolve, reject) => {
		if (!id) {
			reject({
				status: 404,
				type: 'NOT_FOUND',
				message: 'There\'s no entry with this id'
			})
		}
		let entry = entries.find(item => item.id === id);
		if (id === '2') {
			entry = {
				title: 'Challenge 2',
				id: '2',
				ownerId: '123456',
				description: url.searchParams.get('description') || 'Nothin\' here yet',
				steps: url.searchParams.get('title') && url.searchParams.get('body') ? [{title: url.searchParams.get('title') , body: url.searchParams.get('body')}] : []
			}
		}

		if (id === '3') {
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
						body: "Well, you'll never be ready if you don't just commit and make the jump already! Make this project your own in whatever way you see fit. Some ideas are: connecting a database, changing this app entirely by using the existing forms to submit data to a backend service like an AI tool, use some other API to pull in data, create more routes or just add 'Svelte Master' to your resume and move on."
					},
					{
						title: "I really am happy for you.",
						body: "I love svelte, and it was a joy to help you experience it. Even if it got a little weird at times."
					}
				]
			}
		}
		if (!entry) {
			reject({
				status: 404,
				type: 'NOT_FOUND',
				message: 'There\'s no entry with this id'
			})
		}
		resolve(entry);
	})
}

function getEntriesByUserId(userId) {
	return new Promise((resolve, reject) => {
		if (!userId) {
			reject({
				status: 404,
				type: 'NOT_FOUND',
				message: 'There\'s no user with this id'
			})
		}
		const journalEntries = entries.filter(item => item.ownerId === userId);
		if (!journalEntries || journalEntries.length <= 0) {
			reject({
				status: 404,
				type: 'NOT_FOUND',
				message: 'This user has no entries'
			})
		}
		resolve(entries);
	})
}


export {
	getEntryById,
	getEntriesByUserId,
}
