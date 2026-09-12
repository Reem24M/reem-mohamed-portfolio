"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
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
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            R<span className="text-primary">M</span>
          </span>

          <span className="hidden text-sm text-muted sm:block">
            Reem Mohamed
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CV Button */}
        <a
          href="/Reem-Mohamed-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] sm:block"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
        </button>
      </nav>
    </header>
  );
}