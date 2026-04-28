export const Nebula = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 dark:opacity-50 blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)" }} />
    <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full opacity-30 dark:opacity-40 blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-blue)) 0%, transparent 70%)" }} />
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-35 blur-3xl"
         style={{ background: "radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)" }} />
  </div>
);
