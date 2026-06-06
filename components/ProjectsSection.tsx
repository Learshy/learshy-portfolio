"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";
import { Section } from "./Section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected product-style builds."
      description="Premium cards for work that communicates interface taste, product thinking, and implementation range."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-card backdrop-blur-xl"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-[0.13]" />
                <motion.div
                  className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.7rem] border border-white/15 bg-white/[0.08] text-white backdrop-blur-xl"
                  whileHover={{ rotate: -4, scale: 1.05 }}
                >
                  <Icon size={34} />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                <p className="mt-3 min-h-[84px] leading-7 text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-blue-100">
                    Live Preview <ArrowUpRight size={14} />
                  </a>
                  <a href="https://github.com/Learshy" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                    Github <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
