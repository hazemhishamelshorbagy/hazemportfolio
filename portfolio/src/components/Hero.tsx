"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform, motion as m } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
      <m.div style={{ y: yBack }} className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
      </m.div>
      <m.img style={{ y: yMid }} src="/globe.svg" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" />
      <m.div style={{ y: yFront }} className="pointer-events-none absolute -top-32 right-20 size-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          Senior Frontend Engineer | 8+ Years | Performance & Accessibility Obsessed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto"
        >
          I design AI-assisted workflows, optimize performance budgets, and automate delivery pipelines.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90">
            See Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10">
            Let’s Connect
          </a>
        </motion.div>
      </div>

      {/* additional very subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
    </section>
  );
}
