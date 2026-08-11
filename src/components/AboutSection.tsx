"use client";

import React from "react";
import { ShieldCheck, Rocket, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Rocket className="text-cyan-400" size={28} />,
      title: "10+ років досвіду",
      description: "За роки існування компанії ми реалізували понад 150 успішних проєктів у веб, мобільній розробці та геймдеві.",
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={28} />,
      title: "Базове SEO у подарунок",
      description: "Кожен веб-проєкт отримує базову SEO-адаптацію та технічний аудит для старту просування в Google.",
    },
    {
      icon: <Code2 className="text-purple-400" size={28} />,
      title: "Сучасний стек технологій",
      description: "Next.js, React, Node.js, Web3/NFT, Unity, Tailwind CSS — будуємо високошвидкісні та безпечні рішення.",
    },
    {
      icon: <Sparkles className="text-amber-400" size={28} />,
      title: "Індивідуальний підхід",
      description: "Прозорий прорахунок, персональний менеджмент та підтримка на кожному етапі створення вашого продукту.",
    },
  ];

  const features = [
    "Комплексна веб-розробка (Landing Page, Корпоративні сайти, Інтернет-магазини)",
    "Мобільні додатки під iOS & Android (Cross-platform & Native)",
    "UI/UX дизайн, 2D/3D графіку та анімаційні ролики",
    "Ігрові механіки, браузерні та мобільні ігри",
    "Смарт-контракти та NFT колекції",
    "Технічний підтримка та регулярні оновлення",
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span>ПРО КОМПАНІЮ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ми створюємо цифрові продукти, що{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                надихають та дають результат
              </span>
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              DigitalKiss — це команда професіоналів у галузі IT, веб-розробки, дизайну та цифрового маркетингу. Ми об'єднуємо креативність із новітніми технологіями, щоб втілювати найамбітніші ідеї бізнесу.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 space-y-3 group hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-zinc-800/60 w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
