"use client";

import Link from "next/link";
import { useTheme } from "@/stores/useTheme";
import { FiMoon, FiSun, FiDownload, FiLinkedin } from "react-icons/fi";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/10 bg-black/20 text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight">Mazen | Frontend</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
          <a href="#content" className="hover:opacity-80">Content</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10 transition"
            href="/cv.pdf" download
          >
            <FiDownload /> <span>Download CV</span>
          </a>
          <a
            aria-label="LinkedIn"
            className="rounded-full p-2 border border-white/15 hover:bg-white/10 transition"
            href="https://www.linkedin.com/"
            target="_blank" rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <button
            className="rounded-full p-2 border border-white/15 hover:bg-white/10 transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
