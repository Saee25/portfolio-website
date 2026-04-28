import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center section-pad overflow-hidden">
      {/* Static decorative orbs */}
      <div
        className="absolute top-20 right-10 w-40 h-40 rounded-full opacity-60 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--neon-pink)), hsl(var(--neon-purple)) 60%, hsl(250 60% 10%))",
          boxShadow: "0 0 60px hsl(var(--neon-purple)/0.5)",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-50 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--neon-cyan)), hsl(var(--neon-blue)) 60%, hsl(250 60% 8%))",
          boxShadow: "0 0 40px hsl(var(--neon-blue)/0.5)",
        }}
      />

      <div className="container-wide grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="neon-text">{profile.name}</span>
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
          {/* Big planet — static */}
          <div
            className="relative w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, hsl(var(--neon-purple)), hsl(var(--neon-blue)) 50%, hsl(250 70% 10%) 100%)",
              boxShadow:
                "0 0 100px hsl(var(--neon-purple)/0.5), inset -30px -30px 60px hsl(250 70% 5%/0.7)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 70% 60%, transparent 60%, hsl(var(--neon-pink)/0.4))",
              }}
            />
          </div>
          {/* Static ring */}
          <div
            className="absolute w-[420px] h-[120px] rounded-full border-2 border-primary/30"
            style={{ transform: "rotateX(75deg)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
