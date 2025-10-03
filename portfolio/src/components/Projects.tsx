export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold">Signature Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="font-semibold">Fintech Performance Overhaul</h3>
          <p className="mt-2 text-white/80">Cut load time by 40% → boosted conversions.</p>
        </article>
        <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="font-semibold">Reusable UI System</h3>
          <p className="mt-2 text-white/80">Built component library → reduced feature delivery time by 30%.</p>
        </article>
        <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="font-semibold">AI-driven Automation</h3>
          <p className="mt-2 text-white/80">Automated 100+ hours of manual work with workflows.</p>
        </article>
        <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="font-semibold">Performance Advisory</h3>
          <p className="mt-2 text-white/80">Implemented budgets & observability across teams.</p>
        </article>
      </div>
    </section>
  );
}
