import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const animate = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          setCount(value * (0.5 - Math.cos(p * Math.PI) / 2));
          if (p < 1) requestAnimationFrame(animate);
          else setCount(value);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  const display = Number.isInteger(value) ? Math.round(count) : count.toFixed(2);
  return <div ref={ref}>{display}{suffix}</div>;
};

export const About = () => (
  <section id="about" className="section-pad">
    <div className="container-wide grid md:grid-cols-[280px_1fr] gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative aspect-square rounded-2xl glass neon-border overflow-hidden flex items-center justify-center"
        data-placeholder="profile-photo"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="text-center px-4 relative z-10">
          <div className="text-5xl mb-2">👩‍💻</div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Add profile photo</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">About Me</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Crafting code from <span className="neon-text">stardust</span>.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-balance">
          {profile.about}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center hover:neon-glow transition-all">
              <div className="text-3xl font-bold neon-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
