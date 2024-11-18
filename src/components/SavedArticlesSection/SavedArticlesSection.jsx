import "../../components/SavedArticlesSection/savedArticlesSection.css";
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";
import deleteIcon from "../../images/trash.svg";

const SavedArticlesSection = ({
  savedArticles = [],
  handleSaveOrUnsave,
  handleDeletedArtlcles,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="saved-articles__section">
      <p className="saved-articles__note">Saved articles</p>
      <h1 className="saved-articles__title">
        {currentUser?.name}, you have {savedArticles.length}
        saved articles
      </h1>
      <p className="saved-articles__keyword-title">
        By Keywords:{" "}
        <span className="saved-articles__keyword-note">
          {savedArticles.length > 0
            ? savedArticles.map((article) => article.keyword).join(", ")
            : "no keywords"}
        </span>
      </p>
      <div className="saved-articles__card-list">
        {savedArticles.map((card, index) => {
          if (!card) {
            console.warn("card or index ${index} is undefined or null");
            return null;
          }
          console.log("Rendering card:", card);
          const cardKey = card.id || card?._id || index;
          return (
            <div key={cardKey} className="saved-articles__card">
              <NewsCard
                card={card}
                currentUser={currentUser}
                handleSaveOrUnsave={handleSaveOrUnsave}
              />
              <div className="saved-article__card-keyword">{card.keyword}</div>
            </div>
          );
        })}
        <div className="saved-articles__card-feature">
          <button
            type="button"
            className="saved-articles__card-bin-button"
            onClick={() => handleDeletedArtlcles(card._id)}
          >
            <img
              src={deleteIcon}
              alt="Remove bin icon"
              className="saved-articles__card-bin-icon"
            />
            <div className="saved-articles__card-tooltip">
              <p className="saved-articles__card-tooltip-text">
                Remove from saved
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SavedArticlesSection;
