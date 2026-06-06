"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { navItems } from "@/data/content";

export function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 16]);
  const opacity = useTransform(scrollY, [0, 80], [0.42, 0.86]);
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;
  const backgroundColor = useMotionTemplate`rgba(5,6,8,${opacity})`;

  return (
    <motion.header
      style={{ backdropFilter, backgroundColor }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/10"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Learshy home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white text-sm font-black text-ink shadow-glow transition group-hover:scale-105">
            L
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em] text-white">Learshy</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-blue-100 md:inline-flex"
        >
          Contact Me
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden" aria-label="Open navigation">
          <Menu size={18} />
        </button>
      </nav>
    </motion.header>
  );
}
