export const Nebula = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute -top-40 -left-40 w-[380px] h-[380px] md:w-[600px] md:h-[600px] rounded-full opacity-35 md:opacity-40 dark:opacity-45 md:dark:opacity-50 blur-2xl md:blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)" }} />
    <div className="absolute top-1/3 -right-40 w-[440px] h-[440px] md:w-[700px] md:h-[700px] rounded-full opacity-25 md:opacity-30 dark:opacity-35 md:dark:opacity-40 blur-2xl md:blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-blue)) 0%, transparent 70%)" }} />
    <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full opacity-20 md:opacity-25 dark:opacity-30 md:dark:opacity-35 blur-2xl md:blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)" }} />
  </div>
);
