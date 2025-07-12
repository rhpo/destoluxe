import { writable } from "svelte/store";

export const mobileMenuOpen = writable(false);

/**
 * Toggles the state of the mobile menu open/closed.
 */
export function toggleMobileMenu() {
    mobileMenuOpen.update((open) => !open);
}

/**
 * Closes the mobile menu by setting the open state to false.
 */
export function closeMobileMenu() {
    mobileMenuOpen.set(false);
}

/**
 * Opens the mobile menu by setting the `mobileMenuOpen` state to true.
 */
export function openMobileMenu() {
    mobileMenuOpen.set(true);
}
