// Import the Navbar component.
import Navbar from "@/components/Navbar";

// Import the Hero section.
import Hero from "@/components/Hero";

// Import Link for navigation between pages.
import Link from "next/link";

// Import the ArrowRight icon.
import { ArrowRight } from "lucide-react";

// Main page component.
// Next.js renders this component at the "/" route.
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Portfolio navigation */}
      <Navbar />

      {/* Home hero section */}
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>

      {/* About section on the Home page */}
      <section
        id="about"
        className="scroll-mt-28 px-6 py-24 sm:px-10 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section label */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Get to know me
          </p>

          {/* Section heading */}
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Turning ideas into{" "}
            <span className="text-gray-500">digital experiences.</span>
          </h2>

          {/* About introduction */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="text-base leading-8 text-gray-400">
              Hello, I&apos;m Vaishnav P. I&apos;m a Full-Stack Developer
              currently training and building projects. I enjoy creating
              modern web applications and learning how frontend and backend
              technologies work together.
            </p>

            <p className="text-base leading-8 text-gray-400">
              My focus is on building responsive interfaces, developing
              practical solutions, and continuously improving my skills
              through hands-on projects.
            </p>
          </div>

          {/* Link to the complete About page */}
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
          >
            Explore About Me

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}