import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const links = ["About", "Skills", "Projects", "Contact"];

// Light/dark toggle; dark is default, choice saved in localStorage.
function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="icon-btn h-9 w-9">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={dark ? "sun" : "moon"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

// Tracks which section is currently in view.
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...links.map((l) => l.toLowerCase())].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

// Floating glass navigation with active-section indicator.
export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="container-page">
        <nav aria-label="Main" className="glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-5 pr-2 shadow-soft">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <img src={profilePhoto} alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover ring-1 ring-primary/40" />
            Emon Khan
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const id = l.toLowerCase();
              const isActive = active === id;
              return (
                <a key={l} href={`#${id}`} className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-accent" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  {l}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">Hire me</a>
            <button className="icon-btn h-9 w-9 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="glass mx-auto mt-2 flex max-w-5xl flex-col rounded-2xl p-2 shadow-soft md:hidden">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium text-muted-foreground hover:bg-accent hover:text-foreground">{l}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
