"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion() === true;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal-pending ${className ?? ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion() === true;

  return (
    <motion.div
      className={`rounded-3xl border border-white/10 bg-[#121215]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-[#2997ff]/45 hover:shadow-[0_0_0_1px_rgba(41,151,255,0.38),0_18px_50px_rgba(41,151,255,0.12)] ${className ?? ""}`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
