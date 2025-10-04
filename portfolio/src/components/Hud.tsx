"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/stores/useGame";

export default function Hud() {
  const { xp, level } = useGame();

  // pulse on level up (listen for changes)
  useEffect(() => {
    // no-op side effect for now; could toast level-up here
  }, [level]);

  const progress = (xp % 100) / 100;

  return (
    <div className="fixed bottom-4 right-4 z-[60] select-none">
      <AnimatePresence>
        <motion.div
          key={level}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur p-4 w-56 shadow-xl"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">Level {level}</span>
            <span className="text-white/60">{xp} XP</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
