import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { extracurricular } from "@/data/portfolio";

export const Extracurricular = () => {
  const gridClass =
    extracurricular.length === 2
      ? "grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      : "grid sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <section id="extracurricular" className="py-12 md:py-16 px-4 md:px-8">
      <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-7 md:mb-9"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Leadership & <span className="neon-text">Extracurriculars</span></h2>
      </motion.div>

      <div className={gridClass}>
        {extracurricular.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-xl p-4 hover:neon-glow hover:-translate-y-1 transition-all"
          >
            <div className="aspect-video rounded-lg mb-3 overflow-hidden border border-primary/20">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <p className="text-xs text-primary uppercase tracking-widest">{item.period}</p>
            </div>
            <h3 className="font-bold text-base md:text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
