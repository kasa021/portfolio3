import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

import styles from "./DisplayBlog.module.css";
import { getHeadings } from "./sidebar/getHeading";
import { Toc } from "./sidebar/Toc";

interface TocProps {
  text: string;
  depth: number;
}

export const DisplayBlog = () => {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const [blogHeadings, setBlogHeadings] = useState<TocProps[]>([]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/blog/${filename}`
        );
        setMarkdownContent(response.data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
      }
    };
    fetchMarkdown();
  }, [filename]);

  useEffect(() => {
    const headings = getHeadings();
    setBlogHeadings(headings);
  }, [markdownContent]);

  return (
    <div className={styles.container}>
      <div className={styles.Content}>
        <ReactMarkdown
          className={styles.markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={monokai}
                  language={match[1]}
                  PreTag="div"
                  codeTagProps={{
                    style: { fontFamily: "Consolas,monaco,monospace" },
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
      <div className={styles.Toc}>
        <Toc toc={blogHeadings} />
      </div>
    </div>
  );
};
