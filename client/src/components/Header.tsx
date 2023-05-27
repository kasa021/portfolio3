import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>kasa&apos;s portfolio</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.items}>About</li>
        <li className={styles.items}>Blog</li>
        <li className={styles.items}>Contact</li>
        <li className={styles.items}>
          <button>toggle</button>
        </li>
      </ul>
    </div>
  );
};
