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
      <Navbar />
      <main id="content">
        <Hero />
        <LabShowcase />
        <ProjectsBento />
        <Certifications />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
