"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Hero3DCards from "@/components/Hero3DCards";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      {/* Background Interactive Particles */}
      <ParticlesBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 space-y-12">
        <Hero3DCards />
        <ProjectsCarousel />
        <AboutSection />
        <TeamSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
