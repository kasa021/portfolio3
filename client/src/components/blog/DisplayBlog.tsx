import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";

import styles from "./DisplayBlog.module.css";

export const DisplayBlog = () => {
  const location = useLocation();
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState(
    location?.state?.markdownContent || ""
  );

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/blog/${filename}`
        );
        setMarkdownContent(response.data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
      }
    };

    if (!markdownContent) {
      fetchMarkdownContent();
    }
  }, [filename, markdownContent]);

  return (
    <div className={styles.container}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};
