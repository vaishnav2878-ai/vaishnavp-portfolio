import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Portfolio navigation */}
      <Navbar />

      {/* Main page container */}
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36 md:pt-40">
        {/* Back navigation */}
        <Link
          href="/"
          className="group mb-8 sm:mb-10 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400 transition hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to Home</span>
        </Link>

        {/* Page introduction */}
        <section className="mb-10 sm:mb-14">
          <p className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            Get in touch
          </p>

          <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s create something{" "}
            <span className="text-gray-500">meaningful.</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-400 sm:text-base sm:leading-8">
            Have a project idea, an opportunity, or just want to connect?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact form and contact information */}
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Contact form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 md:p-9">
            <h2 className="text-xl sm:text-2xl font-medium text-white">
              Send me a message
            </h2>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-400">
              Fill out the form below to get in touch.
            </p>

            <form
              action="mailto:vaishnav2878@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-6 sm:mt-8 space-y-5 sm:space-y-6"
            >
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/40"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/40"
                />
              </div>

              {/* Subject field */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/40"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/40"
                />
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-gray-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                <span>Send Message</span>
                <Send
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          {/* Contact information */}
          <aside className="space-y-4 sm:space-y-5">
            {/* Email card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 transition duration-300 hover:border-white/25">
              <div className="mb-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                <Mail size={20} strokeWidth={1.5} />
              </div>

              <h3 className="text-base sm:text-lg font-medium text-white">
                Email
              </h3>

              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-400">
                The best way to reach me directly.
              </p>

              <a
                href="mailto:vaishnav2878@gmail.com"
                className="mt-4 inline-flex items-center gap-1.5 break-all text-xs sm:text-sm font-medium text-white transition hover:text-gray-300"
              >
                vaishnav2878@gmail.com
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* GitHub card */}
            <a
              href="https://github.com/vaishnav2878-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs sm:text-sm font-semibold font-mono text-white">
                  GH
                </span>

                <div>
                  <h3 className="text-sm sm:text-base font-medium text-white">
                    GitHub
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-400">
                    Explore my projects
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/vaishnav-p-b4b366324/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs sm:text-sm font-semibold font-mono text-white">
                  in
                </span>

                <div>
                  <h3 className="text-sm sm:text-base font-medium text-white">
                    LinkedIn
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-400">
                    Connect professionally
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </a>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vaishnav P. Built with Next.js.</p>
        </footer>
      </div>
    </main>
  );
}