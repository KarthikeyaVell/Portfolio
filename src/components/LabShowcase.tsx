"use client";

import {
  lab,
  topologyEdges,
  topologyNodes,
  type TopologyNode,
} from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { Reveal } from "./Reveal";

const spring = { type: "spring" as const, stiffness: 420, damping: 30 };

export function LabShowcase() {
  const [activeId, setActiveId] = useState(topologyNodes[1].id);
  const [stackId, setStackId] =
    useState<(typeof lab.stack)[number]["id"]>("opnsense");
  const active =
    topologyNodes.find((node) => node.id === activeId) ?? topologyNodes[0];
  const activeStack =
    lab.stack.find((item) => item.id === stackId) ?? lab.stack[0];
  const reduce = useReducedMotion();

  function selectStack(id: (typeof lab.stack)[number]["id"]) {
    setStackId(id);
    if (topologyNodes.some((node) => node.id === id)) {
      setActiveId(id);
    }
  }

  function selectNode(id: string) {
    setActiveId(id);
    if (lab.stack.some((item) => item.id === id)) {
      setStackId(id as (typeof lab.stack)[number]["id"]);
    }
  }

  return (
    <section id="lab" className="scroll-mt-24 px-5 pb-8 sm:px-8">
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#121215] backdrop-blur-md">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868b]">
                    Featured
                  </p>
                  <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold tracking-[-0.04em] text-[#f5f5f7] sm:text-5xl">
                    {lab.title}
                  </h2>
                  <p className="mt-4 text-sm text-[#86868b] sm:text-base">
                    {lab.role}
                    <span className="px-2 text-white/25">|</span>
                    {lab.timeline}
                  </p>
                </div>
                <motion.a
                  href={lab.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={spring}
                  className="inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-full bg-[#f5f5f7] px-4 text-sm font-medium text-black"
                >
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#86868b] sm:text-base">
                {lab.summary}
              </p>

              <Topology
                activeId={activeId}
                onSelect={selectNode}
                active={active}
              />

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 lg:grid-cols-4">
                {lab.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-[#f5f5f7] sm:text-5xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#f5f5f7]">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#86868b]">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ul className="flex flex-wrap gap-2">
                  {lab.stack.map((item) => {
                    const selected = item.id === stackId;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          aria-pressed={selected}
                          onClick={() => selectStack(item.id)}
                          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                            selected
                              ? "border-[#2997ff]/70 bg-[#2997ff]/15 text-[#f5f5f7]"
                              : "border-white/10 bg-white/[0.04] text-[#f5f5f7] hover:border-white/25"
                          }`}
                        >
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStack.id}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.22 }}
                    className="mt-4 max-w-3xl"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#2997ff]">
                      {activeStack.role}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#86868b]">
                      {activeStack.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Topology({
  activeId,
  active,
  onSelect,
}: {
  activeId: string;
  active: TopologyNode;
  onSelect: (id: string) => void;
}) {
  const byId = Object.fromEntries(topologyNodes.map((node) => [node.id, node]));

  return (
    <div className="mt-8 overflow-hidden rounded-[24px] border border-neutral-800 bg-[#050505]">
      <div className="relative hidden h-[440px] md:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {topologyEdges.map(([from, to]) => {
            const start = byId[from];
            const end = byId[to];
            const hot = activeId === from || activeId === to;
            return (
              <line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className="flow-line"
                data-hot={hot}
              />
            );
          })}
        </svg>
        {topologyNodes.map((node) => (
          <NodeButton
            key={node.id}
            node={node}
            active={node.id === activeId}
            onSelect={onSelect}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 p-3 md:hidden">
        {topologyNodes.map((node) => (
          <NodeButton
            key={node.id}
            node={node}
            active={node.id === activeId}
            onSelect={onSelect}
            className="w-full"
          />
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#2997ff]">
              {active.role}
            </p>
            <p className="mt-1 text-sm font-medium text-[#f5f5f7]">
              {active.name}
            </p>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#86868b]">
              {active.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function NodeButton({
  node,
  active,
  onSelect,
  className,
  style,
}: {
  node: TopologyNode;
  active: boolean;
  onSelect: (id: string) => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(node.id)}
      style={style}
      className={`rounded-2xl border px-3 py-2 text-left backdrop-blur-md transition-colors ${
        active
          ? "border-[#2997ff]/70 bg-[#2997ff]/15 shadow-[0_0_28px_rgba(41,151,255,0.28)]"
          : "border-white/10 bg-black/60 hover:border-white/25"
      } ${className ?? ""}`}
    >
      <span className="block text-[10px] uppercase tracking-[0.14em] text-[#86868b]">
        {node.role}
      </span>
      <span className="block text-sm font-medium text-[#f5f5f7]">
        {node.name}
      </span>
    </button>
  );
}
