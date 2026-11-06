import { motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

// Gentle fade-up when the element scrolls into view.
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Card whose soft glow follows the cursor.
export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`card-spot h-full ${className}`}>
      {children}
    </div>
  );
}

// Section wrapper with numbered label, heading and optional subtitle.
export function Section({ id, index, eyebrow, title, subtitle, children }: {
  id: string; index: string; eyebrow: string; title: string; subtitle?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
            <span className="font-semibold text-primary">{index}</span>
            <span className="h-px w-10 gradient-brand" />
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
