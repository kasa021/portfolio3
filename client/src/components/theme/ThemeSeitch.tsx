import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!setTheme) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
