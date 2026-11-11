"use client";

import { profile } from "@/data/portfolioData";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const spring = { type: "spring" as const, stiffness: 460, damping: 28 };

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="px-5 pb-6 pt-8 sm:px-8 md:pb-8 md:pt-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </span>
          {profile.status}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.12 }}
          className="mt-6"
        >
          <Image
            src="/portrait.jpg"
            alt={profile.name}
            width={682}
            height={1024}
            priority
            className="h-64 w-52 rounded-[32px] object-cover object-[center_18%] shadow-[0_0_80px_rgba(41,151,255,0.22)] ring-1 ring-white/15 sm:h-72 sm:w-56"
          />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.2 }}
          className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#f5f5f7] sm:text-4xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.24 }}
          className="mt-3 max-w-xl text-base leading-relaxed text-[#86868b] sm:text-lg"
        >
          {profile.subheadline}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.28 }}
          className="mt-3 max-w-2xl text-base leading-relaxed text-[#f5f5f7] sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.32 }}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <motion.a
            href="#projects"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={spring}
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#2997ff] px-5 text-sm font-medium text-white"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={spring}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-medium text-[#f5f5f7] backdrop-blur-md"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
