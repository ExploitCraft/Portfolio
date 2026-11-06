// Add a new project by appending an object to this array.
export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const GITHUB_ORG = "https://github.com/HackerInc";

export const projects: Project[] = [
  { title: "ReconNinja", description: "Automated reconnaissance toolkit for security assessments.", tech: ["Python", "CLI", "Recon"], github: `${GITHUB_ORG}/ReconNinja` },
  { title: "VaultHound", description: "Hunts for exposed secrets and credentials in codebases.", tech: ["Python", "Secrets", "Security"], github: `${GITHUB_ORG}/VaultHound` },
  { title: "envleaks", description: "Detects leaked .env files and environment variables.", tech: ["Python", "Scanning"], github: `${GITHUB_ORG}/envleaks` },
  { title: "wifi-passview", description: "View saved Wi‑Fi passwords on your own machine.", tech: ["Python", "Linux", "Windows"], github: `${GITHUB_ORG}/wifi-passview` },
  { title: "gitdork", description: "Generates GitHub dork queries for OSINT research.", tech: ["Python", "OSINT"], github: `${GITHUB_ORG}/gitdork` },
  { title: "Pentest Report Generator", description: "Turns findings into clean, professional pentest reports.", tech: ["Python", "Reporting"], github: `${GITHUB_ORG}/pentest-report-generator` },
];
