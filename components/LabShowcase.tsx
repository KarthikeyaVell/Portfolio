"use client";

import { ExternalLink, Activity, Globe, KeyRound, Radio, Server, Shield } from "lucide-react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { labEdges, labNodes, labShowcase } from "@/data/portfolioData";
import { GitHubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  att: Globe,
  opnsense: Shield,
  wireguard: KeyRound,
  proxmox: Server,
  wazuh: Activity,
  pihole: Radio,
};

type Line = {
  id: string;
  d: string;
  hot: boolean;
};

export function LabShowcase() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [active, setActive] = useState("proxmox");
  const statusId = useId();
  const selected = labNodes.find((node) => node.id === active) ?? labNodes[0];

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const measure = () => {
      const root = panel.getBoundingClientRect();
      const centers = new Map<string, { x: number; top: number; bottom: number }>();

      panel.querySelectorAll<HTMLElement>("[data-node]").forEach((element) => {
        const id = element.dataset.node;
        if (!id) return;
        const rect = element.getBoundingClientRect();
        centers.set(id, {
          x: rect.left - root.left + rect.width / 2,
          top: rect.top - root.top,
          bottom: rect.bottom - root.top,
        });
      });

      const next = labEdges.flatMap((edge) => {
        const from = centers.get(edge.from);
        const to = centers.get(edge.to);
        if (!from || !to) return [];
        const mid = (from.bottom + to.top) / 2;
        return [
          {
            id: `${edge.from}-${edge.to}`,
            d: `M ${from.x} ${from.bottom} C ${from.x} ${mid}, ${to.x} ${mid}, ${to.x} ${to.top}`,
            hot: active === edge.from || active === edge.to,
          },
        ];
      });

      setLines(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div id="lab" className="scroll-mt-20 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.18em] text-[#86868b] uppercase">
            Featured
          </p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#f5f5f7]">
                {labShowcase.title}
              </h2>
              <p className="mt-3 text-sm text-[#86868b] sm:text-base">
                {labShowcase.role}
                <span aria-hidden="true"> · </span>
                <span className="whitespace-nowrap">{labShowcase.timeline}</span>
              </p>
            </div>
            <a
              href={labShowcase.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-[#f5f5f7] backdrop-blur-md"
            >
              <GitHubIcon className="h-4 w-4" />
              {labShowcase.repoLabel}
              <ExternalLink className="h-3.5 w-3.5 text-[#86868b]" aria-hidden="true" />
              <span className="sr-only">, opens the Soc Home Lab GitHub repository</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={0.05}>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#121215] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <p className="truncate text-xs font-medium tracking-wide text-[#86868b] uppercase">
                  Lab fabric · Operational
                </p>
              </div>
              <p className="hidden text-xs text-[#86868b] sm:block">Select a node</p>
            </div>

            <div
              ref={panelRef}
              className="relative bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] px-3 py-6 sm:px-6 sm:py-8"
            >
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {lines.map((line) => (
                  <path
                    key={line.id}
                    d={line.d}
                    fill="none"
                    stroke={line.hot ? "#2997ff" : "rgba(245,245,247,0.38)"}
                    strokeWidth={line.hot ? 1.8 : 1.4}
                  />
                ))}
              </svg>

              <div className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-x-4 md:gap-y-10">
                {labNodes.map((node) => {
                  const Icon = icons[node.id] ?? Server;
                  const pressed = active === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      data-node={node.id}
                      aria-pressed={pressed}
                      aria-describedby={statusId}
                      onClick={() => setActive(node.id)}
                      className={`rounded-2xl border px-3 py-3 text-left backdrop-blur-md ${node.placement} ${
                        pressed
                          ? "border-[#2997ff]/60 bg-[#0c0c10] shadow-[0_0_0_1px_rgba(41,151,255,0.45),0_0_32px_rgba(41,151,255,0.16)]"
                          : "border-white/10 bg-black/70 hover:border-white/25"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <Icon className="h-4 w-4 text-[#2997ff]" aria-hidden="true" />
                        <span className="text-[10px] font-medium tracking-wide text-emerald-300 uppercase">
                          Online
                        </span>
                      </span>
                      <span className="mt-3 block text-[10px] tracking-[0.14em] text-[#86868b] uppercase">
                        {node.kicker}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[#f5f5f7]">
                        {node.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p
              id={statusId}
              aria-live="polite"
              className="border-t border-white/10 px-4 py-4 text-sm leading-relaxed text-[#86868b] sm:px-5"
            >
              <span className="font-medium text-[#f5f5f7]">{selected.name}. </span>
              {selected.detail}
            </p>
          </div>
        </Reveal>

        <dl className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {labShowcase.metrics.map((metric) => (
            <Reveal key={metric.title}>
              <div className="h-full rounded-3xl border border-white/10 bg-[#121215] p-5 backdrop-blur-md">
                <dt className="text-sm text-[#86868b]">{metric.title}</dt>
                <dd className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#f5f5f7]">
                  {metric.value}
                </dd>
                <p className="mt-2 text-sm leading-relaxed text-[#86868b]">{metric.detail}</p>
              </div>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {labShowcase.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#f5f5f7]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
