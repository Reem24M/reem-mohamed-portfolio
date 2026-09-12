"use client";

import { motion } from "framer-motion";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[160px]" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.35) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent"
          >
            Hello, I&quot;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Reem

            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Mohamed
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-8 text-2xl font-semibold leading-relaxed text-white sm:text-3xl"
          >
            Frontend Developer

            <span className="text-primary"> & </span>

            <span className="block text-slate-400 sm:inline">
              Aspiring Full Stack Developer
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            I build modern, responsive web experiences with React, Next.js,
            and TypeScript, while expanding my expertise into backend
            development and the MERN stack.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* View Work */}
            <a
              href="#projects"
              className="group rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]"
            >
              View My Work

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Download CV */}
            <a
              href="/Reem-Mohamed-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-primary/10"
            >
              Download CV ↓
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-11"
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-slate-500">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT CARD ================= */}

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center -translate-y-20"
        >
          <HeroCard />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 1.2,
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 md:flex"
      >
        <span>Scroll Down</span>

        <span className="text-lg text-primary">
          ↓
        </span>
      </motion.a>
    </section>
  );
}