
"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      theme={theme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      variant="circle"
      duration={500}
    />
  );
}
