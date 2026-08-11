"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Send, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectTab {
  id: string;
  menu: string;
  title: string;
  subtitle: string;
  color: string;
  mediaType: "image" | "video";
  mediaUrl?: string;
  description: string[];
}

const TABS: ProjectTab[] = [
  {
    id: "web",
    menu: "WEB",
    title: "WEB",
    subtitle: "Landing & Shop",
    color: "#0073a5",
    mediaType: "image",
    mediaUrl: "/images/image-1.jpg",
    description: [
      "Не відкладайте Ваші мрії на потім. Хочете свій сайт - пишіть вже зараз та отримайте безкоштовну технічну консультацію та індивідуальний прорахунок Вашого проекту.",
      "Базова SEO-адаптація в ПОДАРУНОК до кожного проекту.",
      "Наша команда складається з експертів в різних галузях IT та працює злагоджено, як добре налаштований механізм, що гарантує Вам комфортну співпрацю на всіх етапах та найкращий результат.",
    ],
  },
  {
    id: "apps",
    menu: "APPS",
    title: "APPS",
    subtitle: "Desktop & Mobile",
    color: "#cc8300",
    mediaType: "image",
    mediaUrl: "/images/image-2.jpg",
    description: [
      "Мобільні додатки стали невід'ємною та зручною частиною нашого життя. Якщо Ваш бізнес виграє від того, що сучасний, високотехнологічний та креативний мобільний додаток стане доступним для Ваших користувачів — прийшов час його створити!",
      "Не відкладайте розвиток Вашого бізнесу чи унікальної ідеї на потім. Пишіть вже зараз та отримайте безкоштовну технічну консультацію.",
    ],
  },
  {
    id: "seo",
    menu: "SEO",
    title: "SEO",
    subtitle: "Google Analytics",
    color: "#ce3000",
    mediaType: "image",
    mediaUrl: "/images/SEO.png",
    description: [
      "Вдале просування сайту в топ-позиції видачі Google залежить від багатьох налаштувань та процесів.",
      "Деякі з них потребують багатомісячної роботи, деякі можна зробити впродовж одного тижня, але об'єднує їх те, що робити ці налаштування повинен професіонал.",
      "Разом з Вами ми проведемо аудит вже існуючого сайту та розробимо чітку стратегію зростання трафіку.",
    ],
  },
  {
    id: "design",
    menu: "DESIGN",
    title: "DESIGN",
    subtitle: "2D & 3D Design",
    color: "#15CF9D",
    mediaType: "image",
    mediaUrl: "/images/Design.jpg",
    description: [
      "Професійно розроблена візуальна подача товару чи послуги — це надважливий елемент маркетинг-стратегії.",
      "Креативна та інноваційна дизайн-пропозиція є гарантією успіху на ринку товарів та послуг. Адже професійний дизайн це не тільки красива візуалізація, а ще й зручність у користуванні.",
      "UI/UX дизайн, креативні стратегії, ребрендинг чи створення абсолютно нового бренду — наші головні компетенції.",
    ],
  },
  {
    id: "animation",
    menu: "ANIMATION",
    title: "ANIMATION",
    subtitle: "2D & 3D Animation",
    color: "#4E0ACF",
    mediaType: "video",
    mediaUrl: "/video/CodeClub_Animate.mp4",
    description: [
      "Креативні анімації: фільмів, відеокліпів та рекламних роликів з використанням комп'ютерної графіки, 2D або 3D анімації.",
      "Анімація на сайті: створення анімаційних елементів для веб-сайтів, які допомагають залучити увагу користувачів та покращують їхній досвід.",
      "Анімаційні рекламні банери та навчальні матеріали для складних концепцій.",
    ],
  },
  {
    id: "games",
    menu: "GAMES",
    title: "GAMES",
    subtitle: "Mobile & Web Games",
    color: "#CFC515",
    mediaType: "image",
    mediaUrl: "/images/Games.jpg",
    description: [
      "Розробка ігрового движка для веб та мобільних платформ.",
      "Розробка графіки та звуку для веб та мобільних ігор.",
      "Розробка механіки гри та її інтеграція з платформами iOS, Android, HTML5.",
      "Підтримка та оновлення після релізу.",
    ],
  },
  {
    id: "nft",
    menu: "NFT",
    title: "NFT",
    subtitle: "Motanka & Web3",
    color: "#BB0ACF",
    mediaType: "image",
    mediaUrl: "/images/Motanka.jpg",
    description: [
      "Розробка унікальних NFT-токенах з використанням блокчейн технології, що забезпечує їх неповторність та автентичність.",
      "Розробка NFT-арту: створення цифрового мистецтва з використанням NFT-токенів.",
      "Розробка NFT-музики та смарта-контрактів для авторських прав.",
    ],
  },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TABS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TABS.length) % TABS.length);
  };

  const currentTab = TABS[activeIndex];

  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6 border-b border-zinc-800 pb-3">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              PROJECTS
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500 text-white transition-all active:scale-95"
              aria-label="Previous Tab"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500 text-white transition-all active:scale-95"
              aria-label="Next Tab"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Apple-style Pills Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "scale-105 shadow-xl text-white border border-white/30"
                    : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
                style={{
                  backgroundColor: isActive ? tab.color : undefined,
                  boxShadow: isActive ? `0 10px 25px -5px ${tab.color}aa` : undefined,
                }}
              >
                {tab.menu}
              </button>
            );
          })}
        </div>

        {/* Apple-style Card Showcase Container */}
        <div
          key={currentTab.id}
          className="relative w-full rounded-3xl overflow-hidden border border-zinc-800/90 bg-zinc-950/95 shadow-2xl transition-all duration-300 animate-fadeIn"
          style={{
            boxShadow: `0 0 50px -10px ${currentTab.color}33`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Media Block */}
            <div className="lg:col-span-6 relative bg-zinc-900 min-h-[280px] lg:min-h-full overflow-hidden flex items-center justify-center">
              {currentTab.mediaType === "video" && currentTab.mediaUrl ? (
                <video
                  key={currentTab.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={currentTab.mediaUrl} type="video/mp4" />
                </video>
              ) : currentTab.mediaUrl ? (
                <div className="relative w-full h-full min-h-[320px]">
                  <Image
                    src={currentTab.mediaUrl}
                    alt={currentTab.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span
                  className="text-xs uppercase font-mono tracking-widest px-3 py-1 rounded-md bg-black/70 border border-white/10 w-fit text-white mb-2"
                  style={{ borderLeftColor: currentTab.color, borderLeftWidth: "4px" }}
                >
                  {currentTab.subtitle}
                </span>
                <h3 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  {currentTab.title}
                </h3>
              </div>
            </div>

            {/* Right Content Block */}
            <div
              className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6"
              style={{ backgroundColor: currentTab.color }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
                    {currentTab.subtitle}
                  </h4>
                </div>

                <div className="space-y-3 text-white text-sm sm:text-base leading-relaxed text-justify">
                  {currentTab.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
                <a
                  href="mailto:dashika.buksina@gmail.com?subject=Запит site DigitalKiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={18} />
                  <span>EMAIL</span>
                </a>
                <a
                  href="https://t.me/digitalkiss_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={18} />
                  <span>TELEGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
