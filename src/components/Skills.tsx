import { skillGroups } from "@/data/portfolioData";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868b]">
            System profile
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Technical Skills
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#121215]">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`grid gap-4 px-5 py-6 sm:px-8 md:grid-cols-[220px_1fr] md:items-start ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <h3 className="text-sm font-medium text-[#f5f5f7]">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#0b0b0f] px-3 py-1 text-[13px] text-[#f5f5f7]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
