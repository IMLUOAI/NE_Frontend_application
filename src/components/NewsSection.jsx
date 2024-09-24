import "../blocks/newsSection.css";
import NewsCard from "./NewsCard";

const NewsSection = ({
  newsCards = [],
  toggleShowMore,
  onSelectCard,
  onCardSave,
  currentUser = {},
  isExpanded,
}) => {
  return (
    <div className="news__section">
      <h1 className="news__section-title">Search results</h1>
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
      <button
        type="button"
        className="news__expand-button"
        onClick={toggleShowMore}
      >
        {isExpanded ? "Show Less" : "Show more"}
      </button>
    </div>
  );
};

export default NewsSection;
