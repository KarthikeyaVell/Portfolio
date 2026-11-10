"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolioData";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <Reveal>
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-left text-xs text-emerald-300 sm:text-sm">
            <span className="status-dot h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
            <span>{profile.availability}</span>
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.15rem,7.4vw,4.6rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#f5f5f7]"
          >
            {profile.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-full text-base leading-relaxed text-[#86868b] sm:text-lg lg:whitespace-nowrap">
            {profile.name} | {profile.degree}.
          </p>
        </Reveal>
        <Reveal delay={0.14} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-[#2997ff] px-5 text-sm font-medium text-white"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-medium text-[#f5f5f7] backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
