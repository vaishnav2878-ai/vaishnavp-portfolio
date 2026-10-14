"use client";

import SpecularButton from "./SpecularButton";
import BlurText from "./BlurText";
import TrueFocus from "./TrueFocus";
import Lanyard from "./Lanyard";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:py-0 overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl"
      />

      {/* Main hero content container */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 relative z-10">
        {/* Two-column hero layout: Stacks on mobile, 2 cols on desktop */}
        <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* LEFT SIDE - INTRODUCTION */}
          <div className="text-left flex flex-col items-start">
            {/* Animated greeting */}
            <BlurText
              text="Hello, I'm"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-gray-400 font-medium"
            />

            {/* Main name */}
            <BlurText
              text="Vaishnav P"
              delay={180}
              animateBy="words"
              direction="top"
              className="mt-2 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            />

            {/* Animated job title */}
            <div className="mt-4 flex justify-start w-full">
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
            <p className="mt-5 max-w-xl text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              I build modern, responsive, and scalable web applications using
              React, Next.js, Node.js, Express, and MongoDB.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-200 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95"
              >
                <Mail size={16} className="text-gray-400 group-hover:text-white" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - 3D LANYARD */}
          <div className="relative h-[380px] xs:h-[440px] sm:h-[520px] md:h-[620px] lg:h-[700px] w-full scale-100 md:scale-110 lg:scale-125 overflow-hidden md:overflow-visible flex items-center justify-center">
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