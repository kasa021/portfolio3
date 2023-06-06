import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

import styles from "./DisplayBlog.module.css";

export const DisplayBlog = () => {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

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


  return (
    <div className={styles.container}>
      <ReactMarkdown
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
      {/* <Toc toc={blog.toc} /> */}
    </div>
  );
};
