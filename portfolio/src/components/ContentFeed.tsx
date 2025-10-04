import Reveal from "@/components/Reveal";

export default function ContentFeed() {
  const items = [
    { title: "Optimizing LCP in Next.js 15", link: "#" },
    { title: "AI-assisted UI systems with design tokens", link: "#" },
    { title: "Automation stacks: Zapier vs n8n vs Make", link: "#" },
  ];

  return (
    <section id="content" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">Thought Leadership</h2>
        <ul className="mt-6 space-y-3">
          {items.map((it, idx) => (
            <Reveal key={idx} delay={0.05 * idx}>
              <li>
                <a className="group inline-flex items-center gap-2 hover:underline" href={it.link}>
                  <span className="text-white/80 group-hover:text-white">{it.title}</span>
                  <span aria-hidden className="text-white/30 group-hover:translate-x-1 transition">→</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
