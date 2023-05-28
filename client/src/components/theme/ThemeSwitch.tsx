import React, { useContext } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

import { ThemeContext } from "./ThemeContext";
import styles from "./ThemeSwitch.module.css";

export const ThemeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, setTheme } = themeContext;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles.button}
    >
      {theme === "dark" ? (
        <TbSunFilled className={styles.icon} />
      ) : (
        <TbMoonFilled className={styles.icon} />
      )}
    </button>
  );
};
