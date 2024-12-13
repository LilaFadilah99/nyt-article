import axios from "axios";

const API_KEY = "TGPFgKiXPyVRr9t1xeTiabWUF8muaUEK";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  url: string;
  image: string | null; // Added image property
}

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
      const image = multimedia.length
        ? `https://www.nytimes.com/${multimedia[0]?.url}` // Get the first image URL
        : null;

      console.log({
        id: article._id,
        title: article.headline?.main || "No Title",
        author: article.byline?.original || "Unknown Author",
        date: article.pub_date || "Unknown Date",
        url: article.web_url,
        image,
      });

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
