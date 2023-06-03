import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const BlogList = () => {
  const [blogList, setBlogList] = useState<string[]>([]);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await fetch("http://localhost:3001/blog");
        const data = await response.json();
        setBlogList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blog list:", error);
      }
    };

    fetchBlogList();
  }, []);

  const handleClick = async (filename: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/blog/${filename}`
      );
      navigate(`/blog/${filename}`, {
        state: { markdownContent: response.data },
      });
    } catch (error) {
      console.error("Error fetching markdown file:", error);
    }
  };

  return (
    <div>
      {/* ブログリストをマップしてボタンを表示 */}
      {blogList.map((blog) => (
        <button key={blog} onClick={() => handleClick(blog)}>
          {blog}
        </button>
      ))}
    </div>
  );
};
