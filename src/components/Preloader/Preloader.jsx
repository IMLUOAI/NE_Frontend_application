import "../Preloader/preloader.css";

const Preloader = ({ isLoading, newsData }) => {
  if (isLoading) {
    return (
      <div className="preloader__section">
        <div className="circle-preloader"></div>
        <p className="preloader__description">Searching for news...</p>
      </div>
    );
  }

  if (!isLoading && Array.isArray(newsData) && newsData.length === 0) {
    return (
      <div className="preloader">
        <div className="circle-preloader"></div>
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
