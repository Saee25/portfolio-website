// All editable portfolio content lives here. Change copy without touching components.

export const profile = {
  name: "Saee Nalawade",
  titles: ["Full Stack Developer", "Software Engineer", "MERN + AWS Specialist"],
  tagline: "Building scalable, reliable, and well-crafted web experiences from the ground up.",
  location: "Andheri, Mumbai 57, Maharashtra",
  email: "saeenalawade5102@gmail.com",
  phone: "+91 8104212394",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    leetcode: "https://leetcode.com/",
    resume: "/resume.pdf",
  },
  about:
    "I am a B.E. Information Technology student at the University of Mumbai (CGPA 9.04) with a strong focus on full-stack development. I enjoy turning complex problems into clean, performant interfaces — from MERN dashboards to AWS-backed production systems.",
  stats: [
    { label: "CGPA", value: 9.04, suffix: "" },
    { label: "Internships", value: 3, suffix: "+" },
    { label: "Hackathon Wins", value: 1, suffix: "" },
    { label: "Major Projects", value: 4, suffix: "+" },
  ],
};

export const education = [
  {
    school: "University of Mumbai",
    degree: "B.E. in Information Technology Engineering",
    score: "CGPA 9.04",
    period: "May 2023 — May 2027",
    location: "Mumbai, Maharashtra",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C", "Java", "JavaScript", "TypeScript", "Python", "SQL", "Flutter"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React", "Node.js", "Express", "MongoDB", "MERN", "Generative AI",
      "Machine Learning", "REST APIs", "Firebase", "NumPy", "Pandas", "Matplotlib",
    ],
  },
  {
    title: "Developer Tools",
    items: [
      "AWS", "AWS SES", "Amplify", "DynamoDB", "Git", "GitHub",
      "Jenkins", "Docker", "Kubernetes", "Vite", "Vercel", "ShadCN",
    ],
  },
];

export const experience = [
  {
    company: "Unstitched",
    role: "Software Developer Intern",
    period: "Nov 2025 — Feb 2026",
    short:
      "Led full-stack development of the studio's official website and served as a core developer for Theoneclickdesigner.com.",
    bullets: [
      "Built scalable MERN features and managed AWS DynamoDB infrastructure.",
      "Implemented CI/CD pipelines via AWS Amplify, SES, and Lambda.",
      "Delivered high-performance pages for AI- and 3D-driven product visuals.",
    ],
    tech: ["MERN", "AWS Amplify", "SES", "Lambda", "DynamoDB", "CI/CD"],
  },
  {
    company: "TechThree",
    role: "Full Stack Developer Intern",
    period: "Dec 2024 — Feb 2025",
    short:
      "Designed Techthree.in and shipped scalable Next.js + TypeScript features for diverse client projects.",
    bullets: [
      "Met strict production deadlines on multiple client deliverables.",
      "Hands-on experience with Mainframe integration.",
      "Collaborated with cross-functional teams to translate complex requirements into digital solutions.",
    ],
    tech: ["Next.js", "TypeScript", "Mainframe"],
  },
  {
    company: "GirlScript Summer of Code (GSSoC '25)",
    role: "Open Source Contributor",
    period: "Jul 2025 — Oct 2025",
    short:
      "Contributed to multiple open-source projects with an outcome-focused approach.",
    bullets: [
      "Shipped issues across documentation, frontend, and backend tasks.",
      "Engaged with maintainers and reviewed peer contributions.",
    ],
    tech: ["Open Source", "Git", "Collaboration"],
  },
];

export const projects = [
  {
    name: "FrontWaves",
    short: "Crowdsourced ocean hazard reporting and alert system connecting citizens, analysts, and authorities.",
    description:
      "A real-time hazard reporting platform with role-based dashboards for analysts and authorities. Citizens report incidents from the coast; the system clusters, verifies, and broadcasts alerts.",
    tech: ["React", "Node", "MongoDB", "Maps API"],
    github: "#",
    live: "#",
  },
  {
    name: "Pramaan",
    short: "Centralized digital platform that aggregates and verifies micro-credentials into a single NSQF-aligned profile.",
    description:
      "Pramaan unifies fragmented learner credentials into a single verifiable profile aligned with the NSQF framework, enabling employers to trust skills at a glance.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    name: "Aarohan Credit",
    short: "AI-powered MSME–lender matching platform with multi-agent credit risk analysis.",
    description:
      "Analyzes bank and GST data using a multi-agent architecture to generate explainable credit risk reports and recommend the most suitable lenders for MSMEs.",
    tech: ["Python", "Multi-agent AI", "FastAPI", "React"],
    github: "#",
    live: "#",
  },
  {
    name: "ScrapHappens",
    short: "Circular-economy marketplace for redistributing reusable materials.",
    description:
      "A marketplace with Agentic AI automation, IVR-based support, AR visualization, multilingual UI, WhatsApp alerts, and PWA mobile support.",
    tech: ["MERN", "Agentic AI", "AR", "PWA", "Twilio"],
    github: "#",
    live: "#",
  },
];

export const achievements = [
  {
    title: "Quasar 3.0 — Track Winners",
    date: "March 2025",
    description:
      "Winners at Quasar 3.0 (VPPCOE & VA), competing against 600+ teams. Built a VR-based virtual classroom for children with Autism Spectrum Disorder and Intellectual Disabilities. Led back-end development and debugging.",
  },
];

export const extracurricular = [
  {
    title: "Mentor & Judge — Newbiethon 2026",
    period: "March 2026",
    description: "Invited as a Mentor and Judge for Newbiethon 2026 — a hackathon for first-year students.",
  },
  {
    title: "TSEC CodeCell — Senior Committee Member",
    period: "Jun 2025 — Jun 2026",
    description: "Technical planning and execution of TSEC Hacks, Dive-Into-Code, and Weekly Coding Challenges.",
  },
  {
    title: "Rotaract Club of TSEC — Joint Secretary",
    period: "Jun 2024 — Jun 2025",
    description: "Coordinated club initiatives, events, and inter-college collaborations.",
  },
];
