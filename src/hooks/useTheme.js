import { useState, useEffect } from "react";

/**
 * Manages dark/light mode by toggling the `dark` class on <html>.
 * Defaults to dark mode. Persists choice in localStorage.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true; // default: dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, setDark };
}
