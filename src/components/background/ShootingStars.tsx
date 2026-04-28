import { useEffect, useState } from "react";

export const ShootingStars = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setStars((prev) => [
        ...prev,
        {
          id,
          top: Math.random() * 60 + "%",
          left: Math.random() * 50 + "%",
        },
      ]);
      setTimeout(() => setStars((prev) => prev.filter((s) => s.id !== id)), 3000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute w-32 h-0.5 animate-shooting"
          style={{
            top: s.top,
            left: s.left,
            background: "linear-gradient(90deg, transparent, hsl(var(--neon-cyan)), transparent)",
            boxShadow: "0 0 8px hsl(var(--neon-cyan))",
          }}
        />
      ))}
    </div>
  );
};
