import { create } from "zustand";

type ThemeState = {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  toggleTheme: () => void;
};

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "dark",
  setTheme: (t) => set({ theme: t }),
  toggleTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
}));
