"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

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

    setRotate({ x: -yValue * 0.9, y: xValue * 0.9 });
    setTranslate({ x: xValue, y: yValue });
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

      {/* 3D Perspective Cards Container with Touch Drag Support */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="w-full max-w-6xl px-4 flex justify-center py-6 touch-pan-y"
        style={{ perspective: "1800px" }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl transition-transform duration-200 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-white/30 hover:shadow-cyan-500/20 flex flex-col justify-between p-4"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(30px)",
              }}
            >
              {/* Background gradient / image */}
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: card.bgImg ? `url('${card.bgImg}')` : undefined,
                  backgroundPosition: `${translate.x * 0.4}px ${-translate.y * 0.4}px`,
                }}
              />

              {/* Accent glow on hover */}
              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ backgroundColor: card.accentColor }}
              />

              {/* Badge */}
              <div className="relative z-10 flex justify-between items-center">
                <span
                  className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full text-white/90 bg-black/40 border border-white/10"
                  style={{ borderLeftColor: card.accentColor }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Central Character Image */}
              <div
                className="relative z-10 flex-1 flex items-center justify-center py-2 transition-transform duration-200"
                style={{
                  transform: `translate(${-translate.x * 0.6}px, ${translate.y * 0.6}px) translateZ(40px)`,
                }}
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={card.catImg}
                    alt={card.title}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]"
                    priority
                  />
                </div>
              </div>

              {/* Card Title */}
              <div className="relative z-10 text-center pt-2 border-t border-white/10">
                <span
                  className="text-lg sm:text-xl font-bold uppercase tracking-widest block transition-colors duration-300 group-hover:text-white"
                  style={{ color: card.accentColor }}
                >
                  {card.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
