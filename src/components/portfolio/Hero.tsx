import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Shield, Terminal } from "lucide-react";
import { projects } from "@/data/projects";
import profilePhoto from "@/assets/profile-photo.jpeg";

const roles = ["security tools", "automation scripts", "recon utilities", "OSINT helpers"];
const stack = ["Python", "Linux", "Arch Linux", "Ethical Hacking", "Offensive Security", "OSINT", "Automation", "Mathematics", "AI-assisted Development"];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } } };

// Cycles through role words with a soft slide.
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span key={roles[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.4 }}
          className="font-semibold text-primary">
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Circular avatar placeholder with a rotating gradient ring and floating chips.
function Avatar() {
  const chips = [
    { icon: Code2, label: "Python", pos: "-left-6 top-10", delay: "0s" },
    { icon: Terminal, label: "Arch Linux", pos: "-right-8 top-1/2", delay: "-2s" },
    { icon: Shield, label: "Security", pos: "left-4 -bottom-2", delay: "-4s" },
  ];
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
      <div className="absolute inset-6 rounded-full gradient-brand opacity-40 blur-3xl" />
      <div className="absolute inset-0 rounded-full p-[3px]">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--primary-glow),transparent_60%,var(--primary))] animate-spin-slow" />
        <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
          <img src={profilePhoto} alt="Profile picture of Emon Khan" width={320} height={320}
            className="h-full w-full object-cover" />
        </div>
      </div>
      {chips.map(({ icon: Icon, label, pos, delay }) => (
        <div key={label} style={{ animationDelay: delay }} className={`glass absolute ${pos} flex animate-float items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium shadow-soft`}>
          <Icon className="h-4 w-4 text-primary" /> {label}
        </div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  const stats = [
    { value: `${projects.length}+`, label: "Open-source tools" },
    { value: "Daily", label: "Arch Linux user" },
    { value: "3", label: "Languages spoken" },
  ];
  return (
    <section id="top" className="relative">
      <div className="container-page grid min-h-screen items-center gap-16 pb-16 pt-32 lg:grid-cols-[1.25fr_1fr] lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.a variants={item} href="#contact" className="pill hover:text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to collaborations
          </motion.a>
          <motion.h1 variants={item} className="mt-6 text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            <span className="gradient-text">Emon Khan</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-xl font-medium sm:text-2xl">
            Python Developer <span className="text-muted-foreground">&amp;</span> Security Enthusiast
          </motion.p>
          <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            I craft <RotatingWord /> — practical Python for security research and automation, built daily on Arch Linux.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn-primary group">View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </motion.div>
          <motion.dl variants={item} className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-border lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
        <Avatar />
      </div>

      {/* Endless strip of focus areas */}
      <div className="mask-fade-x overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg font-medium text-muted-foreground">
              {s} <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
