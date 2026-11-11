"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--mx",
          `${event.clientX - rect.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--my",
          `${event.clientY - rect.top}px`,
        );
      }}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.7 }}
      className={`group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#121215] backdrop-blur-md ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(41,151,255,0.16), transparent 42%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 shadow-[inset_0_0_0_1px_rgba(41,151,255,0.55),0_0_48px_rgba(41,151,255,0.12)] transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.article>
  );
}
