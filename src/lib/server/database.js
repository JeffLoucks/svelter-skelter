const entries = [
		{
			title: "Challenge 1",
			description: "Load a dynamic route",
			id: '1',
			ownerId: '123456',
			steps: [
				{
					title: "Congrats!",
					body: "You've brought data from the server into the client using Server Side Rendering. You must be so please with yourself."
				},
				{
					title: "What did we just do?",
					body: "We just learned how to render data and html on the SvelteKit server in a +pager.server.js file! Every +page.svelte file can have a corresponding page.js or page.server file. page.js files allow for universal rendering on the server and the client, so your html is rendered on the server and then hydrated on the client. This means that your code has to work in both places, but there are easy ways to get things like the document object. page.server.js files are ONLY rendered on the server. This is good for loaders that make calls to sensitive resources like a database."
				},
				{
					title: "What now?",
					body: "Now that you've gotten your loader working for the journal pages, a new challenger awaits. When you go back to the dashboard, you'll see a form and a new blog post titled 'Challenge 2'. Unfortunately, this blog post has no content! To complete this challenge, you must get the form working. I believe in you."
				}
			]
		},
	]

export { entries };
