import "../blocks/newsCard.css";
import solidPattern from '../images/Group 12.png';
import hollowPattern from '../images/Group 13.png';

const NewsCard = ({ card, onSave, onUnsave, currentUser }) => {
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
    <div className="card">
      <img
        src={card.urlToImage || "default-image.jpg"}
        className="card__image"
        alt={card.title}
      />
      <div className="card__feature">
        <button
          type="button"
          className={cardSaveButtonClassName}
          onClick={() => isSaved ? onUnsave(card) : onSave(card)}
        >
          <img
            src={isSaved ? solidPattern : hollowPattern}
            alt="Save"
            className="card__save-icon"
          />
          <span className="card__tooltip">Sign in to save articles</span>
        </button>
      </div>
      <div className="card__publishedAt">{card.publishedAt}</div>
      <div className="card__content">
        <h2 className="card__title">
          {card.title || "No available title"}
        </h2>
        <p className="card__description">
          {card.description || "No available content"}
        </p>
      </div>
      <p className="card__sourceName">{card.sourceName}</p>
    </div>
  );
};

export default NewsCard;
