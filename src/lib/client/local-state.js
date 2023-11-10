import { writable } from "svelte/store";

// Svelte stores come built in with SvelteKit! So cool! This is how we are sharing data across components.
// Careful tho, you'll lose in on refresh. WAH WAH.


const localEntries = writable([]);
const challenge2Enabled = writable(false);

export {
	localEntries,
	challenge2Enabled,
}
