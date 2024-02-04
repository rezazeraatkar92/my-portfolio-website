"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
  themeMode: ThemeMode;
};

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
} | null;

const ThemeContext = createContext<ThemeContextType>(null);

export default function ThemeContextProvider({
  children,
  themeMode,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(themeMode);

  const toggleTheme = () => {
    if (theme === "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const setDarkTheme = useCallback(() => {
    setTheme("dark");
    document.documentElement.classList.add("dark");
    syncTheme("dark");
  }, []);

  const setLightTheme = useCallback(() => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    syncTheme("light");
  }, []);

  const syncTheme = async (theme: ThemeMode) => {
    try {
      const res = await fetch("/api/theme-mode", {
        body: JSON.stringify({ themeMode: theme }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error(`HTTP error! status: ${res.status}`);
      } else {
        const data = await res.json();

        return data;
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    if (theme === "system") {

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkTheme();
      }
    }
    // if (theme === "light") {
    //   setLightTheme();
    //   // update theme record in database
    //   syncTheme(theme);
    // } else setDarkTheme();
  }, [setDarkTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
