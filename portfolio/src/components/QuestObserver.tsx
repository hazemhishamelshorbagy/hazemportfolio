"use client";

import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useGame } from "@/stores/useGame";

export default function QuestObserver() {
  const { complete } = useGame();
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testiRef = useRef<HTMLDivElement>(null);

  const skillsInView = useInView(skillsRef, { amount: 0.2, once: true });
  const projectsInView = useInView(projectsRef, { amount: 0.2, once: true });
  const testiInView = useInView(testiRef, { amount: 0.2, once: true });

  useEffect(() => { if (skillsInView) complete("view_skills", 40); }, [skillsInView, complete]);
  useEffect(() => { if (projectsInView) complete("view_projects", 40); }, [projectsInView, complete]);
  useEffect(() => { if (testiInView) complete("view_testimonials", 40); }, [testiInView, complete]);

  return (
    <div className="hidden">
      <div id="skills-observer" ref={skillsRef} />
      <div id="projects-observer" ref={projectsRef} />
      <div id="testimonials-observer" ref={testiRef} />
    </div>
  );
}
