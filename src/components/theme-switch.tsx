"use client";

import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = useCallback(() => {
    setTheme(
      (theme === "system" && systemTheme === "light") || theme === "light"
        ? "dark"
        : "light"
    );
  }, [setTheme, theme, systemTheme]);

  if (!mounted) return null;

  return (
    <button
      className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-gray-900 border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-yellow-700 dark:bg-gray-950'
      onClick={toggleTheme}
    >
      {(theme === "system" && systemTheme === "light") || theme === "light" ? (
        <BsSun className='text-yellow-700' />
      ) : (
        <BsMoon />
      )}
    </button>
  );
}
