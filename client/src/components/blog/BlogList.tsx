import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styels from "./BlogList.module.css";

interface BlogListItem {
  slug: string;
  title: string;
}


export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogListItem[]>([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      // ブログ一覧を取得する関数を定義
      if (blogList.length === 0) {
        // ブログ一覧が空の場合のみ取得する
        try {
          const response = await axios.get("http://localhost:3001/api/blog");
          setBlogList(response.data);
        } catch (error) {
          console.error("Error fetching blog list:", error);
        }
      }
    };
    fetchBlogList();
  }, []);


  return (
    <div className={styels.container}>
      <h1>ブログ一覧</h1>
      <div className={styels.linkCardContainer}>
        {blogList.map((blog) => (
          <Link
            className={styels.linkCard}
            key={blog.slug}
            to={`/blog/${blog.slug}`}
          >
            {blog.title}
          </ Link>
        ))}
      </div>
    </div>
  );
};
