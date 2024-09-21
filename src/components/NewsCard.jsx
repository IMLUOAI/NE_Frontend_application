


const NewsCard = ({
    card, onselectNews, onCardSave
}) => {


if (!card) {
    return null;
}

const isSaved = 
   Array.isArray(card.saves) && card.saves.some((id) => id === currentUser?._id);
   const cardSaveButtonClassName = `news__save-button ${isSaved ? "card__save-button_saved" : "card__save-button"}`;
return (
    <div className="news__card">
        <img src={card.imageUrl} className="news__image" alt={card.name} onClick={() => onselectNews(card)}/>
        <div className="news__description">
            <button type="button" className={cardSaveButtonClassName} onClick={() => onCardSave(card)}>
                <img src={isSaved ? solidPattern : hollowPattern } alt="Save" className="news__save-icon" />
                <span className="tooltip">Sign in to save articles</span>
            </button>
        </div>
        <div className="news__content">
            <h2 className="news__title"></h2>
            <p className="news__text"></p>
        </div>

    </div>
)

}

export default NewsCard;