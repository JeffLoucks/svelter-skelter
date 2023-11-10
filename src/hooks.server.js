import { getUser } from '$lib/server/user.js';
//https://kit.svelte.dev/docs/hooks
export async function handle({ event, resolve }) {
	/*
		Hooks.server.js is so cool
		It intercepts all requests handled by sveltekit, so you can do cool things like check for cookies,
		and set user data in your headers for each request
	*/
	if (!event.locals.user) {
		// const user = await getUser();
		event.locals.user = {
			email: 'me@me.com',
			name: 'Where is this info set?',
			//Take a walk on the wild side and remove this ID. Just see what happens 🤷‍♂️
			userId: '123456'
		};
	}


	return resolve(event);
}
