import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";

export const Achievements = () => (
  <section id="achievements" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">Honors & <span className="neon-text">Achievements</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass rounded-xl p-4 md:p-5 neon-border hover:neon-glow transition-all relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl" style={{ background: "hsl(var(--neon-purple))" }} />
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-primary/20">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-3 mt-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base md:text-lg leading-snug">{a.title}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{a.date}</p>
                <p className="text-sm text-muted-foreground mt-2">{a.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
