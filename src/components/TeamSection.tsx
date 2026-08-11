"use client";

import React from "react";
import { Users, Code, Paintbrush, Cpu, Megaphone } from "lucide-react";

export default function TeamSection() {
  const roles = [
    {
      role: "Web & Fullstack Engineering",
      icon: <Code className="text-cyan-400" size={24} />,
      desc: "Розробка сучасних веб-сайтів, SPA, PWA та серверної логіки на Next.js & Node.js.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      role: "UI/UX & Brand Design",
      icon: <Paintbrush className="text-emerald-400" size={24} />,
      desc: "Дизайн інтерфейсів, векторна та 3D-графіка, унікальні логотипи та брендинг.",
      skills: ["Figma", "Blender", "Illustrator", "3D Modeling", "Branding"],
    },
    {
      role: "Game Development & NFT",
      icon: <Cpu className="text-purple-400" size={24} />,
      desc: "Створення механік мобільних/веб ігор, генеративні NFT-колекції та смарт-контракти.",
      skills: ["HTML5 Canvas", "Unity", "Solidity", "Web3.js", "2D/3D Art"],
    },
    {
      role: "SEO & Growth Marketing",
      icon: <Megaphone className="text-amber-400" size={24} />,
      desc: "Оптимізація під пошукові системи Google, аналітика трафіку та рекламні кампанії.",
      skills: ["Google Search Console", "GA4", "Technical SEO", "SMM"],
    },
  ];

  return (
    <section id="team" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Users size={14} />
            <span>НАША КОМАНДА</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Експерти, що перетворюють ідеї на реальність
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Наша команда працює як злагоджений механізм, де кожен напрямок очолює досвідчений фахівець.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {item.role}
                  </h3>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/50">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-400 text-xs font-mono border border-zinc-800"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
