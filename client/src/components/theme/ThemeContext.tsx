import React from "react";

type Theme = "light" | "dark";
type ThemeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);
