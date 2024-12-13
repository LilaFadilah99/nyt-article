// src/App.tsx
import React from "react";
import Search from "./components/Search";
import ArticleCard from "./components/ArticleCard";
import ShowMoreButton from "./components/ShowMoreButton";
import { useArticles } from "./hooks/useArticles";

const App: React.FC = () => {
  const { articles, loading, error, query, handleSearch, handleShowMore, currentPage, totalPages } = useArticles("sport");

  return (
    <div className="container p-4">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-hero-pattern rounded-3xl overflow-hidden"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Discover Stories That Shape Our World</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">Search for articles and uncover the stories behind the headlines</p>
        </div>

        {/* Search Form */}
        <div className="relative z-20 w-full max-w-5xl -mt-7 mx-auto">
          <Search onSearch={(searchQuery) => handleSearch(searchQuery)} />
        </div>
      </div>

      <div className="mt-14 md:mt-32">
        <h1 className="text-lg md:text-3xl font-bold mb-4">Explore the Articles</h1>
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Show message if no articles found */}
      {articles.length === 0 && !loading && !error && query && <p className="text-center text-gray-500 mt-4">No results found for "{query}". Try another keyword!</p>}

      {/* Article list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-10">
        {articles.map((article) => (
          <ArticleCard image={""} key={article.id} {...article} />
        ))}
      </div>

      {/* Show more button */}
      {currentPage < totalPages && <ShowMoreButton onClick={handleShowMore} loading={loading} />}
    </div>
  );
};

export default App;
