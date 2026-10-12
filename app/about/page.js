import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Terminal,
  Wrench,
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

// Education and development journey.
// Education, certification, and development journey.
const journey = [
  {
    period: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "CMS College, Coimbatore · Bharathiar University",
    description:
      "Completed my bachelor's degree in computer applications, building a foundation in computing and software development.",
  },
  {
    period: "Certification",
    title: "INFOSYS BPM SKILL DEVELOPMENT PROGRAM",
    organization: "Infosys BPM",
    description:
      "Completed the Infosys BPM Skill Development Program and earned a certificate.",
  },
  {
    period: "Present",
    title: "Full-Stack Development",
    organization: "Training & Project Building",
    description:
      "Currently strengthening my full-stack development skills through practical training, hands-on projects, and continuous learning.",
  },
];
export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Reuse the navbar from the Home page. */}
      <Navbar />

      {/* Main content wrapper keeps the page centered. */}
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-8 md:pt-40">

        {/* ==========================================
            SECTION 1: ABOUT INTRODUCTION
        ========================================== */}
        <section id="about" className="mb-24">
          {/* Small section label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
              Get to know me
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Turning ideas into{" "}
            <span className="text-gray-500">digital experiences.</span>
          </h1>

          {/* Introduction and current focus */}
          <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-start">
            <div>
<h2 className="mb-4 text-xl font-medium sm:text-2xl">
  Hello, I&apos;m Vaishnav P.
</h2>

              <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                 a Full-Stack Developer currently training and building
                projects. I enjoy creating modern web applications, learning
                new technologies, and understanding how frontend and backend
                systems work together.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
                My focus is on writing clean code, building responsive
                interfaces, and developing practical solutions that solve
                real problems. I&apos;m  continuously improving my skills through
                hands-on development.
              </p>

              {/* Link to the Contact section */}
              <Link
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Let&apos;s connect

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Current focus card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.05]">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Current focus
                </span>

                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              <h3 className="text-2xl font-medium">
                Building & Learning
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Strengthening my full-stack development skills through
                practical projects and continuous learning.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm text-gray-500">
                  Main technology stack
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  React · Next.js · Node.js · MongoDB
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: WHAT I DO
        ========================================== */}
        <section id="what-i-do" className="mb-24">
          {/* Section heading */}
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                My expertise
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What I do.
              </h2>
            </div>

            <span className="hidden text-sm text-gray-500 sm:block">
              Development & problem-solving
            </span>
          </div>

          {/* Development cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {developmentAreas.map((area) => {
              // Store the icon component so it can be rendered dynamically.
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05] sm:p-7"
                >
                  {/* Card number and icon */}
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      / {area.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Card title */}
                  <h3 className="text-xl font-medium">
                    {area.title}
                  </h3>

                  {/* Card description */}
                  <p className="mt-4 min-h-24 text-sm leading-7 text-gray-400">
                    {area.description}
                  </p>

                  {/* Related technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Decorative hover indicator */}
                  <div className="mt-7 flex justify-end">
                    <ArrowUpRight
                      size={18}
                      className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: TECHNICAL SKILLS
        ========================================== */}
        <section id="skills" className="mb-24">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              My toolkit
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Technologies I&apos;m learning and using to build modern web
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
                  className="rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-white/25 sm:p-7"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-medium">
                      {category.title}
                    </h3>
                  </div>

                  {/* Individual skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-gray-300 transition duration-200 hover:bg-white hover:text-black"
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
        <section id="journey" className="mb-24">
          <div className="mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              The process
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              My journey.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              My journey is about building a strong foundation, gaining
              practical experience, and continuously growing as a developer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative ml-2 border-l border-white/15 pl-8 sm:ml-4 sm:pl-10">
            {journey.map((item, index) => (
              <article
                key={item.title}
                className={`relative ${
                  index !== journey.length - 1 ? "pb-12" : ""
                }`}
              >
                {/* Timeline marker */}
                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-black bg-white ring-1 ring-white/30 sm:-left-[45px]" />

                {/* Timeline period */}
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  {item.period}
                </p>

                {/* Journey details */}
                <h3 className="text-xl font-medium sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {item.organization}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
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
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-7 sm:p-12 md:p-16"
        >
          {/* Decorative background glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
              What&apos;s next?
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              I&apos;m focused on learning, building projects, and growing as a
              full-stack developer. I&apos;m always interested in connecting
              with people who enjoy creating useful digital experiences.
            </p>

            {/* Replace the email address with your real email before publishing. */}
            <a
              href="mailto:your-email@example.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-gray-200"
            >
              Get in touch

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}