"use client";

import { Award } from "lucide-react";
import { certifications } from "@/data/portfolioData";
import { GlowCard, Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2
            id="certifications-title"
            className="text-3xl font-semibold tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl"
          >
            Certifications
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#86868b] sm:text-base">
            Credentials across networking, cybersecurity, and software fundamentals.
          </p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((item) => (
            <li key={item.id} className="min-w-0">
              <Reveal className="h-full">
                <GlowCard className="flex h-full flex-col p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-[#2997ff]">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-medium tracking-[0.16em] text-[#86868b] uppercase">
                    {item.short}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-[#f5f5f7]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#86868b]">{item.detail}</p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
