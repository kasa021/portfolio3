import styles from "./Toc.module.css";

interface TocProps {
  toc: { text: string; depth: number }[];
}

export const Toc = (props: TocProps) => {
  const renderTocItems = (headings: { text: string; depth: number }[]) => {
    let prevDepth = 0;
    return headings.map((heading, index) => {
      const { text, depth } = heading;
      const indentClass = styles[`indent${depth}`];

      if (depth > prevDepth) {
        prevDepth = depth;
        return (
          <div key={index} className={`${styles.tocItem} ${indentClass}`}>
            <a href={`#${text}`}>{text}</a>
          </div>
        );
      } else if (depth < prevDepth) {
        prevDepth = depth;
        return (
          <div
            key={index}
            className={`${styles.tocItem} ${styles.decreaseIndent} ${indentClass}`}
          >
            <a href={`#${text}`}>{text}</a>
          </div>
        );
      } else {
        return (
          <div key={index} className={`${styles.tocItem} ${indentClass}`}>
            <a href={`#${text}`}>{text}</a>
          </div>
        );
      }
    });
  };

  return (
    <section className={styles.toc}>
      <p className={styles.tocTitle}>目次</p>
      <div className={styles.tocList}>
        {props.toc.length === 0 && <p>見出しがありません</p>}
        {renderTocItems(props.toc)}
      </div>
    </section>
  );
};
