"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navLinks, profile } from "@/data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

const linkClass =
  "rounded-full px-3 py-2 text-sm text-[#86868b] transition-colors hover:text-[#f5f5f7]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();

  useEffect(() => {
    const nodes = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a
          href="#content"
          className="flex min-w-0 items-center gap-2.5 rounded-full"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-[11px] font-semibold tracking-wide text-[#f5f5f7]">
            {profile.monogram}
          </span>
          <span className="truncate text-sm font-medium tracking-tight text-[#f5f5f7] md:hidden lg:inline">
            {profile.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const current = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "location" : undefined}
                className={`${linkClass} ${current ? "text-[#f5f5f7]" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-full text-[#f5f5f7] hover:bg-white/10 md:grid"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-full text-[#f5f5f7] hover:bg-white/10 md:grid"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-medium text-black md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#f5f5f7] md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-white/10 bg-black/90 px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-3 py-3 text-base text-[#f5f5f7] hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-wrap items-center gap-2 px-1 pb-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full bg-[#f5f5f7] px-4 text-sm font-medium text-black"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
