import { create } from "zustand";

export type QuestId = "view_skills" | "view_projects" | "view_testimonials" | "send_contact";

type GameState = {
  xp: number;
  level: number;
  completed: Record<QuestId, boolean>;
  addXp: (amount: number) => void;
  complete: (id: QuestId, xp?: number) => void;
  reset: () => void;
};

const levelForXp = (xp: number): number => {
  // simple curve: lvl up every 100 xp
  return Math.floor(xp / 100) + 1;
};

export const useGame = create<GameState>((set, get) => ({
  xp: 0,
  level: 1,
  completed: {
    view_skills: false,
    view_projects: false,
    view_testimonials: false,
    send_contact: false,
  },
  addXp: (amount) => set((s) => {
    const newXp = Math.max(0, s.xp + amount);
    return { xp: newXp, level: levelForXp(newXp) };
  }),
  complete: (id, xp = 50) => set((s) => {
    if (s.completed[id]) return s;
    const newXp = s.xp + xp;
    const updated = { ...s.completed, [id]: true };
    return { xp: newXp, level: levelForXp(newXp), completed: updated };
  }),
  reset: () => set({ xp: 0, level: 1, completed: { view_skills: false, view_projects: false, view_testimonials: false, send_contact: false } }),
}));
