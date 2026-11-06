import { ArrowRight, ArrowUpRight, FolderGit2, Github } from "lucide-react";
import { Reveal, Section, SpotlightCard } from "./Reveal";
import { projects, GITHUB_ORG, type Project } from "@/data/projects";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <a href={p.github} target="_blank" rel="noreferrer" className="group block h-full rounded-[inherit]" aria-label={`${p.title} on GitHub`}>
      <SpotlightCard className="flex flex-col">
        <div className="flex items-start justify-between">
          <span className="icon-tile"><FolderGit2 className="h-5 w-5" /></span>
          <span className="text-sm font-medium text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-6 flex items-center gap-1.5 text-xl font-semibold">
          {p.title}
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </h3>
        <p className="mt-2 flex-1 text-muted-foreground">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>
        <span className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-medium text-primary">
          <Github className="h-4 w-4" /> View on GitHub
        </span>
      </SpotlightCard>
    </a>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Things I've built" subtitle="Open-source tools for recon, secret hunting and reporting.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}><ProjectCard p={p} index={i} /></Reveal>
        ))}
      </div>
      <Reveal className="mt-12 text-center">
        <a href={GITHUB_ORG} target="_blank" rel="noreferrer" className="btn-ghost group">
          <Github className="h-4 w-4" /> Explore more on HackerInc <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </Section>
  );
}
