"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGame } from "@/stores/useGame";

export default function Contact() {
  const { complete } = useGame();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      complete("send_contact", 80);
      form.reset();
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Contact
      </motion.h2>
      <motion.form
        onSubmit={onSubmit}
        className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5 grid gap-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.45 }}
      >
        <label className="grid gap-2">
          <span className="text-sm text-white/70">Name</span>
          <input name="name" required className="px-3 py-2 rounded-md bg-black/30 border border-white/10 outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-white/70">Email</span>
          <input type="email" name="email" required className="px-3 py-2 rounded-md bg-black/30 border border-white/10 outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-white/70">Message</span>
          <textarea name="message" rows={5} required className="px-3 py-2 rounded-md bg-black/30 border border-white/10 outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <div className="flex items-center gap-3">
          <button disabled={status === "loading"} className="px-5 py-2.5 rounded-md bg-white text-black font-medium disabled:opacity-60">
            {status === "loading" ? "Sending..." : "Send"}
          </button>
          {status === "success" && <span className="text-sm text-emerald-400">Message sent! +80 XP</span>}
          {status === "error" && <span className="text-sm text-rose-400">Something went wrong.</span>}
        </div>
      </motion.form>
    </section>
  );
}
