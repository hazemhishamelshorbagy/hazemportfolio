"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], ["-20px", "-120px"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["20px", "120px"]);

  return (
    <section ref={ref} id="projects" className="relative mx-auto max-w-6xl px-6 py-20 overflow-hidden">
      <motion.div style={{ y: yLeft }} className="absolute -left-40 -top-20 size-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
      <motion.div style={{ y: yRight }} className="absolute -right-40 -bottom-20 size-[380px] rounded-full bg-violet-500/10 blur-3xl" />
      <h2 className="text-2xl sm:text-3xl font-semibold">Signature Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          { t: "Fintech Performance Overhaul", d: "Cut load time by 40% → boosted conversions." },
          { t: "Reusable UI System", d: "Built component library → reduced feature delivery time by 30%." },
          { t: "AI-driven Automation", d: "Automated 100+ hours of manual work with workflows." },
          { t: "Performance Advisory", d: "Implemented budgets & observability across teams." },
        ].map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] transition"
          >
            <h3 className="font-semibold">{p.t}</h3>
            <p className="mt-2 text-white/80">{p.d}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
