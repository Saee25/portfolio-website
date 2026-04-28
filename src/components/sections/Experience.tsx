import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, ArrowRight, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

export const Experience = () => (
  <section id="experience" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold">Professional <span className="neon-text">Experience</span></h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

        {experience.map((exp, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: left ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-hero -translate-x-1/2 z-10" />

              <div className={left ? "md:pr-10 md:text-right" : "md:pl-10"}>
                <div className="glass rounded-2xl p-6 hover:neon-glow transition-all">
                  <div className={`flex items-center gap-3 mb-3 ${left ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-xl">{exp.company}</h3>
                  </div>
                  <p className="text-secondary font-medium">{exp.role}</p>
                  <div className={`flex items-center gap-2 text-xs text-muted-foreground my-2 ${left ? "md:justify-end" : ""}`}>
                    <Calendar className="w-3 h-3" />{exp.period}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{exp.short}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${left ? "md:justify-end" : ""}`}>
                    {exp.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={left ? "md:pl-10" : "md:pr-10"}>
                <div
                  data-placeholder={`experience-image-${exp.company}`}
                  className="aspect-video rounded-2xl glass neon-border flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest"
                >
                  Add image
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/40 font-medium hover:neon-glow transition-all group"
        >
          Read full experience
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);
