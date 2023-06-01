import axios from "axios";

export const FetchMarkdown = async (filename: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/blog/${filename}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching markdown file:", error);
    throw error; // エラーを再スローしてエラーハンドリングできるようにする
  }
};
