import axios from "axios";
import { Article } from "../types/article";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ArticlesResponse {
  articles: Article[];
  totalPages: number;
}

export const getArticlesData = async (query: string, page: number = 0): Promise<ArticlesResponse> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        "api-key": API_KEY,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const articles = response.data.response.docs.map((article: any) => {
      const multimedia = article.multimedia || [];
      const image = multimedia.length ? `https://www.nytimes.com/${multimedia[0]?.url}` : null;

      return {
        id: article._id,
        title: article.headline?.main || "No Title",
        author: article.byline?.original || "Unknown Author",
        date: article.pub_date || "Unknown Date",
        url: article.web_url,
        image,
      };
    });

    const totalPages = Math.ceil(response.data.response.meta.hits / 10);

    return { articles, totalPages };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch articles");
  }
};
