import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styels from "./BlogList.module.css";
import { setBlogList } from "./BlogSlice";

interface RootState {
  blog: {
    list: string[];
  };
}


export const BlogList = () => {
  const blogList = useSelector((state: RootState) => state.blog.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogList = async () => {
      if (blogList.length === 0) {
        try {
          const response = await axios.get("http://localhost:3001/blog");
          dispatch(setBlogList(response.data));
        } catch (error) {
          console.error("Error fetching blog list:", error);
        }
      }
    };
    fetchBlogList();
  }, [blogList, dispatch]);

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
    <div className={styels.container}>
      <div>
        {blogList.map((blog) => (
          <button
            key={blog}
            onClick={() => handleClick(blog)}
            className={styels.button}
          >
            {blog}
          </button>
        ))}
      </div>
    </div>
  );
};
