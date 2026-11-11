"use client";

import { navLinks, profile } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const social = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[#f5f5f7] focus:px-3 focus:py-1 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f5f5f7] text-[11px] font-semibold tracking-tight text-black">
            {profile.monogram}
          </span>
          <span className="hidden text-sm font-medium tracking-tight lg:inline">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-[#86868b] transition-colors hover:text-[#f5f5f7]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="hidden h-8 w-8 place-items-center rounded-full text-[#f5f5f7] transition-colors hover:bg-white/10 lg:grid"
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center rounded-full bg-[#f5f5f7] px-3.5 text-xs font-medium text-black transition-colors hover:bg-white"
          >
            Resume
          </a>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full text-[#f5f5f7] hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-white/10 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-[#f5f5f7] hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 px-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#f5f5f7]"
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
