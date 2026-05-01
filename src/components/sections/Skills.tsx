import { motion } from "framer-motion";
import { additionalSkills, skillGroups } from "@/data/portfolio";
import {
  SiC, SiJavascript, SiTypescript, SiPython, SiMysql, SiFlutter,
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiNumpy, SiPandas,
  SiGit, SiGithub, SiJenkins, SiDocker, SiKubernetes,
  SiVite, SiVercel, SiOpenai, SiTensorflow, SiShadcnui,
} from "react-icons/si";
import { FaJava, FaChartBar, FaServer, FaBrain, FaCode, FaCloud, FaAws, FaDatabase } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  C: SiC, Java: FaJava, JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  SQL: SiMysql, Flutter: SiFlutter, React: SiReact, "Node.js": SiNodedotjs, Express: SiExpress,
  "Next.js": SiVercel, HTML5: FaCode, CSS3: FaCode,
  MongoDB: SiMongodb, MERN: FaServer, "Generative AI": SiOpenai, "Machine Learning": FaBrain,
  "REST APIs": FaCode, Firebase: SiFirebase, NumPy: SiNumpy, Pandas: SiPandas, Matplotlib: FaChartBar,
  AWS: FaAws, "AWS SES": FaCloud, Amplify: FaAws, DynamoDB: FaDatabase,
  Git: SiGit, GitHub: SiGithub, Jenkins: SiJenkins, Docker: SiDocker, Kubernetes: SiKubernetes,
  Vite: SiVite, Vercel: SiVercel, ShadCN: SiShadcnui, TensorFlow: SiTensorflow,
};

const iconColorMap: Record<string, string> = {
  JavaScript: "text-[#F7DF1E]",
  TypeScript: "text-[#3178C6]",
  Python: "text-[#3776AB]",
  Java: "text-[#EA2D2E]",
  C: "text-[#A8B9CC]",
  Flutter: "text-[#02569B]",
  React: "text-[#61DAFB]",
  "Next.js": "text-white",
  HTML5: "text-[#E34F26]",
  CSS3: "text-[#1572B6]",
  "Node.js": "text-[#5FA04E]",
  Express: "text-[#EDEDED]",
  MongoDB: "text-[#47A248]",
  Firebase: "text-[#FFCA28]",
  NumPy: "text-[#4D77CF]",
  AWS: "text-[#FF9900]",
  Git: "text-[#F05032]",
  GitHub: "text-[#FFFFFF]",
  Docker: "text-[#2496ED]",
  Kubernetes: "text-[#326CE5]",
};

export const Skills = () => (
  <section id="skills" className="section-pad">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Technical <span className="neon-text">Skills</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
            className="rounded-2xl border border-primary/15 bg-[linear-gradient(160deg,rgba(14,18,63,0.85),rgba(8,10,40,0.92))] px-4 py-5 md:px-5 md:py-6 shadow-[0_0_0_1px_rgba(87,89,255,0.08),0_18px_38px_rgba(6,8,25,0.5)]"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_9px_rgba(34,211,238,0.85)]" />
              <span>{group.title}</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill, i) => {
                const Icon = iconMap[skill] || FaCode;
                const iconColor = iconColorMap[skill] || "text-foreground";
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
                      className="w-[74px] md:w-[82px] h-[74px] md:h-[82px] rounded-xl border border-primary/15 bg-[linear-gradient(180deg,rgba(15,19,66,0.94),rgba(10,12,47,0.94))] flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(89,96,255,0.24)]"
                    >
                      <Icon className={`w-6 h-6 ${iconColor} transition-transform group-hover:scale-110`} />
                      <span className="text-[10px] text-center leading-tight font-medium px-1">{skill}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-7 rounded-2xl border border-primary/15 bg-[linear-gradient(160deg,rgba(13,17,58,0.78),rgba(7,10,38,0.88))] px-4 py-5 md:px-6 md:py-6"
      >
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Also Proficient In
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-[11px] md:text-xs border border-primary/20 bg-primary/5 text-foreground/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
