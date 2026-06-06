"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { highlights } from "@/data/content";

const words = ["fast", "scalable", "clean", "premium"];

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
          >
            <Sparkles size={15} className="text-blue-300" />
            Fullstack Developer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-balance text-6xl font-semibold tracking-[-0.075em] text-white sm:text-8xl lg:text-9xl"
          >
            Learshy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-xl leading-8 text-zinc-300 sm:text-2xl">
              Building clean digital experiences for products that need to feel{" "}
              <span className="relative inline-flex h-8 overflow-hidden align-bottom text-blue-200">
                <motion.span
                  animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  {words.map((word) => (
                    <span key={word} className="h-8">
                      {word}.
                    </span>
                  ))}
                  <span className="h-8">fast.</span>
                </motion.span>
              </span>
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              Modern frontend, reliable backend, and interface details that make a product look
              intentional instead of assembled.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-blue-100">
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/[0.045] p-4 shadow-card backdrop-blur-xl">
            <div className="rounded-[1.2rem] border border-white/10 bg-graphite/70 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                </div>
                <span className="font-mono text-xs text-muted">portfolio.tsx</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <p><span className="text-blue-300">const</span> developer = <span className="text-white">&quot;Learshy&quot;</span>;</p>
                <p><span className="text-blue-300">role</span>: <span className="text-white">&quot;Fullstack Developer&quot;</span></p>
                <p><span className="text-blue-300">focus</span>: [<span className="text-white">&quot;UI&quot;</span>, <span className="text-white">&quot;Performance&quot;</span>, <span className="text-white">&quot;Scale&quot;</span>]</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-muted">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
