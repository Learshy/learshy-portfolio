"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";

const links = [
  { label: "Email", value: "hello@learshy.dev", href: "mailto:hello@learshy.dev", icon: Mail },
  { label: "Github", value: "github.com/Learshy", href: "https://github.com/Learshy", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/learshy", href: "https://www.linkedin.com/in/learshy", icon: Linkedin }
];

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something clean." description="For recruiter, client, or product collaboration. Keep the brief sharp; the execution can be sharper.">
      <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
        >
          <div className="space-y-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-300/30 hover:bg-white/[0.07]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-blue-200">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{link.label}</span>
                    <span className="block font-medium text-white">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-zinc-300">Name</span>
              <input className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-300/40" placeholder="Your name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-zinc-300">Email</span>
              <input type="email" className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-300/40" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block space-y-2">
            <span className="text-sm text-zinc-300">Project brief</span>
            <textarea className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-300/40" placeholder="Tell me what you want to build..." />
          </label>
          <button type="button" className="mt-5 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-blue-100">
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
