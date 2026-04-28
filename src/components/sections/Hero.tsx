import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center section-pad overflow-hidden">
      <div className="container-wide grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-foreground/90 dark:text-white/90">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-light">
            Software Developer
          </p>
          <p className="text-base text-muted-foreground/80 max-w-lg mb-8 text-balance">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground font-medium flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={profile.links.resume}
              download
              className="px-6 py-3 rounded-full glass border border-primary/30 font-medium flex items-center gap-2 hover:neon-glow transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] hidden md:flex items-center justify-center"
        >
          {/* Main planet — gentle float, no orbit */}
          <div className="animate-float-gentle">
            <div
              className="relative w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 28% 28%, hsl(var(--neon-cyan)) 0%, hsl(var(--neon-purple)) 45%, hsl(260 80% 12%) 100%)",
                boxShadow:
                  "0 0 120px hsl(var(--neon-purple)/0.55), inset -40px -50px 80px hsl(260 80% 5%/0.8)",
              }}
            >
              {/* surface bands */}
              <div
                className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
                style={{
                  background:
                    "repeating-linear-gradient(15deg, transparent 0 18px, hsl(var(--neon-pink)/0.25) 18px 22px)",
                }}
              />
              {/* highlight */}
              <div
                className="absolute top-6 left-10 w-20 h-10 rounded-full bg-white/20 blur-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
