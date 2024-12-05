import "../Preloader/preloader.css";

const Preloader = ({ isLoading, noResults }) => {
  if (isLoading) {
    return (
      <div className="preloader__section">
        <div className="circle-preloader"></div>
        <p className="preloader__description">Searching for news...</p>
      </div>
    );
  }

  if (noResults) {
    return (
      <div className="preloader__section">
        <div className="circle-preloader__unhappy-icon"></div>
        <h3 className="preloader__title">Nothing found</h3>
        <p className="preloader__description">
          Sorry, but nothing matched your search terms
        </p>
      </div>
    );
  }
  return null;
};

export default Preloader;
