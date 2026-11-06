import { motion, useScroll, useSpring } from "framer-motion";

// Fixed decorative backdrop: faint grid plus drifting aurora glows.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-aurora-1 blur-3xl animate-drift" />
      <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-aurora-2 blur-3xl animate-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-aurora-1 opacity-60 blur-3xl animate-drift [animation-delay:-12s]" />
    </div>
  );
}

// Thin gradient bar showing scroll progress.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left gradient-brand" />;
}
