import React from "react";

interface ShowMoreButtonProps {
  onClick: () => void;
  loading: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, loading }) => {
  return (
    <div className="flex justify-center mt-20">
      <button onClick={onClick} disabled={loading} className={`px-6 py-2 rounded-lg text-white ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-gray-500 hover:bg-gray-900"}`}>
        {loading ? "Loading..." : "Show More"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
