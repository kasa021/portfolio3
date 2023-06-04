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
  const blogList = useSelector((state: RootState) => state.blog.list); // useSelectorを使ってReduxのstoreからブログ一覧を取得
  const dispatch = useDispatch(); // useDispatchを使ってReduxのstoreにアクセス
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogList = async () => {
      // ブログ一覧を取得する関数を定義
      if (blogList.length === 0) {
        // ブログ一覧が空の場合のみ取得する
        try {
          const response = await axios.get("http://localhost:3001/api/blog");
          dispatch(setBlogList(response.data)); // ブログ一覧をReduxのstoreに保存
        } catch (error) {
          console.error("Error fetching blog list:", error);
        }
      }
    };
    fetchBlogList();
  }, [blogList, dispatch]); // blogListとdispatchをuseEffectの第二引数に指定

  const handleClick = async (filename: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/blog/${filename}`
      );
      navigate(`/blog/${filename.slice(0, -3)}`, {
        state: { markdownContent: response.data },
      });
    } catch (error) {
      console.error("Error fetching markdown file:", error);
    }
  };

  return (
    <div className={styels.container}>
      <h1>ブログ一覧</h1>
      <div className={styels.buttonContainer}>
        {blogList.map((blog) => (
          <button
            key={blog}
            onClick={() => handleClick(blog)}
            className={styels.button}
          >
            {blog.slice(0, -3)}
          </button>
        ))}
      </div>
    </div>
  );
};
