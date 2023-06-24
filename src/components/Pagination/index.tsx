import './styles.css';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  totalPages,
  onPageChange,
}) => {
  // Cria um array com o número das páginas
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <img src="src\assets\button-previous.svg" alt="" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-button ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page - 1)}
          >
            {page}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          <img src="src\assets\button-next.svg" alt="" />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
