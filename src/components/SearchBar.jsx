import "../blocks/searchBar.css";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Call the search API with the query
    fetchSearchResults(query);
  };

  return (
    <div class="search__bar">
      <input
        type="text"
        onChange={handleInputChange}
        className="search__input"
        placeholder="Enter topic"
      />
      <button
        className="search__submit-button"
        id="searchButton"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
