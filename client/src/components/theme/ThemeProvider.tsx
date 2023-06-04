import React, { useEffect, useState } from "react";

import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
