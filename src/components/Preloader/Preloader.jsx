import "../Preloader/preloader.css";

const Preloader = ({ isLoading, noResults }) => {
  if (isLoading) {
    return (
      <div className="preloader">
        <div className="preloader__circle"></div>
        <p className="preloader__description">Searching for news...</p>
      </div>
    );
  }

  if (noResults) {
    return (
      <div className="preloader">
        <div className="preloader__unhappy-icon"></div>
        <h2 className="preloader__title">Nothing found</h2>
        <p className="preloader__description">
          Sorry, but nothing matched your search terms
        </p>
      </div>
    );
  }
  return null;
};

export default Preloader;
