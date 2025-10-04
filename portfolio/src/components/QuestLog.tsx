"use client";

import { useGame } from "@/stores/useGame";
import { motion, AnimatePresence } from "framer-motion";

type QuestItem = { id: import("@/stores/useGame").QuestId; title: string; xp: number };
const QUEST_LIST: QuestItem[] = [
  { id: "view_about", title: "Discover who I am", xp: 30 },
  { id: "view_skills", title: "Survey core skills", xp: 40 },
  { id: "view_projects", title: "Explore signature projects", xp: 40 },
  { id: "view_experience", title: "Read experience timeline", xp: 30 },
  { id: "view_testimonials", title: "Check testimonials", xp: 30 },
  { id: "view_content", title: "Scan thought leadership", xp: 20 },
  { id: "download_cv", title: "Download resume", xp: 50 },
  { id: "send_contact", title: "Send a message", xp: 80 },
];

export default function QuestLog() {
  const { showLog, toggleLog, completed, xp, level } = useGame();

  return (
    <AnimatePresence>
      {showLog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur"
          onClick={toggleLog}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mx-auto mt-24 w-full max-w-md rounded-2xl border border-white/15 bg-black/70 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Quest Log</h3>
              <button className="text-white/60 hover:text-white" onClick={toggleLog}>Close</button>
            </div>
            <div className="mt-2 text-sm text-white/70">Level {level} · {xp} XP</div>
            <ul className="mt-4 space-y-2">
              {QUEST_LIST.map((q) => (
                <li key={q.id} className="flex items-center justify-between rounded-lg border border-white/10 p-3 bg-white/5">
                  <span className="text-white/85">{q.title}</span>
                  <span className={completed[q.id] ? "text-emerald-400" : "text-white/60"}>{completed[q.id] ? "Done" : `+${q.xp} XP`}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
