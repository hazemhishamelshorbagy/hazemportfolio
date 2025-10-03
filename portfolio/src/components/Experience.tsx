export default function Experience() {
  const items = [
    { company: "Fintech Co.", role: "Senior Frontend Engineer", years: "2022–Present", impact: "Shipped performance program; Core Web Vitals across 4 products" },
    { company: "SaaS Platform", role: "Frontend Engineer", years: "2019–2022", impact: "Built reusable UI system; feature delivery time -30%" },
    { company: "Enterprise", role: "Software Engineer", years: "2016–2019", impact: "Led Angular to React migrations; reduced defects -25%" },
  ];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
      <ol className="mt-8 relative border-s border-white/15">
        {items.map((item, idx) => (
          <li key={idx} className="ms-6 pb-8">
            <span className="absolute -start-1.5 mt-1 size-3 rounded-full bg-white/70" />
            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.company} — {item.role}</h3>
                <span className="text-xs text-white/60">{item.years}</span>
              </div>
              <p className="mt-2 text-white/80">{item.impact}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
