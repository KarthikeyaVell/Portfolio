import { certifications } from "@/data/portfolioData";
import { Award, BadgeCheck, Code, ShieldCheck, type LucideIcon } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";

const icons: Record<(typeof certifications)[number]["id"], LucideIcon> = {
  ccna: Award,
  isc2: ShieldCheck,
  google: BadgeCheck,
  java: Code,
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-5 py-8 sm:px-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Credentials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Certifications
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((item, index) => {
            const Icon = icons[item.id];
            return (
              <Reveal key={item.id} delay={index * 0.05} className="h-full">
                <GlowCard>
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-[#2997ff]" aria-hidden />
                      <span className="text-xs tracking-[0.16em] text-[#86868b]">
                        {item.code}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-[#f5f5f7]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#86868b]">
                      {item.detail}
                    </p>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
