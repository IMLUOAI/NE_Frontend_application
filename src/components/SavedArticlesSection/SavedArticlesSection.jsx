import "../SavedArticlesSection/savedArticlesSection.css";
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Savedcard from "../SavedCard/SavedCard";

const SavedArticlesSection = ({ articles = [], handledDeletedArticle }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("articles array:", articles);
  const sources = articles
    .map((article) => article.source?.name)
    .filter((name) => name);
  return (
    <section className="saved-articles">
      <p className="saved-articles__note">Saved articles</p>
      <h2 className="saved-articles__title">
        {currentUser?.name}, you have {articles.length} saved articles
      </h2>
      <p className="saved-articles__keyword-title">
        By Keywords:{" "}
        <span className="saved-articles__keyword-note">
          {sources.length > 0 ? sources.join(", ") : "no keywords"}
        </span>
      </p>
      <div className="saved-articles__card-list">
        {articles.map((card) => {
          if (!card) {
            return null;
          }
          console.log("Rendering card with source:", card.source);
          return (
            <Savedcard
              key={card._id}
              currentUser={currentUser}
              onDelete={handledDeletedArticle}
              card={card}
            />
          );
        })}
      </div>
    </section>
  );
};
export default SavedArticlesSection;
