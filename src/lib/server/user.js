

function getUser() {
	const user = {
		email: 'me@me.com',
		name: 'me',
		userId: '123456'
	}
	return Promise.resolve(user);
}

export { getUser };
