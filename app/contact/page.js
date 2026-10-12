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
    <main className="min-h-screen bg-black text-white">
      {/* Reuse the existing portfolio navbar */}
      <Navbar />

      {/* Main page container */}
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-8 md:pt-44">
        {/* Back navigation */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* Page introduction */}
        <section className="mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
            Get in touch
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Let&apos;s create something{" "}
            <span className="text-gray-500">meaningful.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have a project idea, an opportunity, or just want to connect?
            Feel free to reach out. I&apos;d be happy to hear from you.
          </p>
        </section>

        {/* Contact form and contact information */}
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Contact form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-9">
            <h2 className="text-2xl font-medium">
              Send me a message
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Fill out the form below to get in touch.
            </p>

            <form
              action="mailto:vaishnav2878@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-6"
            >
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              {/* Subject field */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-gray-200"
              >
                Send Message

                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          {/* Contact information */}
          <aside className="space-y-5">
            {/* Email card */}
            <div className="rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-white/25 sm:p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Mail size={21} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-medium">
                Email
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                The best way to reach me directly.
              </p>

              <a
                href="mailto:your-email@example.com"
                className="mt-5 inline-flex items-center gap-2 break-all text-sm text-white transition hover:text-gray-400"
              >
                vaishnav2878@gmail.com
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* GitHub card */}
<a
  href="https://github.com/vaishnav2878-ai
"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-between rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.03] sm:p-7"
>
  <div className="flex items-center gap-4">
    {/* Simple GitHub label instead of an unavailable icon */}
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-semibold">
      GH
    </span>

    <div>
      <h3 className="font-medium">GitHub</h3>

      <p className="mt-1 text-sm text-gray-500">
        Explore my projects
      </p>
    </div>
  </div>

  <ArrowUpRight
    size={18}
    className="text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
  />
</a>
            {/* LinkedIn card */}
<a
  href="https://www.linkedin.com/in/vaishnav-p-b4b366324
/"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-between rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.03] sm:p-7"
>
  <div className="flex items-center gap-4">
    {/* Simple LinkedIn label instead of an unavailable icon */}
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-semibold">
      in
    </span>

    <div>
      <h3 className="font-medium">LinkedIn</h3>

      <p className="mt-1 text-sm text-gray-500">
        Connect professionally
      </p>
    </div>
  </div>

  <ArrowUpRight
    size={18}
    className="text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
  />
</a>
          </aside>
        </section>

        {/* Footer note */}
        <footer className="mt-20 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Vaishnav P. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}