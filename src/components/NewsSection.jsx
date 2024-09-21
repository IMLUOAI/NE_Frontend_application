

const NewsSection = ({
    newsCards,
    toggleShowMore,
    onSelectCard,
    onCardSave
}) => {



    return (
        <div className="newsSection">
            <h1 className="newsSection__title">Search results</h1>
        <div className="newsSection__news-card">
            {newsCards.filter((card) => card.owner === currentUser._id).map((card) => (
                <NewsCard key={card._id} card={card} onSelectCard={onSelectCard} onCardSave={onCardSave} />
            ))}
        </div>
        <div>
            <button type="button" className="newsSection__add-button" onClick={toggleShowMore}>
         {isExpanded ? 'Show Less' : 'Show more'}
            </button>
        </div>
        </div>
    )
}


export default NewsSection;