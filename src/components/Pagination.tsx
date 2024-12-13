import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-6">
    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
      Previous
    </button>
    <span className="px-4">
      Page {currentPage} of {totalPages}
    </span>
    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
      Next
    </button>
  </div>
);

export default Pagination;
