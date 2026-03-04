import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely — shadcn's standard utility.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
