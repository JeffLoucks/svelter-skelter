import { writable } from "svelte/store";

// Svelte stores come built in with SvelteKit! So cool! This is how we are sharing data across components in the browser.
// https://svelte.dev/docs/svelte-store

const localEntries = writable([]);
const challenge2Enabled = writable(false);

export {
	localEntries,
	challenge2Enabled,
}
