import React from "react";
import "../NewsCard/newsCard.css";
import binIcon from "../../images/trash.svg";

const SavedCard = ({ card, onDelete }) => {
  const handleCardClick = (e) => {
    if (e.target.closest(".card__bin-button")) {
      e.preventDefault();
    }
  };
  return (
    <a
      href={card.url || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="card card__link"
      onClick={handleCardClick}
    >
      <img
        src={card.urlToImage || "default-image.jpg"}
        className="card__image"
        alt={card.title}
      />
      <div className="card__feature">
        <div className="card__keywords">
          {Array.isArray(card.keywords) && card.keywords.length > 0
            ? card.keywords.map((keyword, index) => {
                console.log(`Rendering keyword: ${keyword} at index ${index}`);
                <span key={index} className="card__keyword">
                  {keyword}
                </span>;
              })
            : "No keywords"}
        </div>
        <button
          type="button"
          className="card__bin-button"
          onClick={() => onDelete(card._id)}
        >
          <img src={binIcon} alt="bin icon" className="card__bin-icon" />
          <div className="card__tooltip">
            <p className="card__tooltip-text">Remove from saved</p>
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

export default SavedCard;
