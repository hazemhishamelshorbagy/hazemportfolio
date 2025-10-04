"use client";

import { useEffect } from "react";
import { useGame } from "@/stores/useGame";

export default function QuestObserver() {
  const { complete } = useGame();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets: Array<{ sel: string; quest: import("@/stores/useGame").QuestId; xp: number }> = [
      { sel: "#about", quest: "view_about", xp: 30 },
      { sel: "#skills", quest: "view_skills", xp: 40 },
      { sel: "#projects", quest: "view_projects", xp: 40 },
      { sel: "#experience", quest: "view_experience", xp: 30 },
      { sel: "#testimonials", quest: "view_testimonials", xp: 30 },
      { sel: "#content", quest: "view_content", xp: 20 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = targets.find((t) => entry.target.matches(t.sel));
            if (matched) {
              complete(matched.quest, matched.xp);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    targets.forEach((t) => {
      const el = document.querySelector(t.sel);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [complete]);

  return null;
}
