"use client";

import React, { useEffect, useState, useRef } from "react";
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
  const [rotate, setRotate] = useState({ x: 11, y: 16.5 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const range = 35;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        const xValue = (e.clientX / window.innerWidth) * range - range / 2;
        const yValue = (e.clientY / window.innerHeight) * range - range / 2;

        setRotate({ x: -yValue * 0.8, y: xValue * 0.8 });
        setTranslate({ x: xValue, y: yValue });
      });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma;
      const beta = e.beta;
      if (typeof gamma === "number" && typeof beta === "number") {
        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(() => {
          const xValue = (gamma / 90) * (range / 2);
          const yValue = (beta / 90) * (range / 2);

          setRotate({ x: -yValue * 0.8, y: xValue * 0.8 });
          setTranslate({ x: xValue, y: yValue });
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length === 0) return;
    const range = 35;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const xValue = (currentX / window.innerWidth) * range - range / 2;
    const yValue = (currentY / window.innerHeight) * range - range / 2;

    setRotate({ x: -yValue * 1.2, y: xValue * 1.2 });
    setTranslate({ x: xValue * 1.2, y: yValue * 1.2 });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = touchStartRef.current.x - endX;

    const threshold = 40;
    if (diffX > threshold) {
      // Swipe Left -> Next Card
      setMobileActiveIndex((prev) => (prev + 1) % CARDS.length);
    } else if (diffX < -threshold) {
      // Swipe Right -> Prev Card
      setMobileActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    }

    touchStartRef.current = null;
  };

  const nextMobileCard = () => {
    setMobileActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevMobileCard = () => {
    setMobileActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl px-4 text-center z-10 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          DIGITAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">KISS</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest font-mono">
          Development of Games • Websites • Mobile Apps • NFT &amp; Design
        </p>
      </div>

      {/* ================= DESKTOP 4-CARDS 3D STAGE (>= 768px) ================= */}
      <div
        ref={containerRef}
        className="hidden md:flex w-full max-w-6xl px-4 justify-center py-6"
        style={{ perspective: "1800px" }}
      >
        <div
          className="grid grid-cols-4 gap-6 w-full max-w-5xl transition-transform duration-200 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-white/30 hover:shadow-cyan-500/20 flex flex-col justify-between p-4"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(30px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                  backgroundPosition: `${translate.x * 0.4}px ${-translate.y * 0.4}px`,
                }}
              />

              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ backgroundColor: card.accentColor }}
              />

              <div className="relative z-10 flex justify-between items-center">
                <span
                  className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full text-white/90 bg-black/40 border border-white/10"
                  style={{ borderLeftColor: card.accentColor }}
                >
                  {card.badge}
                </span>
              </div>

              <div
                className="relative z-10 flex-1 flex items-center justify-center py-2 transition-transform duration-200"
                style={{
                  transform: `translate(${-translate.x * 0.6}px, ${translate.y * 0.6}px) translateZ(40px)`,
                }}
              >
                <div className="relative w-44 h-44 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={card.catImg}
                    alt={card.title}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]"
                    priority
                  />
                </div>
              </div>

              <div className="relative z-10 text-center pt-2 border-t border-white/10">
                <span
                  className="text-xl font-bold uppercase tracking-widest block transition-colors duration-300 group-hover:text-white"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ================= MOBILE 1-CARD AT A TIME 3D CAROUSEL (< 768px) ================= */}
      <div className="md:hidden w-full max-w-sm px-4 flex flex-col items-center">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full py-4 flex justify-center touch-pan-y"
          style={{ perspective: "1200px" }}
        >
          {CARDS.map((card, idx) => {
            if (idx !== mobileActiveIndex) return null;
            return (
              <a
                key={card.id}
                href={card.href}
                className="group relative w-72 sm:w-80 h-[420px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-950/90 backdrop-blur-xl shadow-2xl transition-transform duration-200 ease-out flex flex-col justify-between p-6"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px)`,
                  boxShadow: `0 15px 35px -5px ${card.accentColor}55`,
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
                  style={{
                    backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                    backgroundPosition: `${translate.x * 0.5}px ${-translate.y * 0.5}px`,
                  }}
                />

                <div
                  className="absolute -inset-1 opacity-25 blur-2xl rounded-3xl pointer-events-none"
                  style={{ backgroundColor: card.accentColor }}
                />

                {/* Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <span
                    className="text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-full text-white bg-black/60 border border-white/20"
                    style={{ borderLeftColor: card.accentColor, borderLeftWidth: "3px" }}
                  >
                    {card.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {idx + 1} / {CARDS.length}
                  </span>
                </div>

                {/* Central Character Image */}
                <div
                  className="relative z-10 flex-1 flex items-center justify-center py-4 transition-transform duration-200"
                  style={{
                    transform: `translate(${-translate.x * 0.7}px, ${translate.y * 0.7}px) translateZ(40px)`,
                  }}
                >
                  <div className="relative w-48 h-48">
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
                <div className="relative z-10 text-center pt-3 border-t border-white/20">
                  <span
                    className="text-2xl font-black uppercase tracking-widest block"
                    style={{ color: card.accentColor }}
                  >
                    {card.title}
                  </span>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block mt-1">
                    Свайпайте вліво / вправо &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Navigation Controls (Dots & Arrows) */}
        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={prevMobileCard}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:border-cyan-500 transition-all"
            aria-label="Previous Card"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setMobileActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === mobileActiveIndex ? "w-8" : "w-2.5 bg-zinc-700"
                }`}
                style={{
                  backgroundColor: idx === mobileActiveIndex ? card.accentColor : undefined,
                }}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextMobileCard}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:border-cyan-500 transition-all"
            aria-label="Next Card"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
