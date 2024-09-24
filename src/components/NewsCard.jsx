import "../blocks/newsCard.css";

const NewsCard = ({ card, onselectNews, onCardSave }) => {
  if (!card) {
    return null;
  }

  const isSaved =
    Array.isArray(card.saves) &&
    card.saves.some((id) => id === currentUser?._id);
  const cardSaveButtonClassName = `card__save-button ${
    isSaved ? "card__save-button_saved" : "card__save-button"
  }`;

  return (
    <div className="card__section">
      <img
        src={card.urlToImage || "default-image.jpg"}
        className="card__image"
        alt={card.title}
        onClick={() => onselectNews(card)}
      />
      <div className="card__feature">
        <button
          type="button"
          className={cardSaveButtonClassName}
          onClick={() => onCardSave(card)}
        >
          <img
            src={isSaved ? solidPattern : hollowPattern}
            alt="Save"
            className="card__save-icon"
          />
          <span className="card__tooltip">Sign in to save articles</span>
        </button>
      </div>
      <div className="card__date">{card.date}</div>
      <div className="card__content">
        <h2 className="card__content-title">
          {card.title || "No available title"}
        </h2>
        <p className="card__content-text">
          {card.content || "No available content"}
        </p>
      </div>
      <footer className="card__footer">{card.footer}</footer>
    </div>
  );
};

export default NewsCard;
