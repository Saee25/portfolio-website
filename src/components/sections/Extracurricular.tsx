import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { extracurricular } from "@/data/portfolio";

export const Extracurricular = () => (
  <section id="extracurricular" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Leadership</p>
        <h2 className="text-4xl md:text-5xl font-bold">Beyond the <span className="neon-text">Code</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {extracurricular.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:neon-glow hover:-translate-y-1 transition-all"
          >
            <div
              data-placeholder={`extra-image-${i}`}
              className="aspect-video rounded-xl mb-4 border border-dashed border-primary/30 flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest"
            >
              Add image
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <p className="text-xs text-primary uppercase tracking-widest">{item.period}</p>
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
