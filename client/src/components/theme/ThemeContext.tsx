import React from "react";

type Theme = "light" | "dark";
type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);
