import "../NewsCard/newsCard.css";
import solidPattern from "../../images/Group 12.svg";
import hollowPattern from "../../images/Group 13.svg";
import solidPatternHover from "../../images/Group 12.svg";
import hollowPatternHover from "../../images/Group 14.svg";
import { useState } from "react";

const NewsCard = ({ card, handleSaveOrUnsave, currentUser }) => {
  if (!card) {
    return null;
  }
  const [isHiovered, setIsHovered] = useState(false);
  const isSaved =
    Array.isArray(card.saves) &&
    card.saves.some((id) => id === currentUser?._id);
  const cardSaveButtonClassName = `card__save-button ${
    isSaved ? "card__save-button_saved" : ""
  }`;

  const getIcon = () => {
    if (isSaved) {
      return isHiovered ? solidPatternHover : solidPattern;
    } else {
      return isHiovered ? hollowPatternHover : hollowPattern;
    }
  };
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
          onClick={() => handleSaveOrUnsave(card, isSaved)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={getIcon()} alt="Save" className="card__save-icon" />
          <div className="card__tooltip">
            <p className="card__tooltip-text">Sign in to save articles</p>
          </div>
        </button>
      </div>
      <div className="card__publishedAt">{card.publishedAt}</div>
      <h2 className="card__title">{card.title || "No available title"}</h2>
      <p className="card__description">
        {card.description || "No available content"}
      </p>
      <h3 className="card__sourceName">{card.sourceName}</h3>
    </div>
  );
};

export default NewsCard;
