import "../blocks/searchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
    console.log("Searching for:", query);
    setQuery("");
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   // Call the search API with the query
  //   fetchSearchResults(query);
  // };

  return (
    <div className="search__bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search__input"
        placeholder="Enter topic"
      />
      <button
        type="submit"
        className="search__submit-button"
        id="searchButton"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
