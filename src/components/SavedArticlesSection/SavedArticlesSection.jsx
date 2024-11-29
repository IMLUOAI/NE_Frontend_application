import "../SavedArticlesSection/savedArticlesSection.css";
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SavedCard from "../SavedCard/SavedCard";

const SavedArticlesSection = ({ articles = [], handledDeletedArticle }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("articles array:", articles);
  return (
    <div className="saved-articles__section">
      <p className="saved-articles__note">Saved articles</p>
      <h1 className="saved-articles__title">
        {currentUser?.name}, you have {articles.length}
        saved articles
      </h1>
      <p className="saved-articles__keyword-title">
        By Keywords:{" "}
        <span className="saved-articles__keyword-note">
          {articles.length > 0
            ? articles.map((article) => article.keyword).join(", ")
            : "no keywords"}
        </span>
      </p>
      <div className="saved-articles__card-list">
        {articles.map((card, index) => {
          if (!card) {
            console.warn("card or index ${index} is undefined or null");
            return null;
          }
          console.log("Rendering card with keywords:", card.keywords);
          const cardKey = card.id || card?._id || index;
          return (
            <SavedCard
              key={cardKey}
              currentUser={currentUser}
              onDelete={handledDeletedArticle}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SavedArticlesSection;
