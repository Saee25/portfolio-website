import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center transition-all hover:scale-110 hover:neon-glow"
    >
      <Sun className={`w-5 h-5 absolute transition-all ${theme === "dark" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
      <Moon className={`w-5 h-5 absolute transition-all ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
    </button>
  );
};
