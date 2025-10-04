import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-white/80 leading-7">
          8 years across fintech, SaaS, and enterprise. Specialized in React, Next.js, Angular,
          TypeScript, and Tailwind. I engineer frontends for scale, performance, and automation
          — not just aesthetics. I build systems that reduce lead time, raise quality, and
          align UI with business outcomes.
        </p>
        <p className="mt-4 text-white/70 italic">
          I build frontend that doesn’t just look good—it’s engineered for scale, performance, and automation.
        </p>
      </Reveal>
    </section>
  );
}
