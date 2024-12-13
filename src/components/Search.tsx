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
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 bg-white py-5 px-8 shadow-lg rounded-full">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search articles..." className="bg-transparent px-4 py-2 rounded w-full" />
      <button type="submit" className="bg-black text-white px-4 py-2 hover:bg-gray-700 rounded-full w-1/5">
        Search
      </button>
    </form>
  );
};

export default Search;
