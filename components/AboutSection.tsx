"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/content";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A fullstack developer with product taste."
      description="Learshy adalah Fullstack Developer yang fokus membangun digital experience modern, cepat, scalable, dan clean."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <p className="text-2xl font-medium leading-10 tracking-[-0.035em] text-white">
            I build interfaces that feel calm, structured, and fast. The goal is simple:
            make every screen look premium, load quickly, and solve a real user problem.
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="mt-8 text-base leading-8 text-muted">
            My approach combines UI/UX clarity, performance-oriented implementation,
            reusable component architecture, and a problem-solving mindset that keeps
            the product moving.
          </p>
        </motion.div>
        <div className="grid gap-5">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                <div className="flex gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-blue-200 transition group-hover:scale-105">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
