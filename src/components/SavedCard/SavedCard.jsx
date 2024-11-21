import React from "react";
import "../NewsCard/newsCard.css";
import deleteIcon from "../../images/trash.svg";

const SavedCard = ({ card, onDelete }) => {
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
        <div className="card__keyword">{card.keyword}</div>
        <button
          type="button"
          className="card__bin-button"
          onClick={() => onDelete(card._id)}
        >
          <img
            src={deleteIcon}
            alt="Remove bin icon"
            className="card__bin-icon"
          />
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
