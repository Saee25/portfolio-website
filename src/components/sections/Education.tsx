import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";

export const Education = () => (
  <section id="education" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold"><span className="neon-text">Education</span></h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        {education.map((e, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-10"
            >
              <div className="absolute left-4 md:left-1/2 top-3 w-5 h-5 rounded-full bg-gradient-hero -translate-x-1/2" />
              <div className={isLeft ? "md:text-right md:pr-12 md:order-1" : "md:pl-12 md:order-2"}>
                <div className="glass rounded-2xl p-6 hover:neon-glow transition-all">
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg">{e.school}</h3>
                  </div>
                  <p className="text-muted-foreground">{e.degree}</p>
                  <p className="text-primary font-semibold mt-1">{e.score}</p>
                  <div className={`flex items-center gap-4 text-xs text-muted-foreground mt-3 ${isLeft ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{e.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.location}</span>
                  </div>
                </div>
              </div>
              <div className={isLeft ? "md:order-2" : "md:order-1"} />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
