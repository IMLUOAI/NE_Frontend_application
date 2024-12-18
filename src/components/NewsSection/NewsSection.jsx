import React, { useState, useContext } from "react";
import "../NewsSection/newsSection.css";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const NewsSection = ({ newsCards = [], handleSaveOrUnsave }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

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
    <div id="news-container" className="news">
      <h1 className="news__title">Search results</h1>
      <div className="news__card-list">
        {newsCards.slice(0, visibleItems).map((card, index) => {
          if (!card) {
            console.warn("card or index ${index} is undefined or null");
            return null;
          }
          const cardKey =
            card.id || card.source?.id || card.source?.name || `index-${index}`;
          return (
            <NewsCard
              key={cardKey}
              card={card}
              currentUser={currentUser}
              handleSaveOrUnsave={handleSaveOrUnsave}
            />
          );
        })}
      </div>
      {newsCards.length > 3 && (
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
