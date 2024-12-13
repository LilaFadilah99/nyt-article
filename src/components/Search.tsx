import React, { useState } from "react";

interface SearchProps {
  onSearch: (input: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 bg-white md:py-5 md:px-8 p-2 shadow-lg rounded-full border transition-all focus-within:border-black">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search articles..." className="bg-transparent px-2 py-1 md:px-4 md:py-2 rounded w-full text-sm md:text-base outline-none" />
      <button type="submit" className="bg-black text-white hover:bg-gray-700 rounded-full text-xs sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-2 w-auto md:w-1/5">
        Search
      </button>
    </form>
  );
};

export default Search;
