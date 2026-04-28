import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { projects } from "@/data/portfolio";

const ProjectsPage = () => (
  <PageLayout>
    <section className="section-pad">
      <div className="container-wide">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            All <span className="neon-text">Projects</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Every shipped project — from hackathon wins to production platforms.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div
                  data-placeholder={`projects-page-image-${i}`}
                  className="aspect-video rounded-2xl glass neon-border relative overflow-hidden hover:scale-[1.02] transition-transform duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-hero opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-bold neon-text opacity-50">{p.name[0]}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                    Add screenshot
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">0{i + 1} / {projects.length}</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{p.name}</h2>
                  <p className="text-muted-foreground mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:neon-glow transition-all text-sm">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ProjectsPage;
