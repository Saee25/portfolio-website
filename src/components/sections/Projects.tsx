import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Projects = () => (
  <section id="projects" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Featured Work</p>
        <h2 className="text-4xl md:text-5xl font-bold">My <span className="neon-text">Projects</span></h2>
      </motion.div>

      <div className="space-y-16">
        {projects.map((p, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: left ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid md:grid-cols-2 gap-8 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div
                data-placeholder={`project-image-${p.name}`}
                className="aspect-video rounded-2xl glass neon-border relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-hero opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold neon-text opacity-50">{p.name[0]}</span>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Add screenshot
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Project 0{i + 1}</p>
                <h3 className="text-3xl font-bold mb-3">{p.name}</h3>
                <p className="text-muted-foreground mb-5 text-balance">{p.short}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:neon-glow transition-all text-sm">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm hover:scale-105 transition-transform">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground font-medium hover:scale-105 transition-transform group"
        >
          View all projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);
