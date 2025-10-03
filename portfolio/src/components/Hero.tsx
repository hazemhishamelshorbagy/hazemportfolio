"use client";

import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: "/globe.svg", speed: -20 },
          ]}
          className="absolute inset-0 opacity-[0.04]"
        />
      </ParallaxProvider>

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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
    </section>
  );
}
