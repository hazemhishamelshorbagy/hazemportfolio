"use client";

import { useEffect } from "react";
import { useTheme } from "@/stores/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else {
      // default to dark
      setTheme("dark");
    }
  }, [setTheme]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      try {
        window.localStorage.setItem("theme", theme);
      } catch {}
    }
  }, [theme]);

  return <>{children}</>;
}
