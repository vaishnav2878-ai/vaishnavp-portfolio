"use client";

import SpecularButton from "./SpecularButton";
import BlurText from "./BlurText";
import TrueFocus from "./TrueFocus";
import Lanyard from "./Lanyard";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-black text-white flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20 md:py-0 overflow-x-clip">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl"
      />

      {/* Main hero content container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 relative z-10">
        {/* Two-column hero layout: Stacks on mobile, 2 cols on desktop */}
        <div className="grid md:grid-cols-2 items-center gap-6 sm:gap-10 lg:gap-12">
          {/* LEFT SIDE - INTRODUCTION */}
          <div className="text-left flex flex-col items-start">
            {/* Animated greeting */}
            <BlurText
              text="Hello, I'm"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400 font-medium"
            />

            {/* Main name */}
            <BlurText
              text="Vaishnav P"
              delay={180}
              animateBy="words"
              direction="top"
              className="mt-1.5 sm:mt-2 text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            />

            {/* Animated job title */}
            <div className="mt-3 sm:mt-4 flex justify-start w-full">
              <TrueFocus
                sentence="Full Stack Developer"
                separator=" "
                manualMode={false}
                blurAmount={5}
                borderColor="#FFFFFF"
                glowColor="rgba(255, 255, 255, 0.6)"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>

            {/* Short introduction */}
            <p className="mt-4 sm:mt-5 max-w-xl text-gray-400 text-xs sm:text-base md:text-lg leading-relaxed">
              I build modern, responsive, and scalable web applications using
              React, Next.js, Node.js, Express, and MongoDB.
            </p>

            {/* Action buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 w-full">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-200 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/resume"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95 text-center"
              >
                <FileText size={15} className="text-gray-400 transition-colors group-hover:text-white" />
                <span>View Resume</span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white active:scale-95 text-center"
              >
                <Mail size={15} className="text-gray-400 transition-colors group-hover:text-white" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - 3D LANYARD */}
          <div className="relative h-[290px] sm:h-[460px] md:h-[600px] lg:h-[680px] w-full overflow-hidden md:overflow-visible flex items-center justify-center mt-2 md:mt-0">
            <Lanyard
              position={[0, 4, 25]}
              gravity={[0, -40, 0]}
              frontImage="/profile.png"
              backImage="/profile.png"
              imageFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}