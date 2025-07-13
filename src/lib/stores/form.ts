import { writable } from "svelte/store";

export const isFormOpen = writable(false);

/**
 * Toggles the form open state.
 */
export function toggleForm() {
    isFormOpen.update((open) => !open);
}

/**
 * Closes the form by setting `isFormOpen` to false.
 */
export function closeForm() {
    isFormOpen.set(false);
}

/**
 * Sets the form open state to true.
 */
export function openForm() {
    isFormOpen.set(true);
}
