import React, { useContext, useState } from "react";
import "../blocks/newsSection.css";
import NewsCard from "./NewsCard";
import Preloader from "./Preloader";

const NewsSection = ({ newsCards, isLoading, error, handleSaveArticle }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 3);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleItems(3);
    setIsExpanded(false);
  };

  const toggleShowMore = () => {
    isExpanded ? handleShowLess() : handleShowMore();
  };

  return (
    <div id="news-container" className="news__section">
      <h1 className="news__section-title">Search results</h1>
      {isLoading && <Preloader />}
      {error && (
        <p className="preloader__description">
          Sorry, but nothing matched your search terms
        </p>
      )}
      {!isLoading && !error && newsCards.length === 0 && (
        <h3 className="preloader__title">Nothing found</h3>
      )}
      <div className="news__card-list">
        {newsCards.slice(0, visibleItems).map((card) => (
          <NewsCard
            key={card._id}
            card={card}
            onSave={() => handleSaveArticle(card)}
          />
        ))}
      </div>
      {visibleItems < newsCards.length && (
        <button
          type="button"
          className="news__expand-button"
          onClick={toggleShowMore}
        >
          {isExpanded ? "Show Less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default NewsSection;
