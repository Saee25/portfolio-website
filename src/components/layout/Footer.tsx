import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with React + Tailwind.
        </p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-glow transition-all hover:scale-110">
            <Mail className="w-4 h-4" />
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-glow transition-all hover:scale-110">
            <Github className="w-4 h-4" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-glow transition-all hover:scale-110">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-glow transition-all hover:scale-110">
            <SiLeetcode className="w-4 h-4" />
          </a>
          <button onClick={scrollTop} aria-label="Back to top" className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground hover:scale-110 transition-all animate-pulse-neon">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
