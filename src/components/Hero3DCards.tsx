"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardItem {
  id: string;
  title: string;
  catImg: string;
  bgImg?: string;
  href: string;
  accentColor: string;
  badge: string;
}

const CARDS: CardItem[] = [
  {
    id: "projects",
    title: "projects",
    catImg: "/images/cat_green.png",
    bgImg: "/images/background_card_1.webp",
    href: "#projects",
    accentColor: "#0073a5",
    badge: "WEB & APPS",
  },
  {
    id: "skills",
    title: "about",
    catImg: "/images/cat_yellow.png",
    bgImg: "/images/background_card_2.webp",
    href: "#skills",
    accentColor: "#cc8300",
    badge: "EXPERTISE",
  },
  {
    id: "team",
    title: "team",
    catImg: "/images/cat_more.png",
    bgImg: "/images/background_card_3.webp",
    href: "#team",
    accentColor: "#15CF9D",
    badge: "CREATIVES",
  },
  {
    id: "blog",
    title: "blog",
    catImg: "/images/cat_red.png",
    bgImg: "/images/background_card_4.webp",
    href: "#blog",
    accentColor: "#ce3000",
    badge: "NEWS & LOGS",
  },
];

export default function Hero3DCards() {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    setMobileActiveIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== mobileActiveIndex && newIndex >= 0 && newIndex < CARDS.length) {
        setMobileActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] pt-28 pb-12 flex flex-col justify-center items-center overflow-hidden">
      {/* Apple Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(0,115,165,0.15)_0%,_rgba(21,207,157,0.1)_35%,_rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl px-4 text-center z-10 mb-8">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          DIGITAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">KISS</span>
        </h1>
        <p className="text-zinc-400 text-xs sm:text-base max-w-xl mx-auto uppercase tracking-widest font-mono">
          Development of Games • Websites • Mobile Apps • NFT &amp; Design
        </p>
      </div>

      {/* ================= DESKTOP APPLE PURE CSS 3D CARDS (>= 768px) ================= */}
      <div className="hidden md:flex w-full max-w-6xl px-4 justify-center py-4" style={{ perspective: "1200px" }}>
        <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative h-96 rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/90 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 hover:rotate-x-3 hover:rotate-y-[-4deg] hover:border-white/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between p-5 transform-gpu"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Layer 1: Background cover */}
              <div
                className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity duration-500 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                  transform: "translateZ(0px)",
                }}
              />

              {/* Layer 2: Ambient glow */}
              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ backgroundColor: card.accentColor }}
              />

              {/* Layer 3: Badge */}
              <div
                className="relative z-10 flex justify-between items-center transition-transform duration-500 group-hover:translate-z-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <span
                  className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full text-white bg-black/60 border border-white/10"
                  style={{ borderLeftColor: card.accentColor, borderLeftWidth: "3px" }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Layer 4: 3D Popping Cat Character */}
              <div
                className="relative z-10 flex-1 flex items-center justify-center py-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="relative w-44 h-44 transition-transform duration-500 group-hover:scale-115">
                  <Image
                    src={card.catImg}
                    alt={card.title}
                    fill
                    className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                    priority
                  />
                </div>
              </div>

              {/* Layer 5: Card Title */}
              <div
                className="relative z-10 text-center pt-3 border-t border-white/10 transition-transform duration-500"
                style={{ transform: "translateZ(30px)" }}
              >
                <span
                  className="text-xl font-extrabold uppercase tracking-widest block transition-colors duration-300 group-hover:text-white"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ================= MOBILE APPLE PURE CSS 3D SNAP SLIDER (< 768px) ================= */}
      <div className="md:hidden w-full max-w-sm px-4 flex flex-col items-center">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 space-x-4 scroll-smooth"
          style={{ perspective: "1000px" }}
        >
          {CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="w-full shrink-0 snap-center flex justify-center"
            >
              <a
                href={card.href}
                className="group relative w-72 sm:w-80 h-[400px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-950/90 shadow-2xl flex flex-col justify-between p-6 transform-gpu active:scale-95 transition-all duration-300"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: `0 15px 35px -5px ${card.accentColor}44`,
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
                  style={{
                    backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                  }}
                />

                <div
                  className="absolute -inset-1 opacity-20 blur-xl rounded-3xl pointer-events-none"
                  style={{ backgroundColor: card.accentColor }}
                />

                {/* Badge */}
                <div
                  className="relative z-10 flex justify-between items-center"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <span
                    className="text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full text-white bg-black/70 border border-white/20"
                    style={{ borderLeftColor: card.accentColor, borderLeftWidth: "3px" }}
                  >
                    {card.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {idx + 1} / {CARDS.length}
                  </span>
                </div>

                {/* Central 3D Cat Character */}
                <div
                  className="relative z-10 flex-1 flex items-center justify-center py-2"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="relative w-44 h-44">
                    <Image
                      src={card.catImg}
                      alt={card.title}
                      fill
                      className="object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]"
                      priority
                    />
                  </div>
                </div>

                {/* Card Title */}
                <div
                  className="relative z-10 text-center pt-3 border-t border-white/20"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <span
                    className="text-2xl font-black uppercase tracking-widest block"
                    style={{ color: card.accentColor }}
                  >
                    {card.title}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={() => scrollToCard((mobileActiveIndex - 1 + CARDS.length) % CARDS.length)}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white active:scale-95 transition-all"
            aria-label="Previous Card"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => scrollToCard(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === mobileActiveIndex ? "w-7" : "w-2.5 bg-zinc-700"
                }`}
                style={{
                  backgroundColor: idx === mobileActiveIndex ? card.accentColor : undefined,
                }}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToCard((mobileActiveIndex + 1) % CARDS.length)}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white active:scale-95 transition-all"
            aria-label="Next Card"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
