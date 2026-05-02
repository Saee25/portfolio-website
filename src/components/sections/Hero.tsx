import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

/* ─── tiny fade-up helper ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-start overflow-hidden pt-[60px] sm:pt-[70px] md:pt-[100px]"
    >
      {/* ── Ambient glow orbs ── */}
      <div
        className="pointer-events-none absolute top-[-100px] right-[10%] w-[420px] h-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(70, 82, 192, 0.22) 0%, transparent 70%)",
          animation: "orb-float 8s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[100px] left-[5%] w-[260px] h-[260px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(123, 47, 190, 0.18) 0%, transparent 70%)",
          animation: "orb-float 10s ease-in-out infinite reverse",
        }}
      />
      <div
        className="pointer-events-none absolute top-[30%] right-[5%] w-[180px] h-[180px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(48, 255, 255, 0.08) 0%, transparent 70%)",
          animation: "orb-float 6s ease-in-out infinite 2s",
        }}
      />

      {/* ── Main content grid ── */}
      <div className="container-wide relative z-10 grid md:grid-cols-2 gap-12 items-center pb-12 px-4 md:px-8 w-full">

        {/* ─── LEFT: Text column ─────────────────────────── */}
        <div className="flex flex-col gap-0 items-center text-center mt-6 md:mt-0 md:items-start md:text-left">

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-bold leading-[1.08] mb-3 tracking-tight"
            style={{ fontSize: "clamp(42px, 6vw, 72px)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-white/90">Hi, I&apos;m</span>
            <span
              className="block animate-gradient-x"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6675FF 0%, #FB33FF 50%, #30FFFF 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {profile.name}
            </span>
          </motion.h1>

          {/* Role tagline */}
          <motion.div {...fadeUp(0.22)} className="mb-7 mt-1">
            <span className="text-white/50 font-light" style={{ fontSize: "clamp(17px, 2vw, 24px)" }}>
              I build{" "}
            </span>
            <span
              className="font-bold"
              style={{
                fontSize: "clamp(17px, 2vw, 24px)",
                color: "#30ffff",
                textShadow: "0 0 18px rgba(48,255,255,0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Full Stack Solutions
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-4 mb-9 justify-center md:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="group px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-white text-[14px]"
              style={{
                background: "linear-gradient(135deg, #4652C0, #7B2FBE)",
                boxShadow: "0 0 20px rgba(102, 117, 255, 0.35)",
                border: "1px solid rgba(140, 120, 255, 0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 28px rgba(102, 117, 255, 0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px rgba(102, 117, 255, 0.35)";
              }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={profile.links.resume}
              download
              className="group px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 text-white/80 hover:text-white text-[14px] no-underline"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(102, 117, 255, 0.25)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(102, 117, 255, 0.6)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(102, 117, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(102, 117, 255, 0.25)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.05)";
              }}
            >
              <Download className="w-4 h-4 group-hover:translate-y-[1px] transition-transform" />
              Resume
            </a>
          </motion.div>

          {/* Social links + phone */}
          <motion.div {...fadeUp(0.44)} className="flex items-center gap-3 justify-center md:justify-start">
            {[
              { href: profile.links.github, icon: <Github className="w-[18px] h-[18px]" />, label: "GitHub" },
              { href: profile.links.linkedin, icon: <Linkedin className="w-[18px] h-[18px]" />, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: <Mail className="w-[18px] h-[18px]" />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:-translate-y-1 transition-all duration-250 no-underline"
                style={{
                  background: "rgba(102, 117, 255, 0.08)",
                  border: "1px solid rgba(102, 117, 255, 0.22)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(102, 117, 255, 0.2)";
                  el.style.borderColor = "rgba(102, 117, 255, 0.55)";
                  el.style.boxShadow = "0 8px 20px rgba(102, 117, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(102, 117, 255, 0.08)";
                  el.style.borderColor = "rgba(102, 117, 255, 0.22)";
                  el.style.boxShadow = "none";
                }}
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* Mobile-only large centered girl illustration */}
          <motion.div
            {...fadeUp(0.55)}
            className="pointer-events-none md:hidden flex justify-center w-full mt-2"
          >
            <img
              src="/assets/girl.svg"
              alt=""
              aria-hidden="true"
              className="w-[145px] sm:w-[165px] h-auto animate-float-girl opacity-95 object-contain"
              style={{ filter: "drop-shadow(0 0 32px rgba(102, 117, 255, 0.42))" }}
            />
          </motion.div>
        </div>

        {/* ─── RIGHT: Girl illustration + floating cards ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative hidden md:flex items-center justify-center h-[340px] lg:h-[390px] xl:h-[420px]"
        >
          {/* Glow rings behind girl */}
          <div
            className="absolute w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] rounded-full animate-pulse-ring border"
            style={{
              background: "radial-gradient(circle, rgba(70, 82, 192, 0.22) 0%, transparent 70%)",
              borderColor: "rgba(102, 117, 255, 0.18)",
            }}
          />
          <div
            className="absolute w-[165px] h-[165px] lg:w-[190px] lg:h-[190px] xl:w-[220px] xl:h-[220px] rounded-full animate-pulse-ring border"
            style={{
              animationDelay: "1.2s",
              borderColor: "rgba(48, 255, 255, 0.13)",
            }}
          />

          {/* Girl SVG */}
          <div
            className="relative z-[2] animate-float-girl transition-all duration-500 hover:scale-[1.03]"
            style={{ filter: "drop-shadow(0 0 36px rgba(102, 117, 255, 0.4))" }}
          >
            <img
              src="/assets/girl.svg"
              alt="Developer illustration"
              className="w-[175px] lg:w-[205px] xl:w-[225px] h-auto object-contain"
            />
          </div>

          {/* Floating card — MERN Stack */}
          <motion.div
            className="absolute top-[55px] left-[-16px] z-[5] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl min-w-[148px] cursor-default transition-all duration-300"
            style={{
              background: "rgba(8, 6, 26, 0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(102, 117, 255, 0.22)",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ borderColor: "rgba(102, 117, 255, 0.55)", y: -4 }}
          >
            <span className="text-xl">⚡</span>
            <div>
              <div className="text-[12.5px] font-bold text-white whitespace-nowrap">MERN Stack</div>
              <div className="text-[10.5px] text-white/45">Full Stack</div>
            </div>
          </motion.div>

          {/* Floating card — AI/ML */}
          <motion.div
            className="absolute top-[195px] right-[-44px] z-[5] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl min-w-[148px] cursor-default transition-all duration-300"
            style={{
              background: "rgba(8, 6, 26, 0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(102, 117, 255, 0.22)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ borderColor: "rgba(102, 117, 255, 0.55)", y: -4 }}
          >
            <span className="text-xl">🤖</span>
            <div>
              <div className="text-[12.5px] font-bold text-white whitespace-nowrap">AI/ML Enthusiast</div>
              <div className="text-[10.5px] text-white/45">Learning & Building</div>
            </div>
          </motion.div>

          {/* Floating card — Hackathon */}
          <motion.div
            className="absolute bottom-[70px] right-[-30px] z-[5] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl min-w-[148px] cursor-default transition-all duration-300"
            style={{
              background: "rgba(8, 6, 26, 0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(102, 117, 255, 0.22)",
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ borderColor: "rgba(102, 117, 255, 0.55)", y: -4 }}
          >
            <span className="text-xl">🏆</span>
            <div>
              <div className="text-[12.5px] font-bold text-white whitespace-nowrap">Hackathon Winner</div>
              <div className="text-[10.5px] text-white/45">Quasar 3.0</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[11px] tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
      </motion.div>
    </section>
  );
};
