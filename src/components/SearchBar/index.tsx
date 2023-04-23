import './style.css';

import React, { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  placeholder: string;
  onSearch: (term: string) => void;
  wsize?: number;
  hsize?: number;
  isize?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  wsize,
  hsize,
  isize,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const query = inputRef.current?.value ?? '';
      onSearch(query);
    }
  };

  return (
    <form
      className="search-container"
      onSubmit={handleSearch}
      style={{ width: `${wsize}px`, height: `${hsize}px` }}
    >
      <FiSearch size={isize ? isize : 32} className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        className="search-input"
      />
    </form>
  );
};

export default SearchBar;
