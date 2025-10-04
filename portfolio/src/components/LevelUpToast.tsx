"use client";

import { useEffect, useState } from "react";
import { useGame } from "@/stores/useGame";
import { AnimatePresence, motion } from "framer-motion";

export default function LevelUpToast() {
  const { lastLevelUpAt, level } = useGame();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (lastLevelUpAt) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(t);
    }
  }, [lastLevelUpAt]);

  return (
    <div className="fixed top-20 right-4 z-[80]">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: -10, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-200 backdrop-blur px-4 py-2 shadow-lg"
          >
            Level up! Now level {level}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
