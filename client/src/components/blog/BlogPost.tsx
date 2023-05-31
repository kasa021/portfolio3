import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  filename: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ filename }) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/blog/${filename}`)
      .then((response) => {
        setMarkdownContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  }, [filename]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
