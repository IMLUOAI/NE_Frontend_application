
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Call the search API with the query
    fetchSearchResults(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter topic"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
