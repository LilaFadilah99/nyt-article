import React, { useState } from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import ArticleCard from "./components/ArticleCard";
import { getArticlesData } from "./services/articleService";

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  url: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSearch = async (searchQuery: string, page: number = 1) => {
    setLoading(true);
    setError(null);
    try {
      const { articles: fetchedArticles, totalPages: fetchedTotalPages } = await getArticlesData(searchQuery, page - 1); // handle zero-based page
      setArticles(fetchedArticles);
      setTotalPages(fetchedTotalPages);
      setQuery(searchQuery);
      setCurrentPage(page);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to fetch articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4">
      <div className="relative h-[80vh] md:h-[70vh] lg:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern rounded-3xl overflow-hidden"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the whole world and enjoy its beauty</h1>
          <p className="text-lg md:text-xl mb-8">Find and write about your experiences around the world.</p>
        </div>

        {/* Search Form */}
        <div className="relative z-20 w-full max-w-5xl -mt-7 mx-auto">
          <Search onSearch={(searchQuery) => handleSearch(searchQuery)} />
        </div>
      </div>

      <div className="mt-32">
        <h1 className="text-4xl md:text-3xl font-bold mb-4">Explore the Artickle</h1>
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {articles.map((article) => (
          <ArticleCard image={""} key={article.id} {...article} />
        ))}
      </div>
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => handleSearch(query, page)} />}
    </div>
  );
};

export default App;
