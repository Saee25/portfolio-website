import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
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
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  const display = Number.isInteger(value) ? Math.round(count) : count.toFixed(2);
  return (
    <div ref={ref}>
      {display}
      {suffix}
    </div>
  );
};

export const About = () => (
  <section id="about" className="section-pad">
    <div className="container-wide max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">About Me</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          A Brief <span className="neon-text">Introduction</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-balance max-w-3xl mx-auto">
          {profile.about}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-4 text-center hover:neon-glow transition-all"
            >
              <div className="text-3xl font-bold neon-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
