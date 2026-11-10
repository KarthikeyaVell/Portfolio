"use client";

import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
] as const;

export function Contact() {
  return (
    <div id="contact" className="scroll-mt-20">
      <section aria-labelledby="contact-title" className="px-4 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl"
            >
              Contact
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[#86868b] sm:text-base">
              For roles in network and security engineering.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid gap-3 rounded-[28px] border border-white/10 bg-[#121215] p-3 backdrop-blur-md sm:p-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl px-3 py-4 hover:bg-white/5 sm:px-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-black/40 text-[#2997ff]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-[#86868b] uppercase">Email</span>
                  <span className="mt-1 block truncate text-base text-[#f5f5f7] sm:text-lg">
                    {profile.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl px-3 py-4 sm:px-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-black/40 text-[#2997ff]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-[#86868b] uppercase">
                    Location
                  </span>
                  <span className="mt-1 block text-base text-[#f5f5f7] sm:text-lg">
                    {profile.location}
                  </span>
                </span>
              </div>
              <ul className="flex flex-wrap gap-2 px-2 pb-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 text-sm text-[#f5f5f7]"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl border-t border-white/10 pt-6">
          <p className="text-sm text-[#86868b]">{profile.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
