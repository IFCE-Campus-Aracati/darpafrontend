import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

interface Props {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className="search-container">
      
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />


      
    </div>
  );
};

export default SearchBar;