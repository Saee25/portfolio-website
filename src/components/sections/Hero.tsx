import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";

export const Hero = () => {
  const typed = useTypewriter({ words: [profile.name, ...profile.titles] });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center section-pad overflow-hidden">
      {/* Floating planets */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full opacity-70 animate-float-slow hidden md:block"
           style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--neon-pink)), hsl(var(--neon-purple)) 60%, hsl(250 60% 10%))",
                    boxShadow: "0 0 60px hsl(var(--neon-purple)/0.6)" }} />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-60 animate-float-slow animation-delay-400 hidden md:block"
           style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--neon-cyan)), hsl(var(--neon-blue)) 60%, hsl(250 60% 8%))",
                    boxShadow: "0 0 40px hsl(var(--neon-blue)/0.6)" }} />
      {/* Orbit ring */}
      <div className="absolute right-20 top-1/4 w-[500px] h-[500px] rounded-full border border-primary/20 animate-spin-slow hidden lg:block" />
      <div className="absolute right-32 top-1/3 w-[300px] h-[300px] rounded-full border border-secondary/20 animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse" }} />

      <div className="container-wide grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 min-h-[1.2em]">
            <span className="neon-text animate-gradient-x bg-gradient-hero">{typed}</span>
            <span className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle animate-blink" />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-light">
            Software Developer · Full Stack Engineer
          </p>
          <p className="text-base text-muted-foreground/80 max-w-lg mb-8 text-balance">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground font-medium animate-pulse-neon flex items-center gap-2 hover:scale-105 transition-transform"
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[400px] hidden md:flex items-center justify-center"
        >
          {/* Big planet */}
          <div className="relative w-64 h-64 rounded-full animate-float-slow"
               style={{
                 background: "radial-gradient(circle at 30% 30%, hsl(var(--neon-purple)), hsl(var(--neon-blue)) 50%, hsl(250 70% 10%) 100%)",
                 boxShadow: "0 0 100px hsl(var(--neon-purple)/0.5), inset -30px -30px 60px hsl(250 70% 5%/0.7)",
               }}>
            <div className="absolute inset-0 rounded-full opacity-30"
                 style={{ background: "radial-gradient(circle at 70% 60%, transparent 60%, hsl(var(--neon-pink)/0.4))" }} />
          </div>
          {/* Ring */}
          <div className="absolute w-[420px] h-[120px] rounded-full border-2 border-primary/30 animate-spin-slow"
               style={{ transform: "rotateX(75deg)" }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
