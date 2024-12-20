import "../NewsCard/newsCard.css";
import solidPattern from "../../images/Group 12.svg";
import hollowPattern from "../../images/Group 13.svg";
import solidPatternHover from "../../images/Group 12.svg";
import hollowPatternHover from "../../images/Group 14.svg";
import { useState } from "react";

const NewsCard = ({ card, handleSaveOrUnsave }) => {
  if (!card) {
    return null;
  }
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const cardSaveButtonClassName = `card__save-button ${
    isSaved ? "card__save-button_saved" : ""
  }`;

  const getIcon = () => {
    if (isSaved) {
      return isHovered ? solidPatternHover : solidPattern;
    } else {
      return isHovered ? hollowPatternHover : hollowPattern;
    }
  };
  const handelClick = (e) => {
    e.preventDefault();
    handleSaveOrUnsave(card, isSaved)
      .then(() => {
        setIsSaved(!isSaved);
      })
      .catch((err) => console.log(err));
  };
  return (
    <a
      href={card.url || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="card card__link"
    >
      <img
        src={card.urlToImage || "default-image.jpg"}
        className="card__image"
        alt={card.title}
      />
      <div className="card__feature">
        <button
          type="button"
          className={cardSaveButtonClassName}
          onClick={handelClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={getIcon()} alt="Save" className="card__save-icon" />
          <div className="card__tooltip">
            <p className="card__tooltip-text">Sign in to save articles</p>
          </div>
        </button>
      </div>
      <div className="card__publishedAt">
        {card.publishedAt || "Unknown Date"}
      </div>
      <h2 className="card__title">{card.title || "No available title"}</h2>
      <p className="card__description">
        {card.description || "No available content"}
      </p>
      <h3 className="card__sourceName">{card.sourceName}</h3>
    </a>
  );
};

export default NewsCard;
