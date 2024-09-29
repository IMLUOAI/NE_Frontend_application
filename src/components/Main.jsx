import "../blocks/main.css";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import NewsSection from "./NewsSection";
import React, { useState } from "react";

const Main = () => {
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
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
          <NewsSection />
        </div>
      )}
      <div className="profile__section">
        <Profile />
      </div>
    </main>
  );
};

export default Main;
