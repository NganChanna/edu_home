import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // detect current applied mode (dark/light) even if theme=system
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-11 h-11 rounded-xl bg-[#2c313a] flex items-center justify-center text-white hover:bg-[#3a404b] duration-200"
      title="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
