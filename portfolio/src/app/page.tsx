import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import ContentFeed from "@/components/ContentFeed";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <ContentFeed />
        <section id="cta" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Let’s build something exceptional</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cv.pdf" download className="px-6 py-3 rounded-full bg-white text-black font-medium">Download Resume</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10">Connect on LinkedIn</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10">Hire Me</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Your Name — Built with Next.js
      </footer>
    </div>
  );
}
