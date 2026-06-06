"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/content";
import { Section } from "./Section";

export function JourneySection() {
  return (
    <Section
      id="journey"
      eyebrow="Experience"
      title="A practical developer journey."
      description="From interface foundation to product systems and fullstack execution."
    >
      <div className="mx-auto max-w-4xl">
        {journey.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="relative grid gap-5 border-l border-white/12 pb-10 pl-8 last:pb-0 sm:grid-cols-[130px_1fr]"
          >
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-200 shadow-[0_0_24px_rgba(147,197,253,0.8)]" />
            <div className="font-mono text-sm font-semibold text-blue-200">{item.year}</div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-2 leading-7 text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
