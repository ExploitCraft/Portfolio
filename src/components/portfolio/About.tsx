import { Globe, MapPin, Sigma, Flag } from "lucide-react";
import { Reveal, Section, SpotlightCard } from "./Reveal";

const facts = [
  { icon: MapPin, label: "Based in", value: "Gazipur, Dhaka, Bangladesh" },
  { icon: Flag, label: "Nationality", value: "Bangladeshi" },
  { icon: Sigma, label: "Strength", value: "Mathematics" },
];
const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Confident" },
  { name: "Hindi", level: "Conversational" },
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Curious about how systems work — and how they break.">
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <SpotlightCard className="!p-8 sm:!p-10">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm <span className="font-semibold text-foreground">Emon Khan</span>, a Bangladeshi developer from Gazipur, Dhaka.
                I write Python, live in Linux, and spend most of my time learning how software is built and how it can be attacked.
              </p>
              <p>
                I enjoy turning security ideas into clean, useful tools. A strong foundation in mathematics helps me reason
                through problems carefully, and I use AI tools to move fast across languages without cutting corners.
              </p>
            </div>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <SpotlightCard>
            <ul className="space-y-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="icon-tile"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-border pt-6">
              <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"><Globe className="h-3.5 w-3.5" /> Languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span key={l.name} className="badge !text-sm">{l.name} · <span className="opacity-70">{l.level}</span></span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
