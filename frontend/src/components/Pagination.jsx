import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  const renderPaginatinLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a onClick={() => onPageChange(pageNumber)} href="#">
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className= "pagination my-8 flex-wrap gap-4 ">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex flex-wrap justify-center gap-1">{renderPaginatinLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 transition-all duration-300 hover:text-teal-400"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
