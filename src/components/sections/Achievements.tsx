import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";

export const Achievements = () => (
  <section id="achievements" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Achievements</p>
        <h2 className="text-4xl md:text-5xl font-bold">Honors & <span className="neon-text">Achievements</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass rounded-2xl p-8 neon-border hover:neon-glow transition-all relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl" style={{ background: "hsl(var(--neon-purple))" }} />
            <div className="flex items-start gap-4 min-h-[190px]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl">{a.title}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{a.date}</p>
                <p className="text-sm text-muted-foreground mt-3">{a.description}</p>
              </div>
            </div>
            <div
              data-placeholder={`achievement-image-${i}`}
              className="mt-6 aspect-video rounded-xl border border-dashed border-primary/30 flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest"
            >
              Add hackathon photo
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
