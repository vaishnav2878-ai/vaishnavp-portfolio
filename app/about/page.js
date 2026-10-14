import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Terminal,
  Wrench,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";

// Development areas displayed as interactive cards.
const developmentAreas = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with a focus on usability, clean layouts, and modern design.",
    icon: Code2,
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, authentication, and database integrations.",
    icon: Database,
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Connecting frontend interfaces with backend services to build complete, functional web applications.",
    icon: Layers3,
    technologies: ["MERN Stack", "REST APIs", "Git"],
  },
];

// Technologies organized into categories.
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Antigravity"],
  },
];

// Education, certification, and development journey.
const journey = [
  {
    period: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "CMS College, Coimbatore · Bharathiar University",
    description:
      "Completed my bachelor's degree in computer applications, building a solid foundation in computing and software development.",
  },
  {
    period: "Certification",
    title: "Infosys BPM Skill Development Program",
    organization: "Infosys BPM",
    description:
      "Completed the Infosys BPM Skill Development Program and earned a certification in professional skills and problem solving.",
  },
  {
    period: "Present",
    title: "Full-Stack Development",
    organization: "Training & Project Building",
    description:
      "Strengthening my full-stack development skills through practical training, hands-on projects, and continuous learning.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Portfolio navigation */}
      <Navbar />

      {/* Main content wrapper */}
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36 md:pt-40">
        {/* ==========================================
            SECTION 1: ABOUT INTRODUCTION
        ========================================== */}
        <section id="about" className="mb-20 sm:mb-28">
          {/* Small section label */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3">
            <span className="h-px w-6 sm:w-8 bg-white" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
              Get to know me
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Turning ideas into{" "}
            <span className="text-gray-500">digital experiences.</span>
          </h1>

          {/* Introduction and current focus */}
          <div className="mt-8 sm:mt-10 grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-start">
            <div>
              <h2 className="mb-3 sm:mb-4 text-xl font-medium sm:text-2xl text-white">
                Hello, I&apos;m Vaishnav P.
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base sm:leading-8">
                A Full-Stack Developer currently training and building projects.
                I enjoy creating modern web applications, learning new
                technologies, and understanding how frontend and backend systems
                work together seamlessly.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base sm:leading-8">
                My focus is on writing clean code, building responsive
                interfaces, and developing practical solutions that solve real
                problems. I&apos;m continuously improving my skills through
                hands-on development.
              </p>

              {/* Link to Contact */}
              <Link
                href="/contact"
                className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
              >
                <span>Let&apos;s connect</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Current focus card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                  Current focus
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-white">
                Building & Learning
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-400">
                Strengthening full-stack engineering skills through practical
                projects, architecture design, and modern best practices.
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Main technology stack
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-white">
                  React · Next.js · Node.js · MongoDB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: WHAT I DO
        ========================================== */}
        <section id="what-i-do" className="mb-20 sm:mb-28">
          <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
                My expertise
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
                What I do.
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-gray-500">
              Development & problem-solving
            </span>
          </div>

          {/* Development cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {developmentAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500 font-mono">
                      / {area.number}
                    </span>
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-400 min-h-16">
                    {area.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {area.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: TECHNICAL SKILLS
        ========================================== */}
        <section id="skills" className="mb-20 sm:mb-28 scroll-mt-24">
          <div className="mb-8 sm:mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
              My toolkit
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Technologies I work with.
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-400 sm:text-base">
              Technologies I&apos;m actively learning and using to build modern web
              applications and full-stack projects.
            </p>
          </div>

          {/* Skill category cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-medium text-base sm:text-lg text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/5 bg-white/[0.05] px-2.5 py-1.5 text-xs sm:text-sm text-gray-300 transition duration-200 hover:bg-white hover:text-black cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            SECTION 4: MY JOURNEY
        ========================================== */}
        <section id="journey" className="mb-20 sm:mb-28">
          <div className="mb-10 sm:mb-12">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
              The process
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              My journey.
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-400 sm:text-base">
              Building a strong computing foundation, gaining practical
              project experience, and continuously growing as a software engineer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-white/20 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
            {journey.map((item) => (
              <article key={item.title} className="relative">
                {/* Timeline marker centered on the line */}
                <span className="absolute -left-[31px] sm:-left-[48px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-black bg-white ring-2 ring-white/30" />

                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {item.period}
                </p>

                <h3 className="text-lg sm:text-2xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-gray-400">
                  {item.organization}
                </p>

                <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ==========================================
            FINAL SECTION: CALL TO ACTION
        ========================================== */}
        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-12 md:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">
              What&apos;s next?
            </p>

            <h2 className="max-w-2xl text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-400">
              I&apos;m focused on learning, building real-world projects, and
              growing as a full-stack developer. Let&apos;s connect and explore
              opportunities.
            </p>

            <Link
              href="/contact"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              <span>Get in touch</span>
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vaishnav P. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}