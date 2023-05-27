import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const ThemeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, setTheme } = themeContext;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
