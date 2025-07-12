import { writable } from "svelte/store";

export const notificationOpen = writable(true);
/**
 * Closes the notification by setting its open state to false and adjusting the height style.
 */
export function closeNotification() {
  notificationOpen.set(false);

  document.documentElement.style.setProperty(
    "--notification-height",
    "0px"
  );
}
