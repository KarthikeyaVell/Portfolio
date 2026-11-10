"use client";

import { hackathons, studyProjects } from "@/data/portfolioData";
import { GlowCard, Reveal } from "./Reveal";

function ComingSoon({
  label,
  event,
}: {
  label: "Demo" | "GitHub";
  event: string;
}) {
  return (
    <button
      type="button"
      aria-disabled="true"
      aria-label={`${event} ${label.toLowerCase()}, coming soon`}
      onClick={(eventClick) => eventClick.preventDefault()}
      className="inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-[#86868b]"
    >
      {label} · Coming soon
    </button>
  );
}

function CampusDiagram() {
  const tiers = ["Core", "Distribution", "Access"];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4" aria-hidden="true">
      <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
        {tiers.map((tier, index) => (
          <div key={tier} className="flex w-full flex-col items-center">
            <div className="w-full rounded-xl border border-white/10 bg-[#121215] px-3 py-2 text-center text-xs text-[#f5f5f7]">
              {tier}
            </div>
            {index < tiers.length - 1 ? (
              <span className="my-1 h-3 w-px bg-white/20" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] text-[#86868b]">
        4 buildings · 4 floors · 6 VLANs
      </p>
    </div>
  );
}

function SmbDiagram() {
  const vlans = ["Administration", "Finance", "Customer Service"];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4" aria-hidden="true">
      <div className="rounded-xl border border-white/10 bg-[#121215] px-3 py-2 text-center text-xs text-[#f5f5f7]">
        Router-on-a-stick
      </div>
      <div className="mx-auto my-1 h-3 w-px bg-white/20" />
      <div className="rounded-xl border border-dashed border-white/15 px-2 py-2 text-center text-[10px] tracking-wide text-[#86868b] uppercase">
        802.1Q trunk
      </div>
      <ul className="mt-3 grid gap-2">
        {vlans.map((vlan) => (
          <li
            key={vlan}
            className="rounded-xl border border-white/10 px-2 py-1.5 text-center text-[11px] text-[#f5f5f7]"
          >
            {vlan}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectsBento() {
  return (
    <div id="project-studies" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl">
            Network studies
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#86868b] sm:text-base">
            Packet Tracer designs for campus and small-business segmentation, plus a slot for hackathon builds as those links are published.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studyProjects.map((project) => (
            <Reveal key={project.id} className={project.span}>
              <GlowCard className="flex h-full flex-col p-5 sm:p-6">
                <p className="text-xs font-medium tracking-[0.16em] text-[#2997ff] uppercase">
                  {project.context}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#f5f5f7]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#86868b]">{project.summary}</p>
                <div className="mt-5">
                  {project.id === "campus" ? <CampusDiagram /> : <SmbDiagram />}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-[#f5f5f7]">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2997ff]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}

          <Reveal className="md:col-span-2 lg:col-span-3">
            <GlowCard className="p-5 sm:p-6">
              <p className="text-xs font-medium tracking-[0.16em] text-[#2997ff] uppercase">
                HackTX · HackUTD · Cal Hacks
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#f5f5f7]">
                Hackathon Builds
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#86868b]">
                A reusable slot for each event. Demos, repositories, and architecture diagrams are marked coming soon until the links exist.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {hackathons.map((event) => (
                  <li
                    key={event.id}
                    className="flex min-w-0 flex-col rounded-2xl border border-neutral-800 bg-black/40 p-4"
                  >
                    <h4 className="text-base font-medium text-[#f5f5f7]">{event.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#86868b]">{event.note}</p>
                    <div
                      className="mt-4 grid min-h-28 place-items-center rounded-2xl border border-dashed border-white/15 bg-[#050505] px-3 text-center text-xs text-[#86868b]"
                      role="img"
                      aria-label={`${event.name} architecture diagram, coming soon`}
                    >
                      Architecture diagram
                      <br />
                      Coming soon
                    </div>
                    <div className="mt-4 flex gap-2">
                      <ComingSoon label="Demo" event={event.name} />
                      <ComingSoon label="GitHub" event={event.name} />
                    </div>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
