"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // By default: light mode. Only switch to dark if user previously explicitly saved 'dark'.
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Theme"
      title={mounted && theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      {mounted && theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 fill-current" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}
