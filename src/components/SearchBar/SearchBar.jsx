import "../SearchBar/searchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [searchState, setSearchState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("please enter a keyword");
      return;
    }
    onSearch(query);
    console.log("Searching for:", query);
    setQuery("");
    setError(null);
    setSearchState("clicked");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) {
      setError(null);
    }
    if (searchState === "idle") {
      setSearchState("hover");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onFocus={() => setSearchState("hover")}
        onChange={handleInputChange}
        className="search-bar__input"
        placeholder={
          searchState === "idle"
            ? "Text not entered"
            : searchState === "hover"
            ? "Entering text"
            : "Text entered"
        }
      />
      <button
        type="submit"
        className={`search-bar__submit-button ${searchState}`}
        id="searchButton"
      >
        Search
      </button>
      {error && <span className="search-bar__error">{error}</span>}
    </form>
  );
};

export default SearchBar;
