import "../SearchBar/searchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("please enter a keyword")
      return;
    }
    onSearch(query);
    console.log("Searching for:", query);
    setQuery("");
    setError(null);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) {
      setError(null);
    }
  } 

  return (
    <form className="search__bar" onSubmit={handleSubmit} >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search__input"
        placeholder="Enter topic"
      />
      <button
        type="submit"
        className="search__submit-button"
        id="searchButton"
      >
        Search
      </button>
      {error  && <span className="search__error">{error}</span>}
    </form>
  );
};

export default SearchBar;
