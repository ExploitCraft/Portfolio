import { useState } from "react";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";
import { Reveal, Section } from "./Reveal";
import { EMAIL, socials } from "@/data/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <Section id="contact" index="04" eyebrow="Contact" title="Let's build something together.">
      <Reveal>
        <div className="card-spot relative !p-8 text-center sm:!p-14">
          <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full gradient-brand opacity-25 blur-3xl" />
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Have a project, a question or an opportunity? My inbox is always open — I'll get back to you soon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="btn-primary"><Mail className="h-4 w-4" /> {EMAIL}</a>
            <button onClick={copy} className="btn-ghost" aria-live="polite">
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />} {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
            {socials.map(({ icon: Icon, label, handle, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${handle}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border p-4 transition-all hover:-translate-y-1 hover:border-primary hover:bg-accent">
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="text-sm font-medium">{label}</span>
                <span className="max-w-full truncate text-xs text-muted-foreground">{handle}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Emon Khan</p>
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="icon-btn h-9 w-9"><Icon className="h-4 w-4" /></a>
          ))}
          <a href="#top" aria-label="Back to top" className="icon-btn ml-2 h-9 w-9"><ArrowUp className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
