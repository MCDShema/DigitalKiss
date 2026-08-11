"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "Facebook",
      icon: "/images/facebook.svg",
      href: "https://www.facebook.com/profile.php?id=100089308549002",
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.svg",
      href: "https://www.linkedin.com/in/dashika-buksina-1a872a75/",
    },
    {
      name: "Telegram",
      icon: "/images/telegram.svg",
      href: "https://t.me/digitalkiss_IT",
    },
    {
      name: "Reddit",
      icon: "/images/reddit.svg",
      href: "https://www.reddit.com/user/DigitalKissUkraine",
    },
  ];

  return (
    <footer id="footer" className="relative z-10 border-t border-zinc-800/80 bg-black/80 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Socials 1 */}
          <div className="flex justify-center md:justify-start space-x-6">
            {socials.slice(0, 2).map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
                aria-label={soc.name}
              >
                <div className="relative w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={soc.icon}
                    alt={soc.name}
                    fill
                    className="object-contain filter invert"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Center Logo & Copyright */}
          <div className="space-y-3 flex flex-col items-center">
            <a href="#" className="relative w-36 h-10 block transition-transform hover:scale-105">
              <Image
                src="/images/Digital_kiss_logo.svg"
                alt="DigitalKiss"
                fill
                className="object-contain"
              />
            </a>
            <p className="text-zinc-500 text-xs tracking-wider">
              Copying information is prohibited &copy; {new Date().getFullYear()} DigitalKiss
            </p>
          </div>

          {/* Socials 2 & Scroll Top */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            {socials.slice(2, 4).map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
                aria-label={soc.name}
              >
                <div className="relative w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={soc.icon}
                    alt={soc.name}
                    fill
                    className="object-contain filter invert"
                  />
                </div>
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
