import { profile } from "@/data/portfolioData";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const social = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868b]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Get in touch.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#121215] px-5 py-5 text-[#2997ff] transition-colors hover:border-[#2997ff]/40"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-sm sm:text-base">{profile.email}</span>
          </a>
          <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#121215] px-5 py-5 text-[#f5f5f7]">
            <MapPin className="h-4 w-4 shrink-0 text-[#86868b]" aria-hidden />
            <span className="text-sm sm:text-base">{profile.location}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#f5f5f7] hover:bg-white/10"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-[#86868b]">{profile.copyright}</p>
      </div>
    </footer>
  );
}
