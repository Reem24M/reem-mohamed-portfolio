
"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`navbar-glass relative mx-auto flex h-20 w-full items-center justify-between overflow-hidden rounded-b-3xl border-b border-white/20 px-6 backdrop-blur-2xl transition-all duration-500 lg:px-12 ${
  scrolled
    ? "bg-white/55 shadow-lg shadow-purple-500/10 dark:border-white/10 dark:bg-[#050816]/45"
    : "bg-white/35 dark:border-white/10 dark:bg-[#050816]/25"
}`}
      >
        {/* Animated Gradient - Light Mode Only */}
        <div className="navbar-gradient pointer-events-none absolute inset-0 -z-10 dark:hidden" />

        {/* Logo */}
        <a href="#home" className="group flex shrink-0 items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
            R<span className="text-fuchsia-600 dark:text-fuchsia-400">M</span>
          </span>

          <span className="hidden text-sm text-purple-900 dark:text-white sm:block">
            Reem Mohamed
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
         {navLinks.map((link) => (
  <button
    key={link.name}
    onClick={() => {
      document.getElementById(link.href)?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="text-sm font-medium"
  >
    {link.name}
  </button>
))}
        </div>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-5">
          <ThemeToggle />

          <a
            href="/Reem-Mohamed-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-fuchsia-500/30 sm:block"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-purple-900 dark:text-white md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </nav>
    </header>
  );
}
