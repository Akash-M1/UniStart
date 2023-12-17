import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

// Custom hook to handle search results
const useSearchResults = (url, parameter_name, onSearchResults) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setIsLoading(true);
    setError(null);

    const body = {}
    body[parameter_name] = searchTerm

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onSearchResults(searchResults);
  }, [onSearchResults, searchResults]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return {
    searchTerm,
    searchResults,
    isLoading,
    error,
    handleSearch,
    handleInputChange,
  };
};

function SearchBar({ url, parameter_name, onSearchResults, className }) {
  const {
    searchTerm,
    searchResults,
    isLoading,
    error,
    handleSearch,
    handleInputChange,
  } = useSearchResults(url, parameter_name, onSearchResults);

  return (
    <div className={`searchBarContainer ${className}`}>
      <div className='input-group'>
        <input
          type='search'
          className='form-control'
          placeholder='Search'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          id='searchButton'
          className="btn btn-primary"
          type='button'
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default SearchBar;
