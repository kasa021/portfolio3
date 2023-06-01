import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

export const DisplayBlog = () => {
  const location = useLocation();
  const markdownContent = location?.state?.markdownContent || "";

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};
