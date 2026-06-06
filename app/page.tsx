"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <LoadingOverlay />
      <CustomCursor />
      <div className="relative min-h-screen overflow-hidden bg-ink">
        <div className="pointer-events-none fixed inset-0 bg-grid-fade bg-[size:56px_56px] opacity-[0.06]" />
        <div className="noise pointer-events-none fixed inset-0 opacity-[0.025]" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[130px]"
          animate={{ opacity: [0.3, 0.58, 0.3], scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
