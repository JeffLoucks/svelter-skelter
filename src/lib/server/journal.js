import { entries } from './database';

function getEntryById(id) {
	return new Promise((resolve, reject) => {
		if (!id) {
			reject({
				status: 404,
				type: 'NOT_FOUND',
				message: 'There\'s no entry with this id'
			})
		}
		const entry = entries.find(item => item.id === id);
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
