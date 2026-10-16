"use client";

import { ArrowUpRight, Layers3 } from "lucide-react";

// Project details extracted from your CV
const projects = [
  {
    number: "01",
    title: "MERN Stack Blog Application",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A responsive blogging platform with user authentication, blog management, image uploads, search, category filtering, likes, and view counts.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    github: {
      frontend: "https://github.com/vaishnav2878-ai/Blogger-frontend.git", // Add your frontend GitHub repository URL
      backend: "https://github.com/vaishnav2878-ai/blogger-Backend.git", // Add your backend GitHub repository URL
    },
  },
  {
    number: "02",
    title: "Sneakerzz",
    category: "E-COMMERCE WEB APPLICATION",
    description:
      "A sneaker e-commerce platform featuring product listings, product details, authentication, shopping cart, wishlist, and an admin dashboard for managing products, categories, brands, and orders.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Cloudinary",
    ],
    github: {
      frontend: "https://github.com/vaishnav2878-ai/Sneakerzz.git", // Add your repository URL if available
      backend: "https://github.com/vaishnav2878-ai/Sneakerzz-Backend.git", // Add your backend repository URL if available
    },
  },
  {
    number: "03",
    title: "DLS Travels",
    category: "TRAVEL BOOKING WEBSITE",
    description:
      "A responsive travel booking website with customer and journey details, vehicle preferences, booking management, form validation, and WhatsApp booking support.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    github: {
      frontend: "https://github.com/vinayakmdas/DlsTravels.git", // Add your repository URL if available
      backend: "",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-neutral-400">
            What I&apos;ve Built
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Selected{" "}
              <span className="text-neutral-500">Projects.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
              A collection of applications I&apos;ve built using modern frontend
              and backend technologies.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 transition duration-300 hover:border-white/30 sm:p-8"
            >
              {/* Card header */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm tracking-widest text-neutral-500">
                  PROJECT / {project.number}
                </span>

                <div className="rounded-full border border-white/10 p-3 transition group-hover:border-white/30">
                  <Layers3
                    size={20}
                    className="text-neutral-300"
                  />
                </div>
              </div>

              {/* Project information */}
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-neutral-500">
                {project.category}
              </p>

              <h3 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>

              <p className="mb-8 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repository links */}
              <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-6">
                {project.github.frontend && (
                  <a
                    href={project.github.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-300"
                  >
                   <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[9px] font-bold">
  GH
</span>
                    Frontend
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.github.backend && (
                  <a
                    href={project.github.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
                  >
                   <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[9px] font-bold">
  GH
</span>
                    Backend
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {!project.github.frontend && !project.github.backend && (
                  <span className="text-xs text-neutral-500">
                    Repository links coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm leading-7 text-neutral-500">
            Each project represents my continued learning and experience in
            building full-stack web applications.
          </p>
        </div>
      </div>
    </section>
  );
}