import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import styles from "./DisplayBlog.module.css";

export const DisplayBlog = () => {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/blog/${filename}.md`
        );
        setMarkdownContent(response.data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
      }
    };
    fetchMarkdown();
  }, [filename]);

  return (
    <div className={styles.container}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};
