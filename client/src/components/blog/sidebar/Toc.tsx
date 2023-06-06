import styles from "./Toc.module.css";

interface TocProps {
  toc: string[];
}

export const Toc = (props: TocProps) => {

  return (
    <section className={styles.toc}>
      <p className={styles.tocTitle}>目次</p>
      <div className={styles.tocList}>
        {props.toc.length === 0 && <p>見出しがありません</p>}
        {props.toc.map((heading, index) => (
          <div key={index} className={styles.tocItem}>
            <a href={`#${heading}`}>{heading}</a>
          </div>
        ))}
      </div>
    </section>
  );
};
