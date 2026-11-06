import { Code2, Shield, Sigma, Terminal } from "lucide-react";
import { Reveal, Section, SpotlightCard } from "./Reveal";

// Bento-style grid: wide cards alternate with narrow ones.
const groups = [
  { icon: Code2, title: "Development", text: "Python first. I pick up other languages with AI assistance and use AI tools to ship projects faster.", items: ["Python", "Other languages with AI assistance", "Building projects with AI tools"], span: "lg:col-span-2" },
  { icon: Terminal, title: "Systems", text: "Linux is home — I use Arch Linux every day.", items: ["Linux", "Arch Linux daily user"], span: "" },
  { icon: Shield, title: "Security", text: "Learning to think like an attacker to build safer software.", items: ["Ethical hacking", "Offensive security fundamentals"], span: "" },
  { icon: Sigma, title: "Other", text: "Strong maths for careful problem solving, and clear English to explain the results.", items: ["Mathematics", "English communication"], span: "lg:col-span-2" },
];

export function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Skills" title="What I work with" subtitle="A focused toolkit built around Python, Linux and security.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, text, items, span }, i) => (
          <Reveal key={title} delay={i * 0.08} className={span}>
            <SpotlightCard>
              <span className="icon-tile"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => <span key={s} className="badge">{s}</span>)}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
