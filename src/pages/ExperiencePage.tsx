import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { experience } from "@/data/portfolio";

const ExperiencePage = () => (
  <PageLayout>
    <section className="section-pad">
      <div className="container-wide">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Full Timeline</p>
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="neon-text">Experience</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A detailed look at the roles I've held, the products I've shipped, and what I learned at every stop.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 neon-border hover:neon-glow transition-all"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div
                  data-placeholder={`exp-page-image-${i}`}
                  className="aspect-video md:aspect-square rounded-xl border border-dashed border-primary/30 flex items-center justify-center text-xs text-muted-foreground uppercase tracking-widest"
                >
                  Add image / logo
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h2 className="font-bold text-2xl">{exp.company}</h2>
                  </div>
                  <p className="text-secondary font-medium text-lg">{exp.role}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 mb-4">
                    <Calendar className="w-4 h-4" />{exp.period}
                  </div>
                  <p className="text-muted-foreground mb-5">{exp.short}</p>
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ExperiencePage;
