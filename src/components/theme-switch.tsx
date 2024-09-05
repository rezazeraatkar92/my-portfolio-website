"use client";

import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

/**
 * ThemeSwitch component
 *
 * @remarks
 * This component is used to switch the theme of the app
 * It uses the useTheme hook to get the current theme and the systemTheme
 * It also uses the useCallback hook to memoize the toggleTheme function
 *
 * @returns
 * A button element that toggles the theme when clicked
 */
export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentThemeMode =
    (theme === "system" && systemTheme === "light") || theme === "light";

  useEffect(() => setMounted(true), []);

  /**
   * Toggle the theme based on the current theme and system theme
   *
   * @remarks
   * If the current theme is "system" and the system theme is "light"
   * or if the current theme is "light", the function will set the theme to "dark"
   * Otherwise, the function will set the theme to "light"
   */
  const toggleTheme = useCallback(() => {
    setTheme(currentThemeMode ? "dark" : "light");
  }, [setTheme, currentThemeMode]);

  if (!mounted) return null;

  return (
    <button
      className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-gray-900 border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-yellow-700 dark:bg-gray-950'
      onClick={toggleTheme}
    >
      {currentThemeMode ? <BsSun className='text-yellow-700' /> : <BsMoon />}
    </button>
  );
}
