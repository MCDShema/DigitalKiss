"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "projects", href: "#projects" },
    { name: "about", href: "#skills" },
    { name: "team", href: "#team" },
    { name: "blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative w-36 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/Digital_kiss_logo.svg"
              alt="DigitalKiss Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-cyan-400 font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://t.me/digitalkiss_IT"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
          >
            Telegram
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center uppercase tracking-wider text-sm text-gray-200 hover:text-cyan-400 py-2 border-b border-zinc-800/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex justify-center">
            <a
              href="https://t.me/digitalkiss_IT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md w-full text-center"
            >
              Contact in Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
