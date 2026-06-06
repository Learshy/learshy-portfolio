"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { Section } from "./Section";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Modern stack, clean execution."
      description="Focused tools for building responsive frontend, practical backend, and scalable data systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[260px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-violet-500/20" />
              <div className="relative">
                <div className="mb-16 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-blue-200">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{skill.name}</h3>
                <p className="mt-3 leading-7 text-muted">{skill.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
