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
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const desktopStageRef = useRef<HTMLDivElement>(null);
  const mobileCardRef = useRef<HTMLAnchorElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let animFrame: number;
    const range = 25;

    const updateTransform = (xVal: number, yVal: number) => {
      const rotX = -yVal * 0.7;
      const rotY = xVal * 0.7;

      if (desktopStageRef.current) {
        desktopStageRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0px)`;
      }

      if (mobileCardRef.current) {
        mobileCardRef.current.style.transform = `rotateX(${rotX * 1.1}deg) rotateY(${rotY * 1.1}deg) translateZ(20px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        const xVal = (e.clientX / window.innerWidth) * range - range / 2;
        const yVal = (e.clientY / window.innerHeight) * range - range / 2;
        updateTransform(xVal, yVal);
      });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma;
      const beta = e.beta;
      if (typeof gamma === "number" && typeof beta === "number") {
        cancelAnimationFrame(animFrame);
        animFrame = requestAnimationFrame(() => {
          const xVal = (gamma / 90) * (range / 2);
          const yVal = (beta / 90) * (range / 2);
          updateTransform(xVal, yVal);
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("deviceorientation", handleDeviceOrientation, { passive: true });

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
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const range = 25;
    const xVal = (currentX / window.innerWidth) * range - range / 2;
    const yVal = (currentY / window.innerHeight) * range - range / 2;

    if (mobileCardRef.current) {
      mobileCardRef.current.style.transform = `rotateX(${-yVal * 1.2}deg) rotateY(${xVal * 1.2}deg) translateZ(20px)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = touchStartRef.current.x - endX;

    const threshold = 35;
    if (diffX > threshold) {
      setMobileActiveIndex((prev) => (prev + 1) % CARDS.length);
    } else if (diffX < -threshold) {
      setMobileActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    }

    if (mobileCardRef.current) {
      mobileCardRef.current.style.transform = `rotateX(11deg) rotateY(16.5deg) translateZ(20px)`;
    }
    touchStartRef.current = null;
  };

  return (
    <section className="relative min-h-[85vh] pt-28 pb-12 flex flex-col justify-center items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl px-4 text-center z-10 mb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
          DIGITAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">KISS</span>
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto uppercase tracking-widest font-mono">
          Development of Games • Websites • Mobile Apps • NFT &amp; Design
        </p>
      </div>

      {/* ================= DESKTOP 4-CARDS 3D STAGE (>= 768px) ================= */}
      <div
        className="hidden md:flex w-full max-w-6xl px-4 justify-center py-4"
        style={{ perspective: "1600px" }}
      >
        <div
          ref={desktopStageRef}
          className="grid grid-cols-4 gap-5 w-full max-w-5xl transition-transform duration-150 ease-out transform-gpu will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(11deg) rotateY(16.5deg)",
          }}
        >
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative h-88 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/90 shadow-2xl transition-all duration-300 hover:border-white/30 hover:shadow-cyan-500/20 flex flex-col justify-between p-4 transform-gpu"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(25px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                }}
              />

              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ backgroundColor: card.accentColor }}
              />

              <div className="relative z-10 flex justify-between items-center">
                <span
                  className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full text-white/90 bg-black/50 border border-white/10"
                  style={{ borderLeftColor: card.accentColor }}
                >
                  {card.badge}
                </span>
              </div>

              <div className="relative z-10 flex-1 flex items-center justify-center py-2">
                <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={card.catImg}
                    alt={card.title}
                    fill
                    className="object-contain filter drop-shadow-md"
                    priority
                  />
                </div>
              </div>

              <div className="relative z-10 text-center pt-2 border-t border-white/10">
                <span
                  className="text-lg font-bold uppercase tracking-widest block transition-colors duration-300 group-hover:text-white"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ================= MOBILE 1-CARD AT A TIME FAST CAROUSEL (< 768px) ================= */}
      <div className="md:hidden w-full max-w-xs px-4 flex flex-col items-center">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full py-2 flex justify-center touch-pan-y"
          style={{ perspective: "1000px" }}
        >
          {CARDS.map((card, idx) => {
            if (idx !== mobileActiveIndex) return null;
            return (
              <a
                ref={mobileCardRef}
                key={card.id}
                href={card.href}
                className="group relative w-72 h-[380px] rounded-3xl overflow-hidden border border-white/20 bg-zinc-950/95 shadow-2xl transition-transform duration-150 ease-out flex flex-col justify-between p-5 transform-gpu will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(8deg) rotateY(10deg) translateZ(20px)",
                  boxShadow: `0 12px 30px -5px ${card.accentColor}44`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
                  style={{
                    backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                  }}
                />

                {/* Badge */}
                <div className="relative z-10 flex justify-between items-center">
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

                {/* Central Character Image */}
                <div className="relative z-10 flex-1 flex items-center justify-center py-2">
                  <div className="relative w-44 h-44">
                    <Image
                      src={card.catImg}
                      alt={card.title}
                      fill
                      className="object-contain filter drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Card Title */}
                <div className="relative z-10 text-center pt-2 border-t border-white/20">
                  <span
                    className="text-xl font-black uppercase tracking-widest block"
                    style={{ color: card.accentColor }}
                  >
                    {card.title}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mt-1">
                    Свайпайте вліво / вправо &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Dots & Arrows */}
        <div className="flex items-center space-x-4 mt-3">
          <button
            onClick={() => setMobileActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length)}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-white"
            aria-label="Previous Card"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex space-x-2">
            {CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setMobileActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === mobileActiveIndex ? "w-6" : "w-2 bg-zinc-700"
                }`}
                style={{
                  backgroundColor: idx === mobileActiveIndex ? card.accentColor : undefined,
                }}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setMobileActiveIndex((prev) => (prev + 1) % CARDS.length)}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-white"
            aria-label="Next Card"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
