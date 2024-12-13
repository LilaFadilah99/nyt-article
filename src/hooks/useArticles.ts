// src/hooks/useArticles.ts
import { useState, useEffect } from "react";
import { getArticlesData } from "../services/articleService";
import { Article } from "../types/article";

export const useArticles = (initialQuery: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>(initialQuery);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const { articles: fetchedArticles, totalPages: fetchedTotalPages } = await getArticlesData(searchQuery, 0);
      setArticles(fetchedArticles);
      setTotalPages(fetchedTotalPages);
      setQuery(searchQuery);
      setCurrentPage(1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to fetch articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = async () => {
    if (currentPage >= totalPages) return;

    setLoading(true);
    setError(null);
    try {
      const { articles: fetchedArticles } = await getArticlesData(query, currentPage);
      setArticles((prevArticles) => [...prevArticles, ...fetchedArticles]);
      setCurrentPage((prevPage) => prevPage + 1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to load more articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(initialQuery);
  }, [initialQuery]);

  return { articles, loading, error, query, handleSearch, handleShowMore, currentPage, totalPages };
};
