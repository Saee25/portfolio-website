import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import {
  SiC, SiJavascript, SiTypescript, SiPython, SiMysql, SiFlutter,
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiNumpy, SiPandas,
  SiAmazonwebservices, SiAmazondynamodb, SiGit, SiGithub, SiJenkins, SiDocker, SiKubernetes,
  SiVite, SiVercel, SiOpenai, SiTensorflow, SiShadcnui,
} from "react-icons/si";
import { FaJava, FaChartBar, FaServer, FaBrain, FaCode, FaCloud } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  C: SiC, Java: FaJava, JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  SQL: SiMysql, Flutter: SiFlutter, React: SiReact, "Node.js": SiNodedotjs, Express: SiExpress,
  MongoDB: SiMongodb, MERN: FaServer, "Generative AI": SiOpenai, "Machine Learning": FaBrain,
  "REST APIs": FaCode, Firebase: SiFirebase, NumPy: SiNumpy, Pandas: SiPandas, Matplotlib: FaChartBar,
  AWS: SiAmazon, "AWS SES": FaCloud, Amplify: SiAmazon, DynamoDB: SiAmazondynamodb,
  Git: SiGit, GitHub: SiGithub, Jenkins: SiJenkins, Docker: SiDocker, Kubernetes: SiKubernetes,
  Vite: SiVite, Vercel: SiVercel, ShadCN: SiShadcnui, TensorFlow: SiTensorflow,
};

export const Skills = () => (
  <section id="skills" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold">My <span className="neon-text">Constellation of Skills</span></h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A spectrum of languages, frameworks, and tools I use to ship production-grade software.
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              <span className="px-4 py-1 rounded-full glass neon-border">{group.title}</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {group.items.map((skill, i) => {
                const Icon = iconMap[skill] || FaCode;
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
                    className="group"
                  >
                    <div
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full glass border border-primary/20 hover:border-primary/60 hover:neon-glow transition-all hover:-translate-y-1"
                      style={{ animation: `float-slow ${4 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                    >
                      <Icon className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
