import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">Core Skills & Unique Strengths</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Core Frontend</h3>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-white/80">
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Storybook</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Special Powers</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Performance engineering (LCP, TTFB, CLS tuning)</li>
              <li>AI + automation workflows (Zapier, Make, n8n, APIs)</li>
              <li>Vibe coding (premium UI/UX + micro-interactions)</li>
              <li>Advanced system design (dynamic CMS, POS statements, multi-lang)</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
