"use client";

import {
  hackathonSlotLabels,
  hackathons,
  projects,
  type HackathonSlot,
} from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";

export function ProjectsBento() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06} className="h-full">
              <GlowCard>
                <div className="flex h-full flex-col p-6">
                  <p className="text-xs text-[#86868b]">{project.context}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#f5f5f7]">
                    {project.title}
                  </h3>
                  {project.visual === "campus" ? <CampusDiagram /> : <BusinessDiagram />}
                  <ul className="mt-5 space-y-3">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-[#86868b]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </Reveal>
          ))}

          <Reveal delay={0.12} className="h-full md:col-span-2 lg:col-span-1">
            <GlowCard>
              <div className="flex h-full flex-col p-6">
                <p className="text-xs text-[#86868b]">HackTX, HackUTD</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#f5f5f7]">
                  Hackathon Builds
                </h3>
                <div className="mt-5 flex flex-1 flex-col gap-3">
                  {hackathons.map((slot) => (
                    <HackathonRow key={slot.event} slot={slot} />
                  ))}
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CampusDiagram() {
  const layers = ["Core", "Distribution", "Access"];
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-[#050505] p-3">
      <div className="space-y-1.5">
        {layers.map((layer, index) => (
          <div
            key={layer}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[11px] tracking-wide text-[#f5f5f7]"
            style={{ marginInline: `${index * 10}px` }}
          >
            {layer}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-[#86868b]">
        4 buildings · 4 floors · 6 VLANs
      </p>
    </div>
  );
}

function BusinessDiagram() {
  const vlans = ["Administration", "Finance", "Customer Service"];
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-[#050505] p-3">
      <div className="rounded-xl border border-[#2997ff]/30 bg-[#2997ff]/10 px-3 py-2 text-center text-[11px] text-[#f5f5f7]">
        Router-on-a-stick
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {vlans.map((vlan) => (
          <div
            key={vlan}
            className="rounded-xl border border-white/10 px-1 py-2 text-center text-[10px] leading-tight text-[#f5f5f7]"
          >
            {vlan}
          </div>
        ))}
      </div>
    </div>
  );
}

function HackathonRow({ slot }: { slot: HackathonSlot }) {
  const links = new Map(slot.links.map((link) => [link.label, link.href]));

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-[#f5f5f7]">{slot.event}</p>
        <p className="truncate text-xs text-[#2997ff]">{slot.project}</p>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-[#86868b]">
        {slot.summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {hackathonSlotLabels.map((label) => {
          const href = links.get(label);
          if (!href) {
            return (
              <span
                key={label}
                aria-disabled="true"
                className="inline-flex items-center rounded-full border border-dashed border-white/15 px-2.5 py-1 text-[11px] text-[#86868b]"
              >
                {label}
              </span>
            );
          }
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-[#2997ff] hover:bg-[#2997ff]/10"
            >
              {label}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
