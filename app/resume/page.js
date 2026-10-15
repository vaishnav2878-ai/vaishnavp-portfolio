"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Download,
  Mail,
  Phone,
  Check,
  ExternalLink,
  Code2,
  Database,
  GraduationCap,
  Award,
  Briefcase,
  Terminal,
  MapPin,
  Layers,
  FolderGit2,
  Server,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vaishnav2878@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden print:bg-white print:text-slate-900">
      {/* Portfolio navigation (hidden on print) */}
      <Navbar />

      {/* Top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl print:hidden"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 print:p-0 print:m-0 print:max-w-none">
        {/* ACTION BAR (Controls - hidden during print) */}
        <section
          aria-label="Resume actions"
          className="print-hidden mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 backdrop-blur-xl"
        >
          {/* Back link */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400 transition hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Portfolio</span>
          </Link>

          {/* Quick Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={14} className="text-gray-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Vaishnav_P_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/15 active:scale-95"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] transition hover:bg-gray-200 active:scale-95"
            >
              <Printer size={14} />
              <span>Print Resume</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              <span>Contact</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        </section>

        {/* ============================================================
            RESUME DOCUMENT SHEET (.resume-paper)
        ============================================================ */}
        <article className="resume-paper rounded-3xl border border-white/15 bg-white/[0.02] p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-2xl print:border-none print:bg-white print:p-0 print:shadow-none print:text-slate-900">
          {/* HEADER SECTION */}
          <header className="border-b border-white/10 pb-8 sm:pb-10 print:border-slate-300 print:pb-5">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium print:hidden">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Currently at Sysbreeze Technologies
                </div>

                <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white print:text-3xl print:text-slate-950">
                  Vaishnav P
                </h1>

                <p className="mt-2 text-lg sm:text-xl font-medium text-gray-300 print:text-base print:text-slate-700">
                  FULL STACK DEVELOPER
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-gray-400 print:text-xs print:text-slate-700 md:text-right">
                <span className="flex items-center md:justify-end gap-1.5">
                  <MapPin size={14} className="shrink-0" />
                  Kerala, India
                </span>

                <a
                  href="tel:+919446537362"
                  className="flex items-center md:justify-end gap-1.5 transition hover:text-white print:text-slate-800"
                >
                  <Phone size={14} className="shrink-0" />
                  +91 9446537362
                </a>

                <a
                  href="mailto:vaishnav2878@gmail.com"
                  className="flex items-center md:justify-end gap-1.5 transition hover:text-white print:text-slate-800"
                >
                  <Mail size={14} className="shrink-0" />
                  vaishnav2878@gmail.com
                </a>

                <div className="flex items-center md:justify-end gap-3 mt-1 font-medium text-white print:text-slate-900">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink size={11} className="print:hidden" />
                  </a>
                  <span className="text-gray-600 print:text-slate-400">|</span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink size={11} className="print:hidden" />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-6 pt-6 border-t border-white/10 print:border-slate-200 print:mt-4 print:pt-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-2 print:text-slate-800">
                PROFILE SUMMARY
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300 print:text-xs print:leading-relaxed print:text-slate-700">
                Full Stack Developer with hands-on experience building responsive web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in REST API development, JWT-based authentication, Cloudinary image uploads, and deployment using Vercel and Render. Focused on creating reliable, user-friendly applications and continuously improving full-stack development skills.
              </p>
            </div>
          </header>

          {/* MAIN BODY SECTIONS */}
          <div className="mt-8 sm:mt-10 space-y-10 sm:space-y-12 print:mt-5 print:space-y-5">
            {/* TECHNICAL SKILLS */}
            <section aria-labelledby="skills-heading">
              <div className="flex items-center gap-2.5 mb-5 print:mb-2 border-b border-white/10 pb-2.5 print:border-slate-300">
                <Code2 size={18} className="text-gray-400 print:text-slate-700" />
                <h2
                  id="skills-heading"
                  className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white print:text-sm print:text-slate-900"
                >
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-3 print:space-y-2 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] print:grid-cols-[130px_1fr] gap-1 sm:gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] print:border-none print:p-0 print:bg-transparent">
                  <span className="font-semibold text-white print:text-slate-900">
                    Frontend
                  </span>
                  <span className="text-gray-300 print:text-slate-700">
                    HTML5, CSS3, JavaScript, React.js, Next.js, Vite, Tailwind CSS, Responsive Web Design
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] print:grid-cols-[130px_1fr] gap-1 sm:gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] print:border-none print:p-0 print:bg-transparent">
                  <span className="font-semibold text-white print:text-slate-900">
                    Backend
                  </span>
                  <span className="text-gray-300 print:text-slate-700">
                    Node.js, Express.js, REST APIs, JWT Authentication
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] print:grid-cols-[130px_1fr] gap-1 sm:gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] print:border-none print:p-0 print:bg-transparent">
                  <span className="font-semibold text-white print:text-slate-900">
                    Database
                  </span>
                  <span className="text-gray-300 print:text-slate-700">
                    MongoDB, Mongoose
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] print:grid-cols-[130px_1fr] gap-1 sm:gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] print:border-none print:p-0 print:bg-transparent">
                  <span className="font-semibold text-white print:text-slate-900">
                    Tools & Libraries
                  </span>
                  <span className="text-gray-300 print:text-slate-700">
                    Visual Studio Code, Git, GitHub, Postman, npm, Antigravity, Redux Toolkit, Axios, Cloudinary
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] print:grid-cols-[130px_1fr] gap-1 sm:gap-4 p-3 rounded-xl border border-white/10 bg-white/[0.02] print:border-none print:p-0 print:bg-transparent">
                  <span className="font-semibold text-white print:text-slate-900">
                    Deployment
                  </span>
                  <span className="text-gray-300 print:text-slate-700">
                    Vercel, Render
                  </span>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section aria-labelledby="experience-heading">
              <div className="flex items-center gap-2.5 mb-5 print:mb-2 border-b border-white/10 pb-2.5 print:border-slate-300">
                <Briefcase size={18} className="text-gray-400 print:text-slate-700" />
                <h2
                  id="experience-heading"
                  className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white print:text-sm print:text-slate-900"
                >
                  Experience
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 sm:p-6 print:border-slate-200 print:p-2.5 print:bg-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white print:text-sm print:text-slate-900">
                      Full Stack Developer
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium print:text-xs print:text-slate-700">
                      Sysbreeze Technologies — Malappuram, Kerala
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 print:text-slate-700">
                    April 2026 – Present
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed print:text-xs print:space-y-1 print:text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-white print:text-slate-900">•</span>
                    <span>Develop full-stack web applications using React.js, Node.js, Express.js, and MongoDB.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white print:text-slate-900">•</span>
                    <span>Build responsive user interfaces using JavaScript and Tailwind CSS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white print:text-slate-900">•</span>
                    <span>Develop RESTful APIs and connect frontend applications with backend services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white print:text-slate-900">•</span>
                    <span>Work with MongoDB and Mongoose for data storage and management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white print:text-slate-900">•</span>
                    <span>Test APIs and troubleshoot application issues using Postman; use Git and GitHub for version control.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* PROJECTS */}
            <section aria-labelledby="projects-heading">
              <div className="flex items-center gap-2.5 mb-5 print:mb-2 border-b border-white/10 pb-2.5 print:border-slate-300">
                <FolderGit2 size={18} className="text-gray-400 print:text-slate-700" />
                <h2
                  id="projects-heading"
                  className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white print:text-sm print:text-slate-900"
                >
                  Projects
                </h2>
              </div>

              <div className="space-y-5 print:space-y-3">
                {/* Project 1: MERN Stack Blog Application */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 sm:p-6 print:border-slate-200 print:p-2.5 print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white print:text-sm print:text-slate-900">
                      MERN Stack Blog Application
                    </h3>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-mono print:text-[11px] print:text-slate-600">
                      GitHub: Frontend | Backend
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400 font-medium print:text-[11px] print:text-slate-600">
                    <strong className="text-gray-300 print:text-slate-800">Technologies:</strong> React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary, Vercel, Render
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed print:text-xs print:space-y-1 print:text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Built and deployed a responsive blogging platform with user registration, login, logout, and JWT authentication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Implemented blog creation, editing, deletion, image uploads, search, category filtering, likes, and view counts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Added trending blogs, an animated hero slideshow, user dashboard, and profile page.</span>
                    </li>
                  </ul>
                </div>

                {/* Project 2: Sneakerzz */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 sm:p-6 print:border-slate-200 print:p-2.5 print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white print:text-sm print:text-slate-900">
                      Sneakerzz — E-Commerce Web Application
                    </h3>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-mono print:text-[11px] print:text-slate-600">
                      GitHub: Repository
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400 font-medium print:text-[11px] print:text-slate-600">
                    <strong className="text-gray-300 print:text-slate-800">Technologies:</strong> React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, Axios, Cloudinary
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed print:text-xs print:space-y-1 print:text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Developed a responsive sneaker e-commerce platform with product listings and product detail pages.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Implemented registration, login, JWT authentication, shopping cart, and wishlist functionality.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Built an admin dashboard for managing products, brands, categories, and orders, supported by REST APIs.</span>
                    </li>
                  </ul>
                </div>

                {/* Project 3: DLS Travels */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 sm:p-6 print:border-slate-200 print:p-2.5 print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white print:text-sm print:text-slate-900">
                      DLS Travels — Travel Booking Website
                    </h3>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-mono print:text-[11px] print:text-slate-600">
                      GitHub: Repository
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-400 font-medium print:text-[11px] print:text-slate-600">
                    <strong className="text-gray-300 print:text-slate-800">Technologies:</strong> React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, REST APIs
                  </p>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed print:text-xs print:space-y-1 print:text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Created a responsive travel booking website with a form for customer details, journey information, and vehicle preferences.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Developed REST APIs and MongoDB data handling for booking management, including booking status and form validation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white print:text-slate-900">•</span>
                      <span>Integrated WhatsApp booking support for customer enquiries.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EDUCATION & LICENSES/CERTIFICATIONS */}
            <div className="grid gap-6 sm:grid-cols-2 print:grid-cols-2 print:gap-4">
              {/* Education */}
              <section aria-labelledby="education-heading">
                <div className="flex items-center gap-2.5 mb-5 print:mb-2 border-b border-white/10 pb-2.5 print:border-slate-300">
                  <GraduationCap size={18} className="text-gray-400 print:text-slate-700" />
                  <h2
                    id="education-heading"
                    className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white print:text-sm print:text-slate-900"
                  >
                    Education
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 print:border-slate-200 print:p-2.5 print:bg-transparent">
                  <h3 className="text-base font-semibold text-white print:text-sm print:text-slate-900">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-400 print:text-xs print:text-slate-700">
                    CMS College of Science and Commerce, Coimbatore | Bharathiar University
                  </p>
                  <span className="mt-2 inline-block text-xs font-semibold text-gray-400 print:text-slate-600">
                    Graduation: 2025
                  </span>
                </div>
              </section>

              {/* Licenses & Certifications */}
              <section aria-labelledby="certifications-heading">
                <div className="flex items-center gap-2.5 mb-5 print:mb-2 border-b border-white/10 pb-2.5 print:border-slate-300">
                  <Award size={18} className="text-gray-400 print:text-slate-700" />
                  <h2
                    id="certifications-heading"
                    className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white print:text-sm print:text-slate-900"
                  >
                    Licenses & Certifications
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-5 print:border-slate-200 print:p-2.5 print:bg-transparent">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 print:text-emerald-700">
                    January 2024
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-white print:text-sm print:text-slate-900">
                    Infosys BPM Skill Development Program
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 print:text-xs print:text-slate-700">
                    Infosys BPM
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* BOTTOM CALL TO ACTION (Hidden on print) */}
        <div className="print-hidden mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 text-center backdrop-blur-xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Interested in collaborating or hiring?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            I&apos;m available for full-stack opportunities, modern web development, and innovative software engineering.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] transition hover:bg-gray-200 active:scale-95"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              download="Vaishnav_P_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black active:scale-95"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-gray-500 print:hidden">
          <p>© {new Date().getFullYear()} Vaishnav P · Full-Stack Developer Portfolio</p>
        </footer>
      </div>
    </main>
  );
}
