"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Send, ChevronUp, ChevronDown, Hand } from "lucide-react";

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
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [spinDirection, setSpinDirection] = useState<"fwd" | "bwd" | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Touch swipe refs
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const spinTo = (targetIdx: number) => {
    if (isSpinning || targetIdx === activeIndex) return;

    const dir = targetIdx > activeIndex ? "fwd" : "bwd";
    setNextIndex(targetIdx);
    setSpinDirection(dir);
    setIsSpinning(true);

    setTimeout(() => {
      setActiveIndex(targetIdx);
      setNextIndex(null);
      setSpinDirection(null);
      setIsSpinning(false);
    }, 950);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % TABS.length;
    spinTo(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + TABS.length) % TABS.length;
    spinTo(prevIdx);
  };

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;

    const diffY = touchStartY.current - endY;
    const diffX = touchStartX.current - endX;

    const threshold = 40; // minimum drag distance in px

    if (Math.abs(diffY) > Math.abs(diffX)) {
      // Vertical swipe
      if (diffY > threshold) {
        handleNext(); // Swipe Up -> Next Tab
      } else if (diffY < -threshold) {
        handlePrev(); // Swipe Down -> Prev Tab
      }
    } else {
      // Horizontal swipe
      if (diffX > threshold) {
        handleNext(); // Swipe Left -> Next Tab
      } else if (diffX < -threshold) {
        handlePrev(); // Swipe Right -> Prev Tab
      }
    }

    touchStartY.current = null;
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.keyCode === 40 || e.keyCode === 39) handleNext(); // Down / Right
      if (e.keyCode === 38 || e.keyCode === 37) handlePrev(); // Up / Left
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [activeIndex, isSpinning]);

  const currentTab = TABS[activeIndex];
  const incomingTab = nextIndex !== null ? TABS[nextIndex] : null;

  return (
    <section id="projects" className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">
              <Hand size={14} className="animate-bounce" />
              <span>TOUCH / SWIPE 3D SPINNER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              PROJECTS
            </h2>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={isSpinning}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500 text-white transition-all hover:scale-110 disabled:opacity-50"
              aria-label="Spin Up"
            >
              <ChevronUp size={22} />
            </button>
            <button
              onClick={handleNext}
              disabled={isSpinning}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500 text-white transition-all hover:scale-110 disabled:opacity-50"
              aria-label="Spin Down"
            >
              <ChevronDown size={22} />
            </button>
          </div>
        </div>

        {/* 3D Controls Menu */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.id}
                onClick={() => spinTo(idx)}
                disabled={isSpinning}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "scale-105 shadow-xl text-white border-2 border-white/40"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
                style={{
                  backgroundColor: isActive ? tab.color : undefined,
                  boxShadow: isActive ? `0 8px 24px -4px ${tab.color}bb` : undefined,
                }}
              >
                {tab.menu}
              </button>
            );
          })}
        </div>

        {/* 3D Split Spinner Stage with Touch Swipe Gestures */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full min-h-[480px] touch-pan-y cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1800px" }}
        >
          <div className="relative w-full h-full min-h-[480px] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
            {/* ================= LEFT SPINNER (Media & Title) ================= */}
            <div
              className={`relative h-[480px] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden transition-transform duration-1000 ease-in-out`}
              style={{
                transformStyle: "preserve-3d",
                transform:
                  spinDirection === "fwd"
                    ? "rotateX(-90deg)"
                    : spinDirection === "bwd"
                    ? "rotateX(90deg)"
                    : "rotateX(0deg)",
              }}
            >
              {/* Active Face Left */}
              <div
                className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden flex flex-col justify-end p-8 border-l border-t border-b border-zinc-800"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "translateZ(240px)",
                }}
              >
                {currentTab.mediaType === "video" && currentTab.mediaUrl ? (
                  <video
                    key={currentTab.mediaUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={currentTab.mediaUrl} type="video/mp4" />
                  </video>
                ) : currentTab.mediaUrl ? (
                  <Image
                    src={currentTab.mediaUrl}
                    alt={currentTab.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="relative z-10">
                  <h3 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                    {currentTab.title}
                  </h3>
                  <p className="text-lg font-bold text-white/90 mt-1 uppercase tracking-wider">
                    {currentTab.subtitle}
                  </p>
                </div>
              </div>

              {/* Incoming Face Left */}
              {incomingTab && (
                <div
                  className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden flex flex-col justify-end p-8 border-l border-t border-b border-zinc-800"
                  style={{
                    backfaceVisibility: "hidden",
                    transform:
                      spinDirection === "fwd"
                        ? "rotateX(90deg) translateZ(240px)"
                        : "rotateX(-90deg) translateZ(240px)",
                  }}
                >
                  {incomingTab.mediaType === "video" && incomingTab.mediaUrl ? (
                    <video
                      key={incomingTab.mediaUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={incomingTab.mediaUrl} type="video/mp4" />
                    </video>
                  ) : incomingTab.mediaUrl ? (
                    <Image
                      src={incomingTab.mediaUrl}
                      alt={incomingTab.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="relative z-10">
                    <h3 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                      {incomingTab.title}
                    </h3>
                    <p className="text-lg font-bold text-white/90 mt-1 uppercase tracking-wider">
                      {incomingTab.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ================= RIGHT SPINNER (Content & Actions) ================= */}
            <div
              className={`relative h-[480px] rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none overflow-hidden transition-transform duration-1000 ease-in-out`}
              style={{
                transformStyle: "preserve-3d",
                transform:
                  spinDirection === "fwd"
                    ? "rotateX(90deg)"
                    : spinDirection === "bwd"
                    ? "rotateX(-90deg)"
                    : "rotateX(0deg)",
              }}
            >
              {/* Active Face Right */}
              <div
                className="absolute inset-0 w-full h-full p-8 sm:p-10 flex flex-col justify-between border-r border-t border-b border-zinc-800"
                style={{
                  backgroundColor: currentTab.color,
                  backfaceVisibility: "hidden",
                  transform: "translateZ(240px)",
                }}
              >
                <div className="space-y-4 overflow-y-auto max-h-[320px] pr-2">
                  {currentTab.description.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-white text-base leading-relaxed font-normal text-justify"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <a
                    href="mailto:dashika.buksina@gmail.com?subject=Запит site DigitalKiss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-sm transition-all hover:scale-105"
                  >
                    <Mail size={18} />
                    <span>EMAIL</span>
                  </a>
                  <a
                    href="https://t.me/digitalkiss_IT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-sm transition-all hover:scale-105"
                  >
                    <Send size={18} />
                    <span>TELEGRAM</span>
                  </a>
                </div>
              </div>

              {/* Incoming Face Right */}
              {incomingTab && (
                <div
                  className="absolute inset-0 w-full h-full p-8 sm:p-10 flex flex-col justify-between border-r border-t border-b border-zinc-800"
                  style={{
                    backgroundColor: incomingTab.color,
                    backfaceVisibility: "hidden",
                    transform:
                      spinDirection === "fwd"
                        ? "rotateX(270deg) translateZ(240px)"
                        : "rotateX(-90deg) translateZ(240px)",
                  }}
                >
                  <div className="space-y-4 overflow-y-auto max-h-[320px] pr-2">
                    {incomingTab.description.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-white text-base leading-relaxed font-normal text-justify"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <a
                      href="mailto:dashika.buksina@gmail.com?subject=Запит site DigitalKiss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-sm transition-all hover:scale-105"
                    >
                      <Mail size={18} />
                      <span>EMAIL</span>
                    </a>
                    <a
                      href="https://t.me/digitalkiss_IT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold text-sm transition-all hover:scale-105"
                    >
                      <Send size={18} />
                      <span>TELEGRAM</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
