import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowRight, Code2, Database, Layers, Sparkles, FileText } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Craft",
      desc: "Clean, responsive user interfaces with modern React, Next.js, and CSS.",
    },
    {
      icon: Database,
      title: "Backend Architecture",
      desc: "Scalable REST APIs, MongoDB data models, and secure authentication.",
    },
    {
      icon: Layers,
      title: "Full-Stack Synergy",
      desc: "End-to-end web apps built with the MERN stack from logic to deployment.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Portfolio navigation */}
      <Navbar />

      {/* Home hero section */}
      <section id="home" className="scroll-mt-24 sm:scroll-mt-28">
        <Hero />
      </section>

      {/* Highlights / Features grid */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 border-t border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About section on the Home page */}
      <section
        id="about"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section label */}
          <div className="mb-4 flex items-center gap-2.5">
            <Sparkles size={14} className="text-gray-400" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">
              Get to know me
            </p>
          </div>

          {/* Section heading */}
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Turning ideas into{" "}
            <span className="text-gray-500">digital experiences.</span>
          </h2>

          {/* About introduction */}
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              Hello, I&apos;m Vaishnav P. I&apos;m a Full-Stack Developer
              currently training and building projects. I enjoy creating
              modern web applications and learning how frontend and backend
              technologies work together seamlessly.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              My focus is on building responsive interfaces, developing
              practical solutions, and continuously improving my craft
              through hands-on projects and modern engineering practices.
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black active:scale-95"
            >
              <span>Explore Full Journey & Skills</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10 active:scale-95"
            >
              <FileText size={16} className="text-gray-400 group-hover:text-white" />
              <span>View Resume</span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition"
            >
              <span>Get in Touch →</span>
            </Link>
          </div>
        </div>
      </section>
            {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Vaishnav P. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}