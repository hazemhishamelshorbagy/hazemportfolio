import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const quotes = [
    {
      name: "CTO, Fintech Co.",
      quote:
        "Delivered massive performance wins and set up a clean design system. Collaborative and reliable.",
    },
    {
      name: "Eng Manager, SaaS Platform",
      quote:
        "Turned chaos into velocity. The component architecture accelerated our roadmap by months.",
    },
    {
      name: "Founder, Startup",
      quote:
        "Automated workflows that saved 100+ hours. Pragmatic, fast, and quality-focused.",
    },
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <Reveal key={idx} delay={0.05 * idx}>
              <figure className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <blockquote className="text-white/80">“{q.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-white/60">— {q.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
