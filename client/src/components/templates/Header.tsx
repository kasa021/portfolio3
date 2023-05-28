import { Link } from "react-router-dom";

import { ThemeSwitch } from "../theme/ThemeSwitch";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Link to="/" className={styles.link} style={{color: "var(--color-text)"}}>
          <p>kasa&apos;s portfolio</p>
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.items}>
          <Link to="/about" className={styles.link} style={{color: "var(--color-text)"}}>
            About
          </Link>
        </li>
        <li className={styles.items}>
          <Link to="/blog" className={styles.link} style={{color: "var(--color-text)"}}>
            Blog
          </Link>
        </li>
        <li className={styles.items}>
          <Link to="/contact" className={styles.link} style={{color: "var(--color-text)"}}>
            Contact
          </Link>
        </li>
        <li className={styles.items}>
          <ThemeSwitch />
        </li>
      </ul>
    </div>
  );
};
