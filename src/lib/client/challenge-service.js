import { localEntries, challenge2Enabled } from "./local-state";
import { get } from 'svelte/store';

//GET OUTTA HERE!!

function loadDashboard(data) {
	if (!get(challenge2Enabled)) {
		localEntries.set(data.journalEntries)
	}
}

function enableChallenge2(data) {
	const enabled = get(challenge2Enabled)
	const currentEntries = get(localEntries);
	if (!enabled) {
		challenge2Enabled.set(true);
		localEntries.set([...currentEntries, {
			title: "Challenge 2",
			description: "Nothin' here yet",
			id: '2',
			ownerId: '123456',
			steps: []
		}])
	}

	if (enabled && data.entry.id === '2' && data.entry.steps.length > 0) {
		//If it's the second challenge, and the form was filled out then add the entry to local state
		localEntries.set([get(localEntries)[0], data.entry]);
	}
}

function unlockFinalBoss() {
	const entries = get(localEntries)
	const finalEntry = {
		title: "Challenge 3",
		description: "Connect a backend service",
		id: '3',
		ownerId: '123456',
		steps: [
			{
				title: "Now you know the svelte basics.",
				body: "Great work! This must have been fun for you. Now let's make this real!"
			},
			{
				title: "Make it real? I don't know if I'm ready for this.",
				body: "Well, you'll never be ready if you don't just commit and make the jump already! Make this project your own in whatever way you see fit. Some ideas are: connecting a database, changing this app entirely by using the existing forms to submit data to a backend service like an AI tool, or just give up."
			},
			{
				title: "I really am happy for you.",
				body: "I love svelte, and it was a joy to help you experience it. Even if it got a little weird at times."
			}
		]
	}
	localEntries.set([...entries, finalEntry])
}


export {
	loadDashboard,
	unlockFinalBoss,
	enableChallenge2
}
