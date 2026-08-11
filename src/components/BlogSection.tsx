"use client";

import React from "react";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  redditUrl?: string;
  category: string;
}

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Розробка мобільних додатків та сучасні тренди 2026",
    date: "10 Серпня 2026",
    excerpt: "Огляд найновіших підходів у створенні cross-platform додатків під iOS та Android з фокусом на продуктивність та UX.",
    redditUrl: "https://www.reddit.com/r/DigitalKissUkraine/comments/example1",
    category: "Mobile & Apps",
  },
  {
    id: "2",
    title: "Базове SEO для нових проєктів: з чого почати?",
    date: "02 Серпня 2026",
    excerpt: "Чому так важливо закладати SEO-структуру ще на етапі дизайну та проектування сайту, а не після його релізу.",
    category: "SEO & Growth",
  },
  {
    id: "3",
    title: "3D-графіка та анімація у сучасній веб-розробці",
    date: "25 Липня 2026",
    excerpt: "Як WebGL, Three.js та 3D-елементи підвищують залученість користувачів та виділяють бренд серед конкурентів.",
    category: "Design & 3D",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest mb-2">
              <BookOpen size={14} />
              <span>НОВИНИ ТА БЛОГ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Blog &amp; Updates
            </h2>
          </div>
          <a
            href="https://www.reddit.com/user/DigitalKissUkraine"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors"
          >
            <span>Reddit Profile</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-rose-400 border border-rose-500/20 font-mono">
                    {post.category}
                  </span>
                  <span className="flex items-center space-x-1 text-zinc-500">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-rose-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <a
                  href="https://t.me/digitalkiss_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-400 flex items-center space-x-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink size={12} />
                </a>

                {post.redditUrl && (
                  <span className="text-[10px] text-zinc-500 font-mono">
                    Reddit Synced
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
