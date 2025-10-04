import { create } from "zustand";

export type QuestId =
  | "view_skills"
  | "view_projects"
  | "view_testimonials"
  | "send_contact"
  | "view_about"
  | "view_experience"
  | "view_content"
  | "download_cv";

type GameState = {
  xp: number;
  level: number;
  completed: Record<QuestId, boolean>;
  showLog: boolean;
  lastLevelUpAt: number | null;
  addXp: (amount: number) => void;
  complete: (id: QuestId, xp?: number) => void;
  reset: () => void;
  toggleLog: () => void;
};

const levelForXp = (xp: number): number => {
  // simple curve: lvl up every 100 xp
  return Math.floor(xp / 100) + 1;
};

const load = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("game");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const save = (state: Partial<GameState>) => {
  if (typeof window === "undefined") return;
  try {
    const prev = load() || {};
    window.localStorage.setItem("game", JSON.stringify({ ...prev, ...state }));
  } catch {}
};

export const useGame = create<GameState>((set, get) => ({
  xp: load()?.xp ?? 0,
  level: load()?.level ?? 1,
  showLog: false,
  lastLevelUpAt: null,
  completed: {
    view_skills: load()?.completed?.view_skills ?? false,
    view_projects: load()?.completed?.view_projects ?? false,
    view_testimonials: load()?.completed?.view_testimonials ?? false,
    send_contact: load()?.completed?.send_contact ?? false,
    view_about: load()?.completed?.view_about ?? false,
    view_experience: load()?.completed?.view_experience ?? false,
    view_content: load()?.completed?.view_content ?? false,
    download_cv: load()?.completed?.download_cv ?? false,
  },
  addXp: (amount) => set((s): GameState => {
    const prevLevel = s.level;
    const newXp = Math.max(0, s.xp + amount);
    const newLevel = levelForXp(newXp);
    const next: GameState = { ...s, xp: newXp, level: newLevel, lastLevelUpAt: newLevel > prevLevel ? Date.now() : s.lastLevelUpAt };
    save(next);
    return next;
  }),
  complete: (id, xp = 50) => set((s): GameState => {
    if (s.completed[id]) return s;
    const updated = { ...s.completed, [id]: true };
    const prevLevel = s.level;
    const newXp = s.xp + xp;
    const newLevel = levelForXp(newXp);
    const next: GameState = { ...s, xp: newXp, level: newLevel, completed: updated, lastLevelUpAt: newLevel > prevLevel ? Date.now() : s.lastLevelUpAt };
    save(next);
    return next;
  }),
  reset: () => {
    const baseState = { xp: 0, level: 1, showLog: false, completed: { view_skills: false, view_projects: false, view_testimonials: false, send_contact: false, view_about: false, view_experience: false, view_content: false, download_cv: false }, lastLevelUpAt: null };
    save(baseState as unknown as GameState);
    set(baseState as unknown as GameState);
  },
  toggleLog: () => set((s) => ({ showLog: !s.showLog })),
}));
