import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

import styles from "./DisplayBlog.module.css";

export const DisplayBlog = () => {
  const location = useLocation();
  const markdownContent = location?.state?.markdownContent || "";

  return (
    <div className={styles.container}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};
