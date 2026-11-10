"use client";

import { skillGroups } from "@/data/portfolioData";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2
            id="skills-title"
            className="text-3xl font-semibold tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl"
          >
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#86868b] sm:text-base">
            Grouped the way a system settings pane would list them.
          </p>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#121215] backdrop-blur-md">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id}>
              <section
                aria-labelledby={`skill-${group.id}`}
                className={`px-5 py-6 sm:px-7 ${index > 0 ? "border-t border-white/10" : ""}`}
              >
                <h3
                  id={`skill-${group.id}`}
                  className="text-sm font-medium tracking-tight text-[#f5f5f7]"
                >
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex rounded-full border border-neutral-800 bg-black/50 px-3 py-1.5 text-sm text-[#f5f5f7]">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
