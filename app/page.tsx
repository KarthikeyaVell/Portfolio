import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { LabShowcase } from "@/components/LabShowcase";
import { Navbar } from "@/components/Navbar";
import { ProjectsBento } from "@/components/ProjectsBento";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[60] focus-visible:rounded-full focus-visible:bg-[#2997ff] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <section id="projects" aria-label="Projects" className="scroll-mt-20">
          <LabShowcase />
          <ProjectsBento />
        </section>
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
