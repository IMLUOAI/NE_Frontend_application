import "../blocks/main.css";
import About from "./About";
import SearchBar from "./SearchBar";
import NewsSection from "./NewsSection";
import React, { useState } from "react";
import Preloader from "./Preloader";

const Main = () => {
   const [loading, setLoading] = useState(false);
   const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    setLoading(true);
    setResults([]);
 
    setTimeout(async () => {
      const fetchSearchResults = await getNews(query);

      setResults(fetchSearchResults);
      setLoading(false);

    }, 2000);
  
   };

  return (
    <main className="main__section">
      <div className="main__container">
        <div className="main__content">
          <h1 className="main__title">What's going on in the world?</h1>
          <h3 className="main__description">
            Find the latest news on any topic and save them in your personal
            accout
          </h3>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {hasSearched && (
        <div className="news__section">
          <Preloader loading={loading} results={results} />
          {!loading && results.length > 0 && <NewsSection results={results} />}
          {!loading && results.length === 0 && <h3 className="preloader__title">Nothing found</h3>
}

        </div>
      )}
      <div className="about__section">
        <About />
      </div>
    </main>
  );
};

export default Main;
