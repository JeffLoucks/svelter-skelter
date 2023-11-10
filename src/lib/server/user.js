//I'm not using this, but I left it here. This is a stub of what a getUser function may return that you could use in Hooks.Server.js

function getUser() {
	const user = {
		email: 'me@me.com',
		name: 'me',
		userId: '123456'
	}
	return Promise.resolve(user);
}

export { getUser };
