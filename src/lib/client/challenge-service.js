import { localEntries, challenge2Enabled } from "./local-state";
import { get } from 'svelte/store';
import { browser } from "$app/environment";

//DO NOT MODIFY... unless you want to break everything!

function loadDashboard(data) {
	const challenge2Cached = localStorage.getItem('challenge2') && JSON.parse(localStorage.getItem('challenge2')) || null;
	if (!get(challenge2Enabled)) {
		localEntries.set(data.journalEntries)
	}
	if (!get(challenge2Enabled) && challenge2Cached) {
		challenge2Enabled.set(true);
		localEntries.set([...data.journalEntries, challenge2Cached])
	}
}

function enableChallenge2(data) {
	const enabled = get(challenge2Enabled)
	const currentEntries = get(localEntries);
	const challenge2Cached = localStorage.getItem('challenge2') && JSON.parse(localStorage.getItem('challenge2')) || null;
	if (!enabled && !challenge2Cached) {
		challenge2Enabled.set(true);
		localEntries.set([...currentEntries, {
			title: "Challenge 2",
			description: "Nothin' here yet",
			id: '2',
			ownerId: '123456',
			steps: []
		}])
	}
	if (!enabled && challenge2Cached) {
		challenge2Enabled.set(true);
		localEntries.set([...currentEntries, challenge2Cached])
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
	localEntries.set([...entries, finalEntry])
}

function submitChallenge2({ formData }) {
	const post2 = {
		title: 'Challenge 2',
		id: '2',
		ownerId: '123456',
		steps: [
			{
				title: formData.get('title'),
				body: formData.get('body')
			}
		],
		description: formData.get('description'),
	}
	browser && localStorage.setItem('challenge2', JSON.stringify(post2));
	return async({ update }) => {
		update();
	}
}


export default {
	loadDashboard,
	unlockFinalBoss,
	enableChallenge2,
	submitChallenge2
}
