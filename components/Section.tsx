"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10 ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          {eyebrow && (
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
