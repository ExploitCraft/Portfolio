import { Facebook, Github, Package, Twitter, Youtube, type LucideIcon } from "lucide-react";

// Site-wide contact details and social links.
export const EMAIL = "emonkk06@gmail.com";

export const socials: { icon: LucideIcon; label: string; handle: string; href: string }[] = [
  { icon: Github, label: "GitHub", handle: "ExploitCraft", href: "https://github.com/ExploitCraft" },
  { icon: Package, label: "PyPI", handle: "ExploitCraft", href: "https://pypi.org/user/ExploitCraft/" },
  { icon: Youtube, label: "YouTube", handle: "@ExploitCraft-Dev", href: "https://www.youtube.com/@ExploitCraft-Dev" },
  { icon: Twitter, label: "X / Twitter", handle: "@EmonKhan012", href: "https://x.com/EmonKhan012" },
  { icon: Facebook, label: "Facebook", handle: "1emonkhan1", href: "https://facebook.com/1emonkhan1" },
];
