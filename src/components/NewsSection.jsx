import { useEffect, useState } from "react";
import "../blocks/newsSection.css";
import NewsCard from "./NewsCard";

const NewsSection = ({ 
  newsCards = [],
  data,
  isLoading,
  visibleItems,
  toggleShowMore,
  onSelectCard,
  onCardSave,
  currentUser = {},
  isExpanded,
  error
}) => {

  return (
    <div className="news__section">
      <h1 className="news__section-title">Search results</h1>
      {isLoading && <Preloader />}
      {error && <p className="preloader__description">Sorry, but nothing matched your search terms</p>
}
{!isLoading && !error && data.length === 0 && <h3 className="preloader__title">Nothing found</h3>
}
      <div className="news__card-list">
        {newsCards
          .filter((card) => card.owner === currentUser._id)
          .map((card) => (
            <NewsCard
              key={card._id}
              card={card}
              onSelectCard={onSelectCard}
              onCardSave={onCardSave}
            />
          ))}
      </div>
      {visibleItems < data.length && (
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
