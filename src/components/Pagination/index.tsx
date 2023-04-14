import React from 'react';
import './styles.css';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  // Calcula o número total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Cria um array com o número das páginas
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src="src\assets\button-previous.svg" alt="" />
          </button>
        
        {pages.map(page => (
          
            <button  key={page}
              className={`pagination-button ${page === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          
        ))}
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
          <img src="src\assets\button-next.svg" alt="" />
          </button>
      </ul>
    </nav>
  );
};

export default Pagination;
